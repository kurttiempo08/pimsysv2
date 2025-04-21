<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Run_Monthly extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('run_monthly_model');
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
        if($this->post('post_data')){
            $result = $this->run_monthly_model->post_data($this->post('xMonth'), $this->post('xYear'));
            if($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully Posted Monthly Receivable.'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'No Receivable Generated.'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }else{
            $data = array(
                'xMonth' => $this->post('xMonth') ? $this->post('xMonth') : " ",
                'xYear' => $this->post('xYear') ? $this->post('xYear') : " ",
                'Particulars' => $this->post('Particulars') ? $this->post('Particulars') : " ",
            );
            $result = $this->run_monthly_model->run_data($data);
            if($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully Generated Monthly Receivable.'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'No Receivable Generated.'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }
    }

    public function index_get()
    {
        if($this->get('showReceivable')){
            $result = $this->run_monthly_model->get_data_receivable($this->get('MHOLID'));
            $this->returns($result);
        }else{
            $result = $this->run_monthly_model->get_data_tmp();
            $this->returns($result);
        }
        // $result = $this->run_monthly_model->get_data($this->get('xMonth'), $this->get('xYear'));
    }

}