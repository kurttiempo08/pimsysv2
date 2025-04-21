<?php

class SOA_Report_Model extends CI_Model
{

    public function get_data($month, $year)
    {
        $monthyear = $year . $month;
        $getAnnual = "(SELECT sum(a.TotalBalance) as AnnualBalance FROM view_getannualledger a WHERE a.MHOLID = b.MHOLID AND a.Property_IDLink = b.Property_IDLink) as AnnualBalance";
        $getContract = "(SELECT Contract_num FROM tblproperty c WHERE c.propID = b.Property_IDLink AND c.memberID = b.MHOLID) as Contract_no";
        $getRenter = "(SELECT CONCAT(e.LastName,', ',e.FirstName,' ',e.MiddleName,' ',e.ExtName) FROM tblproperty d, tblrenter e WHERE d.propID = b.Property_IDLink AND d.memberID = b.MHOLID AND d.Renter_IDLink = e.RLID AND Status = 'RENTED') as Renter";
        $getType = "(SELECT Category FROM tblproperty f WHERE f.propID = b.Property_IDLink AND f.memberID = b.MHOLID) as Type";
        $this->db->select("b.*, (b.SumDebitAmt - b.SumCreditAmt) as Balance, ".$getAnnual.", ".$getContract.", ".$getRenter.", ".$getType);
        $this->db->from('view_getbalance b');
        $this->db->where("ABS(b.SumDebitAmt - b.SumCreditAmt) > 0");
        $this->db->where("CONCAT(MHOLID,Property_IDLink) NOT IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblmemberledger WHERE xMonth = '".$month."' AND xYear = '".$year."' AND CreditAmt > 0)");
        $this->db->where("CONCAT(b.xYear,b.xMonth) <= ".$monthyear."");
        $this->db->order_by("b.LastName", "asc");
        $this->db->order_by("b.FirstName", "asc");
        $this->db->order_by("b.Property_IDLink", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_individual($month, $year, $id)
    {
        $monthyear = $year . $month;
        $getAnnual = "(SELECT sum(a.TotalBalance) as AnnualBalance FROM view_getannualledger a WHERE a.MHOLID = b.MHOLID AND a.Property_IDLink = b.Property_IDLink) as AnnualBalance";
        $getContract = "(SELECT Contract_num FROM tblproperty c WHERE c.propID = b.Property_IDLink AND c.memberID = b.MHOLID) as Contract_no";
        $getRenter = "(SELECT CONCAT(e.LastName,', ',e.FirstName,' ',e.MiddleName,' ',e.ExtName) FROM tblproperty d, tblrenter e WHERE d.propID = b.Property_IDLink AND d.memberID = b.MHOLID AND d.Renter_IDLink = e.RLID AND Status = 'RENTED') as Renter";
        $getType = "(SELECT Category FROM tblproperty f WHERE f.propID = b.Property_IDLink AND f.memberID = b.MHOLID) as Type";
        $this->db->select("b.*, (b.SumDebitAmt - b.SumCreditAmt) as Balance, ".$getAnnual.", ".$getContract.", ".$getRenter.", ".$getType);
        $this->db->from('view_getbalance b');
        $this->db->where("ABS(b.SumDebitAmt - b.SumCreditAmt) > 0");
        // $this->db->where("MHOLID", $id);
        $this->db->where("CONCAT(MHOLID,Property_IDLink) NOT IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblmemberledger WHERE xMonth = '".$month."' AND xYear = '".$year."' AND CreditAmt > 0)");
        $this->db->where("CONCAT(b.xYear,b.xMonth) <= ".$monthyear."");
        $this->db->order_by("b.LastName", "asc");
        $this->db->order_by("b.FirstName", "asc");
        $this->db->order_by("b.Property_IDLink", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_individual_all($id)
    {
        $getAnnual = "(SELECT sum(a.TotalBalance) as AnnualBalance FROM view_getannualledger a WHERE a.MHOLID = b.MHOLID AND a.Property_IDLink = b.Property_IDLink) as AnnualBalance";
        $getContract = "(SELECT Contract_num FROM tblproperty c WHERE c.propID = b.Property_IDLink AND c.memberID = b.MHOLID) as Contract_no";
        $getRenter = "(SELECT CONCAT(e.LastName,', ',e.FirstName,' ',e.MiddleName,' ',e.ExtName) FROM tblproperty d, tblrenter e WHERE d.propID = b.Property_IDLink AND d.memberID = b.MHOLID AND d.Renter_IDLink = e.RLID AND Status = 'RENTED') as Renter";
        $getType = "(SELECT Category FROM tblproperty f WHERE f.propID = b.Property_IDLink AND f.memberID = b.MHOLID) as Type";
        $this->db->select("b.*, (b.SumDebitAmt - b.SumCreditAmt) as Balance, ".$getAnnual.", ".$getContract.", ".$getRenter.", ".$getType);
        $this->db->from('view_getbalance b');
        $this->db->where("ABS(b.SumDebitAmt - b.SumCreditAmt) > 0");
        $this->db->where("MHOLID", $id);
        // $this->db->where("CONCAT(MHOLID,Property_IDLink) NOT IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblmemberledger WHERE xMonth = '".$month."' AND xYear = '".$year."' AND CreditAmt > 0)");
        // $this->db->where("CONCAT(b.xYear,b.xMonth) <= CONCAT(".$year.",".$month.")");
        $this->db->order_by("b.LastName", "asc");
        $this->db->order_by("b.FirstName", "asc");
        $this->db->order_by("b.MHOLID", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_receivable($month, $year)
    {
        $getRenter = "(SELECT CONCAT(e.LastName,', ',e.FirstName,' ',e.MiddleName,' ',e.ExtName) FROM tblproperty d, tblrenter e WHERE d.propID = b.Property_IDLink AND d.memberID = b.MHOLID AND d.Renter_IDLink = e.RLID AND d.Status = 'RENTED') as Renter";
        $getAnnual = "(SELECT sum(a.TotalBalance) as AnnualBalance FROM view_getannualledger a WHERE a.MHOLID = b.MHOLID AND a.Property_IDLink = b.Property_IDLink) as AnnualBalance";
        $getContract = "(SELECT Contract_num FROM tblproperty c WHERE c.propID = b.Property_IDLink AND c.memberID = b.MHOLID) as Contract_no";
        $getType = "(SELECT Category FROM tblproperty f WHERE f.propID = b.Property_IDLink AND f.memberID = b.MHOLID) as Type";
        $this->db->select("b.*, (b.SumDebitAmt - b.SumCreditAmt) as Balance, ".$getAnnual.", ".$getContract.", ".$getRenter.", ".$getType);
        $this->db->from('view_getbalance b');
        $this->db->where("ABS(b.SumDebitAmt - b.SumCreditAmt) > 0");
        // $this->db->where("CONCAT(MHOLID,Property_IDLink) NOT IN (SELECT CONCAT(MemberID_Link,Property_IDLink) FROM tblmemberledger WHERE xMonth = '".$month."' AND xYear = '".$year."' AND CreditAmt > 0)");
        $this->db->where("b.xMonth", $month);
        $this->db->where("b.xYear", $year);
        $this->db->order_by("b.LastName", "asc");
        $this->db->order_by("b.FirstName", "asc");
        $this->db->order_by("b.MHOLID", "asc");
        $query = $this->db->get();
        return $query->result() ? $query->result() : false;
    }

    public function get_duedate(){
        $this->db->select("*");
        $this->db->from("tblDueDate");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                return $record->day;
            }
        }
        return false;
    }
}