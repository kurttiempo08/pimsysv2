<?php

class Ris_Model extends CI_Model
{
    public function save_data($data,$data2)
    {
        $this->db->select("*");
        $this->db->from("tblrishdr");
        $this->db->where("ris_idhdr", $data['ris_idhdr']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('ris_idhdr', $data['ris_idhdr']);
            $this->db->update('tblrishdr', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblrishdr', $data);
            $this->db->insert('tblris_series', $data2);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_dtl($data)
    {
        $this->db->select("*");
        $this->db->from("tblrisdtl");
        $this->db->where("ris_dtl_id", $data['ris_dtl_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('ris_dtl_id', $data['ris_dtl_id']);
            $this->db->update('tblrisdtl', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblrisdtl', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_approved($data,$data2,$data3)
    {
        $this->db->select("*");
        $this->db->from("tblslc");
        $this->db->where("slc_id", $data2['slc_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('slc_id', $data2['slc_id']);
            $this->db->update('tblslc', $data2);
            $this->db->where('slc_id', $data['slc_id']);
            $this->db->update('tblslccenters', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblslc', $data2);
            $this->db->insert('tblslccenters', $data);
            $this->db->where('ris_idhdr', $data3['ris_idhdr']);
            $this->db->update('tblrishdr', $data3);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function get_remaining($id){
        $this->db->select('*');
        $this->db->from('item_ris_d_view');
        $this->db->where('center_idlink', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_data($id){
        $this->db->select('*');
        $this->db->from('tblrishdr');
        $this->db->where('center_idlink', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_filter($id,$filter){
        $this->db->select('*');
        $this->db->from('tblrishdr');
        $this->db->where('center_idlink', $id);
        $this->db->where('status', $filter);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_all(){
        $this->db->select('*');
        $this->db->from('tblrishdr');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_dtl($id){
        $this->db->select('*');
        $this->db->from('ris_d_view');
        $this->db->where('ris_hdridlink', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_series(){
        $this->db->select('MAX(id) as id');
        $this->db->from('tblris_series');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblrishdr");
        $this->db->where("ris_idhdr", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("ris_idhdr", $id);
            $this->db->delete("tblrishdr");
            $this->db->where('ris_hdridlink', $id);
            $this->db->delete('tblrisdtl');
            return true;
        }else{
            return false;
        }
    }

    public function delete_dtl($id){
        $this->db->select("*");
        $this->db->from("tblrisdtl");
        $this->db->where("ris_dtl_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("ris_dtl_id", $id);
            $this->db->delete("tblrisdtl");
            return true;
        }else{
            return false;
        }
    }
}
