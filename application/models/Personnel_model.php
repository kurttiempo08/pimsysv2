<?php

class Personnel_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblpersonnel_list");
        $this->db->where("recp_id", $data['recp_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('recp_id', $data['recp_id']);
            $this->db->update('tblpersonnel_list', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblpersonnel_list', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblpersonnel_list');
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
        $this->db->from("tblpersonnel_list");
        $this->db->where("recp_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("recp_id", $id);
            $this->db->delete("tblpersonnel_list");
            return true;
        }else{
            return false;
        }
    }
}
