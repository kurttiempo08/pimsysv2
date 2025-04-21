<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Coa extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('coa_model');
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
                'AcctID' => $this->post('AcctID') ? $this->post('AcctID') : " ",
                'AcctCode' => $this->post('AcctCode') ? $this->post('AcctCode') : "",
                'AcctGroupName' => $this->post('AcctGroupName') ? $this->post('AcctGroupName') : "",
            );
            $result = $this->coa_model->save_data($data);
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

    public function savegroup_post(){
        $data = array(
            'ChADID' => $this->post('ChADID') ? $this->post('ChADID') : " ",
            'ChAMIDLink' => $this->post('ChAMIDLink') ? $this->post('ChAMIDLink') : "",
            'ChAMCodeLink' => $this->post('ChAMCodeLink') ? $this->post('ChAMCodeLink') : "",
            'ChASubCode' => $this->post('ChASubCode') ? $this->post('ChASubCode') : " ",
            'ChADetails' => $this->post('ChADetails') ? $this->post('ChADetails') : "",
            'TotallingPostingToID' => $this->post('TotallingPostingToID') ? $this->post('TotallingPostingToID') : "",
            'TotalToAcctCode' => $this->post('TotalToAcctCode') ? $this->post('TotalToAcctCode') : " ",
            'TotalToAcctDtl' => $this->post('TotalToAcctDtl') ? $this->post('TotalToAcctDtl') : "",
            'CFcategory' => $this->post('CFcategory') ? $this->post('CFcategory') : "",
            'CFID' => $this->post('CFID') ? $this->post('CFID') : "",
        );
        $result = $this->coa_model->save_group($data);
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
    //   if($this->get('group')){
    //     $id = $this->post('AcctGroupID_Link');
    //     $result = $this->coa_model->get_group($id);
    //     $this->returns($result);
    //   }else{
        $result = $this->coa_model->get_data();
        $this->returns($result);
    //      
    }

    public function group_get(){
        $id = $this->get('AcctGroupID_Link');
        $result = $this->coa_model->get_group($id);
        $this->returns($result);
    }

    public function groupall_get(){
        $result = $this->coa_model->get_groupall();
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->coa_model->delete_data($this->query('id'));
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

    public function group_delete(){
        $result = $this->coa_model->deletegroup_data($this->query('id'));
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