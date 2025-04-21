<?php
//use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';


class Renter_List extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Load session library
        // $this->load->library('session');

        // Load database
        $this->load->model('renter_list_model');
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
            'RLID' => $this->post('RLID') ? $this->post('RLID') : " ",
            'LastName' => $this->post('LastName') ? $this->post('LastName') : "",
            'FirstName' => $this->post('FirstName') ? $this->post('FirstName') : "",
            'MiddleName' => $this->post('MiddleName') ? $this->post('MiddleName') : "",
            'ExtName' => $this->post('ExtName') ? $this->post('ExtName') : "",
            // 'OwnershipType' => $this->post('OwnershipType') ? $this->post('OwnershipType') : "",
            // 'MemberStatus' => $this->post('MemberStatus') ? $this->post('MemberStatus') : " ",
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
        $result = $this->renter_list_model->save_data($data);
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
        $result = $this->renter_list_model->get_property($id);
        $this->returns($result);
    }

    public function propertyall_get(){
        $result = $this->renter_list_model->get_propertyall();
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
            'Contract_num' => $this->post('Contract_num') ? $this->post('Contract_num') : "",
        );

        $data2 = array(
            'OHID' => $this->post('OHID') ? $this->post('OHID') : " ",
            'Property_IDLink' => $this->post('propID') ? $this->post('propID') : "",
            'Member_IDLink' => $this->post('memberID') ? $this->post('memberID') : "",
            'Property_acquired_date' => $this->post('Property_acquired_date') ? $this->post('Property_acquired_date') : "",
            'Property_transfered_date' => $this->post('Property_transfered_date') ? $this->post('Property_transfered_date') : "",
            'Status' => $this->post('Status') ? $this->post('Status') : ""
        );
        $result = $this->renter_list_model->save_property($data,$data2);
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
        $result = $this->renter_list_model->save_property($data,$data2);
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


    public function propertyrent_post(){
        $data = array(
            'propID' => $this->post('propID') ? $this->post('propID') : "",
            'Renter_IDLink' => $this->post('Renter_IDLink') ? $this->post('Renter_IDLink') : "",
            'Status' => "RENTED",
        );
        $data2 = array(
            'RHID' => $this->post('RHID') ? $this->post('RHID') : " ",
            'Renter_IDLink' => $this->post('Renter_IDLink') ? $this->post('Renter_IDLink') : "",
            'Member_IDLink' => $this->post('memberID') ? $this->post('memberID') : "",
            'Property_IDLink' => $this->post('propID') ? $this->post('propID') : "",
            'Date_rented' => $this->post('Property_acquired_date') ? $this->post('Property_acquired_date') : "",
            'Date_leave' => $this->post('Date_leave') ? $this->post('Date_leave') : ""
        );
        $result = $this->renter_list_model->save_property($data,$data2);
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
            $result = $this->renter_list_model->get_property_member();
        }else{
            $result = $this->renter_list_model->get_data();
        }
        $this->returns($result);
    }

    
    public function index_delete(){
        $result = $this->renter_list_model->delete_data($this->query('id'));
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