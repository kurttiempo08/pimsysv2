<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Dispersal extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('dispersal_model');
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
                'dispersal_id' => $this->post('dispersal_id') ? $this->post('dispersal_id') : " ",
                'recepient_idlink' => $this->post('recepient_idlink') ? $this->post('recepient_idlink') : " ",
                'source_idlink' => $this->post('source_idlink') ? $this->post('source_idlink') : " ",
                'animal_idlink' => $this->post('animal_idlink') ? $this->post('animal_idlink') : " ",
                'animal_type' => $this->post('animal_type') ? $this->post('animal_type') : "",
                'animal_code' => $this->post('animal_code') ? $this->post('animal_code') : "",
                'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : "",
                'source' => $this->post('source') ? $this->post('source') : "",
                'dispersal_date' => $this->post('dispersal_date') ? $this->post('dispersal_date') : "",
            );
            $result = $this->dispersal_model->save_data($data);
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
            $result = $this->dispersal_model->get_data();
        // }
        $this->returns($result);
    }

    public function disperse_get(){
        $id = $this->query('id');
        $result = $this->dispersal_model->get_dispersal($id);
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->dispersal_model->delete_data($this->query('id'));
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