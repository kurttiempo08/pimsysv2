<?php

class Member_List_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblmemberhomeowner");
        $this->db->where("MHOLID", $data['MHOLID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('MHOLID', $data['MHOLID']);
            $this->db->update('tblmemberhomeowner', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblmemberhomeowner', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
        
    }

    public function save_property($data,$data2,$data3,$data4)
    {
        $this->db->select("*");
        $this->db->from("tblproperty");
        $this->db->where("propID", $data['propID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('propID', $data['propID']);
            $this->db->update('tblproperty', $data);
            $this->db->where('ContractID', $data4['ContractID']);
            $this->db->update('tblcontract', $data4);
            $this->db->insert('tblownershiphistory', $data2);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblproperty', $data);
            if ($this->db->affected_rows()) {
                $id = $this->db->insert_id();
                $data3['Property_IDLink'] = $id;
                $this->db->insert('tblownershiphistory', $data3);
                $this->db->where('ContractID', $data4['ContractID']);
                $this->db->update('tblcontract', $data4);
                return array('id' => $id);
            } else {
                return false;
            }
        }
        
    }

    public function save_renterhistory($data)
    {
        $this->db->select("*");
        $this->db->from("tblrenterhistory");
        $this->db->where("RHID", $data['RHID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('RHID', $data['RHID']);
            $this->db->update('tblrenterhistory', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblrenterhistory', $data);
            $id = $this->db->insert_id();
            if ($this->db->affected_rows()) {
                return array('id' => $id);
            } else {
                return false;
            }
        }
        
    }

    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblmemberhomeowner');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_contract(){
        $this->db->select('*');
        $this->db->from('tblcontract');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_history($memberid,$propid,$renterid){
        $this->db->select('a.*, b.*,c.*,d.*');
        $this->db->from('tblrenterhistory a, tblproperty b, tblmemberhomeowner c,tblrenter d');
        $this->db->where('a.Member_IDLink = c.MHOLID');
        $this->db->where('a.Renter_IDLink = d.RLID');
        $this->db->where('a.Property_IDLink = b.propID');
        $this->db->where("a.Property_IDLink", $propid);
        $this->db->where("a.Member_IDLink", $memberid);
        $this->db->where("a.Renter_IDLink", $renterid);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_ownerhistory($memberid,$propid){
        $this->db->select('a.*, b.*,c.*');
        $this->db->from('tblownershiphistory a, tblproperty b, tblmemberhomeowner c');
        $this->db->where('a.Member_IDLink = c.MHOLID');
        $this->db->where('a.Property_IDLink = b.propID');
        $this->db->where("a.Property_IDLink", $propid);
        // $this->db->where("a.Member_IDLink", $memberid);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }


    public function get_property_member(){
        $this->db->select('*');
        $this->db->from('tblmemberhomeowner a, tblproperty b');
        $this->db->where('a.MHOLID = b.memberID');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_property($id){
        $this->db->select('*');
        $this->db->from('tblproperty');
        $this->db->where('memberID', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblmemberhomeowner");
        $this->db->where("MHOLID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("MHOLID", $id);
            $this->db->delete("tblmemberhomeowner");
            return true;
        }else{
            return false;
        }
    }

    public function delete_property($id){
        $this->db->select("*");
        $this->db->from("tblproperty");
        $this->db->where("propID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("propID", $id);
            $this->db->delete("tblproperty");
            return true;
        }else{
            return false;
        }
    }
}
