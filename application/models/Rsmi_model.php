<?php

class Rsmi_Model extends CI_Model
{

    public function get_data($from,$to,$id,$type,$center){
        $this->db->select('*');
        $this->db->from('rsmi_view');
        // $this->db->where('center_idlink', $id);
        $this->db->where('trans_date >=', $from);
        $this->db->where('trans_date <=', $to);
        $this->db->where('account_type', $type);
        $this->db->where('center_idlink', $id);
        $this->db->order_by('ris','ACS');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_group_data($from,$to,$id,$type,$center){
        $this->db->select('*,sum(qty_issue) as total_qty');
        $this->db->from('recapsulation_view');
        // $this->db->where('center_idlink', $id);
        $this->db->where('trans_date >=', $from);
        $this->db->where('trans_date <=', $to);
        $this->db->where('account_type', $type);
        $this->db->where('center_idlink', $id);
        $this->db->group_by('item_code');
        $this->db->group_by('unitcost_issue'); 
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_entire_data($from,$to,$type){
        $this->db->select('*');
        $this->db->from('rsmi_view');
        // $this->db->where('center_idlink', $id);
        $this->db->where('trans_date >=', $from);
        $this->db->where('trans_date <=', $to);
        // $this->db->where('account_type', 'INVENTORY');
        // $this->db->where('center_idlink', $id);
        $this->db->order_by('ris','ACS');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }
    
    public function get_entire($from,$to,$type){
        $this->db->select('*,sum(qty_issue) as total_qty');
        $this->db->from('recapsulation_view');
        $this->db->where('trans_date >=', $from);
        $this->db->where('trans_date <=', $to);
        // $this->db->where('account_type', $type);
        $this->db->group_by('item_code');
        $this->db->group_by('unitcost_issue'); 
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }
    

 
}
