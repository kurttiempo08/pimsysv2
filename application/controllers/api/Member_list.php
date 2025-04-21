<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Member_List extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('member_list_model');
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
            'MHOLID' => $this->post('MHOLID') ? $this->post('MHOLID') : " ",
            'LastName' => $this->post('LastName') ? $this->post('LastName') : "",
            'FirstName' => $this->post('FirstName') ? $this->post('FirstName') : "",
            'MiddleName' => $this->post('MiddleName') ? $this->post('MiddleName') : "",
            'ExtName' => $this->post('ExtName') ? $this->post('ExtName') : "",
            // 'OwnershipType' => $this->post('OwnershipType') ? $this->post('OwnershipType') : "",
            'MemberStatus' => $this->post('MemberStatus') ? $this->post('MemberStatus') : " ",
            // 'PhaseCluster' => $this->post('PhaseCluster') ? $this->post('PhaseCluster') : "",
            // 'BlockNo' => $this->post('BlockNo') ? $this->post('BlockNo') : "",
            // 'LotNo' => $this->post('LotNo') ? $this->post('LotNo') : "",
            // 'Street' => $this->post('Street') ? $this->post('Street') : "",
            // 'Subdivision' => $this->post('Subdivision') ? $this->post('Subdivision') : "",
            // 'Barangay' => $this->post('Barangay') ? $this->post('Barangay') : " ",
            // 'City' => $this->post('City') ? $this->post('City') : "",
            // 'Province' => $this->post('Province') ? $this->post('Province') : "",
            'ContactNo' => $this->post('ContactNo') ? $this->post('ContactNo') : "",
            'MobileNo1' => $this->post('MobileNo1') ? $this->post('MobileNo1') : "",
            'MobileNo2' => $this->post('MobileNo2') ? $this->post('MobileNo2') : "",
            'EmailAddress' => $this->post('EmailAddress') ? $this->post('EmailAddress') : " ",
            'OwnerProvAddress' => $this->post('OwnerProvAddress') ? $this->post('OwnerProvAddress') : "",
            'OtherContactPerson' => $this->post('OtherContactPerson') ? $this->post('OtherContactPerson') : "",
            // 'Category' => $this->post('Category') ? $this->post('Category') : "",
            // 'LotAreaSqM' => $this->post('LotAreaSqM') ? $this->post('LotAreaSqM') : "",
            // 'Remarks' => $this->post('Remarks') ? $this->post('Remarks') : "",
        );
        $result = $this->member_list_model->save_data($data);
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
    
    public function property_get(){
        $id = $this->get('memberID');
        $result = $this->member_list_model->get_property($id);
        $this->returns($result);
    }

    public function contract_get(){
        $result = $this->member_list_model->get_contract();
        $this->returns($result);
    }

    public function history_get(){
        $memberid = $this->get('memberID');
        $propid = $this->get('propID');
        $renterid = $this->get('renterID');
        $result = $this->member_list_model->get_history($memberid,$propid,$renterid);
        $this->returns($result);
    }

    public function propertyhistory_get(){
        $memberid = $this->get('memberID');
        $propid = $this->get('propID');
        $result = $this->member_list_model->get_ownerhistory($memberid,$propid);
        $this->returns($result);
    }


    public function property_post(){
        $data = array(
            'propID' => $this->post('propID') ? $this->post('propID') : " ",
            'memberID' => $this->post('memberID') ? $this->post('memberID') : "",
            'OwnershipType' => $this->post('OwnershipType') ? $this->post('OwnershipType') : "",
            'PhaseCluster' => $this->post('PhaseCluster') ? $this->post('PhaseCluster') : "",
            'BlockNo' => $this->post('BlockNo') ? $this->post('BlockNo') : "",
            'LotNo' => $this->post('LotNo') ? $this->post('LotNo') : "",
            'Street' => $this->post('Street') ? $this->post('Street') : " ",
            'Subdivision' => $this->post('Subdivision') ? $this->post('Subdivision') : "",
            'Barangay' => $this->post('Barangay') ? $this->post('Barangay') : "",
            'City' => $this->post('City') ? $this->post('City') : "",
            'Province' => $this->post('Province') ? $this->post('Province') : "",
            'Category' => $this->post('Category') ? $this->post('Category') : "",
            'LotAreaSqM' => $this->post('LotAreaSqM') ? $this->post('LotAreaSqM') : " ",
            'Remarks' => $this->post('Remarks') ? $this->post('Remarks') : "",
            'Status' => $this->post('Status') ? $this->post('Status') : "",
            'Contract_num' => $this->post('Contract_num') ? $this->post('Contract_num') : "",
            'Renter_IDLink' => $this->post('Renter_IDLink') ? $this->post('Renter_IDLink') : ""
        );

        $data2 = array(
            'OHID' => $this->post('OHID') ? $this->post('OHID') : " ",
            'Property_IDLink' => $this->post('propID') ? $this->post('propID') : "",
            'Member_IDLink' => $this->post('memberID') ? $this->post('memberID') : "",
            'Property_acquired_date' => $this->post('Property_acquired_date') ? $this->post('Property_acquired_date') : "",
            'Property_transfered_date' => $this->post('Property_transfered_date') ? $this->post('Property_transfered_date') : "",
            'History_remarks' => $this->post('remarks') ? $this->post('remarks') : "",
            'Contract_num' => $this->post('Contract_num') ? $this->post('Contract_num') : "",
        );

        $data3 = array(
            'OHID' => $this->post('OHID') ? $this->post('OHID') : " ",
            'Property_IDLink' => $this->post('propID') ? $this->post('propID') : "",
            'Member_IDLink' => $this->post('memberID') ? $this->post('memberID') : "",
            'Property_acquired_date' => $this->post('Property_acquired_date') ? $this->post('Property_acquired_date') : "",
            'Property_transfered_date' => $this->post('Property_transfered_date') ? $this->post('Property_transfered_date') : "",
            'History_remarks' => "Originally Owned",
            'Contract_num' => $this->post('Contract_num') ? $this->post('Contract_num') : "",
        );
        
        $data4 = array(
            'ContractID' => $this->post('ContractID') ? $this->post('ContractID') : " ",
            'Auto_contract' => $this->post('Auto_contract') ? $this->post('Auto_contract') : "",
        );
        $result = $this->member_list_model->save_property($data,$data2,$data3,$data4);
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


    public function propertyTransfer_post(){
        $data = array(
            'propID' => $this->post('propID') ? $this->post('propID') : " ",
            'memberID' => $this->post('memberID') ? $this->post('memberID') : "",
            'OwnershipType' => $this->post('OwnershipType') ? $this->post('OwnershipType') : "",
            'PhaseCluster' => $this->post('PhaseCluster') ? $this->post('PhaseCluster') : "",
            'BlockNo' => $this->post('BlockNo') ? $this->post('BlockNo') : "",
            'LotNo' => $this->post('LotNo') ? $this->post('LotNo') : "",
            'Street' => $this->post('Street') ? $this->post('Street') : " ",
            'Subdivision' => $this->post('Subdivision') ? $this->post('Subdivision') : "",
            'Barangay' => $this->post('Barangay') ? $this->post('Barangay') : "",
            'City' => $this->post('City') ? $this->post('City') : "",
            'Province' => $this->post('Province') ? $this->post('Province') : "",
            'Category' => $this->post('Category') ? $this->post('Category') : "",
            'LotAreaSqM' => $this->post('LotAreaSqM') ? $this->post('LotAreaSqM') : " ",
            'Remarks' => $this->post('Remarks') ? $this->post('Remarks') : "",
            'Contract_num' => $this->post('Contract_num') ? $this->post('Contract_num') : "",
        );
        $data2 = array(
            'OHID' => $this->post('OHID') ? $this->post('OHID') : " ",
            'Member_IDLink' => $this->post('memberID') ? $this->post('memberID') : "",
            'Property_acquired_date' => $this->post('Property_acquired_date') ? $this->post('Property_acquired_date') : "",
            'Property_transfered_date' => $this->post('Property_transfered_date') ? $this->post('Property_transfered_date') : "",
            'Status' => $this->post('Status') ? $this->post('Status') : ""
        );
        $result = $this->member_list_model->save_property($data,$data2);
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

    public function renterhistory_post(){
        
        $data = array(
            'RHID' => $this->post('RHID') ? $this->post('RHID') : " ",
            'Property_IDLink' => $this->post('Property_IDLink') ? $this->post('Property_IDLink') : "",
            'Renter_IDLink' => $this->post('Renter_IDLink') ? $this->post('Renter_IDLink') : "",
            'Member_IDLink' => $this->post('Member_IDLink') ? $this->post('Member_IDLink') : "",
            'Status' => $this->post('Status') ? $this->post('Status') : "",
            'Date_rented' => $this->post('Date_rented') ? $this->post('Date_rented') : "",
            'Date_leave' => $this->post('Date_leave') ? $this->post('Date_leave') : "",
        );
        $result = $this->member_list_model->save_renterhistory($data);
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

    public function index_get(){
        if($this->get('property')){
            $result = $this->member_list_model->get_property_member();
        }else{
            $result = $this->member_list_model->get_data();
        }
        $this->returns($result);
    }

    
    public function index_delete(){
        $result = $this->member_list_model->delete_data($this->query('id'));
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