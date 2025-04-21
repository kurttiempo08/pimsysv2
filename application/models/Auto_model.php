<?php

class Auto_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblautodebit");
        $this->db->where("ADID", $data['ADID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('ADID', $data['ADID']);
            $this->db->update('tblautodebit', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblautodebit', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblautodebit');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblautodebit");
        $this->db->where("ADID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("ADID", $id);
            $this->db->delete("tblautodebit");
            return true;
        }else{
            return false;
        }
    }
}
