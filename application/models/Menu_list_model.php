<?php

class Menu_List_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblformlist");
        $this->db->where("FormID", $data['FormID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('FormID', $data['FormID']);
            $this->db->update('tblformlist', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblformlist', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
        
    }

    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblformlist');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblformlist");
        $this->db->where("FormID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("FormID", $id);
            $this->db->delete("tblformlist");
            return true;
        }else{
            return false;
        }
    }
}
