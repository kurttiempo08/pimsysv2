<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Certification extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('cert_model');
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
                'certissuance_id' => $this->post('certissuance_id') ? $this->post('certissuance_id') : " ",
                'request_type' => $this->post('request_type') ? $this->post('request_type') : " ",
                'client_name' => $this->post('client_name') ? $this->post('client_name') : " ",
                'client_tradename' => $this->post('client_tradename') ? $this->post('client_tradename') : " ",
                'client_address' => $this->post('client_address') ? $this->post('client_address') : " ",
                'client_BPYear' => $this->post('client_BPYear') ? $this->post('client_BPYear') : " ",
                'client_dayissuance' => $this->post('client_dayissuance') ? $this->post('client_dayissuance') : " ",
                'client_monthissuance' => $this->post('client_monthissuance') ? $this->post('client_monthissuance') : " ",
                'client_yearissuance' => $this->post('client_yearissuance') ? $this->post('client_yearissuance') : " ",
                'client_signatory' => $this->post('client_signatory') ? $this->post('client_signatory') : " ",
                'client_designation' => $this->post('client_designation') ? $this->post('client_designation') : " ",
                'client_designation2' => $this->post('client_designation2') ? $this->post('client_designation2') : " ",
                'client_contact' => $this->post('client_contact') ? $this->post('client_contact') : " ",
                'client_barangay' => $this->post('client_barangay') ? $this->post('client_barangay') : " ",
                'client_remarks' => $this->post('client_remarks') ? $this->post('client_remarks') : " ",
                'client_status' => $this->post('client_status') ? $this->post('client_status') : " ",
                'date_inspected' => $this->post('date_inspected') ? $this->post('date_inspected') : " ",
                'inspected' => $this->post('inspected') ? $this->post('inspected') : " ",
            );
            $result = $this->cert_model->save_data($data);
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
        $result = $this->cert_model->get_data();
        $this->returns($result);
    }

    public function barangay_get(){
        $data = $this->get('client_barangay');
        $result = $this->cert_model->get_barangay($data);
        $this->returns($result);
    }

    public function bpyear_get(){
        $data = $this->get('client_BPYear');
        $result = $this->cert_model->get_year($data);
        $this->returns($result);
    }

    public function date_get(){
        $dates = array(
            'datefrom' => $this->get('datefrom'),
            'dateto' => $this->get('dateto'),
        );
        $result = $this->cert_model->get_insemination($dates);
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->cert_model->delete_data($this->query('id'));
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