<?php

class Fee_Duedate_Model extends CI_Model
{
    public function get_fee(){
        $this->db->select("Fee");
        $this->db->from("tblannualfee");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                return $record->Fee;
            }
        }else{
            return "";
        }
    }

    public function get_day(){
        $this->db->select("day");
        $this->db->from("tblduedate");
        $this->db->where("Type","Monthly");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                return $record->day;
            }
        }else{
            return "";
        }
    }

    public function get_month(){
        $this->db->select("Month");
        $this->db->from("tblduedate");
        $this->db->where("Type","Annual");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                return $record->Month;
            }
        }else{
            return "";
        }
    }

    public function get_month_day(){
        $this->db->select("day");
        $this->db->from("tblduedate");
        $this->db->where("Type","Annual");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                return $record->day;
            }
        }else{
            return "";
        }
    }

    public function save_data($data)
    {
        // Fee
        $this->db->where("AFID", 1);
        $this->db->update("tblannualfee", array('Fee'=>$data['Fee']));

        // Monthly
        $this->db->where("Type", "Monthly");
        $this->db->update("tblduedate", array('day'=>$data['day']));

        // Annual
        $this->db->where("Type", "Annual");
        $this->db->update("tblduedate", array('Month'=>$data['Month'], 'day' => $data['day_annual']));
        return true;
    }
}
