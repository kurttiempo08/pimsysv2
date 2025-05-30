<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Supplier extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('supplier_model');
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
                'supplier_id' => $this->post('supplier_id') ? $this->post('supplier_id') : " ",
                'supplier_name' => $this->post('supplier_name') ? $this->post('supplier_name') : " ",
                'supplier_address' => $this->post('supplier_address') ? $this->post('supplier_address') : " ",
                'supplier_tin' => $this->post('supplier_tin') ? $this->post('supplier_tin') : " ",
                'proprietor_fname' => $this->post('proprietor_fname') ? $this->post('proprietor_fname') : " ",
                'proprietor_lname' => $this->post('proprietor_lname') ? $this->post('proprietor_lname') : " ",
                'proprietor_mname' => $this->post('proprietor_mname') ? $this->post('proprietor_mname') : " ",
                'mobile' => $this->post('mobile') ? $this->post('mobile') : " ",
                'email' => $this->post('email') ? $this->post('email') : " ",
            );
            $result = $this->supplier_model->save_data($data);
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
            $result = $this->supplier_model->get_data();
        // }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->supplier_model->delete_data($this->query('id'));
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