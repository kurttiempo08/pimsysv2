<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Recepient extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('recepient_model');
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
                'recp_id' => $this->post('recp_id') ? $this->post('recp_id') : " ",
                'recp_fname' => $this->post('recp_fname') ? $this->post('recp_fname') : " ",
                'recp_lname' => $this->post('recp_lname') ? $this->post('recp_lname') : " ",
                'recp_mname' => $this->post('recp_mname') ? $this->post('recp_mname') : "",
                'recp_suffixname' => $this->post('recp_suffixname') ? $this->post('recp_suffixname') : " ",
                'recp_barangay' => $this->post('recp_barangay') ? $this->post('recp_barangay') : " ",
                'recp_address' => $this->post('recp_address') ? $this->post('recp_address') : " ",
                'recp_profpic' => $this->post('recp_profpic') ? $this->post('recp_profpic') : " ",
                'recp_gender' => $this->post('recp_gender') ? $this->post('recp_gender') : "",
                'recp_contact' => $this->post('recp_contact') ? $this->post('recp_contact') : "",
            );

            if($_FILES){
                $file_names = array();
                $logged_data = $this->session->userdata('logged_in');
                foreach ($_FILES as $key => $file) {
    
                    // check if image
                    // var_dump($file);
                    $check = getimagesize($file['tmp_name']);
                    if($check == false) {
                        $result = array(
                            // 'data' => $file_size,
                            'success' => false,
                            'message' => 'File uploaded is not an image.'
                        );
                        return $this->response($result, REST_Controller::HTTP_OK);
                    }
                    if($file['size'] > 600000){
                        $result = array(
                            'data' => $file['size'],
                            'success' => false,
                            'message' => 'File size exceeds to 6MB.'
                        );
                        return $this->response($result, REST_Controller::HTTP_OK);
                    }
        
                    // $file_name = $file['name'];
                    $file_size = $file['size'];
                    $file_tmp = $file['tmp_name'];
                    // $file_type = $file['type'];
                    $extns = explode('.', $file['name']);
                    $file_ext = strtolower(end($extns));
                    $file_name = $data['recp_lname'] . "-" . $data['recp_fname'] . "." . $file_ext;
                    $path = "image_files/";
                    if (!is_dir($path)) {
                        mkdir($path, 0777);
                    }
                    move_uploaded_file($file_tmp, $path . $file_name);
                    $data['image_path'] = $path . $file_name;
                }
            }





            $result = $this->recepient_model->save_data($data);
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
            $result = $this->recepient_model->get_data();
        // }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->recepient_model->delete_data($this->query('id'));
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