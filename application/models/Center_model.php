<?php

class Center_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblcenterunit");
        $this->db->where("center_id", $data['center_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('center_id', $data['center_id']);
            $this->db->update('tblcenterunit', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblcenterunit', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function get_ROcenter(){
        $id = 1;
        $this->db->select('*');
        $this->db->from('tblcenterunit');
        $this->db->where("subadmin_access", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_info($id){
        $this->db->select('center_fname');
        $this->db->from('tblcenterunit');
        $this->db->where("center_id", $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblcenterunit');
        $this->db->order_by("center_name", 'asc');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblcenterunit");
        $this->db->where("center_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("center_id", $id);
            $this->db->delete("tblcenterunit");
            return true;
        }else{
            return false;
        }
    }
}
