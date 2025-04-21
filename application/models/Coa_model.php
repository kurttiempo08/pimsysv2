<?php

class Coa_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblchartaccountgroup");
        $this->db->where("AcctID", $data['AcctID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('AcctID', $data['AcctID']);
            $this->db->update('tblchartaccountgroup', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblchartaccountgroup', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_group($data)
    {
        $this->db->select("*");
        $this->db->from("tblchartaccountdetails");
        $this->db->where("ChADID", $data['ChADID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('ChADID', $data['ChADID']);
            $this->db->update('tblchartaccountdetails', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblchartaccountdetails', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblchartaccountgroup');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_group($id){
        $this->db->select('*');
        $this->db->from('tblchartaccountdetails');
        $this->db->where('ChAMIDLink', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_groupall(){
        $this->db->select("d.*,h.*");
        $this->db->from('tblchartaccountdetails d, tblchartaccountgroup h');
        $this->db->where('h.AcctID = d.ChAMIDLink');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblchartaccountgroup");
        $this->db->where("AcctID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("AcctID", $id);
            $this->db->delete("tblchartaccountgroup");
            $this->db->where("ChAMIDLink", $id);
            $this->db->delete("tblchartaccountdetails");
            return true;
        }else{
            return false;
        }
    }

    public function deletegroup_data($id){
        $this->db->select("*");
        $this->db->from("tblchartaccountdetails");
        $this->db->where("ChADID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("ChADID", $id);
            $this->db->delete("tblchartaccountdetails");
            return true;
        }else{
            return false;
        }
    }

}
