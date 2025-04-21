<?php

class Or_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblOrSetup");
        $this->db->where("setupID", $data['setupID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('setupID', $data['setupID']);
            $this->db->update('tblOrSetup', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblOrSetup', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblOrSetup');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblOrSetup");
        $this->db->where("setupID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("setupID", $id);
            $this->db->delete("tblOrSetup");
            return true;
        }else{
            return false;
        }
    }
}
