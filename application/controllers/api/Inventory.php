<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Inventory extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('inventory_model');
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
                'po_id' => $this->post('po_id') ? $this->post('po_id') : " ",
                'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
                'supplier_idlink' => $this->post('supplier_idlink') ? $this->post('supplier_idlink') : " ",
                'supplier' => $this->post('supplier') ? $this->post('supplier') : " ",
                'sup_address' => $this->post('sup_address') ? $this->post('sup_address') : " ",
                'sup_tin' => $this->post('sup_tin') ? $this->post('sup_tin') : " ",
                'po_date' => $this->post('po_date') ? $this->post('po_date') : " ",
                'mode_procurement' => $this->post('mode_procurement') ? $this->post('mode_procurement') : " ",
                'orsburs_no' => $this->post('orsburs_no') ? $this->post('orsburs_no') : " ",
                'date_orsburs' => $this->post('date_orsburs') ? $this->post('date_orsburs') : " ",
                'amount_orsburs' => $this->post('amount_orsburs') ? $this->post('amount_orsburs') : " ",
                'award_date' => $this->post('award_date') ? $this->post('award_date') : " ",
                'office' => $this->post('office') ? $this->post('office') : " ",
                'uacs_code' => $this->post('uacs_code') ? $this->post('uacs_code') : " ",
                'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
                'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
                'fund_code' => $this->post('fund_code') ? $this->post('fund_code') : " ",
                'fund_name' => $this->post('fund_name') ? $this->post('fund_name') : " ",
                'fund_idlink' => $this->post('fund_idlink') ? $this->post('fund_idlink') : " ",
                'status' => $this->post('status') ? $this->post('status') : " ",
                'center_name' => $this->post('center_name') ? $this->post('center_name') : " ",
                'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
                'subadmin_access' => $this->post('subadmin_access') ? $this->post('subadmin_access') : " ",
                'assigned_to' => $this->post('assigned_to') ? $this->post('assigned_to') : " ",
            );
            $result = $this->inventory_model->save_data($data);
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

    public function reactlogs_post(){

        $data = array(
            'activity_id' => $this->post('activity_id') ? $this->post('activity_id') : " ",
            'activity' => $this->post('activity') ? $this->post('activity') : " ",
            'deleted_by' => $this->post('deleted_by') ? $this->post('deleted_by') : " ",
            'delete_id' => $this->post('delete_id') ? $this->post('delete_id') : " ",
            'delete_username' => $this->post('delete_username') ? $this->post('delete_username') : " ",
            'pohdr_idlink' => $this->post('po_id') ? $this->post('po_id') : " ",
            'podtl_idlink' => $this->post('podtl_id') ? $this->post('podtl_id') : " ",
            'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'item_description' => $this->post('item_description') ? $this->post('item_description') : " ",
            'item_code' => $this->post('item_code') ? $this->post('item_code') : " ",
            'qty_rec' => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
            'unit_rec' => $this->post('unit_rec') ? $this->post('unit_rec') : " ",
            'totalcost_rec' => $this->post('totalcost_rec') ? $this->post('totalcost_rec') : " ",
            'qty_issue' => $this->post('qty_issue') ? $this->post('qty_issue') : " ",
            'unitcost_issue' => $this->post('unitcost_issue') ? $this->post('unitcost_issue') : " ",
            'totalcost_issue' => $this->post('totalcost_issue') ? $this->post('totalcost_issue') : " ",
            'qty_bal' => $this->post('qty_bal') ? $this->post('qty_bal') : " ",
            'unitcost_bal' => $this->post('unitcost_bal') ? $this->post('unitcost_bal') : " ",
            'totalcost_bal' => $this->post('totalcost_bal') ? $this->post('totalcost_bal') : " ",
            'reason' => $this->post('reason') ? $this->post('reason') : " ",
        );
        $result = $this->inventory_model->save_logs($data);
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


    public function logs_post(){
        $data = array(
            'activity_id' => $this->post('activity_id') ? $this->post('activity_id') : " ",
            'activity' => $this->post('activity') ? $this->post('activity') : " ",
            'deleted_by' => $this->post('deleted_by') ? $this->post('deleted_by') : " ",
            'delete_id' => $this->post('delete_id') ? $this->post('delete_id') : " ",
            'delete_username' => $this->post('delete_username') ? $this->post('delete_username') : " ",
            'pohdr_idlink' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
            'podtl_idlink' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
            'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'item_description' => $this->post('item_description') ? $this->post('item_description') : " ",
            'item_code' => $this->post('item_code') ? $this->post('item_code') : " ",
            'qty_rec' => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
            'unit_rec' => $this->post('unit_rec') ? $this->post('unit_rec') : " ",
            'totalcost_rec' => $this->post('totalcost_rec') ? $this->post('totalcost_rec') : " ",
            'qty_issue' => $this->post('qty_issue') ? $this->post('qty_issue') : " ",
            'unitcost_issue' => $this->post('unitcost_issue') ? $this->post('unitcost_issue') : " ",
            'totalcost_issue' => $this->post('totalcost_issue') ? $this->post('totalcost_issue') : " ",
            'qty_bal' => $this->post('qty_bal') ? $this->post('qty_bal') : " ",
            'unitcost_bal' => $this->post('unitcost_bal') ? $this->post('unitcost_bal') : " ",
            'totalcost_bal' => $this->post('totalcost_bal') ? $this->post('totalcost_bal') : " ",
            'reason' => $this->post('reason') ? $this->post('reason') : " ",
        );
        $result = $this->inventory_model->save_logs($data);
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

    public function cancel_post(){
        $data = array(
            'po_id' => $this->post('po_id') ? $this->post('po_id') : " ",
            'cancellation_status' => $this->post('cancellation_status') ? $this->post('cancellation_status') : " ",
            'cancellation_reason' => $this->post('cancellation_reason') ? $this->post('cancellation_reason') : " ",
            'canceled_by' => $this->post('canceled_by') ? $this->post('canceled_by') : " "
        );
        $data2 = array(
            'pohdr_link' => $this->post('po_id') ? $this->post('po_id') : " ",
            'cancellation_status' => $this->post('cancellation_status') ? $this->post('cancellation_status') : " ",
            'cancellation_reason' => $this->post('cancellation_reason') ? $this->post('cancellation_reason') : " ",
            'canceled_by' => $this->post('canceled_by') ? $this->post('canceled_by') : " "
        );
        $data3 = array(
            'pohdr_idlink' => $this->post('po_id') ? $this->post('po_id') : " ",
            'cancellation_status' => $this->post('cancellation_status') ? $this->post('cancellation_status') : " ",
            'cancellation_reason' => $this->post('cancellation_reason') ? $this->post('cancellation_reason') : " ",
            'canceled_by' => $this->post('canceled_by') ? $this->post('canceled_by') : " "
        );
        // $result = $this->inventory_model->save_cancellation($data);
        $slc = $this->inventory_model->save_cancellationslc($data3);
        $dtl = $this->inventory_model->save_cancellationdtl($data2);
        $result = $this->inventory_model->save_cancellationhdr($data);
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

    public function delivery_post(){
        $data = array(
            'slc_id' => $this->post('slc_id') ? $this->post('slc_id') : " ",
            'stock_no' => $this->post('stock_no') ? $this->post('stock_no') : " ",
            'pohdr_idlink' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
            'podtl_idlink' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
            'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
            'fund_idlink' => $this->post('fund_idlink') ? $this->post('fund_idlink') : " ",
            'fund_name' => $this->post('fund_name') ? $this->post('fund_name') : " ",
            'fund_code' => $this->post('fund_code') ? $this->post('fund_code') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'item_description' => $this->post('item_description') ? $this->post('item_description') : " ",
            'unit_idlink' => $this->post('unit_idlink') ? $this->post('unit_idlink') : " ",
            'unit_name' => $this->post('unit') ? $this->post('unit') : " ",
            'unit_name' => $this->post('unit_name') ? $this->post('unit_name') : " ",
            'item_code' => $this->post('item_code') ? $this->post('item_code') : " ",
            'reorder_point' => $this->post('reorder_point') ? $this->post('reorder_point') : " ",
            'ris' => $this->post('ris') ? $this->post('ris') : " ",
            'jev' => $this->post('jev') ? $this->post('jev') : " ",
            'qty_rec' => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
            'unit_rec' => $this->post('unit_rec') ? $this->post('unit_rec') : " ",
            'totalcost_rec' => $this->post('totalcost_rec') ? $this->post('totalcost_rec') : " ",
            'qty_issue' => $this->post('qty_issue') ? $this->post('qty_issue') : " ",
            'unitcost_issue' => $this->post('unitcost_issue') ? $this->post('unitcost_issue') : " ",
            'totalcost_issue' => $this->post('totalcost_issue') ? $this->post('totalcost_issue') : " ",
            'qty_bal' => $this->post('qty_bal') ? $this->post('qty_bal') : " ",
            'unitcost_bal' => $this->post('unitcost_bal') ? $this->post('unitcost_bal') : " ",
            'totalcost_bal' => $this->post('totalcost_bal') ? $this->post('totalcost_bal') : " ",
            'daysto_consume' => $this->post('daysto_consume') ? $this->post('daysto_consume') : " ",
            'trans_date' => $this->post('trans_date') ? $this->post('trans_date') : " ",
            'delivery' => $this->post('delivery') ? $this->post('delivery') : " ",
            'office' => $this->post('office') ? $this->post('office') : " ",
            'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
            'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
            'division_unit' => $this->post('division_unit') ? $this->post('division_unit') : " ",
            
        );
        if($this->post('delivery')){
            $delivery = $this->post('delivery');
            if($delivery === "1st"){
                $designation = 'del1st';
            }
            elseif($delivery === "2nd"){
                $designation = 'del2nd';
            }
            elseif($delivery === "3rd"){
                $designation = 'del3rd';
            }
            elseif($delivery === "4th"){
                $designation = 'del4th';
            }
            elseif($delivery === "5th"){
                $designation = 'del5th';
            }
            elseif($delivery === "6th"){
                $designation = 'del6th';
            }
            elseif($delivery === "7th"){
                $designation = 'del7th';
            }
            elseif($delivery === "8th"){
                $designation = 'del8th';
            }
            elseif($delivery === "9th"){
                $designation = 'del9th';
            }
            elseif($delivery === "10th"){
                $designation = 'del10th';
            }
            elseif($delivery === "11th"){
                $designation = 'del11th';
            }
            elseif($delivery === "12th"){
                $designation = 'del12th';
            }
            else{
                $designation = 'adjustment';
            }
            $data2 = array(
                'podtl_id' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
                'pohdr_link' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
                'unit_costindivi' => $this->post('unitcost_balindiv') ? $this->post('unitcost_balindiv') : " ",
                $designation => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
            );
            $data3 = array(
                'slc_id' => $this->post('slc_id') ? $this->post('slc_id') : " ",
                'stock_no' => $this->post('stock_no') ? $this->post('stock_no') : " ",
                'pohdr_idlink' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
                'podtl_idlink' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
                'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
                'fund_idlink' => $this->post('fund_idlink') ? $this->post('fund_idlink') : " ",
                'fund_name' => $this->post('fund_name') ? $this->post('fund_name') : " ",
                'fund_code' => $this->post('fund_code') ? $this->post('fund_code') : " ",
                'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
                'item_description' => $this->post('item_description') ? $this->post('item_description') : " ",
                'unit_idlink' => $this->post('unit_idlink') ? $this->post('unit_idlink') : " ",
                'unit_name' => $this->post('unit') ? $this->post('unit') : " ",
                'unit_name' => $this->post('unit_name') ? $this->post('unit_name') : " ",
                'item_code' => $this->post('item_code') ? $this->post('item_code') : " ",
                'reorder_point' => $this->post('reorder_point') ? $this->post('reorder_point') : " ",
                'ris' => $this->post('ris') ? $this->post('ris') : " ",
                'jev' => $this->post('jev') ? $this->post('jev') : " ",
                'qty_rec' => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
                'unit_rec' => $this->post('unit_rec') ? $this->post('unit_rec') : " ",
                'totalcost_rec' => $this->post('totalcost_rec') ? $this->post('totalcost_rec') : " ",
                'qty_issue' => $this->post('qty_issue') ? $this->post('qty_issue') : " ",
                'unitcost_issue' => $this->post('unitcost_issue') ? $this->post('unitcost_issue') : " ",
                'totalcost_issue' => $this->post('totalcost_issue') ? $this->post('totalcost_issue') : " ",
                'qty_bal' => $this->post('qty_bal') ? $this->post('qty_bal') : " ",
                'unitcost_bal' => $this->post('unitcost_balindiv') ? $this->post('unitcost_balindiv') : " ",
                'totalcost_bal' => $this->post('totalcost_bal') ? $this->post('totalcost_bal') : " ",
                'daysto_consume' => $this->post('daysto_consume') ? $this->post('daysto_consume') : " ",
                'trans_date' => $this->post('trans_date') ? $this->post('trans_date') : " ",
                'delivery' => $this->post('delivery') ? $this->post('delivery') : " ",
                'office' => $this->post('office') ? $this->post('office') : " ",
                'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
                'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
                'division_unit' => $this->post('division_unit') ? $this->post('division_unit') : " ",
                'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
                'center_name' => $this->post('center_name') ? $this->post('center_name') : " ",
            );

            $data4 = array(
                // 'podtl_id' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
                // 'pohdr_link' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
                'property_no' => $this->post('item_code') ? $this->post('item_code') : " ",
                'unit_costindivi' => $this->post('unitcost_balindiv') ? $this->post('unitcost_balindiv') : " ",
                'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
                'center_name' => $this->post('center_name') ? $this->post('center_name') : " "
            );
        }
        
        // $id = $this->inventory_model->save_individual($data4);
        $result = $this->inventory_model->save_delivery($data,$data2,$data3,$data4);
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


    public function issuance_post(){
        $data = array(
            'slc_id' => $this->post('slc_id') ? $this->post('slc_id') : " ",
            'pohdr_idlink' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
            'podtl_idlink' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
            // 'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
            'fund_idlink' => $this->post('fund_idlink') ? $this->post('fund_idlink') : " ",
            'fund_name' => $this->post('fund_name') ? $this->post('fund_name') : " ",
            'fund_code' => $this->post('fund_code') ? $this->post('fund_code') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'item_description' => $this->post('item_description') ? $this->post('item_description') : " ",
            'unit_idlink' => $this->post('unit_idlink') ? $this->post('unit_idlink') : " ",
            'unit_name' => $this->post('unit') ? $this->post('unit') : " ",
            'unit_name' => $this->post('unit_name') ? $this->post('unit_name') : " ",
            'item_code' => $this->post('item_code') ? $this->post('item_code') : " ",
            'reorder_point' => $this->post('reorder_point') ? $this->post('reorder_point') : " ",
            'ris' => $this->post('ris') ? $this->post('ris') : " ",
            'jev' => $this->post('jev') ? $this->post('jev') : " ",
            'qty_rec' => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
            'unit_rec' => $this->post('unit_rec') ? $this->post('unit_rec') : " ",
            'totalcost_rec' => $this->post('totalcost_rec') ? $this->post('totalcost_rec') : " ",
            'qty_issue' => $this->post('qty_issue') ? $this->post('qty_issue') : " ",
            'unitcost_issue' => $this->post('unitcost_issue') ? $this->post('unitcost_issue') : " ",
            'totalcost_issue' => $this->post('totalcost_issue') ? $this->post('totalcost_issue') : " ",
            'qty_bal' => $this->post('qty_bal') ? $this->post('qty_bal') : " ",
            'unitcost_bal' => $this->post('unitcost_bal') ? $this->post('unitcost_bal') : " ",
            'totalcost_bal' => $this->post('totalcost_bal') ? $this->post('totalcost_bal') : " ",
            'daysto_consume' => $this->post('daysto_consume') ? $this->post('daysto_consume') : " ",
            'trans_date' => $this->post('trans_date') ? $this->post('trans_date') : " ",
            'delivery' => $this->post('delivery') ? $this->post('delivery') : " ",
            'office' => $this->post('office') ? $this->post('office') : " ",
            'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
            'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
            'division_unit' => $this->post('division_unit') ? $this->post('division_unit') : " ",
            'batch_idlink' => $this->post('batch_idlink') ? $this->post('batch_idlink') : " ",
            'batch_no' => $this->post('batch_no') ? $this->post('batch_no') : " ",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
        );
        $data2 = array(
            'slc_id' => $this->post('slc_id') ? $this->post('slc_id') : " ",
            'pohdr_idlink' => $this->post('pohdr_idlink') ? $this->post('pohdr_idlink') : " ",
            'podtl_idlink' => $this->post('podtl_idlink') ? $this->post('podtl_idlink') : " ",
            // 'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
            'fund_idlink' => $this->post('fund_idlink') ? $this->post('fund_idlink') : " ",
            'fund_name' => $this->post('fund_name') ? $this->post('fund_name') : " ",
            'fund_code' => $this->post('fund_code') ? $this->post('fund_code') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'item_description' => $this->post('item_description') ? $this->post('item_description') : " ",
            'unit_idlink' => $this->post('unit_idlink') ? $this->post('unit_idlink') : " ",
            'unit_name' => $this->post('unit') ? $this->post('unit') : " ",
            'unit_name' => $this->post('unit_name') ? $this->post('unit_name') : " ",
            'item_code' => $this->post('item_code') ? $this->post('item_code') : " ",
            'reorder_point' => $this->post('reorder_point') ? $this->post('reorder_point') : " ",
            'ris' => $this->post('ris') ? $this->post('ris') : " ",
            'jev' => $this->post('jev') ? $this->post('jev') : " ",
            'qty_rec' => $this->post('qty_rec') ? $this->post('qty_rec') : " ",
            'unit_rec' => $this->post('unit_rec') ? $this->post('unit_rec') : " ",
            'totalcost_rec' => $this->post('totalcost_rec') ? $this->post('totalcost_rec') : " ",
            'qty_issue' => $this->post('qty_issue') ? $this->post('qty_issue') : " ",
            'unitcost_issue' => $this->post('unit_costindivi') ? $this->post('unit_costindivi') : " ",
            'totalcost_issue' => $this->post('totalcost_issueindivi') ? $this->post('totalcost_issueindivi') : " ",
            'qty_bal' => $this->post('qty_bal') ? $this->post('qty_bal') : " ",
            'unitcost_bal' => $this->post('unit_costindivi') ? $this->post('unit_costindivi') : " ",
            'totalcost_bal' => $this->post('totalcost_bal') ? $this->post('totalcost_bal') : " ",
            'daysto_consume' => $this->post('daysto_consume') ? $this->post('daysto_consume') : " ",
            'trans_date' => $this->post('trans_date') ? $this->post('trans_date') : " ",
            'delivery' => $this->post('delivery') ? $this->post('delivery') : " ",
            'office' => $this->post('office') ? $this->post('office') : " ",
            'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
            'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
            'division_unit' => $this->post('division_unit') ? $this->post('division_unit') : " ",
            'batch_idlink' => $this->post('batch_idlink') ? $this->post('batch_idlink') : " ",
            'batch_no' => $this->post('batch_no') ? $this->post('batch_no') : " ",
            'center_name' => $this->post('division_unit') ? $this->post('division_unit') : " ",
            'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
            'remarks' => $this->post('remarks') ? $this->post('remarks') : " ",
            
        );
        $result = $this->inventory_model->save_issuance($data,$data2);
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

    public function payment_post(){
        $data = array(
            'payment_id' => $this->post('payment_id') ? $this->post('payment_id') : " ",
            'ada_date' => $this->post('ada_date') ? $this->post('ada_date') : " ",
            'ada_number' => $this->post('ada_number') ? $this->post('ada_number') : " ",
            'jev_number' => $this->post('jev_number') ? $this->post('jev_number') : " ",
            'payment_amt' => $this->post('payment_amt') ? $this->post('payment_amt') : " ",
            'po_num' => $this->post('po_num') ? $this->post('po_num') : " ",
            'po_hdridlink' => $this->post('po_hdridlink') ? $this->post('po_hdridlink') : " ",
        );

        $data2 = array(
            'po_id' => $this->post('po_hdridlink') ? $this->post('po_hdridlink') : " ",
            'status' => $this->post('status') ? $this->post('status') : " ",
        );
        
        $result = $this->inventory_model->save_payment($data,$data2);
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

    public function update_post(){
        $data = array(
            'po_id' => $this->post('po_hdridlink') ? $this->post('po_hdridlink') : " ",
            'status' => "UNPAID",
        );
        
        $result = $this->inventory_model->update_status($data);
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

    public function detail_post(){
        $data = array(
            'podtl_id' => $this->post('podtl_id') ? $this->post('podtl_id') : " ",
            'pohdr_link' => $this->post('pohdr_link') ? $this->post('pohdr_link') : " ",
            'property_no' => $this->post('property_no') ? $this->post('property_no') : " ",
            'unit' => $this->post('unit') ? $this->post('unit') : " ",
            'stock_no' => $this->post('stock_no') ? $this->post('stock_no') : " ",
            'item_id' => $this->post('item_id') ? $this->post('item_id') : " ",
            'item_name' => $this->post('item_name') ? $this->post('item_name') : " ",
            'description' => $this->post('description') ? $this->post('description') : " ",
            'additional_desc' => $this->post('additional_desc') ? $this->post('additional_desc') : " ",
            'del1st' => $this->post('del1st') ? $this->post('del1st') : " ",
            'unit_cost' => $this->post('unit_cost') ? $this->post('unit_cost') : " ",
            'original_price' => $this->post('original_price') ? $this->post('original_price') : " ",
            'amount' => $this->post('amount') ? $this->post('amount') : " ",
            'unitid_link' => $this->post('unitid_link') ? $this->post('unitid_link') : " ",
            'del2nd' => $this->post('del2nd') ? $this->post('del2nd') : " ",
            'del3rd' => $this->post('del3rd') ? $this->post('del3rd') : " ",
            'del4th' => $this->post('del4th') ? $this->post('del4th') : " ",
            'del5th' => $this->post('del5th') ? $this->post('del5th') : " ",
            'del6th' => $this->post('del6th') ? $this->post('del6th') : " ",
            'del7th' => $this->post('del7th') ? $this->post('del7th') : " ",
            'del8th' => $this->post('del8th') ? $this->post('del8th') : " ",
            'del9th' => $this->post('del9th') ? $this->post('del9th') : " ",
            'del10th' => $this->post('del10th') ? $this->post('del10th') : " ",
            'del11th' => $this->post('del11th') ? $this->post('del11th') : " ",
            'del12th' => $this->post('del12th') ? $this->post('del12th') : " ",
            'quantity' => $this->post('quantity') ? $this->post('quantity') : " ",
            'office_idlink' => $this->post('office_idlink') ? $this->post('office_idlink') : " ",
            'office' => $this->post('office') ? $this->post('office') : " ",
            'uacs_code' => $this->post('uacs_code') ? $this->post('uacs_code') : " ",
            'office_code' => $this->post('office_code') ? $this->post('office_code') : " ",
            'formula' => $this->post('formula') ? $this->post('formula') : " ",
            'center_idlink' => $this->post('center_idlink') ? $this->post('center_idlink') : " ",
            'center_name' => $this->post('center_name') ? $this->post('center_name') : " ",
            'center_fname' => $this->post('center_fname') ? $this->post('center_fname') : " ",
            'assigned_to' => $this->post('assigned_to') ? $this->post('assigned_to') : " ",
            'brand' => $this->post('brand') ? $this->post('brand') : " ",
        );
        // $data3 = array(
        //     'unit_cost' => $this->post('unit_cost') ? $this->post('unit_cost') : " ",
        //     'property_no' => $this->post('property_no') ? $this->post('property_no') : " ",
        // );
        $result = $this->inventory_model->save_detail($data);
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

    public function detail_delete(){
        $result = $this->inventory_model->delete_detail($this->query('id'));
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

    public function payment_delete(){
        $id = $this->query('id');
        $result = $this->inventory_model->delete_payment($id);
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

    public function auth_get(){
        $username = $this->query('username');
        $password = md5($this->query('password'));
        $result = $this->inventory_model->get_auth($username,$password);
        $this->returns($result);
    }

    public function pohdr_get(){
        $id = $this->get('id');
        $result = $this->inventory_model->get_pohdr($id);
        $this->returns($result);
    }

    public function item_get(){
        $result = $this->inventory_model->get_item();
        $this->returns($result);
    }

    public function payment_get(){
        $id = $this->get('id');
        $result = $this->inventory_model->get_payment($id);
        $this->returns($result);
    }

    public function existpo_get(){
        $id = $this->get('po');
        $result = $this->inventory_model->get_poexit($id);
        $this->returns($result);
    }

    public function check_get(){
        $id = $this->get('prop');
        $result = $this->inventory_model->get_prop($id);
        $this->returns($result);
    }

    public function detail_get(){
        $id = $this->get('id');
        $result = $this->inventory_model->get_details($id);
        $this->returns($result);
    }

    public function propertyall_get(){
        $id = $this->get('id');
        $result = $this->inventory_model->get_propertyget($id);
        $this->returns($result);
    }

    public function deliverylist_get(){
        $id = $this->get('dtl');
        $result = $this->inventory_model->get_deliveries($id);
        $this->returns($result);
    }

    public function center_get(){
        $pro = $this->get('pro');
        $id = $this->get('id');
        $result = $this->inventory_model->getcenter_data($pro,$id);
        $this->returns($result);
    }

    public function index_get(){
        $id = $this->get('id');
        if($id === "RO-SUPPLY"){
            $result = $this->inventory_model->get_RO($id);
            $this->returns($result);
        }
        else{
            $result = $this->inventory_model->get_data($id);
            $this->returns($result);
        }
        
    }

    public function series_get(){
        $id = $this->get('id');
        $result = $this->inventory_model->get_series($id);
        $this->returns($result);
    }

    public function index_delete(){
        $result = $this->inventory_model->delete_data($this->query('id'));
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