<?php

class Cash_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblcashflowgroup");
        $this->db->where("CFGID", $data['CFGID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('CFGID', $data['CFGID']);
            $this->db->update('tblcashflowgroup', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblcashflowgroup', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblcashflowgroup');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblcashflowgroup");
        $this->db->where("CFGID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("CFGID", $id);
            $this->db->delete("tblcashflowgroup");
            return true;
        }else{
            return false;
        }
    }
}
