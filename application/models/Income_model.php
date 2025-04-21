<?php

class Income_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblotherincomelist");
        $this->db->where("OIListID", $data['OIListID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('OIListID', $data['OIListID']);
            $this->db->update('tblotherincomelist', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblotherincomelist', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblotherincomelist');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_incomes_from_auto_debit(){
        $this->db->select('*');
        $this->db->from('tblautodebit');
        $this->db->where('OI_type', 'OTHER INCOME');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblotherincomelist");
        $this->db->where("OIListID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("OIListID", $id);
            $this->db->delete("tblotherincomelist");
            return true;
        }else{
            return false;
        }
    }
}
