<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Lot_Rate extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('lot_rate_model');
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
            'Type' => $this->post('Type') ? $this->post('Type') : " ",
            'Rate' => $this->post('Rate') ? $this->post('Rate') : " ",
        );
        $result = $this->lot_rate_model->save_data($data);
        if($result){
            $result = array(
                'success' => true,
                'message' => 'Successfully Set Lot Rate.'
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }else{
            $result = array(
                'success' => false,
                'message' => 'Failed saving.'
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }
    }

    public function index_get(){
        $result = $this->lot_rate_model->get_data($this->get('Type'));
        $this->returns($result);
    }

}