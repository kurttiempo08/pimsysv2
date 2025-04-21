<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class Construction_Bond_Report extends REST_Controller
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
        $this->load->model('construction_bond_report_model');
    }

    public function index_post()
    {
        $records = $this->construction_bond_report_model->get_data($this->post('type'),$this->post('id'));

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
        // $records = array(
        //     'records' => $this->construction_bond_report_model->get_data($this->get('type'),$this->get('id')),
        //     'prepared_by' => $data['fullname']
        // );
        $records = true;
        $html = $this->load->view('Construction_Bond_Report', $records, true);

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
