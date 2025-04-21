<?php

class Supplier_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblsupplier");
        $this->db->where("supplier_id", $data['supplier_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('supplier_id', $data['supplier_id']);
            $this->db->update('tblsupplier', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblsupplier', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblsupplier');
        $this->db->order_by('supplier_name', 'ASC');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    
    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblsupplier");
        $this->db->where("supplier_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("supplier_id", $id);
            $this->db->delete("tblsupplier");
            return true;
        }else{
            return false;
        }
    }
}
