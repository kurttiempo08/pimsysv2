<?php

class Office_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblchartaccount");
        $this->db->where("office_id", $data['office_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('office_id', $data['office_id']);
            $this->db->update('tblchartaccount', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblchartaccount', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function savesub_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblsubaccount");
        $this->db->where("subacct_id", $data['subacct_id']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('subacct_id', $data['subacct_id']);
            $this->db->update('tblsubaccount', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblsubaccount', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function get_kalahi_data(){
        $this->db->select('*');
        $this->db->from('tblchartaccount');
        $this->db->where("office_code","KALAHI");
        $this->db->order_by('office', 'ASC');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }
    
    public function get_data(){
        $this->db->select('*');
        $this->db->from('tblchartaccount');
        // $this->db->where('office_code != ',"KALAHI");
        $this->db->order_by('office', 'ASC');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_subdata($id){
        $this->db->select('*');
        $this->db->from('tblsubaccount');
        $this->db->where('acct_link',$id);
        $this->db->order_by('subaccount', 'ASC');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_count($id){
        $this->db->select('*');
        $this->db->from('tblpodtl');
        $this->db->where('property_no',$id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_allsubdata(){
        $this->db->select('*');
        $this->db->from('chartaccountlinkage');
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_filtersubdata($id){
        $this->db->select('*');
        $this->db->from('chartaccountlinkage');
        $this->db->where('acct_link', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_account($id){
        $this->db->select('*');
        $this->db->from('acct_detailed_expense_link_branded');
        $this->db->where('office_idlink', $id);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_accountoffice($id,$center){
        $this->db->select('*');
        $this->db->from('acct_detailed_expense_linkcenter_branded');
        $this->db->where('office_idlink', $id);
        $this->db->where('center_idlink', $center);
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_ending(){
        $this->db->select('*,sum(totalcost) as total');
        $this->db->from('acct_detailed_expense_linkcenter');
        $this->db->group_by('office_idlink'); 
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_ending_conso(){
        $this->db->select('*');
        $this->db->from('ending_balance_view');
        $this->db->where('office_code !=', "KALAHI");
        $query = $this->db->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_ending_center($id){
        $this->db->select('*');
        $this->db->from('ending_balance_per_center_view');
        $this->db->where("center_idlink", $id);
        // $this->db->group_by('office_idlink'); 
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

    public function deletesub_data($id){
        $this->db->select("*");
        $this->db->from("tblsubaccount");
        $this->db->where("subacct_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("subacct_id", $id);
            $this->db->delete("tblsubaccount");
            return true;
        }else{
            return false;
        }
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblchartaccount");
        $this->db->where("office_id", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("acct_link", $id);
            $this->db->delete("tblsubaccount");
            $this->db->where("office_id", $id);
            $this->db->delete("tblchartaccount");
            return true;
        }else{
            return false;
        }
    }
}
