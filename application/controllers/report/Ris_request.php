<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class Ris_request extends REST_Controller
{

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();

        ini_set("pcre.backtrack_limit", "5000000");
        ini_set("memory_limit", "-1");
        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('ris_model');
    }

    public function index_post()
    {
        $records = $this->ris_model->get_dtl($this->post('id'));

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

    public function iso_ris_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            'records' => $this->ris_model->get_dtl($this->get('id')),
        );
        // $records = true;
        $html = $this->load->view('Ris_request_iso', $records, true);
        // var_dump($records);
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
            'records' => $this->ris_model->get_dtl($this->get('id')),
        );
        // $records = true;
        $html = $this->load->view('Ris_request', $records, true);
        // var_dump($records);
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
