<?php

class Lot_Rate_Model extends CI_Model
{
    public function get_data($type){
        $this->db->select("*");
        $this->db->from("tbllotrate");
        $this->db->where("Type", $type);
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function save_data($data)
    {
        $this->db->where("Type", $data['Type']);
        $this->db->update("tbllotrate", array('Rate'=>$data['Rate']));
        return true;
    }
}
