<?php

class Cash_Disposition_Model extends CI_Model
{

    public function save_data($data)
    {
        $this->db->select("*");
        $this->db->from("tblcashflowgroup");
        $this->db->where("CFGID", $data['CFGID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('CFGID', $data['CFGID']);
            $this->db->update('tblcashflowgroup', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tblcashflowgroup', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    
    public function get_daily($id, $date){
        $query = $this->db
        ->select('b.*, c.ChAcctGroupCodeName, a.ORNo, a.TDate, a.LN, a.FN, a.MN, a.EXN')
        ->from('tbltransactionhdr a, tbltransactiondtl b, tblautodebit c')
        ->where('a.THDRID = b.THDR_IDLink')
        ->where('c.ADID = b.AcctCodeLink')
        ->where('a.CashierUserIDlink', $id)
        ->where('a.TDate', $date)
        ->where('a.Status', 'TENDERED')
        ->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_payment($id, $date){
        $query = $this->db
        ->select('b.*')
        ->from('tbltransactionhdr a, tbltransactionpaymentdtl b')
        ->where('a.THDRID = b.THDRID_Link')
        ->where('a.CashierUserIDlink', $id)
        ->where('a.TDate', $date)
        ->where('a.Status', 'TENDERED')
        ->get();
        return $query->result() ?  $query->result() : false;
    }
    
    public function get_date_range($data){
        $report = array();
        foreach($data as $record){
            $query = $this->db
            ->select('b.*, c.ChAcctGroupCodeName')
            ->from('tbltransactionhdr a, tbltransactiondtl b, tblautodebit c')
            ->where('a.THDRID = b.THDR_IDLink')
            ->where('c.ADID = b.AcctCodeLink')
            ->where('a.CashierUserIDlink', $record['id'])
            ->where('a.TDate', $record['Date'])
            ->where('a.Status', 'TENDERED')
            ->get();
            if($query->result()){
                $details = array();
                $rec = array(
                    'Date' => $record['Date'],
                    'details' => $query->result(),
                    'loop' => true
                );
                array_push($report, $rec);
            }else{
                $rec = [
                    'Date' => $record['Date'],
                    'MD' => '-',
                    'MF' => '-',
                    'OI' => '-',
                    'TotalOR' => '-',
                    'CB' => '-',
                    'GrandTotal' => '-',
                    'loop' => false
                ];
                array_push($report, $rec);
            }
        }
        return $report;
    }

    public function delete_data($id){
        $this->db->select("*");
        $this->db->from("tblcashflowgroup");
        $this->db->where("CFGID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("CFGID", $id);
            $this->db->delete("tblcashflowgroup");
            return true;
        }else{
            return false;
        }
    }
}
