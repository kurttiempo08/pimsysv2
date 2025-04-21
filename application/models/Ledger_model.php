<?php

class Ledger_Model extends CI_Model
{
    public function get_data($data,$id, $id2){
        if($data == 'monthly'){
            $this->db->select("m.FirstName, m.LastName, l.TransDate, l.Particulars, l.DebitAmt, l.CreditAmt, l.Remarks, p.BlockNo, p.LotNo, p.PhaseCluster");
            $this->db->from("tblmemberhomeowner m, tblmemberledger l, tblproperty p");
            $this->db->where("m.MHOLID = l.MemberID_Link");
            $this->db->where("p.memberID = l.MemberID_Link");
            $this->db->where("p.propID = l.Property_IDLink");
            $this->db->where("m.MHOLID", $id);
            $this->db->where("p.propID", $id2);
            $this->db->order_by("l.LID", "asc");
            $query = $this->db->get();
        }elseif($data == 'annual'){
            $this->db->select("m.FirstName, m.LastName, l.TransDate, l.Particulars, l.DebitAmt, l.CreditAmt, l.Remarks, p.BlockNo, p.LotNo, p.PhaseCluster");
            $this->db->from("tblmemberhomeowner m, tblannualledger l, tblproperty p");
            $this->db->where("m.MHOLID = l.MemberID_Link");
            $this->db->where("p.memberID = l.MemberID_Link");
            $this->db->where("p.propID = l.Property_IDLink");
            $this->db->where("p.memberID", $id);
            $this->db->where("p.propID", $id2);
            $this->db->order_by("l.LID", "asc");
            $query = $this->db->get();
        }elseif($data == 'construction'){
            
        }
        
        return $query->result() ? $query->result() : false;
    }

}
