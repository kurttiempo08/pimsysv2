<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Auto_debit extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('auto_model');
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
                'ADID' => $this->post('ADID') ? $this->post('ADID') : " ",
                'OI_idlink' => $this->post('OI_idlink') ? $this->post('OI_idlink') : " ",
                'OI_type' => $this->post('OI_type') ? $this->post('OI_type') : " ",
                'OI_name' => $this->post('OI_name') ? $this->post('OI_name') : " ",
                'ChAcctCode' => $this->post('ChAcctCode') ? $this->post('ChAcctCode') : " ",
                'ChAcctName' => $this->post('ChAcctName') ? $this->post('ChAcctName') : " ",
                'ChAcctGroupCode' => $this->post('ChAcctGroupCode') ? $this->post('ChAcctGroupCode') : " ",
                'ChAcctGroupCodeName' => $this->post('ChAcctGroupCodeName') ? $this->post('ChAcctGroupCodeName') : " ",
                'ChAcct_IDlink' => $this->post('ChAcct_IDlink') ? $this->post('ChAcct_IDlink') : " ",
                'ChAcctGroup_IDlink' => $this->post('ChAcctGroup_IDlink') ? $this->post('ChAcctGroup_IDlink') : " ",
            );
            $result = $this->auto_model->save_data($data);
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
      
        $result = $this->auto_model->get_data();
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->auto_model->delete_data($this->query('id'));
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