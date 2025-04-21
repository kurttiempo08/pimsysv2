<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Run_Annual extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('run_annual_model');
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
            'xYear' => $this->post('xYear') ? $this->post('xYear') : " ",
            'Particulars' => $this->post('Particulars') ? $this->post('Particulars') : " ",
        );
        $result = $this->run_annual_model->run_data($data);
        if($result){
            $result = array(
                'success' => true,
                'message' => 'Successfully Generated Annual Receivable.'
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }else{
            $result = array(
                'success' => false,
                'message' => 'Failed generating or No ACTIVE Homeowner found.'
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }
    }

    public function index_get(){
        $result = $this->run_annual_model->get_data($this->get('xYear'));
        $this->returns($result);
    }

}