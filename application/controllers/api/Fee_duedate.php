<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Fee_Duedate extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('fee_duedate_model');
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
            'Month' => $this->post('Month') ? $this->post('Month') : " ",
            'day' => $this->post('day') ? $this->post('day') : " ",
            'day_annual' => $this->post('day_annual') ? $this->post('day_annual') : " ",
            'Fee' => $this->post('Fee') ? $this->post('Fee') : " ",
        );
        $result = $this->fee_duedate_model->save_data($data);
        if($result){
            $result = array(
                'success' => true,
                'message' => 'Successfully Set.'
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
        $result = array(
            'Month' => $this->fee_duedate_model->get_month(),
            'day_annual' => $this->fee_duedate_model->get_month_day(),
            'day' => $this->fee_duedate_model->get_day(),
            'Fee' => $this->fee_duedate_model->get_fee(),
        );
        $this->returns($result);
    }

}