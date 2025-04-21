<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Dispersal_Payment extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('Dispersal_payment_model');
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
                'dispersal_paymentid' => $this->post('dispersal_paymentid') ? $this->post('dispersal_paymentid') : " ",
                'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
                'recepient_idlink' => $this->post('recepient_idlink') ? $this->post('recepient_idlink') : " ",
                'animal_type' => $this->post('animal_type') ? $this->post('animal_type') : "",
                'animal_code' => $this->post('animal_code') ? $this->post('animal_code') : "",
                'animal_idlink' => $this->post('animal_idlink') ? $this->post('animal_idlink') : "",
                'paid_date' => $this->post('paid_date') ? $this->post('paid_date') : "",
                'payment' => $this->post('payment') ? $this->post('payment') : "",
            );
            $result = $this->Dispersal_payment_model->save_data($data);
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
            $result = $this->Dispersal_payment_model->get_data();
        // }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->Dispersal_payment_model->delete_data($this->query('id'));
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