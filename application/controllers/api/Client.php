<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Client extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('client_model');
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

    public function done_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
            'date_done' => $this->post('date_done') ? $this->post('date_done') : " ",
        );
        $result = $this->client_model->save_data($data);
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

    public function other_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Others",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'others' => $this->post('others') ? $this->post('others') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
            'action' => $this->post('action') ? $this->post('action') : "",
        );
        $result = $this->client_model->save_data($data);
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

    public function ad_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Animal Dispersal",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'ad_reason' => $this->post('ad_reason') ? $this->post('ad_reason') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'action' => $this->post('action') ? $this->post('action') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
        );
        $result = $this->client_model->save_data($data);
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

    public function scom_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Sample Collection",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'scom_test' => $this->post('scom_test') ? $this->post('scom_test') : "",
            'scom_species' => $this->post('scom_species') ? $this->post('scom_species') : "",
            'scom_noofheads' => $this->post('scom_noofheads') ? $this->post('scom_noofheads') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'action' => $this->post('action') ? $this->post('action') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : "",
        );
        $result = $this->client_model->save_data($data);
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

    public function ai_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Artificial Insemination",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'ai_species' => $this->post('ai_species') ? $this->post('ai_species') : "",
            'ai_datetimeofheat' => $this->post('ai_datetimeofheat') ? $this->post('ai_datetimeofheat') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'action' => $this->post('action') ? $this->post('action') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
        );
        $result = $this->client_model->save_data($data);
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
    public function spay_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Spay & Castration",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'sc_species' => $this->post('sc_species') ? $this->post('sc_species') : "",
            'sc_age' => $this->post('sc_age') ? $this->post('sc_age') : "",
            'sc_sex' => $this->post('sc_sex') ? $this->post('sc_sex') : "",
            'sc_noofheads' => $this->post('sc_noofheads') ? $this->post('sc_noofheads') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'action' => $this->post('action') ? $this->post('action') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
        );
        $result = $this->client_model->save_data($data);
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

    public function euthanasia_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Euthanasia",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'euth_species' => $this->post('euth_species') ? $this->post('euth_species') : "",
            'euth_noofheads' => $this->post('euth_noofheads') ? $this->post('euth_noofheads') : "",
            'euth_reason' => $this->post('euth_reason') ? $this->post('euth_reason') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'action' => $this->post('action') ? $this->post('action') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
        );
        $result = $this->client_model->save_data($data);
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
    public function treatment_post(){
        $data = array(
            'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
            'request_type' => "Treatment/Check-up",
            'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
            'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
            'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
            'tc_species' => $this->post('tc_species') ? $this->post('tc_species') : "",
            'tc_noofheads' => $this->post('tc_noofheads') ? $this->post('tc_noofheads') : "",
            'tc_symptoms' => $this->post('tc_symptoms') ? $this->post('tc_symptoms') : "",
            'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
            'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
            'technician' => $this->post('technician') ? $this->post('technician') : "",
            'action' => $this->post('action') ? $this->post('action') : "",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
        );
        $result = $this->client_model->save_data($data);
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
    public function index_post(){
            $data = array(
                'cr_id' => $this->post('cr_id') ? $this->post('cr_id') : " ",
                'request_type' => "Rabies Vaccination",
                'recepient_name' => $this->post('recepient_name') ? $this->post('recepient_name') : " ",
                'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : "",
                'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
                'request_date' => $this->post('request_date') ? $this->post('request_date') : "",
                'rabies_nodogcat' => $this->post('rabies_nodogcat') ? $this->post('rabies_nodogcat') : "",
                'behalf' => $this->post('behalf') ? $this->post('behalf') : "",
                'receivedby' => $this->post('receivedby') ? $this->post('receivedby') : "",
                'technician' => $this->post('technician') ? $this->post('technician') : "",
                'action' => $this->post('action') ? $this->post('action') : "",
                'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
            );
            $result = $this->client_model->save_data($data);
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
            $result = $this->client_model->get_data();
        // }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->client_model->delete_data($this->query('id'));
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