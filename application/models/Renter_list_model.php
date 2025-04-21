<?php

class Renter_List_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblrenter");
        $this->db->where("RLID", $data['RLID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('RLID', $data['RLID']);
            $this->db->update('tblrenter', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblrenter', $data);
            // $this->db->insert('tblownershiphistory', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
        
    }

    public function save_property($data,$data2)
    {
        $this->db->select("*");
        $this->db->from("tblproperty");
        $this->db->where("propID", $data['propID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('propID', $data['propID']);
            $this->db->update('tblproperty', $data);
            $data2['Property_IDLink'] = $data['propID'];
            $this->db->insert('tblrenterhistory', $data2);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblproperty', $data);
            if ($this->db->affected_rows()) {
                $id = $this->db->insert_id();
                $data2['Property_IDLink'] = $id;
                $this->db->insert('tblrenterhistory', $data2);
                return array('id' => $id);
            } else {
                return false;
            }
        }
        
    }

    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblrenter');
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

    public function get_propertyall(){
        $this->db->select('*');
        $this->db->from('tblproperty');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblrenter");
        $this->db->where("RLID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("RLID", $id);
            $this->db->delete("tblrenter");
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
