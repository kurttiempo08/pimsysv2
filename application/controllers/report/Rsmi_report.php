<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class Rsmi_report extends REST_Controller
{

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();

        ini_set("pcre.backtrack_limit", "500000000");
        ini_set("memory_limit", "-1");
        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('rsmi_model');
    }

    public function index_post()
    {
        $from = $this->get('from');
        $to = $this->get('to');
        $id = $this->get('id');
        $type = $this->get('account_type');
        $records['records'] = $this->rsmi_model->get_data($from,$to,$id,$type);
        $records['recaps'] = $this->rsmi_model->get_group_data($from,$to,$id,$type);
        // var_dump($from,$to,$id);
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


    public function index_get()
    {
        $data = $this->session->userdata('logged_in');
        $from = $this->get('from');
        $to = $this->get('to');
        $id = $this->get('id');
        $center = $this->get('center');
        $type = $this->get('account_type');
        $records['records'] = $this->rsmi_model->get_data($from,$to,$id,$type,$center);
        $records['recaps'] = $this->rsmi_model->get_group_data($from,$to,$id,$type,$center);
        // var_dump($from,$to,$id);
        // $records = true;
        $html = $this->load->view('Rsmi_report', $records, true);
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

    public function entire_get()
    {
        $data = $this->session->userdata('logged_in');
        $from = $this->get('from');
        $to = $this->get('to');
        $id = $this->get('id');
        $type = $this->get('account_type');
        $records['records'] = $this->rsmi_model->get_entire_data($from,$to,$type);
        $records['recaps'] = $this->rsmi_model->get_entire($from,$to,$type);
        // var_dump($from,$to,$id);
        // $records = true;
        $html = $this->load->view('Rsmi_report', $records, true);
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
