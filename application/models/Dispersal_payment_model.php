<?php

class Dispersal_Payment_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tbldispersal_payment");
        $this->db->where("dispersal_paymentid", $data['dispersal_paymentid']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('dispersal_paymentid', $data['dispersal_paymentid']);
            $this->db->update('tbldispersal_payment', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tbldispersal_payment', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tbldispersal_payment');
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
        $this->db->from("tbldispersal_payment");
        $this->db->where("dispersal_paymentid", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("dispersal_paymentid", $id);
            $this->db->delete("tbldispersal_payment");
            return true;
        }else{
            return false;
        }
    }
}
