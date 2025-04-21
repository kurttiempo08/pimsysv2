<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Office extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('office_model');
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
                'office_id' => $this->post('office_id') ? $this->post('office_id') : " ",
                'office' => $this->post('office') ? $this->post('office') : " ",
                'office_UACS' => $this->post('office_UACS') ? $this->post('office_UACS') : " ",
                'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
                'formula' => $this->post('formula') ? $this->post('formula') : " ",
                'account_type' => $this->post('account_type') ? $this->post('account_type') : " ",
            );
            $result = $this->office_model->save_data($data);
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

     public function action_post(){
            $data = array(
                'subacct_id' => $this->post('subacct_id') ? $this->post('subacct_id') : " ",
                'subaccount' => $this->post('subaccount') ? $this->post('subaccount') : " ",
                'description' => $this->post('description') ? $this->post('description') : " ",
                'brand' => $this->post('brand') ? $this->post('brand') : " ",
                'stock_no' => $this->post('stock_no') ? $this->post('stock_no') : " ",
                'acct_link' => $this->post('acct_link') ? $this->post('acct_link') : " "
                
            );
            $result = $this->office_model->savesub_data($data);
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

    public function index_get(){
        // if($this->get('autodebit')){
        //     $result = $this->hog_model->get_incomes_from_auto_debit();
        // }else{
            $result = $this->office_model->get_data();
        // }
        $this->returns($result);
    }

    public function count_get(){
        $id = $this->get('id');    
        $result = $this->office_model->get_count($id);
        $this->returns($result);
    }

    public function sub_get(){
        $id = $this->get('id');    
        $result = $this->office_model->get_subdata($id);
        $this->returns($result);
    }

    public function suball_get(){
        $id = $this->get('id');
        if($id){
            $result = $this->office_model->get_filtersubdata($id);
            $this->returns($result);
        }
        else{
            $result = $this->office_model->get_allsubdata();
            $this->returns($result);
        }
    }

    public function index_delete(){
        $result = $this->office_model->delete_data($this->query('id'));
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

    public function sub_delete(){
        $result = $this->office_model->deletesub_data($this->query('id'));
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