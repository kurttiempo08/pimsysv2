<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Production extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('production_model');
    }

    private function returns($result){
        if($result){
            return $this->response($result, REST_Controller::HTTP_OK);
        }else{
            $result = array(
                'message' => 'No data found'
            );
            return $this->response($result, REST_Controller::HTTP_OK);
        }
    }

    public function index_post(){
            $data = array(
                'batch_id' => $this->post('batch_id') ? $this->post('batch_id') : " ",
                'batch_no' => $this->post('batch_no') ? $this->post('batch_no') : " ",
                'batch_output' => $this->post('batch_output') ? $this->post('batch_output') : " ",
                'item_desc' => $this->post('item_desc') ? $this->post('item_desc') : " ",
                'production_date' => $this->post('production_date') ? $this->post('production_date') : " ",
                'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
                'subacct_idlink' => $this->post('subacct_idlink') ? $this->post('subacct_idlink') : " ",
                'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
                'office' => $this->post('office') ? $this->post('office') : " ",
                'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
                'uacs_code' => $this->post('uacs_code') ? $this->post('uacs_code') : " ",
                'formula' => $this->post('formula') ? $this->post('formula') : " ",
            );
            $result = $this->production_model->save_data($data);
            if ($result['id']){
                $result = array(
                    'success' => true,
                    'id' => $result['id'],
                    'message' => 'Successfully saved'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }elseif($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully updated'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed saving'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
    }

    public function series_get(){
        // if($this->get('autodebit')){
        //     $result = $this->hog_model->get_incomes_from_auto_debit();
        // }else{
            $result = $this->production_model->get_series();
        // }
        $this->returns($result);
    }

    public function index_get(){
        // if($this->get('autodebit')){
        //     $result = $this->hog_model->get_incomes_from_auto_debit();
        // }else{
            $result = $this->production_model->get_data();
        // }
        $this->returns($result);
    }

    public function batch_get(){
        // if($this->get('autodebit')){
        //     $result = $this->hog_model->get_incomes_from_auto_debit();
        // }else{
            $id = $this->get('id');
            $result = $this->production_model->get_batch($id);
        // }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->production_model->delete_data($this->query('id'));
        if ($result){
            $result = array(
                'success' => true,
                'message' => 'Successfully deleted'
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }else{
            $result = array(
                'success' => false,
                'message' => 'Failed deleting'
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }
    }

}