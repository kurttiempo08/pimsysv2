<?php

class Signatory_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblsignaturedesignation");
        $this->db->where("SigID", $data['SigID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('SigID', $data['SigID']);
            $this->db->update('tblsignaturedesignation', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblsignaturedesignation', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblsignaturedesignation');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblsignaturedesignation");
        $this->db->where("SigID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("SigID", $id);
            $this->db->delete("tblsignaturedesignation");
            return true;
        }else{
            return false;
        }
    }
}
