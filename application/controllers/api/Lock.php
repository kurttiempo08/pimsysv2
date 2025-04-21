<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Lock extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('lock_model');
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
                'lock_id' => $this->post('lock_id') ? $this->post('lock_id') : " ",
                'status' => $this->post('status') ? $this->post('status') : " "
            );
            $result = $this->lock_model->save_data($data);
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


    // public function text_post(){
    //     $number = '09362579853';
    //     $message = 'Hello World';
    //     $apicode = 'TR-KURTT579853_MCHZT';
    //     $passwd = 'lfsjvrf4db';
    //     // var_dump($number,$message,$apicode,$passwd); 
    //     // $ch = curl_init();
    //     $itexmo = array('1' => $number, '2' => $message, '3' => $apicode, 'passwd' => $passwd);
    //     curl_setopt($ch, CURLOPT_URL,"https://www.itexmo.com/php_api/api.php");
    //     curl_setopt($ch, CURLOPT_POST, 1);
    //     curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($itexmo));
    //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //     return curl_exec ($ch);
    //     curl_close ($ch);
      
       
    // }

    // public function text_post(){
    //     $number = '09362579853';
    //     $message = 'Congratulations Mr./Ms. Tiempo your car loan application is already approved.';
    //     $apicode = 'TR-KURTT579853_MCHZT';
    //     $passwd = 'lfsjvrf4db';

    //     $url = 'https://www.itexmo.com/php_api/api.php';
    //     $itexmo = array('1' => $number, '2' => $message, '3' => $apicode, 'passwd' => $passwd);
    //     $param = array(
    //       'http' => array(
    //         'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    //         'method'  => 'POST',
    //         'content' => http_build_query($itexmo),
    //       ),
    //     );
    //     $context  = stream_context_create($param);
    //     return file_get_contents($url, false, $context);
    //   }

    public function index_get(){
        // if($this->get('autodebit')){
        //     $result = $this->hog_model->get_incomes_from_auto_debit();
        // }else{
            $result = $this->lock_model->get_data($this->get("id"));
        // }
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->lock_model->delete_data($this->query('id'));
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