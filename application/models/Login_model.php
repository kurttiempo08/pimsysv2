<?php

Class Login_Model extends CI_Model {

    // Insert registration data in database
    public function login_auth($data) {
        $condition = "Username =" . "'" . $data['username'] . "'";
        $this->db->select('*');
        $this->db->from('tbllogin');
        $this->db->where($condition);
        $query = $this->db->get();

        if ($query->num_rows() == 0) {
            return array('username' => false, 'password' => true, 'result' => []);
        }else{
            $this->db->select('*');
            $this->db->from('tbllogin');
            $this->db->where("Password = '" . $data['password']. "' AND Username ='" . $data['username'] . "'");
            // $this->db->where("Password = '" . $data['password']. "' AND Username ='" . $data['username'] . "'");
            $query = $this->db->get();
            if ($query->num_rows() == 0) {
                return array('password' => false, 'username' => true, 'result' => []);
            }else{
                return array('password' => true, 'username' => true, 'result' => $query->result());
            }
        }
    }

    public function get_formlist($id){
        $condition = "userID = " . $id;
        $this->db->select('*');
        $this->db->from('tbluseraccessrights');
        $this->db->where($condition);
        $query = $this->db->get();
        $record_holder = array();
        if($query->result()){
            foreach($query->result() as $item){
                array_push($record_holder, $item->formID);
            } 
            return $record_holder;
        }else{
            return false;
        }
        
    }
    public function get_menu_not_allowed(){
        $sess = $this->session->userdata('logged_in');
        $menu = "SELECT AccessRghtsFormID FROM tbluseraccessrights b WHERE AccessRghtsUserID = " . $sess['id'];
        $query = $this->db->select("*")->from('tblformlist a')->where("a.FormID NOT IN(". $menu .")")->get();
        return $query->result() ? $query->result() : "";
    }
    public function restriction_auth($data){
        $condition1 = "username = '" . $data['username'] . "'";
        $condition2 = "password = '" . $data['password'] . "'";
        $this->db->select('*');
        $this->db->from('tblLogin');
        $this->db->where($condition1);
        $this->db->where($condition2);
        $query = $this->db->get();
        if($query->result()){
            return true;
        }else{
            return false;
        }
    }

    public function get_menu_allowed(){
        $sess = $this->session->userdata('logged_in');
        $query = $this->db
        ->select('b.*')
        ->from('tbluseraccessrights a, tblformlist b')
        ->where('a.AccessRghtsUserID', $sess['id'])
        ->where('a.AccessRghtsFormID = b.FormID')
        ->get();
        return $query->result() ? $query->result() : false;
    }

    public function update_user($data, $password) {
        $sess = $this->session->userdata('logged_in');
        $username = $this->db
        ->select('Username')
        ->from('tbllogin')
        ->where('Username', $data['Username'])
        ->where("LoginID <> '". $sess['id']. "'")
        ->get();
        if($username->result()){
            return array('username' => true, 'password' => false);
        }
        $this->db->select('Password');
        $this->db->from('tbllogin');
        $this->db->where('LoginID', $sess['id']);
        $query = $this->db->get();
        if ($query->result()) {
            $password = true;
            foreach($query->result() as $record){
                if($record->Password != $password){
                    $password = false;
                }
            }
            if(!$password){
                return array('password' => true, 'username' => false);
            }
            $this->db->where('LoginID', $sess['id']);
            $this->db->update('tbllogin', $data);
            return true;
        }else {
            return false;
        }
    }

    public function update_password($data, $old){
        $sess = $this->session->userdata('logged_in');
        $this->db->select('*');
        $this->db->from('tbllogin');
        $this->db->where('LoginID', $sess['id']);
        $query = $this->db->get();
        if ($query->result()) {
            $password = true;
            foreach($query->result() as $record){
                if($record->Password != $old){
                    $password = false;
                }
            }
            if(!$password){
                return array('password' => true);
            }
            $this->db->where('LoginID', $sess['id']);
            $this->db->update('tbllogin', $data);
            return true;
        }else {
            return false;
        }
    }

    public function save_profile($data, $password){
        $sess = $this->session->userdata('logged_in');
        $this->db->select('*');
        $this->db->from('tbllogin');
        $this->db->where('LoginID', $sess['id']);
        $query = $this->db->get();
        if ($query->result()) {
            $password = true;
            foreach($query->result() as $record){
                if($record->Password != $password){
                    $password = false;
                }
            }
            if(!$password){
                return array('password' => true);
            }
            $this->db->where('LoginID', $sess['id']);
            $this->db->update('tbllogin', $data);
            return true;
        }else {
            return false;
        }
    }
}