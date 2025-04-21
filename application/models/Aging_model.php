<?php

class Aging_Model extends CI_Model
{
    public function get_data($type, $id, $id2){
        if($type == 'monthly'){
            $this->db->select("*");
            $this->db->from("view_getbalance");
            $this->db->where("TotalBalance > 0");
            $this->db->where("MHOLID", $id);
            $this->db->where("Property_IDLink", $id2);
            $this->db->where("duedate <= '" . date('Y-m-d') . "'");
            $this->db->order_by("TransDate", "asc");
            $query = $this->db->get();
        }elseif($type == 'annual'){
            $this->db->select("*");
            $this->db->from("view_getannualledger");
            $this->db->where("TotalBalance > 0");
            $this->db->where("MHOLID", $id);
            $this->db->where("Property_IDLink", $id2);
            $this->db->where("duedate <= '" . date('Y-m-d') . "'");
            $this->db->order_by("TransDate", "asc");
            $query = $this->db->get();
        }
        
        return $query->result() ? $query->result() : false;
    }

}
