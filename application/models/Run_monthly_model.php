<?php

class Run_Monthly_Model extends CI_Model
{
    public function get_data($Month, $Year){
        $this->db->select("m.FirstName, m.LastName, l.Particulars, l.DebitAmt");
        $this->db->from("tblmemberhomeowner m, tblmemberledger l, tblproperty p");
        $this->db->where("m.MHOLID = l.MemberID_Link");
        $this->db->where("p.memberID = l.MemberID_Link");
        $this->db->where("p.propID = l.Property_IDLink");
        $this->db->where("l.DebitAmt > 0");
        $this->db->where("l.xMonth", $Month);
        $this->db->where("l.xYear", $Year);
        $this->db->where("CONCAT(l.MemberID_Link,l.Property_IDLink) NOT IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblmemberledger WHERE xMonth = '".$Month."' AND xYear = '".$Year."' AND CreditAmt > 0)");
        $this->db->order_by("LastName", "asc");
        $this->db->order_by("FirstName", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_data_tmp(){
        $this->db->select("m.FirstName, m.LastName, l.Particulars, l.DebitAmt, p.BlockNo, p.LotNo, p.PhaseCluster");
        $this->db->from("tblmemberhomeowner m, tblmemberledger_temp l, tblproperty p");
        $this->db->where("m.MHOLID = l.MemberID_Link");
        $this->db->where("p.memberID = l.MemberID_Link");
        $this->db->where("p.propID = l.Property_IDLink");
        $this->db->order_by("LastName", "asc");
        $this->db->order_by("FirstName", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_data_receivable($id){
        $this->db->select("*");
        $this->db->from("view_getbalance");
        $this->db->where("MHOLID", $id);
        $this->db->where("SumDebitAmt = TotalBalance");
        $this->db->order_by("LastName", "asc");
        $this->db->order_by("FirstName", "asc");
        $this->db->order_by("CONCAT(xYear,xMonth)");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function run_data($data)
    {
        // get Rate
        $this->db->select("*");
        $this->db->from("tblLotRate");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                if($record->Type == 'HOUSE and LOT'){
                    $house_and_lot = $record->Rate;
                }else{
                    $lot = $record->Rate;
                }
            }
        }
        // get Duedate
        $this->db->select("*");
        $this->db->from("tblduedate");
        $this->db->where("Type","Monthly");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                $data['duedate'] = $data['xYear'] . "-" . $data['xMonth'] . "-" . $record->day;
            }
        }
        // delete data first
        $this->db->select("*");
        $this->db->from("tblmemberledger_temp");
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("LID > 0");
            $this->db->delete("tblmemberledger_temp");
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
                // compute rate
                $this->db->select("*");
                $this->db->from("tblmemberledger l");
                $this->db->where("l.MemberID_Link", $record->memberID);
                $this->db->where("l.Property_IDLink", $record->propID);
                $this->db->where("l.xMonth", $data['xMonth']);
                $this->db->where("l.xYear", $data['xYear']);
                $this->db->where("CONCAT(l.MemberID_Link,l.Property_IDLink) IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblmemberledger WHERE xMonth = '".$data['xMonth']."' AND xYear = '".$data['xYear']."' AND CreditAmt > 0)");
                $query = $this->db->get();
                if(!$query->result()){
                    if($record->Category == 'house and lot'){
                        $computedRate = $house_and_lot * $record->LotAreaSqM;
                    }else{
                        $computedRate = $lot * $record->LotAreaSqM;
                    }
                    $save_data = array(
                        'MemberID_Link' => $record->MHOLID,
                        'Property_IDLink' => $record->propID,
                        'TransDate' => date('Y-m-d'),
                        'Particulars' => $data['Particulars'],
                        'xMonth' => $data['xMonth'],
                        'xYear' => $data['xYear'],
                        'DebitAmt' => $computedRate,
                        'Remarks' => 'Generated via run Monthly Receivable @ ' . date('Y-m-d h:i:s A'),
                        'duedate' => $data['duedate']
                    );
                    $this->db->insert("tblmemberledger_temp",$save_data);
                }
            }
            return true;
        }else{
            return false;
        }
    }

    public function post_data($Month, $Year)
    {
        $this->db->select("*");
        $this->db->from("tblmemberledger l");
        $this->db->where("l.xMonth", $Month);
        $this->db->where("l.DebitAmt > 0");
        $this->db->where("l.xYear", $Year);
        $this->db->where("CONCAT(l.MemberID_Link,l.Property_IDLink) NOT IN (SELECT CONCAT(b.MHOLID,b.Property_IDLink) FROM view_getbalance b WHERE b.xMonth = '".$Month."' AND b.xYear = '".$Year."' AND b.TotalBalance <> b.SumDebitAmt)");
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("xMonth", $Month);
            $this->db->where("xYear", $Year);
            $this->db->where("CONCAT(MemberID_Link,Property_IDLink) NOT IN (SELECT CONCAT(b.MHOLID,b.Property_IDLink) FROM view_getbalance b WHERE b.xMonth = '".$Month."' AND b.xYear = '".$Year."' AND b.TotalBalance <> b.SumDebitAmt)");
            $this->db->where("DebitAmt > 0");
            $this->db->delete("tblmemberledger");
        }
        
        $this->db->query("INSERT INTO tblmemberledger (MemberID_Link, Property_IDLink, TransDate, ORRefNo, Particulars, xMonth, xYear, DebitAmt, CreditAmt, Remarks, duedate) SELECT MemberID_Link, Property_IDLink, TransDate, ORRefNo, Particulars, xMonth, xYear, DebitAmt, CreditAmt, Remarks, duedate FROM tblmemberledger_temp");
        if ($this->db->affected_rows()) {
            // delete data first
            $this->db->select("*");
            $this->db->from("tblmemberledger_temp");
            $query = $this->db->get();
            if($query->result()){
                $this->db->where("LID > 0");
                $this->db->delete("tblmemberledger_temp");
            }
            return true;
        }else{
            return false;
        }
    }
}
