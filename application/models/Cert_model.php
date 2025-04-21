<?php

class Cert_Model extends CI_Model
{

    public function get_insemination($dates)
    {
        $condition = "insemination_date >= '" . $dates['datefrom'] . "' and insemination_date <= '" . $dates['dateto']."'";
        $this->db->select("*");
        $this->db->from("tblcertissuance");
        $this->db->where($condition);
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_year($data){
        $this->db->select('*');
        $this->db->from('tblcertissuance');
        $this->db->where("client_BPYear", $data);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_barangay($data){
        $this->db->select('*');
        $this->db->from('tblbarangay');
        // $this->db->where("client_barangay", $data);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_filterbarangay($data){
        $this->db->select('*');
        $this->db->from('tblcertissuance');
        $this->db->where("client_barangay", $data);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblcertissuance");
        $this->db->where("certissuance_id", $data['certissuance_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('certissuance_id', $data['certissuance_id']);
            $this->db->update('tblcertissuance', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblcertissuance', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblcertissuance');
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
        $this->db->from("tblcertissuance");
        $this->db->where("certissuance_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("certissuance_id", $id);
            $this->db->delete("tblcertissuance");
            return true;
        }else{
            return false;
        }
    }
}
