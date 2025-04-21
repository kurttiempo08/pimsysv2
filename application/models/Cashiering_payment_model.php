<?php

class Cashiering_Payment_Model extends CI_Model
{

    public function save_header($data)
    {
        $this->db->select("THDRID");
        $this->db->from("tbltransactionhdr");
        $this->db->where("THDRID", $data['THDRID']);
        $query = $this->db->get();
        if($query->result()){
            if($data['Type'] == 'Acknowledgement Receipt' && $data['AcknowledgementFormNo'] == ''){
                $id = $data['THDRID'];
                $pad = str_pad($id, 4, "0", STR_PAD_LEFT);
                $date = date_create($data['TDate']);
                $data['AcknowledgementFormNo'] = date_format($date,"Y-m-d").'-'.$pad;
            }
            $this->db->where('THDRID', $data['THDRID']);
            $this->db->update('tbltransactionhdr', $data);
            if ($this->db->affected_rows()) {
                return array('series' => $data['AcknowledgementFormNo'], 'id'=> false);
            } else {
                return false;
            }
        }else{
            $this->db->insert('tbltransactionhdr', $data);
            if ($this->db->affected_rows()) {
                $id = $this->db->insert_id();
                $pad = str_pad($id, 4, "0", STR_PAD_LEFT);
                $date = date_create($data['TDate']);
                $series = date_format($date,"Y-m-d").'-'.$pad;
                $this->db->where('THDRID', $id);
                $this->db->update('tbltransactionhdr', array('AcknowledgementFormNo' => $series));
                return array('id' => $id, 'series' => $series);
            } else {
                return false;
            }
        }
        
    }

