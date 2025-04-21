<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Cash_Disposition extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('cash_disposition_model');
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
        if($this->post('dateRange')){
            $records = $this->cash_disposition_model->get_date_range($this->post('record'));
            if ($records){
                $result = array(
                    'success' => true,
                    'records' => $records,
                    'message' => 'Successfully saved'
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
        
    }

    public function index_get(){
        if($this->get('daily')){
            $result = $this->cash_disposition_model->get_daily($this->get('id'), $this->get('Date'));
        }elseif($this->get('payment')){
            $result = $this->cash_disposition_model->get_payment($this->get('id'), $this->get('Date'));
        }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->cash_disposition_model->delete_data($this->query('id'));
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