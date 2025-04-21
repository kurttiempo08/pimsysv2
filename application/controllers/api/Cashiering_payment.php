<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Cashiering_Payment extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('cashiering_payment_model');
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
        $sess = $this->session->userdata('logged_in');
        if($this->post('header')){
            $data = array(
                'THDRID' => $this->post('THDRID') ? $this->post('THDRID') : " ",
                'TDate' => $this->post('TDate') ? $this->post('TDate') : "",
                'ORNo' => $this->post('ORNo') ? $this->post('ORNo') : "",
                'AcknowledgementFormNo' => $this->post('AcknowledgementFormNo') ? $this->post('AcknowledgementFormNo') : "",
                'IsMember' => $this->post('IsMember') ? $this->post('IsMember') : "",
                'MemberID_link' => $this->post('MemberID_link') ? $this->post('MemberID_link') : "",
                'Property_IDLink' => $this->post('Property_IDLink') ? $this->post('Property_IDLink') : "",
                'LN' => $this->post('LN') ? $this->post('LN') : "",
                'FN' => $this->post('FN') ? $this->post('FN') : "",
                'MN' => $this->post('MN') ? $this->post('MN') : "",
                'EXN' => $this->post('EXN') ? $this->post('EXN') : "",
                'Address' => $this->post('Address') ? $this->post('Address') : "",
                'Remarks' => $this->post('Remarks') ? $this->post('Remarks') : "",
                'Status' => $this->post('Status') ? $this->post('Status') : "",
                'Type' => $this->post('Type') ? $this->post('Type') : "",
                'TotalAmountPayable' => $this->post('TotalAmountPayable') ? $this->post('TotalAmountPayable') : "",
                'TotalAmountActualPaid' => $this->post('TotalAmountActualPaid') ? $this->post('TotalAmountActualPaid') : "",
                'SpecialTransaction' => $this->post('SpecialTransaction') ? $this->post('SpecialTransaction') : "",
                'CashierUserIDLink' => $sess['id']
            );
            $result = $this->cashiering_payment_model->save_header($data);
            if ($result['id']){
                $result = array(
                    'success' => true,
                    'id' => $result['id'],
                    'series' => $result['series'],
                    'message' => 'Successfully saved'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }elseif($result){
                $result = array(
                    'success' => true,
                    'series' => $result['series'],
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
        }elseif($this->post('detail')){
            $data = array(
                'TDTLID' => $this->post('TDTLID') ? $this->post('TDTLID') : " ",
                'THDR_IDLink' => $this->post('THDR_IDLink') ? $this->post('THDR_IDLink') : "",
                'AcctCodeLink' => $this->post('AcctCodeLink') ? $this->post('AcctCodeLink') : "",
                'AcctDetails' => $this->post('AcctDetails') ? $this->post('AcctDetails') : "",
                'AcctSubGroup' => $this->post('AcctSubGroup') ? $this->post('AcctSubGroup') : "",
                'AcctGroupCode' => $this->post('AcctGroupCode') ? $this->post('AcctGroupCode') : "",
                'Particulars' => $this->post('Particulars') ? $this->post('Particulars') : "",
                'Gross' => $this->post('Gross') ? $this->post('Gross') : "",
                'Discount' => $this->post('Discount') ? $this->post('Discount') : "",
                'AmountDue' => $this->post('AmountDue') ? $this->post('AmountDue') : "",
                'AmtPaid' => $this->post('AmtPaid') ? $this->post('AmtPaid') : "",
                'Month' => $this->post('Month') ? $this->post('Month') : "",
                'Year' => $this->post('Year') ? $this->post('Year') : "",
                'Remarks' => $this->post('Remarks') ? $this->post('Remarks') : "",
                'Explaination' => $this->post('Explaination') ? $this->post('Explaination') : "",
            );
            $result = $this->cashiering_payment_model->save_detail($data);
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
        }elseif($this->post('monthlydues')){
            $data = array(
                'LID' => $this->post('LID') ? $this->post('LID') : " ",
                'MemberID_Link' => $this->post('MemberID_Link') ? $this->post('MemberID_Link') : "",
                'Property_IDLink' => $this->post('Property_IDLink') ? $this->post('Property_IDLink') : "",
                'TransDate' => date('Y-m-d'),
                'ORRefNo' => $this->post('ORRefNo') ? $this->post('ORRefNo') : "",
                'Remarks' => "Enter Manually in Cashier Payment by ".$sess['username'],
                'xMonth' => $this->post('xMonth') ? $this->post('xMonth') : "",
                'xYear' => $this->post('xYear') ? $this->post('xYear') : "",
                'DebitAmt' => $this->post('DebitAmt') ? $this->post('DebitAmt') : "",
                'Particulars' => $this->post('Particulars') ? $this->post('Particulars') : "",
                'PostedBy' => $sess['username'],
                'PostedDate' => Date('Y-m-d'),
                'PostedTime' => Date('h:i:s'),
            );
            $result = $this->cashiering_payment_model->save_monthly_due($data);
            if($result['exist']){
                $result = array(
                    'exist' => true,
                    'success' => false,
                    'message' => 'Already existed in the record'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }elseif ($result['id']){
                $result = array(
                    'success' => true,
                    'id' => $result['id'],
                    'message' => 'Successfully saved'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed saving'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }elseif($this->post('appendMD')){
            $result = $this->cashiering_payment_model->append_monthly_dues_to_transaction($this->post('data'), $this->post('id'));
            if($result){
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
        }elseif($this->post('membership')){
            $data = array(
                'LID' => $this->post('LID') ? $this->post('LID') : " ",
                'MemberID_Link' => $this->post('MemberID_Link') ? $this->post('MemberID_Link') : "",
                'Property_IDLink' => $this->post('Property_IDLink') ? $this->post('Property_IDLink') : "",
                'TransDate' => date('Y-m-d'),
                'ORRefNo' => $this->post('ORRefNo') ? $this->post('ORRefNo') : "",
                'Remarks' => "Enter Manually in Cashier Payment by ".$sess['username'],
                'xYear' => $this->post('xYear') ? $this->post('xYear') : "",
                'DebitAmt' => $this->post('DebitAmt') ? $this->post('DebitAmt') : "",
                'Particulars' => $this->post('Particulars') ? $this->post('Particulars') : "",
            );
            $result = $this->cashiering_payment_model->save_membership_fee($data);
            if($result['exist']){
                $result = array(
                    'exist' => true,
                    'success' => false,
                    'message' => 'Already existed in the record'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }elseif ($result['id']){
                $result = array(
                    'success' => true,
                    'id' => $result['id'],
                    'message' => 'Successfully saved'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed saving'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }elseif($this->post('appendMF')){
            $result = $this->cashiering_payment_model->append_membership_fee_to_transaction($this->post('data'), $this->post('id'));
            if($result){
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
        }elseif($this->post('payment')){
            $data = array(
                'TPDID' => $this->post('TPDID') ? $this->post('TPDID') : " ",
                'THDRID_Link' => $this->post('THDRID_Link') ? $this->post('THDRID_Link') : "",
                'Mode' => $this->post('Mode') ? $this->post('Mode') : "",
                'TranCheckDate' => $this->post('TranCheckDate') ? $this->post('TranCheckDate') : "",
                'CardCheckBank' => $this->post('CardCheckBank') ? $this->post('CardCheckBank') : "",
                'CardCheckNo' => $this->post('CardCheckNo') ? $this->post('CardCheckNo') : "",
                'DepRefNo' => $this->post('DepRefNo') ? $this->post('DepRefNo') : "",
                'AmountTender' => $this->post('AmountTender') ? $this->post('AmountTender') : "",
                'NetAmt' => $this->post('AmountTender') ? $this->post('AmountTender') : "",
                'Status' => $this->post('Status') ? $this->post('Status') : "",
            );
            $result = $this->cashiering_payment_model->save_payment($data);
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
        }elseif($this->post('tenderPayment')){
            $result = $this->cashiering_payment_model->tender_payment(
                $this->post('id'), $this->post('debt'), $this->post('cash'), $this->post('type')
            );
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
        }elseif($this->post('tenderSpecialPayment')){
            $result = $this->cashiering_payment_model->tender_special_payment(
                $this->post('id'), $this->post('debt'), $this->post('cash'), $this->post('type')
            );
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
        }elseif($this->post('deleteAll')){
            $result = $this->cashiering_payment_model->delete_all_details($this->post('id'));
            if($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully deleted'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed saving'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }elseif($this->post('multipleDel')){
            $result = $this->cashiering_payment_model->delete_multiple_details($this->post('ids'));
            if($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully deleted'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed saving'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }elseif($this->post('deleteMultipleMD')){
            $result = $this->cashiering_payment_model->delete_multiple_md($this->post('ids'));
            if($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully deleted'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed saving'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }elseif($this->post('cancel')){
            $result = $this->cashiering_payment_model->cancel_trans($this->post('id'));
            if($result){
                $result = array(
                    'success' => true,
                    'message' => 'Successfully cancelled'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }else{
                $result = array(
                    'success' => false,
                    'message' => 'Failed cancelling'
                );
                $this->response($result, REST_Controller::HTTP_OK);
            }
        }
    }

    public function index_get(){
        if($this->get('header')){
            $result = $this->cashiering_payment_model->get_header();
        }elseif($this->get('details')){
            $result = $this->cashiering_payment_model->get_details($this->get('id'));
        }elseif($this->get('payments')){
            $result = $this->cashiering_payment_model->get_payments($this->get('id'));
        }elseif($this->get('lotrates')){
            $result = $this->cashiering_payment_model->get_lot_rate();
        }elseif($this->get('annualrate')){
            $result = $this->cashiering_payment_model->get_annual_rate();
        }elseif($this->get('monthlyDues')){
            $result = $this->cashiering_payment_model->get_unpaid_monthly_dues($this->get('id'));
        }elseif($this->get('membership')){
            $result = $this->cashiering_payment_model->get_unpaid_membership_fees($this->get('id'));
        }elseif($this->get('coa')){
            $result = $this->cashiering_payment_model->get_chart_of_accounts($this->get('name'));
        }elseif($this->get('bond')){
            $result = $this->cashiering_payment_model->get_refundable_charts();
        }elseif($this->get('otherincome')){
            $result = $this->cashiering_payment_model->get_other_income_charts();
        }
        $this->returns($result);
    }
    public function inquiry_get(){
        if($this->get('search')){
            if($this->get('search') == 1){
                $result = $this->cashiering_payment_model->search_by_or($this->get('ORNo'));
            }else if($this->get('search') == 2){
                $result = $this->cashiering_payment_model->search_by_date($this->get('from'), $this->get('to'));
            }
        }
        $this->returns($result);
    }
    public function index_delete(){
        $result = $this->cashiering_payment_model->delete_payment($this->query('id'));
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