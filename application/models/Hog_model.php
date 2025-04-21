<?php

class Hog_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblhogs");
        $this->db->where("hog_id", $data['hog_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('hog_id', $data['hog_id']);
            $this->db->update('tblhogs', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblhogs', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblhogs');
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
        $this->db->from("tblhogs");
        $this->db->where("hog_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("hog_id", $id);
            $this->db->delete("tblhogs");
            return true;
        }else{
            return false;
        }
    }
}
