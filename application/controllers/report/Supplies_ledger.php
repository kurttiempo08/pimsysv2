<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class Supplies_Ledger extends REST_Controller
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
        $this->load->model('inventory_model');
    }

    public function index_post()
    {

        // $records = $this->inventory_model->get_slc($this->post('property_no'));
            $records = array(
                'records' => $this->inventory_model->get_slc($this->post('property_no')),
            );

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

        // $records = $this->inventory_model->get_slc($this->post('property_no'));
            $records = array(
                'records' => $this->inventory_model->get_slcoffice($this->post('pro'),$this->post('center')),
            );

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

    public function office_get()
    {
        $data = $this->session->userdata('logged_in');
      
            $records = array(
                'records' => $this->inventory_model->get_slcoffice($this->get('property_no'),$this->get('center_id')),
            );
        // $records = true;
        $html = $this->load->view('Supplies_ledger', $records, true);

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
                'records' => $this->inventory_model->get_slc($this->get('property_no')),
            );
        // $records = true;
        $html = $this->load->view('Supplies_ledger', $records, true);

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

    public function coa_slc_get()
    {
        $data = $this->session->userdata('logged_in');
      
            $records = array(
                'records' => $this->inventory_model->get_slc($this->get('property_no')),
            );
        // $records = true;
        $html = $this->load->view('Supplies_ledger_coa', $records, true);

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
    


    public function bydate_post()
    {
        $property = $this->post('property_no');
        $from = $this->post('from');
        $to = $this->post('to');
        $records = $this->inventory_model->get_slcbydate($property,$from,$to);

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

    public function bydate_get()
    {
        $data = $this->session->userdata('logged_in');
        $records = array(
            'records' => $this->inventory_model->get_slcbydate($this->get('property_no'),$this->get('from'),$this->get('to')),
        );
        // $records = true;
        $html = $this->load->view('Supplies_ledger', $records, true);

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
