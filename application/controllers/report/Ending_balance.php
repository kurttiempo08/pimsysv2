<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class Ending_Balance extends REST_Controller
{

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();

        ini_set("pcre.backtrack_limit", "50000000");
        ini_set("memory_limit", "-1");
        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('office_model');
    }

    public function index_post()
    {
        $records = $this->office_model->get_account($this->post('id'));

        if ($records) {
            $result = array(
                'success' => true,
                'message' => 'Generation successful.',
            );
            $this->response($result, REST_Controller::HTTP_OK);
        } else {
            $result = array(
                'success' => false,
                'message' => 'No data found.',
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }
    }

    public function office_post()
    {
        $records = $this->office_model->get_accountoffice($this->post('id'),$this->post('center'));

        if ($records) {
            $result = array(
                'success' => true,
                'message' => 'Generation successful.',
            );
            $this->response($result, REST_Controller::HTTP_OK);
        } else {
            $result = array(
                'success' => false,
                'message' => 'No data found.',
            );
            $this->response($result, REST_Controller::HTTP_OK);
        }
    }

    public function ending_get()
    {
        $data = $this->session->userdata('logged_in');
        // $records = array(
        //     'records' => $this->office_model->get_account($this->get('id')),
        // );
        // $records = true;
        $id = $this->get('id');
        $type = $this->get('type');

        if($type == "center"){
            $records['accounts'] = $this->office_model->get_data();
            $records['items'] = $this->office_model->get_ending_center($id);
        }
       else{
            // $records['accounts'] = $this->office_model->get_data();
            $records['items'] = $this->office_model->get_ending_conso();
       }
       
    //    var_dump($records);
        // if($type == "excel"){
        //     $html = $this->load->view('Saob', $records);
        // }
        // else{
            $html = $this->load->view('Ending_balance', $records, true);
        // }
        
        $mpdf = new \Mpdf\Mpdf([
            'default_font_size' => 9,
            'default_font' => 'tahoma',
        ]);
        $mpdf->useFixedNormalLineHeight = false;
        $mpdf->useFixedTextBaseline = false;
        $mpdf->adjustFontDescLineheight = 0.5;
        $mpdf->packTableData = true;
        $mpdf->shrink_tables_to_fit = 1;
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }

    public function ending_kalahi_get()
    {
        $data = $this->session->userdata('logged_in');
        // $records = array(
        //     'records' => $this->office_model->get_account($this->get('id')),
        // );
        // $records = true;
        $id = $this->get('id');
        $type = $this->get('type');

        $records['accounts'] = $this->office_model->get_kalahi_data();
        $records['items'] = $this->office_model->get_ending();
       
    //    var_dump($records);
        // if($type == "excel"){
        //     $html = $this->load->view('Saob', $records);
        // }
        // else{
            $html = $this->load->view('Ending_balance_Kalahi', $records, true);
        // }
        
        $mpdf = new \Mpdf\Mpdf([
            'default_font_size' => 9,
            'default_font' => 'tahoma',
        ]);
        $mpdf->useFixedNormalLineHeight = false;
        $mpdf->useFixedTextBaseline = false;
        $mpdf->adjustFontDescLineheight = 0.5;
        $mpdf->packTableData = true;
        $mpdf->shrink_tables_to_fit = 1;
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }

    public function office_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            'records' => $this->office_model->get_accountoffice($this->get('id'),$this->get('center')),
        );
        // $records = true;
        $html = $this->load->view('Accounts', $records, true);

        $mpdf = new \Mpdf\Mpdf([
            'default_font_size' => 9,
            'default_font' => 'tahoma',
        ]);
        $mpdf->useFixedNormalLineHeight = false;
        $mpdf->useFixedTextBaseline = false;
        $mpdf->adjustFontDescLineheight = 0.5;
        $mpdf->packTableData = true;
        $mpdf->shrink_tables_to_fit = 1;
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }

    public function index_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            'records' => $this->office_model->get_account($this->get('id')),
        );
        // $records = true;
        $html = $this->load->view('Accounts', $records, true);

        $mpdf = new \Mpdf\Mpdf([
            'default_font_size' => 9,
            'default_font' => 'tahoma',
        ]);
        $mpdf->useFixedNormalLineHeight = false;
        $mpdf->useFixedTextBaseline = false;
        $mpdf->adjustFontDescLineheight = 0.5;
        $mpdf->packTableData = true;
        $mpdf->shrink_tables_to_fit = 1;
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }
}
