<?php

class Aging_Report_Model extends CI_Model
{
    public function get_data($type, $id){
        if($type == 'monthly'){
            $getContract = "(SELECT Contract_num FROM tblproperty a WHERE a.propID = b.Property_IDLink AND a.memberID = b.MHOLID) as Contract_no";
            $this->db->select("b.*,".$getContract);
            $this->db->from("view_getbalance b");
            $this->db->where("b.TotalBalance > 0");
            $this->db->where("b.MHOLID", $id);
            $this->db->where("b.duedate <= '" . date('Y-m-d') . "'");
            $this->db->order_by("TransDate", "asc");
            $query = $this->db->get();
        }elseif($type == 'annual'){
            $this->db->select("*");
            $this->db->from("view_getannualledger");
            $this->db->where("TotalBalance > 0");
            $this->db->where("MHOLID", $id);
            $this->db->where("duedate <= '" . date('Y-m-d') . "'");
            $this->db->order_by("TransDate", "asc");
            $query = $this->db->get();
        }
        
        return $query->result() ? $query->result() : false;
    }

}
