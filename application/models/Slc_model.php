<?php

class Slc_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblslc");
        $this->db->where("slc_id", $data['slc_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('slc_id', $data['slc_id']);
            $this->db->update('tblslc', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblslc', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function get_ro(){
        $this->db->select('*');
        $this->db->from('tblpohdr');
        $this->db->where('subadmin_access', 1);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_bycenter($id){
        $this->db->select('a.*,b.fund_name,b.fund_code,b.fund_idlink,b.po_num,b.po_id');
        $this->db->from("tblpodtl a, tblpohdr b");
        $this->db->where("a.pohdr_link = b.po_id");
        $this->db->where('a.center_idlink', $id);
        // $this->db->where("a.pohdr_link = b.po_id");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_data($hdr,$dtl,$pro){
        $this->db->select('*');
        $this->db->from('tblslc');
        // $this->db->where('pohdr_idlink', $hdr);
        // $this->db->where('podtl_idlink', $dtl);
        $this->db->where('item_code', $pro);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_batch_expense($hdr,$dtl,$pro,$batch){
        $this->db->select('*');
        $this->db->from('tblslc');
        // $this->db->where('pohdr_idlink', $hdr);
        // $this->db->where('podtl_idlink', $dtl);
        $this->db->where('item_code', $pro);
        $this->db->where('batch_idlink', $batch);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    // public function get_incomes_from_auto_debit(){
    //     $this->db->select('*');
    //     $this->db->from('tblautodebit');
    //     $this->db->where('OI_type', 'OTHER INCOME');
    //     $query = $this->db->get();
    //     return $query->result() ?  $query->result() : false;
    // }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblslc");
        $this->db->where("slc_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("slc_id", $id);
            $this->db->delete("tblslc");
            $this->db->where("slc_id", $id);
            $this->db->delete("tblslccenters");
            return true;
        }else{
            return false;
        }
    }
}
