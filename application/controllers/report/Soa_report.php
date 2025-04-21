<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once APPPATH . 'third_party/vendor/autoload.php';
require APPPATH . 'libraries/REST_Controller.php';
class SOA_Report extends REST_Controller
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
        $this->load->model('soa_report_model');
    }

    public function index_post()
    {
        if($this->post('receivable')){
            $records = $this->soa_report_model->get_receivable($this->post('xMonth'),$this->post('xYear'));
        }elseif($this->post('MHOLID')){
            if($this->post('All')){
                $records = $this->soa_report_model->get_individual_all($this->post('MHOLID'));
            }else{
                $records = $this->soa_report_model->get_individual($this->post('xMonth'),$this->post('xYear'), $this->post('MHOLID'));
            }
        }else{
            $records = $this->soa_report_model->get_data($this->post('xMonth'),$this->post('xYear'));
        }

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
        if($this->get('receivable')){
            $records = array(
                'records' => $this->soa_report_model->get_receivable($this->get('xMonth'),$this->get('xYear')),
                'xMonth' => $this->get('xMonth'),
                'xYear' => $this->get('xYear'),
                'duedate'=> $this->soa_report_model->get_duedate(),
                'prepared_by' => $data['fullname']
            );
            $html = $this->load->view('Receivable_Report', $records, true);
        }elseif($this->get('MHOLID')){
            if($this->get('All')){
                $records = array(
                    'records' => $this->soa_report_model->get_individual_all($this->get('MHOLID')),
                    'xMonth' => $this->get('xMonth'),
                    'xYear' => $this->get('xYear'),
                    'duedate'=> $this->soa_report_model->get_duedate(),
                    'prepared_by' => $data['fullname'],
                    'All' => "true"
                );
            }else{
                $records = array(
                    'records' => $this->soa_report_model->get_individual($this->get('xMonth'),$this->get('xYear'), $this->get('MHOLID')),
                    'xMonth' => $this->get('xMonth'),
                    'xYear' => $this->get('xYear'),
                    'duedate'=> $this->soa_report_model->get_duedate(),
                    'prepared_by' => $data['fullname'],
                    'All' => "false"
                );
            }
            $html = $this->load->view('SOA_Report', $records, true);
        }else{
            $records = array(
                'records' => $this->soa_report_model->get_data($this->get('xMonth'),$this->get('xYear')),
                'xMonth' => $this->get('xMonth'),
                'xYear' => $this->get('xYear'),
                'duedate'=> $this->soa_report_model->get_duedate(),
                'prepared_by' => $data['fullname'],
                'All' => "false"
            );
            $html = $this->load->view('SOA_Report', $records, true);
        }

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
