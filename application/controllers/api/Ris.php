<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Ris extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('ris_model');
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

    public function approved_post(){
            $data = $this->post('data');
            $ris = $this->post('ris');
            $date = $this->post('date');
            $hdr = $this->post('hdr');
            $remain = $this->post('remain');
            $records = $data[0];
            // $records = $records[1];
            // var_dump($records);
            $index = 0;
            $total = 0;
            $grandtotal = 0;
            $remain = 0;
            if (is_array($records) || is_object($records))
            {
                
                foreach($records as $record){
                        $total = floatval($record['qty']) * floatval($record['unit_cost']);
                        $grandtotal = (floatval($record['total_remaining']) - floatval($record['qty'])) * floatval($record['unit_cost']);
                        $remain = floatval($record['total_remaining']) - floatval($record['qty']);
                        $data = array(
                            'slc_id' => $this->post('slc_id') ? $this->post('slc_id') : " ",
                            'pohdr_idlink' => $record['po_id'] ? $record['po_id'] : " ",
                            'podtl_idlink' =>$record['podtl_id'] ? $record['podtl_id'] : " ",
                            'po_num' => $record['po_num'] ? $record['po_num'] : " ",
                            'fund_idlink' => 3,
                            'fund_name' => 'Regular Agency Fund',
                            'fund_code' => '01',
                            'item_name' => $record['item_name'] ? $record['item_name'] : " ",
                            'item_description' => $record['description'] ? $record['description'] : " ",
                            'unit_name' => $record['unit'] ? $record['unit'] : " ",
                            'item_code' => $record['property_no'] ? $record['property_no'] : " ",
                            'item_name' => $record['item_name'] ? $record['item_name'] : " ",
                            'ris' => $ris,
                            'qty_issue' => $record['qty'] ? $record['qty'] : " ",
                            'unitcost_issue' => $record['unit_cost'] ? $record['unit_cost'] : " ",
                            'unitcost_bal' => $record['unit_cost'] ? $record['unit_cost'] : " ",
                            'office' => $record['office'] ? $record['office'] : " ",
                            'office_code' => $record['office_code'] ? $record['office_code'] : " ",
                            'office_idlink' => $record['office_idlink'] ? $record['office_idlink'] : " ",
                            'division_unit' => $record['center_name'] ? $record['center_name'] : " ",
                            'center_idlink' => $record['center_idlink'] ? $record['center_idlink'] : " ",
                            'center_name' => $record['center_name'] ? $record['center_name'] : " ",
                            'trans_date' => $date,
                            'totalcost_issue' => $total,
                            'totalcost_bal' => $grandtotal,
                            'qty_bal' => $remain
                        );
                        $data2 = array(
                            'slc_id' => $this->post('slc_id') ? $this->post('slc_id') : " ",
                            'pohdr_idlink' => $record['po_id'] ? $record['po_id'] : " ",
                            'podtl_idlink' =>$record['podtl_id'] ? $record['podtl_id'] : " ",
                            'po_num' => $record['po_num'] ? $record['po_num'] : " ",
                            'fund_idlink' => 3,
                            'fund_name' => 'Regular Agency Fund',
                            'fund_code' => '01',
                            'item_name' => $record['item_name'] ? $record['item_name'] : " ",
                            'item_description' => $record['description'] ? $record['description'] : " ",
                            'unit_name' => $record['unit'] ? $record['unit'] : " ",
                            'item_code' => $record['property_no'] ? $record['property_no'] : " ",
                            'item_name' => $record['item_name'] ? $record['item_name'] : " ",
                            'ris' => $ris,
                            'qty_issue' => $record['qty'] ? $record['qty'] : " ",
                            'unitcost_issue' => $record['unit_cost'] ? $record['unit_cost'] : " ",
                            'unitcost_bal' => $record['unit_cost'] ? $record['unit_cost'] : " ",
                            'office' => $record['office'] ? $record['office'] : " ",
                            'division_unit' => $record['center_name'] ? $record['center_name'] : " ",
                            'office_code' => $record['office_code'] ? $record['office_code'] : " ",
                            'office_idlink' => $record['office_idlink'] ? $record['office_idlink'] : " ",
                            'trans_date' => $date,
                            'totalcost_issue' => $total,
                            'totalcost_bal' => $grandtotal,
                            'qty_bal' => $remain
                        );
                        $data3 = array(
                            'ris_idhdr' => $hdr,
                            'status' => "APPROVED"
                        );
                        $result = $this->ris_model->save_approved($data,$data2,$data3);
                        $index ++;
                        $total = 0;
                        $grandtotal = 0;
                        $remain = 0;
                }
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
    }

    public function index_post(){
            $data = array(
                'ris_idhdr' => $this->post('ris_idhdr') ? $this->post('ris_idhdr') : " ",
                'ris_no' => $this->post('ris_no') ? $this->post('ris_no') : " ",
                'ris_date' => $this->post('ris_date') ? $this->post('ris_date') : " ",
                'responsibility_center' => $this->post('responsibility_center') ? $this->post('responsibility_center') : " ",
                'status' => $this->post('status') ? $this->post('status') : " ",
                'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
                'center_name' => $this->post('center_name') ? $this->post('center_name') : " ",
                'center_fname' => $this->post('center_fname') ? $this->post('center_fname') : " ",
                'purpose' => $this->post('purpose') ? $this->post('purpose') : " ",
            );
            $data2 = array(
                'id' => $this->post('id') ? $this->post('id') : " "
            );
            $result = $this->ris_model->save_data($data,$data2);
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

    public function dtl_post(){
        $data = array(
            'ris_dtl_id' => $this->post('ris_dtl_id') ? $this->post('ris_dtl_id') : " ",
            'ris_hdridlink' => $this->post('ris_hdridlink') ? $this->post('ris_hdridlink') : " ",
            'po_id' => $this->post('po_id') ? $this->post('po_id') : " ",
            'podtl_id' => $this->post('podtl_id') ? $this->post('podtl_id') : " ",
            'unit' => $this->post('unit') ? $this->post('unit') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'description' => $this->post('description') ? $this->post('description') : " ",
            'qty' => $this->post('qty') ? $this->post('qty') : " ",
            'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
            'center_name' => $this->post('center_name') ? $this->post('center_name') : " ",
            'property_no' => $this->post('property_no') ? $this->post('property_no') : " ",
            'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
        );
        $result = $this->ris_model->save_dtl($data);
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

    public function remaining_get(){
        $id = $this->get('id');
        $result = $this->ris_model->get_remaining($id);
        $this->returns($result);
    }

    public function series_get(){
        $result = $this->ris_model->get_series();
        $this->returns($result);
    }

    public function index_get(){
        $id = $this->get('id');
        $type = $this->get('type');
        if($type == "SCHEMA ADMIN" || $type == "ADMIN"){
            $result = $this->ris_model->get_all();
        }
        else{
            $result = $this->ris_model->get_data($id);
        }
        $this->returns($result);
    }

    public function filter_get(){
        $id = $this->get('id');
        $type = $this->get('type');
        $filter = $this->get('filter');
        if($type == "SCHEMA ADMIN" || $type == "ADMIN"){
            $result = $this->ris_model->get_all();
        }
        else{
            $result = $this->ris_model->get_filter($id,$filter);
        }
        $this->returns($result);
    }

    public function dtl_get(){
        $id = $this->get('id');
        $result = $this->ris_model->get_dtl($id);
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->ris_model->delete_data($this->query('id'));
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

    public function dtl_delete(){
        $result = $this->ris_model->delete_dtl($this->query('id'));
        if ($result){
            $result = array(
                'success' => true,
                'message' => 'Successfully removed'
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