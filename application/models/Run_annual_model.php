<?php

class Run_Annual_Model extends CI_Model
{
    public function get_data($Year){
        $this->db->select("m.FirstName, m.LastName, l.Particulars, l.DebitAmt");
        $this->db->from("tblmemberhomeowner m, tblannualledger l, tblproperty p");
        $this->db->where("m.MHOLID = l.MemberID_Link");
        $this->db->where("p.memberID = l.MemberID_Link");
        $this->db->where("p.propID = l.Property_IDLink");
        $this->db->where("l.DebitAmt > 0");
        $this->db->where("l.xYear", $Year);
        $this->db->where("CONCAT(l.MemberID_Link,l.Property_IDLink) NOT IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblannualledger WHERE xYear = '".$Year."' AND CreditAmt > 0)");
        $this->db->order_by("LastName", "asc");
        $this->db->order_by("FirstName", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function run_data($data)
    {
        // get Rate
        $fee = 0;
        $this->db->select("*");
        $this->db->from("tblAnnualFee");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                $fee = $record->Fee;
                break;
            }
        }
        // get Duedate
        $data['duedate'] = "";
        $this->db->select("*");
        $this->db->from("tblduedate");
        $this->db->where("Type","Annual");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                // return $record->day;
                $data['duedate'] = $data['xYear'] . "-" . $record->Month . "-" . $record->day;
            }
        }
        // generate per home owner
        $this->db->select("*");
        $this->db->from("tblmemberhomeowner m, tblproperty p");
        $this->db->where("p.memberID = m.MHOLID");
        $this->db->order_by("m.LastName", "asc");
        $this->db->order_by("m.FirstName", "asc");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                $this->db->select("*");
                $this->db->from("tblannualledger");
                $this->db->where("MemberID_Link", $record->memberID);
                $this->db->where("Property_IDLink", $record->propID);
                $this->db->where("xYear", $data['xYear']);
                $query = $this->db->get();
                if(!$query->result()){
                    $save_data = array(
                        'MemberID_Link' => $record->MHOLID,
                        'Property_IDLink' => $record->propID,
                        'TransDate' => date('Y-m-d'),
                        'Particulars' => $data['Particulars'] . " @ " . $data['xYear'],
                        'xYear' => $data['xYear'],
                        'DebitAmt' => $fee,
                        'Remarks' => 'Generated via run Annual Receivable @ ' . date('Y-m-d h:i:s A'),
                        'duedate' => $data['duedate']
                    );
                    $this->db->insert("tblannualledger",$save_data);
                }
            }
            return true;
        }else{
            return false;
        }
    }
}
