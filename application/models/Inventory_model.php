<?php

class Inventory_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblpohdr");
        $this->db->where("po_id", $data['po_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('po_id', $data['po_id']);
            $this->db->update('tblpohdr', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblpohdr', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_cancellationslc($data)
    {
        $this->db->select("*");
        $this->db->from("tblslc");
        $this->db->where("pohdr_idlink", $data['pohdr_idlink']);
        $query = $this->db->get();
        if($query->result()){
            // $this->db->where('po_id', $data['po_id']);
            // $this->db->update('tblpohdr', $data);
            // $this->db->where('pohdr_link', $data2['pohdr_link']);
            // $this->db->update('tblpodtl', $data2);
            $this->db->where('pohdr_idlink', $data['pohdr_idlink']);
            $this->db->update('tblslc', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }
        // else{
        //     $this->db->insert('tblslc', $data);
        //     if ($this->db->affected_rows()) {
        //         return array('id' => $this->db->insert_id());
        //     } else {
        //         return false;
        //     }
        // }

    }
    public function save_cancellationdtl($data)
    {
        $this->db->select("*");
        $this->db->from("tblpodtl");
        $this->db->where("pohdr_link", $data['pohdr_link']);
        $query = $this->db->get();
        if($query->result()){
            // $this->db->where('po_id', $data['po_id']);
            // $this->db->update('tblpohdr', $data);
            $this->db->where('pohdr_link', $data['pohdr_link']);
            $this->db->update('tblpodtl', $data);
            // $this->db->where('pohdr_idlink', $data3['pohdr_idlink']);
            // $this->db->update('tblslc', $data3);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblpodtl', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }
    public function save_cancellationhdr($data)
    {
        $this->db->select("*");
        $this->db->from("tblpohdr");
        $this->db->where("po_id", $data['po_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('po_id', $data['po_id']);
            $this->db->update('tblpohdr', $data);
            // $this->db->where('pohdr_link', $data2['pohdr_link']);
            // $this->db->update('tblpodtl', $data2);
            // $this->db->where('pohdr_idlink', $data3['pohdr_idlink']);
            // $this->db->update('tblslc', $data3);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblpohdr', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_detail($data)
    {
        $this->db->select("*");
        $this->db->from("tblpodtl");
        $this->db->where("podtl_id", $data['podtl_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('property_no', $data['property_no']);
            $this->db->update('tblpodtl', array('unit_cost' =>$data['unit_cost']));

            $this->db->where('podtl_id', $data['podtl_id']);
            $this->db->update('tblpodtl', $data);
            

            
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblpodtl', $data);
            $this->db->select("*");
            
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_manual($data2)
    {
        $this->db->select("*");
        $this->db->from("tblpodtl");
        $this->db->where("podtl_id", $data2['podtl_id']);
        $this->db->where("pohdr_link", $data2['pohdr_link']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('podtl_id', $data2['podtl_id']);
            $this->db->where('pohdr_link', $data2['pohdr_link']);
            $this->db->update('tblpodtl', $data2);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblpodtl', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }
    public function save_deliverydetail($data2)
    {
        $this->db->select("*");
        $this->db->from("tbldelivery");
        $this->db->where("del_id", $data2['del_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('del_id', $data2['del_id']);
            $this->db->update('tbldelivery', $data2);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tbldelivery', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_individual($data4)
    {
        $this->db->select("*");
        $this->db->from("tblpodtl");
        $this->db->where("podtl_id", $data4['podtl_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('property_no', $data4['property_no']);
            $this->db->where('center_idlink', $data4['center_idlink']);
            $this->db->update('tblpodtl', $data4);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->where("podtl_id", $data4['podtl_id']);
            $this->db->where("pohdr_link", $data4['pohdr_link']);
            $this->db->update('tblpodtl', $data4);
            // $this->db->insert('tbldelivery', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_delivery($data,$data2,$data3,$data4)
    {
        $this->db->select("*");
        $this->db->from("tblslc");
        $this->db->where("slc_id", $data['slc_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('slc_id', $data['slc_id']);
            $this->db->update('tblslc', $data);
            $this->db->where('slc_id', $data3['slc_id']);
            $this->db->update('tblslccenters', $data3);
            
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->where("podtl_id", $data2['podtl_id']);
            $this->db->where("pohdr_link", $data2['pohdr_link']);
            $this->db->update('tblpodtl', $data2);

            $this->db->where('property_no', $data4['property_no']);
            $this->db->where('center_idlink', $data4['center_idlink']);
            $this->db->update('tblpodtl', $data4);

            $this->db->insert('tblslc', $data);
            $this->db->insert('tblslccenters', $data3);
            
            // $this->db->insert('tbldelivery', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_issuance($data,$data2)
    {
        $this->db->select("*");
        $this->db->from("tblslc");
        $this->db->where("slc_id", $data['slc_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('slc_id', $data['slc_id']);
            $this->db->update('tblslc', $data);
            $this->db->where('slc_id', $data2['slc_id']);
            $this->db->update('tblslccenters', $data2);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblslc', $data);
            $this->db->insert('tblslccenters', $data2);
            // $this->db->insert('tbldelivery', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_logs($data)
    {
        $this->db->select("*");
        $this->db->from("tblslcactivitylogs");
        $this->db->where("activity_id", $data['activity_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('activity_id', $data['activity_id']);
            $this->db->update('tblpayment_logs', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblslcactivitylogs', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_payment($data,$data2)
    {
        $this->db->select("*");
        $this->db->from("tblpayment_logs");
        $this->db->where("payment_id", $data['payment_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('payment_id', $data['payment_id']);
            $this->db->update('tblpayment_logs', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->where("po_id",$data2['po_id']);
            $this->db->update('tblpohdr', $data2);
            $this->db->insert('tblpayment_logs', $data);
            // $this->db->insert('tbldelivery', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function update_status($data){
        $this->db->where("po_id",$data['po_id']);
        $this->db->update('tblpohdr', $data);
        if ($this->db->affected_rows()) {
            return true;
        } else {
            return false;
        }
    }

    public function delete_payment($id){
        $this->db->select("*");
        $this->db->from("tblpayment_logs");
        $this->db->where("payment_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("payment_id", $id);
            $this->db->delete("tblpayment_logs");
            return true;
        }else{
            return false;
        }
    }

    public function delete_detail($id){
        $this->db->select("*");
        $this->db->from("tblpodtl");
        $this->db->where("podtl_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("podtl_id", $id);
            $this->db->delete("tblpodtl");
            $this->db->where("podtl_idlink", $id);
            $this->db->delete("tblslc");
            $this->db->where("podtl_idlink", $id);
            $this->db->delete("tblslccenters");
            return true;
        }else{
            return false;
        }
    }

    public function get_item(){
        $this->db->select('*');
        $this->db->from('tblpodtl');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_pohdr($id){
        $this->db->select('*');
        $this->db->from('tblpohdr');
        $this->db->where('po_id', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }


    public function get_series($id){
        $this->db->select('*');
        $this->db->from('series');
        $this->db->where("account_link", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_payment($id){
        $this->db->select('*');
        $this->db->from('tblpayment_logs');
        $this->db->where("po_hdridlink", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_details($id){
        $this->db->select('*');
        $this->db->from('podtllink_totaldelivery_view');
        $this->db->where("pohdr_link", $id);
        $this->db->order_by("podtl_id", "desc");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_auth($username,$password){
        $this->db->select('*');
        $this->db->from('tbllogin');
        $this->db->where("Username", $username);
        $this->db->where("Password", $password);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_poexit($id){
        $this->db->select('*');
        $this->db->from('tblpohdr');
        $this->db->where("po_num", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_prop($id){
        $this->db->select('*');
        $this->db->from('tblpodtl');
        $this->db->where("property_no", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_propertyget($id){
        $this->db->select('*');
        $this->db->from('tblpodtl');
        $this->db->where("pohdr_link !=", $id);
        $this->db->order_by("podtl_id", "desc");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }


    public function get_deliveries($id){
        $this->db->select('*');
        $this->db->from('tbldelivery');
        $this->db->where("podtl_idlink", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_slc($pro){
        $this->db->select('*');
        $this->db->from('tblslc');
        // $this->db->where("podtl_idlink", $id);
        $this->db->where("item_code", $pro);
       //$this->db->where("cancellation_status !=", "CANCELED");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_slcoffice($pro,$center){
        $this->db->select('*');
        $this->db->from('tblslccenters');
        // $this->db->where("podtl_idlink", $id);
        $this->db->where("item_code", $pro);
        $this->db->where("center_idlink", $center);
       //$this->db->where("cancellation_status !=", "CANCELED");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_slcbydate($pro,$first,$second){
        $this->db->select('*');
        $this->db->from('tblslc');
        // $this->db->where("podtl_idlink", $id);
        $this->db->where("item_code", $pro);
        $this->db->where("cancellation_status !=", "CANCELED");
        $this->db->where("trans_date >=", $first);
        $this->db->where("trans_date <=", $second);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function getcenter_data($pro,$id){
        $this->db->select('*');
        $this->db->from('tblslccenters');
        $this->db->where('item_code', $pro);
        $this->db->where('center_idlink', $id);
        // $this->db->order_by("slc_id", "desc");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_data($id){
        $this->db->select('*');
        $this->db->from('tblpohdr');
        if($id != 0){
            $this->db->where("center_idlink", $id);
        }
        $this->db->order_by("po_id", "desc");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_RO(){
        $this->db->select('*');
        $this->db->from('tblpohdr');
        $this->db->where("subadmin_access", "1");
        $this->db->order_by("po_id", "desc");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    // public function get_incomes_from_auto_debit(){
    //     $this->db->select('*');
    //     $this->db->from('tblautodebit');
    //     $this->db->where('OI_type', 'OTHER INCOME');
    //     $query = $this->db->get();
    //     return $query->result() ?  $query->result() : false;
    // }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblpohdr");
        $this->db->where("po_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("pohdr_link", $id);
            $this->db->delete("tblpodtl");
            $this->db->where("po_id", $id);
            $this->db->delete("tblpohdr");
            $this->db->where("pohdr_idlink", $id);
            $this->db->delete("tblslc");
            $this->db->where("pohdr_idlink", $id);
            $this->db->delete("tblslccenters");
            return true;
        }else{
            return false;
        }
    }
}