    public function save_detail($data)
    {
        $this->db->select("*");
        $this->db->from("tbltransactiondtl");
        $this->db->where("TDTLID", $data['TDTLID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('TDTLID', $data['TDTLID']);
            $this->db->update('tbltransactiondtl', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $this->db->insert('tbltransactiondtl', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
        
    }

    public function save_payment($data)
    {
        $this->db->select("*");
        $this->db->from("tbltransactionpaymentdtl");
        $this->db->where("TPDID", $data['TPDID']);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where('TPDID', $data['TPDID']);
            $this->db->update('tbltransactionpaymentdtl', $data);
            if ($this->db->affected_rows()) {
                return true;
            } else {
                return false;
            }
        }else{
            $data['Status'] = 'ACTIVE';
            $this->db->insert('tbltransactionpaymentdtl', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id());
            } else {
                return false;
            }
        }
    }

    public function save_monthly_due($data){
        $this->db->select("*");
        $this->db->from("tblduedate");
        $this->db->where("Type","Monthly");
        $query = $this->db->get();
        if($query->result()){
            foreach($query->result() as $record){
                $data['duedate'] = $data['xYear'] . "-" . $data['xMonth'] . "-" . $record->day;
            }
        }
        $this->db->select("*");
        $this->db->from("tblmemberledger");
        $this->db->where("xMonth", $data['xMonth']);
        $this->db->where("xYear", $data['xYear']);
        $this->db->where("MemberID_Link", $data['MemberID_Link']);
        $query = $this->db->get();
        if($query->result()){
            return array('exist' => true, 'id'=> false);
        }else{
            $this->db->insert('tblmemberledger', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id(), 'exist' => false);
            } else {
                return false;
            }
        }
    }
    
    public function append_monthly_dues_to_transaction($rows, $id){
        foreach ($rows as $values){
            $data = array(
                'THDR_IDLink' => $id,
                'AcctCodeLink' => $values['AcctCodeLink'],
                'AcctDetails' => $values['AcctDetails'],
                'AcctSubGroup' => $values['AcctSubGroup'],
                'AcctGroupCode' => $values['AcctGroupCode'],
                'Particulars' => $values['Particulars'],
                'AmountDue' => $values['DebitAmt'],
                'Gross' => $values['DebitAmt'],
                'Month' => $values['xMonth'],
                'Year' => $values['xYear'],
                'Remarks' => 'MONTHLY DUE FOR '.$values['Particulars'],
            );
            $this->db->insert('tbltransactiondtl', $data);
        }
        return true;
    }

    public function save_membership_fee($data){
        $this->db->select("*");
        $this->db->from("tblannualledger");
        $this->db->where("xYear", $data['xYear']);
        $this->db->where("MemberID_Link", $data['MemberID_Link']);
        $query = $this->db->get();
        if($query->result()){
            return array('exist' => true, 'id'=> false);
        }else{
            $this->db->insert('tblannualledger', $data);
            if ($this->db->affected_rows()) {
                return array('id' => $this->db->insert_id(), 'exist' => false);
            } else {
                return false;
            }
        }
    }

    public function append_membership_fee_to_transaction($rows, $id){
        foreach ($rows as $values){
            $data = array(
                'THDR_IDLink' => $id,
                'AcctCodeLink' => $values['AcctCodeLink'],
                'AcctDetails' => $values['AcctDetails'],
                'AcctSubGroup' => $values['AcctSubGroup'],
                'AcctGroupCode' => $values['AcctGroupCode'],
                'Particulars' => $values['Particulars'],
                'AmountDue' => $values['DebitAmt'],
                'Gross' => $values['DebitAmt'],
                'Year' => $values['xYear'],
                'Remarks' => 'ANNUAL MEMBERSHIP FOR '.$values['xYear'],
            );
            $this->db->insert('tbltransactiondtl', $data);
        }
        return true;
    }

    public function tender_payment($id, $debt, $cash, $type){
        $sess = $this->session->userdata('logged_in');
        $payment_cash = 0;
        $payments = $this->db->select('SUM(AmountTender) AS Amount')->from('tbltransactionpaymentdtl')->where('THDRID_Link', $id)->where('Status', 'ACTIVE')->group_by('THDRID_Link')->get();
        if($payments->result()){
            foreach($payments->result() as $record){
                $payment_cash = $record->Amount;
            }
        }
        $adb = "SELECT ChAcctGroupCodeName FROM tblautodebit c WHERE c.ADID = a.AcctCodeLink";
        $details = $this->db
        ->select('a.*, b.MemberID_link, b.TDate, b.ORNo, b.AcknowledgementFormNo, ('.$adb.') AS ChartAcct, b.Property_IDLink')
        ->from('tbltransactiondtl a, tbltransactionhdr b')
        ->where('b.THDRID = a.THDR_IDLink')
        ->where('THDR_IDLink', $id)
        ->get();
        if($details->result()){
            foreach($details->result() as $record){
                if($payment_cash > 0){
                    if($payment_cash >= $record->AmountDue){
                        $this->db->where('TDTLID', $record->TDTLID)->update('tbltransactiondtl', array('AmtPaid' => $record->AmountDue));
                        if(strpos($record->ChartAcct, 'MONTHLY DUES')){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->ORNo,
                                'Particulars' => $record->Particulars,
                                'xMonth' => $record->Month,
                                'xYear' => $record->Year,
                                'CreditAmt' => $record->AmountDue,
                                'Remarks' => 'Payment for the month of '.$record->Particulars. ' from Cashier',
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblmemberledger', $data_array);
                        }
                        if(strpos($record->ChartAcct, 'ANNUAL MEMBERSHIP')){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->ORNo,
                                'Particulars' => $record->Particulars,
                                'xYear' => $record->Year,
                                'CreditAmt' => $record->AmountDue,
                                'Remarks' => 'Payment for the year of '.$record->Year. ' from Cashier',
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblannualledger', $data_array);
                        }
                        if($type == "Acknowledgement Receipt"){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->AcknowledgementFormNo,
                                'Particulars' => $record->Particulars,
                                'xYear' => $record->Year,
                                'DebitAmt' => $record->AmountDue,
                                'Remarks' => $record->Particulars,
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblconstructionbond_ledger', $data_array);
                        }
                        $payment_cash = $payment_cash - $record->AmountDue;
                    }else{
                        $this->db->where('TDTLID', $record->TDTLID)->update('tbltransactiondtl', array('AmtPaid' => $payment_cash));
                        if(strpos($record->ChartAcct, 'MONTHLY DUES')){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->ORNo,
                                'Particulars' => $record->Particulars,
                                'xMonth' => $record->Month,
                                'xYear' => $record->Year,
                                'CreditAmt' => $payment_cash,
                                'Remarks' => 'Payment for the month of '.$record->Particulars. ' from Cashier',
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblmemberledger', $data_array);
                        }
                        if(strpos($record->ChartAcct, 'ANNUAL MEMBERSHIP')){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->ORNo,
                                'Particulars' => $record->Particulars,
                                'xYear' => $record->Year,
                                'CreditAmt' => $payment_cash,
                                'Remarks' => 'Payment for the year of '.$record->Year. ' from Cashier',
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblannualledger', $data_array);
                        }
                        if($type == "Acknowledgement Receipt"){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->AcknowledgementFormNo,
                                'Particulars' => $record->Particulars,
                                'xYear' => $record->Year,
                                'DebitAmt' => $payment_cash,
                                'Remarks' => $record->Particulars,
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblconstructionbond_ledger', $data_array);
                        }
                        $payment = 0;
                    }
                }else{
                    break;
                }
            }
            if($type == 'Official Receipt'){
                $series = 1;
                $series_query = $this->db->select('*')->from('tblorsetup')->limit(1)->get();
                if($series_query->result()){
                    foreach($series_query->result() as $record){
                        $series = (int) $record->OrNo + 1;
                        $this->db->where('setupID', $record->setupID)->update('tblorsetup', array('OrNo' => $series));
                    }
                }
            }
            if($cash > $debt){
                $change = (float) $cash - (float) $debt;
                $tenderCashAmt = $this->db
                ->select('TPDID, AmountTender')
                ->from('tbltransactionpaymentdtl')
                ->where('THDRID_Link', $id)
                ->where('Status', 'ACTIVE')
                ->where('Mode', 'CASH')->limit(1)->get();
                if($tenderCashAmt->result()){
                    foreach($tenderCashAmt->result() as $record){
                        $net = $record->AmountTender - $change;
                        $this->db->where('TPDID', $record->TPDID)
                        ->update('tbltransactionpaymentdtl', array('ChangeAmt'=> $change, 'NetAmt' => $net));
                    }
                }
            }
            $this->db
            ->where('THDRID', $id)
            ->update('tbltransactionhdr', array('TotalAmountPayable' => $debt, 'TotalAmountActualPaid' => $cash, 'Status' => 'TENDERED'));
            if($this->db->affected_rows()){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }

    public function tender_special_payment($id, $debt, $cash, $type){
        $sess = $this->session->userdata('logged_in');
        $payment_cash = 0;
        $payments = $this->db->select('SUM(AmountTender) AS Amount')->from('tbltransactionpaymentdtl')->where('THDRID_Link', $id)->where('Status', 'ACTIVE')->group_by('THDRID_Link')->get();
        if($payments->result()){
            foreach($payments->result() as $record){
                $payment_cash = $record->Amount;
            }
        }
        $adb = "SELECT ChAcctName FROM tblautodebit c WHERE c.ADID = a.AcctCodeLink";
        $details = $this->db
        ->select('a.*, b.MemberID_link, b.TDate, b.ORNo, ('.$adb.') AS ChartAcct, b.Property_IDLink')
        ->from('tbltransactiondtl a, tbltransactionhdr b')
        ->where('b.THDRID = a.THDR_IDLink')
        ->where('THDR_IDLink', $id)
        ->get();
        if($details->result()){
            foreach($details->result() as $record){
                $data_arr = array(
                    'MemberID_Link' => $record->MemberID_link,
                    'Property_IDLink' => $record->Property_IDLink,
                    'TransDate' => $record->TDate,
                    'ORRefNo' => $record->ORNo,
                    'Particulars' => $record->Particulars,
                    'xMonth' => $record->Month,
                    'xYear' => $record->Year,
                    'DebitAmt' => $record->Gross,
                    'Remarks' => 'Special Transaction for the month of '.$record->Particulars. ' from Cashier',
                    'TransHDR_IDLink' => $id,
                    'PostedBy' => $sess['username'],
                    'PostedID_Link' => $sess['id'],
                    'PostedDate' => date('Y-m-d'),
                    'PostedTime' => date('h:i:s'),
                );
                $this->db->insert('tblmemberledger', $data_arr);
                if($payment_cash > 0){
                    if($payment_cash >= $record->AmountDue){
                        $this->db->where('TDTLID', $record->TDTLID)->update('tbltransactiondtl', array('AmtPaid' => $record->AmountDue));
                        if(strpos($record->ChartAcct, 'MONTHLY DUES')){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->ORNo,
                                'Particulars' => $record->Particulars,
                                'xMonth' => $record->Month,
                                'xYear' => $record->Year,
                                'CreditAmt' => $record->Gross,
                                'Remarks' => 'Payment for the month of '.$record->Particulars. ' from Cashier',
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblmemberledger', $data_array);
                        }
                        $payment_cash = $payment_cash - $record->AmountDue;
                    }else{
                        $this->db->where('TDTLID', $record->TDTLID)->update('tbltransactiondtl', array('AmtPaid' => $payment_cash));
                        if(strpos($record->ChartAcct, 'MONTHLY DUES')){
                            $data_array = array(
                                'MemberID_Link' => $record->MemberID_link,
                                'Property_IDLink' => $record->Property_IDLink,
                                'TransDate' => $record->TDate,
                                'ORRefNo' => $record->ORNo,
                                'Particulars' => $record->Particulars,
                                'xMonth' => $record->Month,
                                'xYear' => $record->Year,
                                'CreditAmt' => $payment_cash,
                                'Remarks' => 'Payment for the month of '.$record->Particulars. ' from Cashier',
                                'TransHDR_IDLink' => $id,
                                'PostedBy' => $sess['username'],
                                'PostedID_Link' => $sess['id'],
                                'PostedDate' => date('Y-m-d'),
                                'PostedTime' => date('h:i:s'),
                            );
                            $this->db->insert('tblmemberledger', $data_array);
                        }
                        $payment = 0;
                    }
                }else{
                    break;
                }
            }
            if($type == 'Official Receipt'){
                $series = 1;
                $series_query = $this->db->select('*')->from('tblorsetup')->limit(1)->get();
                if($series_query->result()){
                    foreach($series_query->result() as $record){
                        $series = (int) $record->OrNo + 1;
                        $this->db->where('setupID', $record->setupID)->update('tblorsetup', array('OrNo' => $series));
                    }
                }
            }
            if($cash > $debt){
                $change = (float) $cash - (float) $debt;
                $tenderCashAmt = $this->db
                ->select('TPDID, AmountTender')
                ->from('tbltransactionpaymentdtl')
                ->where('THDRID_Link', $id)
                ->where('Status', 'ACTIVE')
                ->where('Mode', 'CASH')->limit(1)->get();
                if($tenderCashAmt->result()){
                    foreach($tenderCashAmt->result() as $record){
                        $net = $record->AmountTender - $change;
                        $this->db->where('TPDID', $record->TPDID)
                        ->update('tbltransactionpaymentdtl', array('ChangeAmt'=> $change, 'NetAmt' => $net));
                    }
                }
            }
            $this->db
            ->where('THDRID', $id)
            ->update('tbltransactionhdr', array('TotalAmountPayable' => $debt, 'TotalAmountActualPaid' => $cash, 'Status' => 'TENDERED'));
            if($this->db->affected_rows()){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }
    public function cancel_trans($id){
        $this->db->where('THDRID', $id)->update('tbltransactionhdr', array('Status' => 'CANCELLED'));
        return $this->db->affected_rows() ? true : false;
    }

    public function get_header(){
        $query = $this->db
        ->select('a.*, c.Category, c.LotAreaSqM')
        ->from('tbltransactionhdr a, tblmemberhomeowner b, tblproperty c')
        ->where('a.Property_IDLink = c.propID')
        ->where('c.memberID = b.MHOLID')
        ->limit('50')
        ->order_by('THDRID', 'desc')->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_details($id){
        $query = $this->db->select('*')->from('tbltransactiondtl')->where('THDR_IDLink', $id)->order_by('Month', 'asc')->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_payments($id){
        $query = $this->db->select('*')->from('tbltransactionpaymentdtl')->where('THDRID_Link', $id)->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_lot_rate(){
        $query = $this->db->select("*")->from("tbllotrate")->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_annual_rate(){
        $query = $this->db->select("*")->from("tblannualfee")->limit(1)->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_chart_of_accounts($name){
        $query = $this->db
        ->select("*")
        ->from("tblautodebit")
        ->like('ChAcctGroupCodeName', $name)
        ->limit(1)
        ->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_refundable_charts(){
        $query = $this->db
        ->select("*")
        ->from("tblautodebit")
        ->where('ChAcctCode BETWEEN 21700 AND 21800')
        ->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_other_income_charts(){
        $query = $this->db
        ->select("*")
        ->from("tblautodebit")
        ->where('ChAcctCode BETWEEN 51000 AND 51100')
        ->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_unpaid_monthly_dues($id){
        $query = $this->db
        ->select('*')
        ->from('view_getbalance')
        ->where('TotalBalance > 0')
        ->where('Property_IDLink', $id)
        ->order_by('xMonth', 'asc')
        ->order_by('xYear', 'asc')
        ->get();
        return $query->result() ?  $query->result() : false;
    }

    public function get_unpaid_membership_fees($id){
        $query = $this->db
        ->select('*')
        ->from('view_getannualledger')
        ->where('TotalBalance > 0')
        ->where('Property_IDLink', $id)
        ->order_by('xMonth', 'asc')
        ->order_by('xYear', 'asc')
        ->get();
        return $query->result() ?  $query->result() : false;
    }

    public function search_by_or($ORNo){
        $query = $this->db->select('*')->from('tbltransactionhdr')->where('ORNo', $ORNo)->get();
        return $query->result() ?  $query->result() : false;
    }

    public function search_by_date($from, $to){
        $query = $this->db->select('*')->from('tbltransactionhdr')->where("TDate BETWEEN '".$from."' AND '".$to."'")->get();
        return $query->result() ?  $query->result() : false;
    }
    public function delete_multiple_md($ids){
        $this->db->where_in("LID", $ids);
        $this->db->delete("tblmemberledger");
        if($this->db->affected_rows()){
            return true;
        }else{
            return false;
        }
    }
    public function delete_multiple_details($ids){
        $this->db->where_in("TDTLID", $ids);
        $this->db->delete("tbltransactiondtl");
        if($this->db->affected_rows()){
            return true;
        }else{
            return false;
        }
    }
    public function delete_all_details($id){
        $this->db->where("THDR_IDLink", $id);
        $this->db->delete("tbltransactiondtl");
        return true;
    }

    public function delete_payment($id){
        $this->db->select("*");
        $this->db->from("tbltransactionpaymentdtl");
        $this->db->where("TPDID", $id);
        $query = $this->db->get();
        if($query->result()){
            $this->db->where("TPDID", $id);
            $this->db->delete("tbltransactionpaymentdtl");
            return true;
        }else{
            return false;
        }
    }
}
