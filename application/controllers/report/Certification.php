<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class Certification extends REST_Controller
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
        $this->load->model('cert_model');
    }

    public function index_post()
    {
        $records = $this->ai_model->get_request($this->post('id'));

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

    public function year_get()
    {
        $data = $this->session->userdata('logged_in');
        
        $records = array(
            'records' => $this->cert_model->get_year($this->get('client_BPYear')),
        );
        $html = $this->load->view('Byyear',$records,true);

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

    public function brgy_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            'records' => $this->cert_model->get_filterbarangay($this->get('client_barangay')),
        );
        $html = $this->load->view('Bybrgy',$records,true);

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
            // 'records' => $this->ai_model->get_insemination($dates),
        );
        $html = $this->load->view('Certification_process',$records,true);

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

    public function dressed_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            // 'records' => $this->ai_model->get_insemination($dates),
        );
        $html = $this->load->view('Certification_dressed',$records,true);

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

    public function meat_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            // 'records' => $this->ai_model->get_insemination($dates),
        );
        $html = $this->load->view('Certification_meat',true);

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

    public function nomeat_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            // 'records' => $this->ai_model->get_insemination($dates),
        );
        $html = $this->load->view('Certification_notdmeat',true);

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

    public function promisory_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            // 'records' => $this->ai_model->get_insemination($dates),
        );
        $html = $this->load->view('Promisory',true);

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
