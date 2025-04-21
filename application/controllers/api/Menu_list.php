<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Menu_List extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('menu_list_model');
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
            'FormID' => $this->post('FormID') ? $this->post('FormID') : " ",
            'FormName' => $this->post('FormName') ? $this->post('FormName') : "",
            'FormStates' => $this->post('FormStates') ? $this->post('FormStates') : "",
            'FormGroup' => $this->post('FormGroup') ? $this->post('FormGroup') : "",
            'FormLocation' => $this->post('FormLocation') ? $this->post('FormLocation') : "",
            'FormURL' => $this->post('FormURL') ? $this->post('FormURL') : "",
        );
        $result = $this->menu_list_model->save_data($data);
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
        $result = $this->menu_list_model->get_data();
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->menu_list_model->delete_data($this->query('id'));
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