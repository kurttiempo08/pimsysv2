//main.js
angular.module('app')
    .controller('AuthenticationCtrl', AuthenticationCtrl)
    .controller('InventoryEntryCtrl', InventoryEntryCtrl)
    .controller('SearchPOCtrl', SearchPOCtrl)
    .controller('SearchItemCtrl',SearchItemCtrl)
    .controller('AddDeliveryCtrl', AddDeliveryCtrl)
    .controller('ExistingProperty', ExistingProperty)
    .controller('AddpaymentCtrl', AddpaymentCtrl)
    .controller('CancellationCtrl', CancellationCtrl)
    .controller('BydateCtrl', BydateCtrl)
	.controller('CreatePOCtrl', CreatePOCtrl);
    InventoryEntryCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector','$uibModal','$log'];
    SearchItemCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    AuthenticationCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    AddDeliveryCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    CreatePOCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    ExistingProperty.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    SearchPOCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    AddpaymentCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    BydateCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    CancellationCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function InventoryEntryCtrl($scope, $ocLazyLoad, $injector, data, $uibModal, $log) {    
    var vm = this;
    var filter = $injector.get("$filter");
	vm.ArrayList = [];
    vm.variables = {};
    vm.variablesdtl = {};
    vm.filtered = [];
    vm.search;
    vm.variables.amount_orsburs = 0;
    vm.variables.amount_orsburs = filter('number')(0, 2);
    vm.variablesdtl.unit_cost = 0;
    vm.variablesdtl.unit_cost = filter('number')(0, 2);
    vm.totalcost = 0;
    vm.totalcost = filter('number')(0, 2);
    vm.grandTotal = 0;
    vm.grandTotal = filter('number')(0, 2);
    vm.variablesdtl.amount = 0;
    vm.variablesdtl.amount = filter('number')(0,2);
    vm.variablesdtl.quantity = 0;
    vm.variablesdtl.quantity = filter('number')(0);
    vm.amount = 0;
    vm.amount = filter('number')(0,2);
    vm.variables.total_orsbur = 0;
    vm.variables.total_orsbur = filter('number')(0,2);
    vm.variables.total_expense = 0;
    vm.variables.total_expense = filter('number')(0,2);
    vm.remaining = 0;
    vm.remaining = filter('number')(0);
    vm.inventorytotalcost = 0;
    vm.inventorytotalcost = filter('number')(0,2);
    vm.inventorycount = 0;
    vm.inventorycount = filter('number')(0);
    vm.issuecount = 0;
    vm.issuecount = filter('number')(0);
    vm.unit_cost = 0;
    vm.unit_cost = filter('number')(0,2);
    vm.total = 0;
    vm.total = filter('number')(0);
    vm.postatus = false;
    vm.cancel_status = false;
    vm.date_now = filter('date')(new Date(), "MM/dd/yyyy");
    
    vm.variablesdtl.original_price = 0;
    vm.variablesdtl.original_price = filter('number')(0,2);
    // vm.variablesdtl.qty = filter('number')(0,2);
    // vm.variablesdtl.del1st = "0";
    // vm.variablesdtl.del2nd = "0";
    vm.total = "0";
    vm.disabled = true;
    vm.exist = false;
    vm.existing = false;
    vm.viewer = false;
    // vm.value = 109.898;

	$ocLazyLoad
        .load([TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               TRANSURL + 'slc_entry/service.js?v=' + VERSION,
               MASTERURL + 'office_code/service.js?v=' + VERSION,
               APPURL + 'app.service.js?v=' + VERSION]).then(function (d) {
            AppSvc = $injector.get('AppSvc');
            SlcSvc = $injector.get("SlcSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            SlcGenerationSvc = $injector.get("SlcGenerationSvc");
            SeriesSvc = $injector.get("SeriesSvc");
            CheckpropSvc = $injector.get("CheckpropSvc");
            LogsSvc = $injector.get("LogsSvc");
            ReactSvc = $injector.get("ReactSvc");
            SlcGenerationOfficeSvc = $injector.get("SlcGenerationOfficeSvc");
            GetCenterDataSvc = $injector.get("GetCenterDataSvc");
            GetCenterInfo = $injector.get("GetCenterInfo");
            SearchPoHdrSvc = $injector.get("SearchPoHdrSvc");
            // vm.getUnitList();
            // vm.clicked(vm.value);
            vm.getUserCredentials();
        });

        vm.refresher = function () {
            vm.getDetails(vm.variables.po_id);
        }

        vm.openPO = function (id){
            LOADING.classList.add("open");
            SearchPoHdrSvc.get({id:id}).then(function (response) {
                if(response.message){
                    // vm.center_fname = "";
                }
                else{
                    // vm.center_fname = response[0].center_fname;
                    vm.variables.total_orsbur = filter('number')(response[0].amount_orsburs,2);
                    vm.variables.center_idlink = response[0].center_idlink;
                    vm.variables.fund_code = response[0].fund_code;
                    vm.variables.fund_idlink = response[0].fund_idlink;
                    vm.variables.orsburs_no = response[0].orsburs_no;
                    vm.variables.po_date = getDate(response[0].po_date);
                    vm.variables.po_id = response[0].po_id;
                    vm.variables.po_num = response[0].po_num;
                    vm.variables.status = response[0].status;
                    vm.variables.subadmin_access = response[0].subadmin_access;
                    vm.variables.sup_address = response[0].sup_address;
                    vm.variables.sup_tin = response[0].sup_tin;
                    vm.variables.supplier = response[0].supplier;
                    vm.variables.supplier_idlink = response[0].supplier_idlink;
                    vm.variables.uacs_code = response[0].uacs_code;
                    vm.variables.center_name = response[0].center_name;
                }
                vm.getDetails(vm.variables.po_id);
                console.log(response);
                // console.log("here");
                // vm.getCenterInfo(vm.variables.center_idlink);






                LOADING.classList.remove("open");
            })
        }

        vm.getCenterInfo = function (id) {
            LOADING.classList.add("open");
            GetCenterInfo.get({id:id}).then(function (response) {
                // if (response.message) {
                //     vm.LockList = [];
                // } else {
                //     vm.LockList = response;
                // }
                // vm.filtered = vm.LockList;
                if(response.message){
                    vm.center_fname = "";
                }
                else{
                    vm.center_fname = response[0].center_fname;
                }
                LOADING.classList.remove("open");
            })
        }

        vm.getUserCredentials = function () {
            LOADING.classList.add("open");
            AppSvc.get().then(function (response) {
                if (response) {
                    // vm.userName = response.record.user;
                    // vm.level = response.record.level;
                    // vm.pic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
                    vm.userName = response.record.user;
                    vm.level = response.record.level;
                    vm.pic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
                    vm.variables.center_name = response.record.center_name;
                    vm.variables.center_idlink = response.record.center_idlink;
                    // vm.getMenus();
                    if(vm.level === "VIEWER"){
                        vm.viewer = true;
                    }
                    else{
                        vm.viewer = false;
                    }
                } else {
                    // vm.logout();
                }
            })
            LOADING.classList.remove("open");
        };

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }

        vm.openSearchItem = function (data) {
            var options = {
                data: '',
                animation: true,
                templateUrl: TRANSURL + "inventory_entry/search_item.html?v=" + VERSION,
                controllerName: "SearchItemCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    TRANSURL + "inventory_entry/search_item.html?v=" + VERSION,
                    TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                //    console.log(data);
                   vm.variablesdtl = angular.copy(data);
                   vm.openPO(vm.variablesdtl.pohdr_link)
                }
            });
        }
        
        // vm.openAssignTo = function (data) {
        //     var options = {
        //         data: '',
        //         animation: true,
        //         templateUrl: MASTERURL + "center_list/search_item.html?v=" + VERSION,
        //         controllerName: "BrowseCenterCtrl",
        //         viewSize: "lg",
        //         windowClass: 'modal modal-slide-in-full',
        //         filesToLoad: [
        //             MASTERURL + "center_list/search_item.html?v=" + VERSION,
        //             MASTERURL + "center_list/controller.js?v=" + VERSION
        //         ]
        //     };
        //     AppSvc.modal(options).then(function (data) {
        //         if(data){
        //            console.log(data);
        //         //    vm.variablesdtl.assign = data
        //         }
        //     });
        // } 

        vm.openDivision = function (data) {
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                    controllerName: "BrowseCenterCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        MASTERURL + "center_list/search.html?v=" + VERSION,
                        MASTERURL + "center_list/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variablesdtl.assigned_to = data.center_name;
                        // vm.variables.center_idlink = data.center_id;
                        // vm.variables.center_fname = data.center_fname;
                    }
                });
            } 


        vm.openSignatory = function (data) {
            if(data == 1){
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: ADMINURL + "signatory_list/search.html?v=" + VERSION,
                    controllerName: "BrowseSignatoryCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        ADMINURL + "signatory_list/search.html?v=" + VERSION,
                        ADMINURL + "signatory_list/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variables.preparedby = data.Signature;
                        vm.variables.desig1 = data.Designation;
                    }
                });
            }
            else{
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: ADMINURL + "signatory_list/search.html?v=" + VERSION,
                    controllerName: "BrowseSignatoryCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        ADMINURL + "signatory_list/search.html?v=" + VERSION,
                        ADMINURL + "signatory_list/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variables.approvedby = data.Signature;
                        vm.variables.desig2 = data.Designation;
                    }
                });
            }
        } 

        vm.openStockCard = function () {
            if(!vm.variables.po_id){
                AppSvc.showSwal("Ooops","Please choose a PO first to proceed.","warning");
            }
            else if(!vm.variablesdtl.podtl_id){
                AppSvc.showSwal("Ooops","Please choose a Property first to proceed.","warning");
            }
            else{
                var options = {
                    data: {dtl:vm.variablesdtl, hdr:vm.variables},
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/date.html?v=" + VERSION,
                    controllerName: "BydateCtrl",
                    viewSize: "sm",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/date.html?v=" + VERSION,
                        TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variablesdtl.office_idlink = data.office_id;
                        // vm.variablesdtl.office = data.office;
                        // vm.variablesdtl.office_code = data.office_code;
                        // vm.variablesdtl.uacs_code = data.office_UACS;
                        // vm.variablesdtl.formula = data.formula;
                        // vm.exist = false;
                        // vm.existing = false;
                    }
                });
            }
        }



        vm.filterdecimal = function(data) {
            var num = data
            var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
            // rounded.value = with2Decimals;
          };

          vm.reactivation = function () {
            if(vm.variables.cancellation_status === "REACTIVATED"){
                ReactSvc.showSwal('Ooops', "This PO is already reactivated");
            }
            else{
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                    controllerName: "AuthenticationCtrl",
                    viewSize: "sm",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                        TRANSURL  + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                        if(data){
                            // vm.variables.po_id = vm.variables.pohdr_idlink;
                            vm.variables.cancellation_status = "REACTIVATED";
                            vm.variables.activity = "PO REACTIVATION";
                            vm.variables.deleted_by = data.FullName;
                            vm.variables.delete_id = data.LoginID;
                            vm.variables.username = data.Username;
                            vm.variables.reason = data.reason;
                            LOADING.classList.add("open");
                            CancelSvc.save(vm.variables).then(function (response) {
                                if (response.success) {
                                    LogsSvc.save(vm.variables).then(function (response) {
                                        if (response.success) {
                                            if (response.id) {
                                                vm.variables.activity_id = response.id;
                                            }
                                        } 
                                    })
                                    if (response.id) {
                                        vm.variables.po_id = response.id;
                                        ReactSvc.showSwal('Success', response.message, 'success');
                                        }
                                        else {
                                            ReactSvc.showSwal('Success', response.message, 'success');
                                        }
                                        vm.clearFunction();
                                            // $uibModalInstance.close(modal.variables);                    
                                } else {
                                            ReactSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                        }
                                        LOADING.classList.remove("open");
                                    })
                                }
                        });
                    }
                }

         vm.generateSlcCoa = function(){
            if(!vm.variablesdtl.podtl_id){
                InvEntrySvc.showSwal('Warning', "Please choose Property to generate.", 'warning');
            }
            else if(!vm.variables.preparedby){
                InvEntrySvc.showSwal('Warning', "Please choose prepared by to proceed.", 'warning');
            }
            else if(!vm.variables.approvedby){
                InvEntrySvc.showSwal('Warning', "Please choose certified by to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                SlcGenerationSvc.save({
                id: vm.variablesdtl.podtl_id,pro: vm.variablesdtl.property_no
                }).then(function (response) {
                    window.open(
                      "report/supplies_ledger/coa_slc?id=" + vm.variablesdtl.podtl_id + "&fund_name=" + vm.variables.fund_name +
                      "&item_name=" + vm.variablesdtl.item_name + "&description=" + vm.variablesdtl.description +
                      "&unit=" + vm.variablesdtl.unit + "&property_no=" + vm.variablesdtl.property_no + 
                      "&podtl_idlink=" + vm.variablesdtl.podtl_id + "&account=" + vm.variablesdtl.office + "&formula=" + vm.variablesdtl.formula + "&additional_desc=" + vm.variablesdtl.additional_desc +
                      "&preparedby=" + vm.variables.preparedby + "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby + "&desig2=" + vm.variables.desig2 +
                      "&date_now=" + vm.date_now + "&level=" + vm.level + "&stock_no=" + vm.variablesdtl.stock_no + "&brand=" + vm.variablesdtl.brand
                    );
                LOADING.classList.remove("open");
              }); 
            }
          }
        

        vm.generateSlc = function(){
            if(!vm.variablesdtl.podtl_id){
                InvEntrySvc.showSwal('Warning', "Please choose Property to generate.", 'warning');
            }
            else if(!vm.variables.preparedby){
                InvEntrySvc.showSwal('Warning', "Please choose prepared by to proceed.", 'warning');
            }
            else if(!vm.variables.approvedby){
                InvEntrySvc.showSwal('Warning', "Please choose certified by to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                SlcGenerationSvc.save({
                id: vm.variablesdtl.podtl_id,pro: vm.variablesdtl.property_no
                }).then(function (response) {
                    window.open(
                      "report/supplies_ledger?id=" + vm.variablesdtl.podtl_id + "&fund_name=" + vm.variables.fund_name +
                      "&item_name=" + vm.variablesdtl.item_name + "&description=" + vm.variablesdtl.description +
                      "&unit=" + vm.variablesdtl.unit + "&property_no=" + vm.variablesdtl.property_no + 
                      "&podtl_idlink=" + vm.variablesdtl.podtl_id + "&account=" + vm.variablesdtl.office + "&formula=" + vm.variablesdtl.formula + "&additional_desc=" + vm.variablesdtl.additional_desc +
                      "&preparedby=" + vm.variables.preparedby + "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby + "&desig2=" + vm.variables.desig2 +
                      "&date_now=" + vm.date_now + "&level=" + vm.level + "&stock_no=" + vm.variablesdtl.stock_no + "&brand=" + vm.variablesdtl.brand
                    );
                LOADING.classList.remove("open");
              }); 
            }
          }

          vm.generateOffice = function(){
            if(!vm.variablesdtl.podtl_id){
                InvEntrySvc.showSwal('Warning', "Please choose Property to generate.", 'warning');
            }
            else if(!vm.variables.preparedby){
                InvEntrySvc.showSwal('Warning', "Please choose prepared by to proceed.", 'warning');
            }
            else if(!vm.variables.approvedby){
                InvEntrySvc.showSwal('Warning', "Please choose certified by to proceed.", 'warning');
            }
            else if(!vm.variablesdtl.center_idlink){
                InvEntrySvc.showSwal('Warning', "Please choose Division/Office to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                SlcGenerationOfficeSvc.save({
                id: vm.variablesdtl.podtl_id,pro: vm.variablesdtl.property_no,center: vm.variablesdtl.center_id
                }).then(function (response) {
                    window.open(
                      "report/supplies_ledger/office?id=" + vm.variablesdtl.podtl_id + "&fund_name=" + vm.variables.fund_name +
                      "&item_name=" + vm.variablesdtl.item_name + "&description=" + vm.variablesdtl.description +
                      "&unit=" + vm.variablesdtl.unit + "&property_no=" + vm.variablesdtl.property_no + 
                      "&podtl_idlink=" + vm.variablesdtl.podtl_id + "&account=" + vm.variablesdtl.office + "&formula=" + vm.variablesdtl.formula + "&additional_desc=" + vm.variablesdtl.additional_desc +
                      "&preparedby=" + vm.variables.preparedby + "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby + "&desig2=" + vm.variables.desig2 +
                      "&date_now=" + vm.date_now + "&center_name=" + vm.variablesdtl.center_name + "&center_id=" + vm.variablesdtl.center_idlink + "&center_fname=" + vm.center_fname + 
                      "&level=" + vm.level + "&stock_no=" + vm.variablesdtl.stock_no + "&brand=" + vm.variablesdtl.brand
                    );
                LOADING.classList.remove("open");
              }); 
            }
          }
        
        vm.getSeries = function (data) {
            LOADING.classList.add("open");
            SeriesSvc.get({id:data}).then(function (response){
                if(response.message){
                    vm.series = 0;
                } else{
                    vm.series = response;
                }
            })
            LOADING.classList.remove("open");
        }

        vm.getSlc = function (hdr,dtl,pro) {
            LOADING.classList.add("open");
            SlcSvc.get({hdr:hdr, dtl:dtl, pro:pro}).then(function (response) {
                if (response.message) {
                    vm.slcList = [];
                    vm.inventorytotalcost = 0;
                    vm.inventorytotalcost = filter('number')(0,2);
                    vm.inventorycount = 0;
                    vm.inventorycount = filter('number')(0);
                } else {
                    vm.slcList = response;
                    vm.inventorycounttotal = 0;
                    vm.issuecount = 0;
                    angular.forEach(vm.slcList, function(qty){
                        vm.inventorycounttotal = parseInt(vm.inventorycounttotal) + parseInt(qty.qty_rec);
                        
                    });
                    angular.forEach(vm.slcList, function(qtyissue){
                        vm.issuecount = parseInt(vm.issuecount) + parseInt(qtyissue.qty_issue);
                       
                    });
                    vm.physicalcount =  parseInt(vm.inventorycounttotal) - parseInt(vm.issuecount);
                    vm.inventorycount = filter('number')(vm.physicalcount);
                    vm.issuecount = filter('number')(vm.issuecount);
                    vm.inventorycost = parseFloat(vm.physicalcount) * parseFloat(vm.variablesdtl.unit_cost);
                    vm.inventorytotalcost = filter('number')(vm.inventorycost,2);
                }
                LOADING.classList.remove("open");
            })
        }

        vm.expense = function(){
            vm.variables.total_expense = 0;
            angular.forEach(vm.ArrayList, function(expense,amount){
                vm.variables.total_expense = parseFloat(vm.variables.total_expense) + parseFloat(expense.amount);
            });
            vm.variables.total_expense = filter('number')(vm.variables.total_expense,2);
        }

        function numberPrecision($number, $decimals = 0)
        {
            $negation = ($number < 0) ? (-1) : 1;
            $coefficient = pow(10, $decimals);
            return $negation * floor((string)(abs($number) * $coefficient)) / $coefficient;
        }

        vm.addition = function(){
            // vm.variablesdtl.unit_cost = vm.unit_cost;
            vm.total = Number(vm.variablesdtl.del1st || 0) + Number(vm.variablesdtl.del2nd || 0)
                       + Number(vm.variablesdtl.del3rd || 0) + Number(vm.variablesdtl.del4th || 0)
                       + Number(vm.variablesdtl.del5th || 0) + Number(vm.variablesdtl.del6th || 0)
                       + Number(vm.variablesdtl.del7th || 0) + Number(vm.variablesdtl.del8th || 0)
                       + Number(vm.variablesdtl.del9th || 0) + Number(vm.variablesdtl.del10th || 0)
                       + Number(vm.variablesdtl.del11th || 0) + Number(vm.variablesdtl.del12th || 0);
            vm.totalcost = parseFloat(vm.total) * parseFloat(vm.variablesdtl.original_price);
            vm.variablesdtl.amount = parseFloat(vm.variablesdtl.original_price) * parseFloat(vm.variablesdtl.quantity);
            vm.amount = filter('number')(vm.variablesdtl.amount,2);
            vm.grandTotal = filter('number')(vm.totalcost,2);
            vm.remaining = parseFloat(vm.variablesdtl.quantity) - parseFloat(vm.total);
            if(!vm.variablesdtl.unit_cost){
                vm.disabled = true;
            }
            else if(vm.variablesdtl.unit_cost <= 0){
                vm.disabled = true;
            }
            else{
                vm.disabled = false;
            }
            
        }
        
        
        vm.searchingAccount = function () {
            if (!vm.office) {
                return (vm.filtered = vm.ArrayList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.office.toUpperCase().startsWith(vm.office.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.ArrayList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.description_branded.toUpperCase().startsWith(vm.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.getDetails = function (id) {
            LOADING.classList.add("open");
            InvEntryDetailSvc.get({id:id}).then(function (response) {
                if (response.message) {
                    vm.ArrayList = [];
                } else {
                    vm.ArrayList = response;
                    vm.filtered = vm.ArrayList;
                    angular.forEach(vm.ArrayList, function(delivery){
                        vm.deliverycount = Number(delivery.del1st || 0) + Number(delivery.del2nd || 0)
                       + Number(delivery.del3rd || 0) + Number(delivery.del4th || 0)
                       + Number(delivery.del5th || 0) + Number(delivery.del6th || 0)
                       + Number(delivery.del7th || 0) + Number(delivery.del8th || 0)
                       + Number(delivery.del9th || 0) + Number(delivery.del10th || 0)
                       + Number(delivery.del11th || 0) + Number(delivery.del12th || 0);
                        delivery.quantity = Number(delivery.quantity);
                        vm.delivery = delivery.quantity;
                        if(vm.deliverycount === delivery.quantity){
                            vm.variablesdtl.delivery_status = "COMPLETED";
                        }
                        else if(vm.deliverycount < delivery.quantity)
                        {
                            vm.variablesdtl.delivery_status = "PARTIAL";
                        }
                        else{
                            vm.variablesdtl.delivery_status = "NOT YET DELIVERED";
                        }
                    });
                }
                vm.expense();
                LOADING.classList.remove("open");
            })
        }

        vm.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Stock No.", field: "property_no",
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Unit", field: "unit",
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Item name", field: "item_name", 
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                // { name: "Description", field: "description_branded", width: 250, 
                //         cellClass: function(data, rowRenderIndex){
                //             if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                //                 return "text-primary";
                //             } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                //                 return "text-danger";
                //             }  else {
                //                 return "pointer";
                //             }
                //     }
                // },
                { name: "Description", field: "description", width: 250, 
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Account", field: "office", width: 350,
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Qty", field: "quantity", width: 75,
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Unit Cost/Original", field: "original_price", cellClass: 'text-right', cellFilter: 'number: 2',
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Amount", field: "amount", cellClass: 'text-right', cellFilter: 'number: 2',
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
                { name: "Delivery Status",field: "deliverystat", 
                        cellClass: function(data, rowRenderIndex){
                            if (rowRenderIndex.entity.deliverystat === "COMPLETED") {
                                return "text-primary";
                            } else if (rowRenderIndex.entity.deliverystat === "PARTIAL") {
                                return "text-danger";
                            }  else {
                                return "pointer";
                            }
                    }
                },
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    console.log(row.entity.deliverystat);
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.checkstatus = function (){
            vm.total = Number(vm.total || 0);
            console.log(vm.variablesdtl.quantity);
            console.log(vm.total);
            if(vm.variablesdtl.quantity === vm.total){
                vm.variablesdtl.delivery_status = "COMPLETED";
            }
            else if(vm.total === 0){
                vm.variablesdtl.delivery_status = "NO DELIVERY";
            }
            else if(vm.variablesdtl.quantity > vm.total){
                vm.variablesdtl.delivery_status = "PARTIAL";
            }
            console.log(vm.variablesdtl.delivery_status);
        }

        vm.save = function (delivery) {
            vm.variablesdtl.center_id = vm.variables.center_id;
            vm.variablesdtl.center_name = vm.variables.center_name;
            vm.variablesdtl.center_idlink = vm.variables.center_id;
            if(!vm.variables.po_id){
                InvEntrySvc.showSwal('Ooops', "Please choose PO to proceed.", 'warning');
            }
            else if(vm.variables.cancellation_status === "CANCELED"){
                InvEntrySvc.showSwal('Ooops', "This PO was canceled please ask the authorize person to reactivate this PO.", 'warning');
            }
            // else if(!vm.variablesdtl.property_no){
            //     InvEntrySvc.showSwal('Ooops', "Please fill up property no. to proceed.", 'warning');
            // }
            else if(!vm.variablesdtl.unit){
                InvEntrySvc.showSwal('Ooops', "Please choose unit to proceed.", 'warning');
            }
            else if(vm.variablesdtl.quantity <= 0){
                InvEntrySvc.showSwal('Ooops', "Cannot proceed less than zero quantity.", 'warning');
            }
            else if(!vm.variablesdtl.quantity){
                InvEntrySvc.showSwal('Ooops', "Please fill up quantity to be delivered to proceed.", 'warning');
            }
            else if(vm.variablesdtl.unit_cost <= 0){
                InvEntrySvc.showSwal('Ooops', "Cannot proceed less than zero unit cost.", 'warning');
            }
            else if(!vm.variablesdtl.unit_cost){
                InvEntrySvc.showSwal('Ooops', "Please fill up unit cost to proceed.", 'warning');
            }
            else if(!vm.variablesdtl.item_name){
                InvEntrySvc.showSwal('Ooops', "Please fill up Item name to proceed.", 'warning');
            }
            else if(!vm.variablesdtl.description){
                InvEntrySvc.showSwal('Ooops', "Please fill up Description to proceed.", 'warning');
            }
            else if(!vm.variablesdtl.office_idlink){
                InvEntrySvc.showSwal('Ooops', "Please fill up Account to proceed.", 'warning');
            }
            else if(!vm.variablesdtl.center_idlink){
                InvEntrySvc.showSwal('Ooops', "Please choose Center/office to proceed.", 'warning');
            }
           
            else{
                if(delivery === "delivery"){
                    if(vm.variablesdtl.formula === "noneweighted"){
                        console.log("nothing");
                    }
                    else{
                        LOADING.classList.add("open");
                        console.log("proceed delivery");
                        vm.variablesdtl.pohdr_link = vm.variables.po_id;
                        InvEntryDetailSvc.save(vm.variablesdtl).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variablesdtl.podtl_id = response.id;
                                    vm.ArrayList.push(vm.variablesdtl);
                                    vm.filtered = vm.ArrayList;
                                    InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.ArrayList.splice(
                                        vm.variablesdtl.index,
                                        1,
                                        vm.variablesdtl
                                    );
                                    vm.filtered = vm.ArrayList;
                                    InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                                }
                                // vm.expense();
                                // vm.clearDetail();
                            } else {
                                // InvEntryDetailSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                            }
                            vm.clearDetail();
                            LOADING.classList.remove("open");
                        })
                    }

                }
                else if(vm.variablesdtl.podtl_id){ 
                    console.log("1st layer");
                    LOADING.classList.add("open");
                    vm.checkstatus();
                    vm.variablesdtl.pohdr_link = vm.variables.po_id;
                    InvEntryDetailSvc.save(vm.variablesdtl).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                vm.variablesdtl.podtl_id = response.id;
                                vm.ArrayList.push(vm.variablesdtl);
                                vm.filtered = vm.ArrayList;
                                InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                vm.ArrayList.splice(
                                    vm.variablesdtl.index,
                                    1,
                                    vm.variablesdtl
                                );
                                vm.filtered = vm.ArrayList;
                                InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                            }
                            // vm.expense();
                            // vm.clearDetail();
                        } else {
                            InvEntryDetailSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        vm.clearDetail();
                        LOADING.classList.remove("open");
                    })
                }
                else if(vm.existing === true){
                    console.log("here");
                    LOADING.classList.add("open");
                    vm.variablesdtl.pohdr_link = vm.variables.po_id;
                    InvEntryDetailSvc.save(vm.variablesdtl).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                vm.variablesdtl.podtl_id = response.id;
                                vm.ArrayList.push(vm.variablesdtl);
                                vm.filtered = vm.ArrayList;
                                InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                vm.ArrayList.splice(
                                    vm.variablesdtl.index,
                                    1,
                                    vm.variablesdtl
                                );
                                vm.filtered = vm.ArrayList;
                                InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                            }
                            vm.expense();
                            // vm.clearDetail();
                        } else {
                            InvEntryDetailSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        vm.clearDetail();
                        LOADING.classList.remove("open");
                    })
                }
                else{
                        LOADING.classList.add("open");
                        vm.variablesdtl.property_no = vm.variablesdtl.uacs_code + "-" + vm.variablesdtl.subacct_idlink; 
                        vm.variablesdtl.pohdr_link = vm.variables.po_id;
                        // vm.variablesdtl.original_price = vm.unit_cost;
                        CheckpropSvc.get({prop:vm.variablesdtl.property_no}).then(function (response){
                            console.log(response);
                            if(response.message){
                                InvEntryDetailSvc.save(vm.variablesdtl).then(function (response) {
                                    console.log(vm.variablesdtl);
                                    if (response.success) {
                                        if (response.id) {
                                            vm.variablesdtl.podtl_id = response.id;
                                            vm.ArrayList.push(vm.variablesdtl);
                                            vm.filtered = vm.ArrayList;
                                            InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                                        }
                                        else {
                                            vm.ArrayList.splice(
                                                vm.variablesdtl.index,
                                                1,
                                                vm.variablesdtl
                                            );
                                            vm.filtered = vm.ArrayList;
                                            InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                                        }
                                        vm.expense();
                                        vm.clearDetail();
                                        vm.getDetails(vm.variables.po_id)
                                    } else {
                                        InvEntryDetailSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                    }
                                })
                            } else{
                                InvEntryDetailSvc.showSwal('Ooops', "This property number is existing, please search to avoid duplication.", 'warning');
                                vm.getDetails(vm.variables.po_id)
                            }
                        })
                        vm.getDetails(vm.variablesdtl.podtl_id);
                    LOADING.classList.remove("open");
                }
            }
        }
        vm.deletePO = function () {
            if (!vm.variables.po_id) {
                return InvEntrySvc.showSwal('Ooops', "Select PO to delete", 'warning');
            }
            else if(vm.variables.cancellation_status === "CANCELED"){
                InvEntrySvc.showSwal('Ooops', "This PO was canceled please ask the authorize person to reactivate this PO.", 'warning');
            }
            else{
                if(vm.filtered.length <= 0){
                    InvEntrySvc.delete(vm.variables.po_id).then(function (response) {
                        if (response.success) {
                            vm.ArrayList.splice(
                                vm.variables.index,
                                1
                            );
                            vm.filtered = vm.ArrayList;
                            vm.filtered = [];
                            vm.clearFunction();
                            vm.clearDetail();
                            InvEntrySvc.showSwal('Success', response.message, 'success');
                        } else {
                            InvEntrySvc.showSwal('Error', response.message, 'error');
                        }
                        LOADING.classList.remove("open");
                    })
                }
                else{
                    var options = {
                        data: {hdr:vm.variables, dtl:vm.variablesdtl},
                        animation: true,
                        templateUrl: TRANSURL + "inventory_entry/cancellation.html?v=" + VERSION,
                        controllerName: "CancellationCtrl",
                        viewSize: "lg",
                        windowClass: 'modal modal-slide-in-full',
                        filesToLoad: [
                            TRANSURL + "inventory_entry/cancellation.html?v=" + VERSION,
                            TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                        ]
                    };
                    AppSvc.modal(options).then(function (data) {
                       if(data){
                            vm.variables.cancellation_status = data.cancellation_status;
                            vm.variables.cancellation_reason = data.cancellation_reason;
                            vm.variables.canceled_by = data.canceled_by;
                            if(vm.variables.cancellation_status){
                                vm.postatus = true;
                            }
                            vm.clearFunction();
                       }
                    });
                }
            }
        }
        vm.delete = function () {
            if (!vm.variablesdtl.podtl_id) {
                return InvEntryDetailSvc.showSwal('Ooops', "Select row to delete", 'warning');
            }
            else if(vm.variables.cancellation_status === "CANCELED"){
                InvEntrySvc.showSwal('Ooops', "This PO was canceled please ask the authorize person to reactivate this PO.", 'warning');
            }
            else if(vm.variablesdtl.del1st > 0){
                InvEntrySvc.showSwal('Ooops', "This property already have data in stock card, deleting this data is not allowed.", 'warning');
            }
            else{
                InvEntryDetailSvc.delete(vm.variablesdtl.podtl_id).then(function (response) {
                    if (response.success) {
                        vm.ArrayList.splice(
                            vm.variablesdtl.index,
                            1
                        );
                        vm.filtered = vm.ArrayList;
                        vm.expense();
                        vm.clearDetail();
                        InvEntryDetailSvc.showSwal('Success', response.message, 'success');
                    } else {
                        InvEntryDetailSvc.showSwal('Error', response.message, 'error');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }
        vm.clearFunction = function () {
            vm.variables = {};
            vm.variablesdtl = {};
            vm.variables.amount_orsburs = 0;
            vm.variables.amount_orsburs = filter('number')(0, 2);
            vm.variables.total_orsbur = 0;
            vm.variables.total_orsbur = filter('number')(0,2);
            vm.variables.total_expense = 0;
            vm.variables.total_expense = filter('number')(0,2);
            vm.variablesdtl.unit_cost = 0;
            vm.variablesdtl.unit_cost = filter('number')(0, 2);
            vm.totalcost = 0;
            vm.totalcost = filter('number')(0, 2);
            vm.grandTotal = 0;
            vm.grandTotal = filter('number')(0, 2);
            vm.variablesdtl.amount = 0;
            vm.variablesdtl.amount = filter('number')(0,2);
            vm.variablesdtl.quantity = 0;
            vm.variablesdtl.quantity = filter('number')(0);
            vm.unit_cost = 0;
            vm.unit_cost = filter('number')(0,2);
            vm.variablesdtl.original_price = 0;
            vm.variablesdtl.original_price = filter('number')(0,2);
            vm.ArrayList = [];
            vm.filtered = [];
            vm.exist = false;
            vm.existing = false;
            vm.postatus = false;
            vm.cancel_status = false;
            vm.getUserCredentials();
        }
        vm.clearDetail = function () {
            vm.variablesdtl = {};
            vm.variablesdtl.quantity = "0";
            vm.variablesdtl.unit_cost = "0.00";
            vm.variablesdtl.amount = "0.00";
            vm.total = 0;
            vm.total = filter('number')(0);
            vm.grandTotal = 0;
            vm.grandTotal = filter('number')(0,2);
            vm.amount = 0;
            vm.amount = filter('number')(0,2);
            vm.remaining = 0;
            vm.remaining = filter('number')(0);
            vm.unit_cost = 0;
            vm.unit_cost = filter('number')(0,2);
            vm.inventorycount = 0;
            vm.inventorycount = filter('number')(0);
            vm.inventorytotalcost = 0;
            vm.inventorytotalcost = filter('number')(0,2);
            vm.variablesdtl.original_price = 0;
            vm.variablesdtl.original_price = filter('number')(0,2);
            vm.exist = false;
            vm.existing = false;
        }

        vm.openOfficeSearch = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "office_code/search.html?v=" + VERSION,
                controllerName: "BrowseOfficeCodeCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "office_code/search.html?v=" + VERSION,
                    MASTERURL + "office_code/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                console.log(data);
                if(data){
                    vm.office = data.office;
                    vm.exist = false;
                    vm.existing = false;
                    vm.searchingAccount();
                    vm.partial = 0;
                    angular.forEach(vm.filtered, function(item){
                        vm.partial = parseFloat(vm.partial) + (parseFloat(item.original_price)* parseFloat(item.quantity))
                        vm.variables.total_expense = filter('number')(vm.partial,2)
                    })
                }
            });
        }

        vm.openOffice = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "office_code/search.html?v=" + VERSION,
                controllerName: "BrowseOfficeCodeCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "office_code/search.html?v=" + VERSION,
                    MASTERURL + "office_code/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                console.log(data);
                if(data){
                    vm.variablesdtl.office_idlink = data.office_id;
                    vm.variablesdtl.office = data.office;
                    vm.variablesdtl.office_code = data.office_code;
                    vm.variablesdtl.uacs_code = data.office_UACS;
                    vm.variablesdtl.formula = data.formula;
                    vm.exist = false;
                    vm.existing = false;
                }
            });
        }

        vm.openPayment = function () {
            if(!vm.variables.po_id){
                InvDeliverySvc.showSwal('Warning', 'Please choose a PO first to proceed', 'warning');
            }
            else{
                var options = {
                    data: vm.variables,
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/add_payment.html?v=" + VERSION,
                    controllerName: "AddpaymentCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/add_payment.html?v=" + VERSION,
                        TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    console.log(data);
                    if(data){
                        vm.variables.status = data.status;
                        // vm.variablesdtl.office_idlink = data.office_id;
                        // vm.variablesdtl.office = data.office;
                        // vm.variablesdtl.office_code = data.office_code;
                        // vm.variablesdtl.uacs_code = data.office_UACS;
                        // vm.variablesdtl.formula = data.formula;
                        // vm.exist = false;
                    }
                });
            }
        }

        vm.openSubaccount = function () {
            if(vm.variablesdtl.office_idlink){
                console.log("with id");
                var options = {
                    data: vm.variablesdtl.office_idlink,
                    animation: true,
                    templateUrl: MASTERURL + "office_code/subacct.html?v=" + VERSION,
                    controllerName: "BrowseSubaccountCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        MASTERURL + "office_code/subacct.html?v=" + VERSION,
                        MASTERURL + "office_code/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        vm.variablesdtl.item_name = data.subaccount;
                        vm.variablesdtl.description = data.description;
                        vm.variablesdtl.subacct_idlink = data.subacct_id;
                        vm.variablesdtl.office_idlink = data.office_id;
                        vm.variablesdtl.office = data.office;
                        vm.variablesdtl.office_code = data.office_code;
                        vm.variablesdtl.uacs_code = data.office_UACS;
                        vm.variablesdtl.formula = data.formula;
                        vm.variablesdtl.stock_no = data.stock_no;
                        vm.variablesdtl.brand = data.brand;
                        vm.variablesdtl.item_id = data.subacct_id;
                        vm.exist = false;
                        vm.existing = false;
                    }
                    console.log(vm.variablesdtl);
                    // vm.getSeries(vm.variablesdtl.subacct_idlink);
                });
            }
            else{
                console.log("no id");
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "office_code/subacct.html?v=" + VERSION,
                    controllerName: "BrowseSubaccountCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        MASTERURL + "office_code/subacct.html?v=" + VERSION,
                        MASTERURL + "office_code/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    console.log(data);
                    if(data){
                        vm.variablesdtl.item_name = data.subaccount;
                        vm.variablesdtl.description = data.description;
                        vm.variablesdtl.subacct_idlink = data.subacct_id;
                        vm.variablesdtl.office_idlink = data.office_id;
                        vm.variablesdtl.office = data.office;
                        vm.variablesdtl.office_code = data.office_code;
                        vm.variablesdtl.uacs_code = data.office_UACS;
                        vm.variablesdtl.formula = data.formula;
                        vm.variablesdtl.stock_no = data.stock_no;
                        vm.variablesdtl.brand = data.brand;
                        vm.variablesdtl.item_id = data.subacct_id;
                        vm.exist = false;
                        vm.existing = false;
                    }
                    console.log(vm.variablesdtl.formula);
                    // vm.getSeries(vm.variablesdtl.subacct_idlink);
                });
            }
            
        }

        vm.openUnit = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "unit_list/search.html?v=" + VERSION,
                controllerName: "BrowseUnitCtrl",
                viewSize: "sm",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "unit_list/search.html?v=" + VERSION,
                    MASTERURL + "unit_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                console.log(data);
                if(data){
                    vm.variablesdtl.unitid_link = data.unit_id;
                    vm.variablesdtl.unit = data.unit_name;
                }
            });
        }

        vm.clickRow = function (x) {
            vm.getDetails(vm.variables.po_id);
            vm.variablesdtl = {
                podtl_id: x.podtl_id,
                pohdr_link: x.pohdr_link,
                property_no: x.property_no,
                unit: x.unit,
                unitid_link: x.unitid_link,
                item_name: x.item_name,
                description: x.description,
                quantity: x.quantity,
                unit_cost: x.unit_cost,
                original_price: x.original_price,
                amount: x.amount,
                del1st: x.del1st,
                del2nd: x.del2nd,
                del3rd: x.del3rd,
                del4th: x.del4th,
                del5th: x.del5th,
                del6th: x.del6th,
                del7th: x.del7th,
                del8th: x.del8th,
                del9th: x.del9th,
                del10th: x.del10th,
                del11th: x.del11th,
                del12th: x.del12th,
                office_idlink: x.office_idlink,
                office: x.office,
                office_code: x.office_code,
                uacs_code: x.uacs_code,
                additional_desc: x.additional_desc,
                formula: x.formula,
                center_idlink: x.center_idlink,
                center_name: x.center_name,
                center_fname: x.center_fname,
                unit_costindivi: x.unit_costindivi,
                stock_no: x.stock_no,
                assigned_to: x.assigned_to,
                brand: x.brand,
                index: vm.ArrayList.indexOf(x)
            };
                // if(vm.variablesdtl.quantity === vm.total){
                //     vm.variablesdtl.delivery_status = "COMPLETED";
                // }
                // else if(vm.total === 0){
                //     vm.variablesdtl.delivery_status = "NO DELIVERY";
                // }
                // else if(vm.variablesdtl.quantity > vm.total){
                //     vm.variablesdtl.delivery_status = "PARTIAL";
                // }
            // vm.unit_cost = filter('number')(vm.variablesdtl.unit_cost,2);
            // vm.variablesdtl.unit_cost = vm.variablesdtl.unit_cost;
            console.log(vm.variablesdtl);
            vm.getSlc(vm.variables.po_id,vm.variablesdtl.podtl_id,vm.variablesdtl.property_no);
            vm.addition();
        }

        vm.openExisting = function () {
            if(vm.variables.cancellation_status === "CANCELED"){
                InvEntrySvc.showSwal('Ooops', "This PO was canceled please ask the authorize person to reactivate this PO.", 'warning');
            }
            else{
                vm.clearDetail();
                var options = {
                    data: vm.variables.po_id,
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/show_existing.html?v=" + VERSION,
                    controllerName: "ExistingProperty",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/show_existing.html?v=" + VERSION,
                        TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    console.log(data);
                    if(data){
                        vm.variablesdtl.property_no = data.property_no;
                        vm.variablesdtl.unit = data.unit;
                        vm.variablesdtl.unitid_link = data.unitid_link;
                        vm.variablesdtl.item_name = data.item_name;
                        vm.variablesdtl.description = data.description;
                        vm.variablesdtl.office = data.office;
                        vm.variablesdtl.office_code = data.office_code;
                        vm.variablesdtl.office_idlink = data.office_idlink;
                        vm.variablesdtl.uacs_code = data.uacs_code;
                        vm.variablesdtl.formula = data.formula;
                        vm.variablesdtl.additional_desc = data.additional_desc;
                       if(vm.variablesdtl.formula == "noneweighted"){
                            vm.variablesdtl.unit_cost = 0;
                            vm.variablesdtl.unit_cost = filter('number')(0,2);
                            vm.exist = false;
                            vm.existing = true;
                       }
                       else{
                            vm.variablesdtl.unit_cost = data.unit_cost;
                            vm.variablesdtl.original_price =  data.original_price;
                            vm.exist = true;
                            vm.existing = true;
                       }
                    }
                    
                    vm.unit_cost = filter('number')(vm.variablesdtl.unit_cost,2);
                    vm.addition();
                    vm.getSlc(vm.variables.po_id,vm.variablesdtl.podtl_id);
                });
            }
            
        }

        vm.openDelivery = function (number) {
            if(!vm.variables.po_id){
                InvEntryDetailSvc.showSwal('Warning', 'Please choose PO first to proceed.', 'warning');
            }
            else if(vm.variables.cancellation_status === "CANCELED"){
                InvEntrySvc.showSwal('Ooops', "This PO was canceled please ask the authorize person to reactivate this PO.", 'warning');
            }
            else if(!vm.variablesdtl.podtl_id){
                InvEntryDetailSvc.showSwal('Warning', 'Please choose Property to proceed.', 'warning');
            }
            else{
                var options = {
                    data: {dtl:vm.variablesdtl, hdr:vm.variables},
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/add_delivery.html?v=" + VERSION,
                    controllerName: "AddDeliveryCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/add_delivery.html?v=" + VERSION,
                        TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    console.log(data);
                    if(data){
                        if(data.delivery === "1st"){
                            vm.variablesdtl.del1st = data.qty_rec;
                        }
                        else if(data.delivery === "2nd"){
                            vm.variablesdtl.del2nd = data.qty_rec;
                        }
                        else if(data.delivery === "3rd"){
                            vm.variablesdtl.del3rd = data.qty_rec;
                        }
                        else if(data.delivery === "4th"){
                            vm.variablesdtl.del4th = data.qty_rec;
                        }
                        else if(data.delivery === "5th"){
                            vm.variablesdtl.del5th = data.qty_rec;
                        }
                        else if(data.delivery === "6th"){
                            vm.variablesdtl.del6th = data.qty_rec;
                        }
                        else if(data.delivery === "7th"){
                            vm.variablesdtl.del7th = data.qty_rec;
                        }
                        else if(data.delivery === "8th"){
                            vm.variablesdtl.del8th = data.qty_rec;
                        }
                        else if(data.delivery === "9th"){
                            vm.variablesdtl.del9th = data.qty_rec;
                        }
                        else if(data.delivery === "10th"){
                            vm.variablesdtl.del10th = data.qty_rec;
                        }
                        else if(data.delivery === "11th"){
                            vm.variablesdtl.del11th = data.qty_rec;
                        }
                        else if(data.delivery === "12th"){
                            vm.variablesdtl.del12th = data.qty_rec;
                        }
                        else{
                            console.log("adjustment");
                        }
                        vm.variablesdtl.formula = data.formula;
                        vm.variablesdtl.unit_cost = data.weighted;
                        vm.unit_cost = filter('number')(vm.variablesdtl.unit_cost, 2);
                        vm.save("delivery");
                        vm.getDetails(data.pohdr_idlink);
                    }
                });
            }
        }

        
        
        vm.openModal = function (number) {
            if(number === 1) {
                vm.clearFunction();
                vm.total = 0;
                vm.total = filter('number')(0);
                vm.amount = 0;
                vm.amount = filter('number')(0);
                vm.inventorycount = 0;
                vm.inventorycount = filter('number')(0);
                vm.inventorytotalcost = 0;
                vm.inventorytotalcost = filter('number')(0,2);
                // vm.clearDetail();
                // vm.filtered = [];
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/create_po.html?v=" + VERSION,
                    controllerName: "CreatePOCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/create_po.html?v=" + VERSION,
                        TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        vm.variables.po_id = data.po_id;
                        vm.variables.po_num = data.po_num;
                        vm.variables.supplier_idlink = data.supplier_idlink;
                        vm.variables.supplier = data.supplier;
                        vm.variables.sup_address = data.sup_address;
                        vm.variables.sup_tin = data.sup_tin;
                        vm.variables.po_date = data.po_date;
                        vm.variables.mode_procurement = data.mode_procurement;
                        vm.variables.orsburs_no = data.orsburs_no;
                        vm.variables.date_orsburs = getDate(data.date_orsburs);
                        vm.variables.amount_orsburs = data.amount_orsburs;
                        vm.variables.total_orsbur = filter('number')(vm.variables.amount_orsburs,2);
                        vm.variables.award_date = getDate(data.award_date);
                        vm.variables.fund_code = data.fund_code;
                        vm.variables.fund_name = data.fund_name;
                        vm.variables.fund_idlink = data.fund_idlink;
                        vm.variables.office_idlink = data.office_idlink;
                        vm.variables.uacs_code = data.uacs_code;
                        vm.variables.office_code = data.office_code;
                        vm.variables.office = data.office;
                        vm.variables.status = data.status;
                        vm.variablesdtl.account = vm.variables.office;
                        vm.variables.center_id = data.center_idlink;
                        vm.variables.center_name = data.center_name;
                        vm.variables.center_idlink = data.center_idlink;
                    }
                    vm.getCenterInfo(vm.variables.center_idlink);
                });
            }
            else if(number === 2){
                vm.filtered = [];
                vm.user_center = vm.variables.center_idlink;
                vm.clearFunction();
                if(vm.level === "RO-SUPPLY"){
                    var options = {
                        data: vm.level,
                        // data: vm.user_center,
                        animation: true,
                        templateUrl: TRANSURL + "inventory_entry/search.html?v=" + VERSION,
                        controllerName: "SearchPOCtrl",
                        viewSize: "lg",
                        windowClass: 'modal modal-slide-in-full',
                        filesToLoad: [
                            TRANSURL + "inventory_entry/search.html?v=" + VERSION,
                            TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                        ]
                    };
                }
                else{
                    console.log(vm.user_center);
                    var options = {
                        data: vm.user_center,
                        // data: vm.user_center,
                        animation: true,
                        templateUrl: TRANSURL + "inventory_entry/search.html?v=" + VERSION,
                        controllerName: "SearchPOCtrl",
                        viewSize: "lg",
                        windowClass: 'modal modal-slide-in-full',
                        filesToLoad: [
                            TRANSURL + "inventory_entry/search.html?v=" + VERSION,
                            TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                        ]
                    };
                }
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        vm.user_center = "";
                        console.log(vm.user_center);
                        vm.variables.center_id = data.center_idlink;
                        vm.variables.center_name = data.center_name;
                        vm.variables.center_idlink = data.center_idlink;
                        vm.variables.po_id = data.po_id;
                        vm.variables.po_num = data.po_num;
                        vm.variables.supplier_idlink = data.supplier_idlink;
                        vm.variables.supplier = data.supplier;
                        vm.variables.sup_address = data.sup_address;
                        vm.variables.sup_tin = data.sup_tin;
                        vm.variables.po_date = data.po_date;
                        vm.variables.mode_procurement = data.mode_procurement;
                        vm.variables.orsburs_no = data.orsburs_no;
                        vm.variables.date_orsburs = getDate(data.date_orsburs);
                        vm.variables.amount_orsburs = data.amount_orsburs;
                        vm.variables.total_orsbur = filter('number')(vm.variables.amount_orsburs,2);
                        vm.variables.award_date = getDate(data.award_date);
                        vm.variables.fund_code = data.fund_code;
                        vm.variables.fund_name = data.fund_name;
                        vm.variables.fund_idlink = data.fund_idlink;
                        vm.variables.office_idlink = data.office_idlink;
                        vm.variables.office_code = data.office_code;
                        vm.variables.uacs_code = data.uacs_code;
                        vm.variables.office = data.office;
                        vm.variables.status = data.status;
                        vm.variables.cancellation_status = data.cancellation_status;
                        vm.variables.cancellation_reason = data.cancellation_reason;
                        vm.variables.canceled_by = data.canceled_by;
                        vm.variablesdtl.account = vm.variables.office;
                        vm.variables.cancellation_reason = data.cancellation_reason;
                        vm.variables.canceled_by = data.canceled_by;
                        vm.getCenterInfo(vm.variables.center_idlink);
                        vm.getUserCredentials();    
                        
                        if(vm.variables.cancellation_status){
                            vm.postatus = true;
                            if(vm.variables.cancellation_status === "CANCELED"){
                                vm.cancel_status = true;
                            }
                            else{
                                vm.cancel_status = false;
                            }
                        }
                        else{
                            vm.postatus = false;
                        }
                        
                    }
                    vm.remaining = 0;
                    vm.remaining = filter('number')(0);
                    vm.getDetails(vm.variables.po_id);
                });
            }
            else{
                if(!vm.variables.po_id){
                    InvEntrySvc.showSwal('Warning', 'Please choose an Item to edit.', 'warning');
                }
                else if(vm.variables.cancellation_status === "CANCELED"){
                    InvEntrySvc.showSwal('Ooops', "This PO was canceled please ask the authorize person to reactivate this PO.", 'warning');
                }
                else{
                    var options = {
                        data: vm.variables,
                        animation: true,
                        templateUrl: TRANSURL + "inventory_entry/create_po.html?v=" + VERSION,
                        controllerName: "CreatePOCtrl",
                        viewSize: "lg",
                        windowClass: 'modal modal-slide-in-full',
                        filesToLoad: [
                            TRANSURL + "inventory_entry/create_po.html?v=" + VERSION,
                            TRANSURL + "inventory_entry/controller.js?v=" + VERSION
                        ]
                    };
                    AppSvc.modal(options).then(function (data) {
                        if(data){
                            vm.variables.po_id = data.po_id;
                            vm.variables.po_num = data.po_num;
                            vm.variables.supplier_idlink = data.supplier_idlink;
                            vm.variables.supplier = data.supplier;
                            vm.variables.sup_address = data.sup_address;
                            vm.variables.sup_tin = data.sup_tin;
                            vm.variables.po_date = data.po_date;
                            vm.variables.mode_procurement = data.mode_procurement;
                            vm.variables.orsburs_no = data.orsburs_no;
                            vm.variables.date_orsburs = getDate(data.date_orsburs);
                            vm.variables.amount_orsburs = data.amount_orsburs;
                            vm.variables.total_orsbur = filter('number')(vm.variables.amount_orsburs,2);
                            vm.variables.award_date = getDate(data.award_date);
                            vm.variables.fund_code = data.fund_code;
                            vm.variables.fund_name = data.fund_name;
                            vm.variables.fund_idlink = data.fund_idlink;
                            vm.variables.office_idlink = data.office_idlink;
                            vm.variables.uacs_code = data.uacs_code;
                            vm.variables.office_code = data.office_code;
                            vm.variables.office = data.office;
                            vm.variablesdtl.account = vm.variables.office;
                            vm.variables.center_id = data.center_idlink;
                            vm.variables.center_name = data.center_name;
                            vm.variables.center_idlink = data.center_idlink;
                        }
                        vm.getCenterInfo(vm.variables.center_idlink);
                        vm.getDetails(vm.variables.po_id);
                        vm.addition();
                    });
                }
            }   
        }
    }

function CreatePOCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.variablesList = [];
    modal.filtered = [];
    modal.variables.amount_orsburs = 0;
    modal.variables.amount_orsburs = filter('number')(0,2);
    modal.variables.po_date = filter("date")(new Date(),"MM/dd/yyyy");
    // modal.variables.award_date = filter("date")("MM/dd/yyyy");
    // modal.variables.date_orsburs = filter("date")("MM/dd/yyyy");
    modal.variables.mode_procurement = "Competitive Bidding";
    modal.variables.fund_idlink = 3;
    modal.variables.fund_name = "Regular Agency Fund";
    modal.variables.fund_code = "01";
    modal.variables.status = "UNPAID";
    modal.edit = "";
	$ocLazyLoad
		.load([TRANSURL + 'inventory_entry/service.js?v=' + VERSION,APPURL + 'app.service.js?v=' + VERSION,]).then(function (d) {
            AppSvc = $injector.get('AppSvc');
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            CheckExistingPOSvc = $injector.get("CheckExistingPOSvc");
            // modal.getIncomeList();
            modal.edit();
            if(modal.edit != "edit"){
                modal.getUserCredentials();
            }
                
        });

        modal.getUserCredentials = function () {
            LOADING.classList.add("open");
            AppSvc.get().then(function (response) {
                if (response) {
                    modal.userName = response.record.user;
                    modal.level = response.record.level;
                    modal.pic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
                    modal.variables.center_name = response.record.center_name;
                    modal.variables.center_idlink = response.record.center_idlink;
                    // vm.getMenus();
                } else {
                    // vm.logout();
                }
            })
            LOADING.classList.remove("open");
        };


        modal.openDivision = function (choice) {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                controllerName: "BrowseCenterCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "center_list/search.html?v=" + VERSION,
                    MASTERURL + "center_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    if(choice == 1){
                        // modal.variables.center_name = data.center_name;
                        // modal.variables.center_idlink = data.center_id;
                        // modal.variables.center_fname = data.center_fname;
                        // modal.variables.subadmin_access = data.subadmin_access;
                        modal.variables.assigned_to = data.center_name;
                    }
                    else{
                        // vm.variableSub.subacct_id = data.subacct_id;
                        modal.variables.center_name = data.center_name;
                        modal.variables.center_idlink = data.center_id;
                        modal.variables.center_fname = data.center_fname;
                        modal.variables.subadmin_access = data.subadmin_access;
                    }
                    
                }
            });
        } 

        


        modal.openSupplier = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "supplier_list/search.html?v=" + VERSION,
                controllerName: "BrowseSupplierCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "supplier_list/search.html?v=" + VERSION,
                    MASTERURL + "supplier_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    modal.variables.supplier_idlink = data.supplier_id;
                    modal.variables.supplier = data.supplier_name;
                    modal.variables.sup_address = data.supplier_address;
                    modal.variables.sup_tin = data.supplier_tin;
                    // modal.variables.proprietor_lname = data.proprietor_lname;
                    // modal.variables.proprietor_mname = data.proprietor_mname;
                    // modal.variables.mobile = data.mobile;
                    // modal.variables.email = data.email;
                }
            });
        }

        modal.openOffice = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "office_code/search.html?v=" + VERSION,
                controllerName: "BrowseOfficeCodeCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "office_code/search.html?v=" + VERSION,
                    MASTERURL + "office_code/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                 (data);
                if(data){
                    modal.variables.office_idlink = data.office_id;
                    modal.variables.office = data.office;
                    modal.variables.office_code = data.office_code;
                    modal.variables.uacs_code = data.office_UACS;
                    // modal.variables.proprietor_lname = data.proprietor_lname;
                    // modal.variables.proprietor_mname = data.proprietor_mname;
                    // modal.variables.mobile = data.mobile;
                    // modal.variables.email = data.email;
                }
            });
        }

        modal.openFund = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "fundsource_list/search.html?v=" + VERSION,
                controllerName: "BrowseFundsourceCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "fundsource_list/search.html?v=" + VERSION,
                    MASTERURL + "fundsource_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    modal.variables.fund_idlink = data.fund_id;
                    modal.variables.fund_name = data.fund_name;
                    modal.variables.fund_code = data.fund_code;
                    // modal.variables.proprietor_lname = data.proprietor_lname;
                    // modal.variables.proprietor_mname = data.proprietor_mname;
                    // modal.variables.mobile = data.mobile;
                    // modal.variables.email = data.email;
                }
            });
        }
        

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }

        modal.edit = function(x){
            if(data){
                modal.variables = data;
                modal.edit = "edit";
            }
            else{
                modal.edit = true;
            }
            
        }

    modal.save = function () {
        if(!modal.variables.po_num){
            InvEntrySvc.showSwal('Ooops', "Please fill up PO number to proceed.", 'warning');
        }
        else if(!modal.variables.supplier){
            InvEntrySvc.showSwal('Ooops', "Please choose supplier to proceed.", 'warning');
        }
        else if(!modal.variables.center_name){
            InvEntrySvc.showSwal('Ooops', "Please choose center/program to proceed.", 'warning');
        }
        else if(!modal.variables.assigned_to){
            InvEntrySvc.showSwal('Ooops', "Please choose assign to proceed.", 'warning');
        }
        else{
            CheckExistingPOSvc.get({po:modal.variables.po_num}).then(function (response) {
                if (response.message) {
                    LOADING.classList.add("open");
                    modal.variables.date_orsburs = getDate(modal.variables.date_orsburs);
                    modal.variables.po_date = getDate(modal.variables.po_date);
                    modal.variables.award_date = getDate(modal.variables.award_date);
                    InvEntrySvc.save(modal.variables).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                modal.variables.po_id = response.id;
                                InvEntrySvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                InvEntrySvc.showSwal('Success', response.message, 'success');
                            }
                            $uibModalInstance.close(modal.variables);
                        } else {
                            InvEntrySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        
                    }) 
                }
                else if(modal.edit === "edit"){
                    LOADING.classList.add("open");
                    modal.variables.date_orsburs = getDate(modal.variables.date_orsburs);
                    modal.variables.po_date = getDate(modal.variables.po_date);
                    modal.variables.award_date = getDate(modal.variables.award_date);
                    InvEntrySvc.save(modal.variables).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                modal.variables.po_id = response.id;
                                InvEntrySvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                InvEntrySvc.showSwal('Success', response.message, 'success');
                            }
                            $uibModalInstance.close(modal.variables);
                        } else {
                            InvEntrySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        
                    }) 
                }
                 else {
                    InvEntrySvc.showSwal('Ooops', "PO number already exist.", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
    }


	modal.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
            { name: "PO", field: "po_num" },
            { name: "Supplier", field: "supplier" },
            { name: "PO Date", field: "po_date" },
            { name: "ORS/BURS", field: "orsburs_no" },
            { name: "Amount", field: "amount_orsburs", cellClass: 'text-right', cellFilter: 'number: 2'},
		],
		data: "modal.filtered",
		onRegisterApi: function (gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function (row) {
				modal.clickRow(row.entity);
			});
		}
	};
	modal.searching = function () {
		if (!modal.search) {
			return (modal.filtered = modal.variablesList);
		}
		var searchFound = [];
		var temp_storage = modal.variablesList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.OtherIncomeName.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
    modal.clearFunction = function(){
        modal.variables = {};
        modal.variablesList = [];
        modal.filtered = [];
        modal.variables.amount_orsburs = 0;
        modal.variables.amount_orsburs = filter('number')(0,2);
        modal.variables.po_date = filter("date")(new Date(),"MM/dd/yyyy");
        // modal.variables.award_date = filter("date")("MM/dd/yyyy");
        // modal.variables.date_orsburs = filter("date")("MM/dd/yyyy");
        modal.variables.mode_procurement = "Competitive Bidding";
        modal.variables.fund_idlink = 3;
        modal.variables.fund_name = "Regular Agency Fund";
        modal.variables.fund_code = "01";
        modal.variables.status = "UNPAID";
        modal.getUserCredentials();
    }
	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

function SearchItemCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
    modal.searchSup;
    modal.searchCntr;
	$ocLazyLoad
		.load([TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            SearchItemSvc = $injector.get("SearchItemSvc");
			modal.getItem();
        });
   
        modal.getItem = function () {
            LOADING.classList.add("open");
            SearchItemSvc.get().then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                }
                modal.filtered = modal.ArrayList;
                LOADING.classList.remove("open");
            })
        }
    
	modal.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
            { name: "Item name", field: "item_name" },
            { name: "Description", field: "description" },
            { name: "Unit", field: "unit" },
            { name: "Account", field: "office" },
            { name: "Center/Program", field: "center_name"},
            { name: "Stock no", field: "stock_no" },
		],
		data: "modal.filtered",
		onRegisterApi: function (gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function (row) {
				modal.clickRow(row.entity);
			});
		}
	};

    modal.SearchingItem = function () {
		if (!modal.search_item) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.item_name.toUpperCase().startsWith(modal.search_item.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

	modal.searching = function () {
		if (!modal.search) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.stock_no.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

    modal.searchingSup = function () {
		if (!modal.searchSup) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.description.toUpperCase().startsWith(modal.searchSup.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

    modal.searchingCentrProg = function () {
		if (!modal.searchCntr) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.center_name.toUpperCase().startsWith(modal.searchCntr.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

function SearchPOCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
    modal.searchSup;
    modal.searchCntr;
	$ocLazyLoad
		.load([TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            console.log(data);
			modal.getPO();
        });
   
        modal.getPO = function () {
            LOADING.classList.add("open");
            InvEntrySvc.get({id:data}).then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                }
                modal.filtered = modal.ArrayList;
                LOADING.classList.remove("open");
            })
        }
    
	modal.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
            { name: "PO Number", field: "po_num" },
            { name: "Supplier", field: "supplier" },
            { name: "Amount", field: "amount_orsburs", cellClass: 'text-right', cellFilter: 'number: 2'},
            { name: "Center/Program", field: "center_name"},
            { name: "Assigned to", field: "assigned_to"},
		],
		data: "modal.filtered",
		onRegisterApi: function (gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function (row) {
				modal.clickRow(row.entity);
			});
		}
	};

    modal.searchingAssigned_to = function () {
		if (!modal.searchAssigned) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.assigned_to.toUpperCase().startsWith(modal.searchAssigned.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

	modal.searching = function () {
		if (!modal.search) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.po_num.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

    modal.searchingSup = function () {
		if (!modal.searchSup) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.supplier.toUpperCase().startsWith(modal.searchSup.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

    modal.searchingCentrProg = function () {
		if (!modal.searchCntr) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.center_name.toUpperCase().startsWith(modal.searchCntr.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

function ExistingProperty($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
    modal.variables.podtl_id = data;
    modal.searchAccount;
    modal.searchSubAccount;
	$ocLazyLoad
		.load([TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            ShowAllPropertySvc = $injector.get("ShowAllPropertySvc");
			modal.getProperty();
        });
   
        modal.getProperty = function () {
            LOADING.classList.add("open");
            ShowAllPropertySvc.get({id:modal.variables.podtl_id}).then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                }
                modal.filtered = modal.ArrayList;
                LOADING.classList.remove("open");
            })
        }
        modal.openOffice = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "office_code/search.html?v=" + VERSION,
                controllerName: "BrowseOfficeCodeCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "office_code/search.html?v=" + VERSION,
                    MASTERURL + "office_code/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    modal.variables.office_idlink = data.office_id;
                    modal.searchAccount = data.office;
                    modal.variables.office_code = data.office_code;
                    modal.variables.uacs_code = data.office_UACS;
                }
                modal.searchingAccount();
            });
        }
    
	modal.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Property No.", field: "property_no" },
                { name: "Unit", field: "unit" },
                { name: "Description", field: "description" },
                { name: "Account", field: "office" },
                { name: "Sub-account", field: "item_name" },
                { name: "Unit Cost/Original", field: "original_price", cellClass: 'text-right', cellFilter: 'number: 2'},
                { name: "Amount", field: "amount", cellClass: 'text-right', cellFilter: 'number: 2'},
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };
    modal.searchingDesc = function () {
		if (!modal.searchDesc) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.description.toUpperCase().startsWith(modal.searchDesc.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}

    modal.searchingAccount = function () {
		if (!modal.searchAccount) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.office.toUpperCase().startsWith(modal.searchAccount.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
    modal.searchingSubAccnt = function () {
		if (!modal.searchSubAccount) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.item_name.toUpperCase().startsWith(modal.searchSubAccount.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
	modal.searching = function () {
		if (!modal.search) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.property_no.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

function AddDeliveryCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variablesdtl = {};
	modal.ArrayList = [];
    modal.CenterdataList = [];
    modal.filtered = [];
    modal.search;
    modal.variables = data.dtl;
    modal.variables.qty = 0;
    modal.variablesdtl.qty = filter('number')(0,2);
    modal.totaldel = 0;
    modal.totaldel = filter('number')(0,2);
    modal.variables.po_num = data.hdr.po_num;
    modal.variables.pohdr_idlink = data.hdr.po_id;
    modal.variables.fund_name = data.hdr.fund_name;
    modal.variables.fund_idlink = data.hdr.fund_idlink;
    modal.variables.unit_idlink = data.dtl.unitid_link;
    modal.variables.podtl_idlink = data.dtl.podtl_id;
    // modal.variables.unit_rec = data.dtl.unit_cost;
    modal.variables.unit_rec = data.dtl.original_price;
    modal.variables.unit_name = data.dtl.unit;
    modal.variables.property_no = data.dtl.property_no;
    modal.variables.office = data.dtl.office;
    modal.variables.office_code = data.dtl.office_code;
    modal.variables.office_idlink = data.dtl.office_idlink;
    modal.variables.formula = data.dtl.formula;
    modal.item_name = data.dtl.item_name;
    modal.description = data.dtl.description;
    modal.disabled = true;
    modal.inventorytotalcost = 0;
    modal.inventorytotalcost = filter('number')(0,2);
    modal.inventorytotalcostindiv = 0;
    modal.inventorytotalcostindiv = filter('number')(0,2);
    modal.inventorycountindiv = 0;
    modal.inventorycountindiv = filter('number')(0);
    modal.valueindiv = 0;
    modal.valueindiv = filter('number')(0,2);
    modal.inventorycount = 0;
    modal.inventorycount = filter('number')(0);
    modal.issuecount = 0;
    modal.issuecount = filter('number')(0);
    modal.value = 0;
    modal.value = filter('number')(0,2);
    modal.variables.trans_date = filter("date")(new Date(),"MM/dd/yyyy");
    modal.unitcost_issue = 0;
    modal.unitcost_issue = filter('number')(modal.unitcost_issue, 2);
    modal.disabled = true;
    modal.show1st = true;
    modal.show2nd = true;
    modal.show3rd = true;
    modal.show4th = true;
    modal.show5th = true;
    modal.show6th = true;
    modal.show7th = true;
    modal.show8th = true;
    modal.show9th = true;
    modal.show10th = true;
    modal.show11th = true;
    modal.show12th = true;
    modal.stabilizer = data.dtl.unit_cost;
    // modal.variables.unit_rec = 0;
    // modal.variables.unit_rec = filter('number')(0,2);
    modal.checker = true;
    modal.variables.center_id = data.dtl.center_idlink;
    modal.center_idlink = data.dtl.center_idlink;
    modal.center = data.dtl.center_name;
    modal.stock_no = data.dtl.stock_no;
    modal.lock = false;
	$ocLazyLoad
        .load([APPURL + 'app.service.js?v=' + VERSION,TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               TRANSURL + 'slc_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            InvDeliveriesSvc = $injector.get("InvDeliveriesSvc");
            InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            DeliveryUpdateSvc = $injector.get("DeliveryUpdateSvc");
            SlcSvc = $injector.get("SlcSvc");
            LogsSvc = $injector.get("LogsSvc");
            AppSvc = $injector.get("AppSvc");
            GetCenterDataSvc = $injector.get("GetCenterDataSvc");
            modal.filter();
            modal.getSlc(modal.variables.pohdr_idlink,modal.variables.podtl_id,modal.variables.property_no);
            modal.eliminator();
            // modal.getDelivery(modal.variables.podtl_id);
            modal.computeTotalCost();
            modal.getUserCredentials();
            modal.getCenterData(modal.variables.property_no,modal.variables.center_id);
            console.log(modal.stabilizer);
        });

        modal.getUserCredentials = function () {
            LOADING.classList.add("open");
            AppSvc.get().then(function (response) {
                if (response) {
                    modal.credentials = response.record;
                    // modal.profile.ProfilePic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
                }
                modal.variables.deleted_by = modal.credentials.user;
                // modal.variables.delete_id = modal.credentials.LoginID;
                // modal.variables.delete_username = modal.credentials.Username;
                LOADING.classList.remove("open");
            });
        };

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }

        modal.getSlc = function (hdr,dtl,pro) {
            LOADING.classList.add("open");
            SlcSvc.get({hdr:hdr, dtl:dtl, pro:pro}).then(function (response) {
                if (response.message) {
                    modal.slcList = [];
                    modal.inventorycounttotal = 0;
                    modal.issuecount = 0;
                    modal.physicalcount =  parseInt(modal.inventorycounttotal) - parseInt(modal.issuecount);
                    modal.inventorycount = filter('number')(modal.physicalcount);
                    modal.issuecount = filter('number')(modal.issuecount);
                    modal.inventorycost = parseFloat(modal.stabilizer) * parseFloat(modal.physicalcount);
                    modal.inventorytotalcost = filter('number')(modal.inventorycost,2);
                    var RBalance = 0;
                    console.log("here");
                } else {
                    console.log(modal.stabilizer);
                    modal.slcList = response;
                    modal.filtered = modal.slcList;
                    modal.inventorycounttotal = 0;
                    modal.issuecount = 0;
                    var RBalance = 0;
                    var QtyRBalance = 0;
                    angular.forEach(modal.slcList, function(qty){
                        modal.inventorycounttotal = parseInt(modal.inventorycounttotal) + parseInt(qty.qty_rec);
                        if(qty.qty_rec > 0){
                            RBalance = RBalance + parseFloat(qty.totalcost_rec);
                            QtyRBalance = QtyRBalance + parseInt(qty.qty_rec);
                        }
                        else if(qty.qty_issue > 0){
                            RBalance = RBalance - parseFloat(qty.totalcost_issue);
                            QtyRBalance = QtyRBalance - parseFloat(qty.qty_issue);
                        }
                        qty.RBalance = RBalance;
                        qty.QtyRBalance = QtyRBalance;
                        // modal.physicalcount = RBalance;
                        // modal.inventorycost = QtyRBalance

                    });
                    angular.forEach(modal.slcList, function(qtyissue){
                        modal.issuecount = parseInt(modal.issuecount) + parseInt(qtyissue.qty_issue);
                    });
                    modal.physicalcount =  parseInt(modal.inventorycounttotal) - parseInt(modal.issuecount);
                    modal.inventorycount = filter('number')(modal.physicalcount);
                    modal.issuecount = filter('number')(modal.issuecount);
                    modal.inventorycost = parseFloat(modal.stabilizer) * parseFloat(modal.physicalcount);
                    modal.inventorytotalcost = filter('number')(modal.inventorycost,2);
                    console.log(modal.stabilizer, modal.inventorycount);
                }
                LOADING.classList.remove("open");
            })
        }

        modal.compute = function () {
            if(modal.variables.formula == "noneweighted"){
                modal.total = parseFloat(modal.variables.qty_rec) * parseFloat(modal.variables.unit_rec);
                modal.totaldel = filter('number')(modal.total,2);
                modal.cost = parseFloat(modal.inventorycost) + parseFloat(modal.total);
                modal.qty = parseInt(modal.physicalcount) + parseInt(modal.variables.qty_rec);
                // modal.weighted = parseFloat(modal.cost) / parseFloat(modal.qty);
                modal.weighted = modal.variables.unit_rec;
                modal.value = filter('number')(modal.weighted,2);

                modal.costindv = parseFloat(modal.inventorytotalcostindividual) + parseFloat(modal.total);
                modal.qtyindvi = parseInt(modal.inventorycountindividual) + parseInt(modal.variables.qty_rec);
                // modal.weightedindiv = parseFloat(modal.costindv) / parseFloat(modal.qtyindvi);
                modal.weightedindiv = modal.variables.unit_rec;
                modal.valueindiv = filter('number')(modal.weightedindiv,2);
    
                modal.variables.qty_bal = modal.qty;
                modal.variables.unitcost_bal = modal.weighted;
                modal.variables.unitcost_balindiv = modal.weightedindiv
                modal.variables.totalcost_bal = modal.cost
                modal.variables.weighted = modal.weighted;
            }
            else{
                modal.total = parseFloat(modal.variables.qty_rec) * parseFloat(modal.variables.unit_rec);
                modal.totaldel = filter('number')(modal.total,2);
                modal.cost = parseFloat(modal.inventorycost) + parseFloat(modal.total);
                modal.qty = parseInt(modal.physicalcount) + parseInt(modal.variables.qty_rec);
                modal.weighted = parseFloat(modal.cost) / parseFloat(modal.qty);
                modal.weighted = filterdecimal(modal.weighted);
                modal.value = filter('number')(modal.weighted,2);

                modal.costindv = parseFloat(modal.inventorytotalcostindividual) + parseFloat(modal.total);
                modal.qtyindvi = parseInt(modal.inventorycountindividual) + parseInt(modal.variables.qty_rec);
                modal.weightedindiv = parseFloat(modal.costindv) / parseFloat(modal.qtyindvi);
                modal.weightedindiv = filterdecimal(modal.weightedindiv);
                modal.valueindiv = filter('number')(modal.weightedindiv,2);

    
                modal.variables.qty_bal = modal.qty;
                modal.variables.unitcost_bal = modal.weighted;
                modal.variables.unitcost_balindiv = modal.weightedindiv
                modal.variables.totalcost_bal = modal.cost
                modal.variables.weighted = (modal.weighted);
            }
        }



        modal.getCenterData = function (pro,id) {
            LOADING.classList.add("open");
            GetCenterDataSvc.get({pro:pro,id:id}).then(function (response) {
                if(response.message){
                    modal.CenterdataList = [];
                    modal.inventorytotalcostindiv = 0;
                    modal.inventorytotalcostindiv = filter('number')(0,2);
                    modal.inventorycountindiv = 0;
                    modal.inventorycountindiv = filter('number')(0);

                    modal.inventorycountindividual = 0;
                    modal.inventorycounttotalindvi = 0;
                    modal.issuecountindivi  = 0;
                    modal.qtycountindv = 0;
                    modal.totalcostindv = 0;
                    modal.inventorytotalcostindividual = 0;
                    modal.inventorytotalcostindiv = 0;
                    modal.inventorycostindiv = 0;
                    modal.issuecostindvi = 0;
                    var RBalanceindv = 0;
                    var QtyRBalanceindv = 0;
                    angular.forEach(modal.CenterdataList, function(qtyindiv){
                        
                        modal.inventorycounttotalindvi = parseInt(modal.inventorycounttotalindvi) + parseInt(qtyindiv.qty_rec);
                        modal.inventorycostindiv = parseFloat(modal.inventorycostindiv) + parseFloat(qtyindiv.totalcost_rec);
                        
                        // if(qtyindiv.qty_rec > 0){
                        //     RBalanceindv = RBalanceindv + parseFloat(qtyindiv.totalcost_rec);
                        //     QtyRBalanceindv = QtyRBalanceindv + parseInt(qtyindiv.qty_rec);

                        // }
                        // else if(qtyindiv.qty_issue > 0){
                        //     RBalanceindv = RBalanceindv - parseFloat(qtyindiv.totalcost_issue);
                        //     QtyRBalanceindv = QtyRBalanceindv - parseFloat(qtyindiv.qty_issue);
       
                        // }
                        // qtyindiv.RBalanceindv = RBalanceindv;
                        // qtyindiv.QtyRBalanceindv = QtyRBalanceindv;
                    
                    })
                    angular.forEach(modal.slcList, function(qtyissue){
                        modal.issuecountindivi = parseInt(modal.issuecountindivi) + parseInt(qtyissue.qty_issue);
                        modal.issuecostindvi = parseFloat(modal.issuecostindvi) + parseFloat(qtyissue.totalcost_issue);
                    });
                    modal.inventorycountindividual = parseFloat(modal.inventorycounttotalindvi) - parseFloat(modal.issuecountindivi);
                    modal.inventorycountindiv = filter('number')(modal.inventorycountindividual);
                    modal.inventorytotalcostindividual = parseFloat(modal.inventorycostindiv) - parseFloat(modal.issuecostindvi);
                    modal.inventorytotalcostindiv = filter('number')(modal.inventorytotalcostindividual,2);
                }
                else{
                    modal.CenterdataList = response;
                    modal.inventorycountindividual = 0;
                    modal.inventorycounttotalindvi = 0;
                    modal.issuecountindivi  = 0;
                    modal.qtycountindv = 0;
                    modal.totalcostindv = 0;
                    modal.inventorytotalcostindividual = 0;
                    modal.inventorytotalcostindiv = 0;
                    modal.inventorycostindiv = 0;
                    modal.issuecostindvi = 0;
                    var RBalanceindv = 0;
                    var QtyRBalanceindv = 0;
                    angular.forEach(modal.CenterdataList, function(qtyindiv){
                        
                        // modal.inventorycounttotalindvi = parseInt(modal.inventorycounttotalindvi) + parseInt(qtyindiv.qty_rec);
                        // modal.inventorycostindiv = parseFloat(modal.inventorycostindiv) + parseFloat(qtyindiv.totalcost_rec);
                        
                        if(qtyindiv.qty_rec > 0){
                            RBalanceindv = RBalanceindv + parseFloat(qtyindiv.totalcost_rec);
                            QtyRBalanceindv = QtyRBalanceindv + parseInt(qtyindiv.qty_rec);
                        }
                        else if(qtyindiv.qty_issue > 0){
                            RBalanceindv = RBalanceindv - parseFloat(qtyindiv.totalcost_issue);
                            QtyRBalanceindv = QtyRBalanceindv - parseFloat(qtyindiv.qty_issue);
                        }
                    })
                        modal.inventorytotalcostindividual =  RBalanceindv;
                        modal.inventorycountindividual =  QtyRBalanceindv;
                    // angular.forEach(modal.slcList, function(qtyissue){
                    //     modal.issuecountindivi = parseInt(modal.issuecountindivi) + parseInt(qtyissue.qty_issue);
                    //     modal.issuecostindvi = parseFloat(modal.issuecostindvi) + parseFloat(qtyissue.totalcost_issue);
                    // });
                    // modal.inventorycountindividual = parseFloat(modal.inventorycounttotalindvi) - parseFloat(modal.issuecountindivi);
                    modal.inventorycountindiv = filter('number')(modal.inventorycountindividual);
                    // modal.inventorytotalcostindividual = parseFloat(modal.inventorycostindiv) - parseFloat(modal.issuecostindvi);
                    modal.inventorytotalcostindiv = filter('number')(modal.inventorytotalcostindividual,2);
                };
            })
            LOADING.classList.remove("open");
        }

        modal.openCenter = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                controllerName: "BrowseCenterCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    MASTERURL + "center_list/search.html?v=" + VERSION,
                    MASTERURL + "center_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    modal.variables.center_id = data.center_id;
                    modal.variables.division_unit = data.center_name;
                    modal.variables.center_name = data.center_name;
                    modal.variables.center_idlink = data.center_id;
                    modal.center = modal.variables.center_name;
                    modal.checker = false;
                    modal.getCenterData(modal.variables.property_no,modal.variables.center_idlink);
                }
                
            });
        }
        
        modal.clearFunction = function(){
            modal.variables.qty_rec = "";
            modal.variables.unit_rec = "";
            modal.variables.delivery = "";
            modal.variables.division_unit = "";
            modal.totaldel = 0;
            modal.totaldel = filter('number')(0,2);
            modal.lock = false;
        }
 

        modal.eliminator = function () {
            if(data.dtl.del1st > 0){
                modal.show1st = false;
            }
            if(data.dtl.del2nd > 0){
                modal.show2nd = false;
            }
            if(data.dtl.del3rd > 0){
                modal.show3rd = false;
            }
            if(data.dtl.del4th > 0){
                modal.show4th = false;
            }
            if(data.dtl.del5th > 0){
                modal.show5th = false;
            }
            if(data.dtl.del6th > 0){
                modal.show6th = false;
            }
            if(data.dtl.del7th > 0){
                modal.show7th = false;
            }
            if(data.dtl.del8th > 0){
                modal.show8th = false;
            }
            if(data.dtl.del9th > 0){
                modal.show9th = false;
            }
            if(data.dtl.del10th > 0){
                modal.show10th = false;
            }
            if(data.dtl.del11th > 0){
                modal.show11th = false;
            }
            if(data.dtl.del12th > 0){
                modal.show12th = false;
            }
        }


        modal.delete = function () {
            if (!modal.variables.slc_id) {
                return SlcSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            else{
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                    controllerName: "AuthenticationCtrl",
                    viewSize: "sm",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                        TRANSURL  + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        modal.variables.activity = "DELETION";
                        modal.variables.deleted_by = data.FullName;
                        modal.variables.delete_id = data.LoginID;
                        modal.variables.delete_username = data.Username;
                        modal.variables.item_code = modal.variables.property_no;
                        modal.variables.reason = data.reason;
                        SlcSvc.delete(modal.variables.slc_id).then(function (response) {
                            LogsSvc.save(modal.variables).then(function (response) {
                                if (response.success) {
                                    if (response.id) {
                                        modal.variables.activity_id = response.id;
                                    }
                                } 
                            })
                            if (response.success) {
                                modal.ArrayList.splice(
                                    modal.variables.index,
                                    1
                                );
                                modal.filtered = modal.ArrayList;
                                modal.variables.qty_rec = " ";
                                $uibModalInstance.close(modal.variables);
                                SlcSvc.showSwal('Success', response.message, 'success');
                            } else {
                                SlcSvc.showSwal('Warning', response.message, 'warning');
                            }
                            LOADING.classList.remove("open");
                        })
                    }
                });
            }
        }

        modal.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Qty Receipt", field: "qty_rec" },
                { name: "UC Receipt", field: "unit_rec", cellClass: 'text-right', cellFilter: 'number: 2'},
                { name: "TC Receipt", field: "totalcost_rec", cellClass: 'text-right', cellFilter: 'number: 2' },
                // { name: "Qty Issue", field: "qty_issue" },
                // { name: "UC Issue", field: "unitcost_issue", cellClass: 'text-right', cellFilter: 'number: 2' },
                // { name: "TC Issue", field: "totalcost_issue", cellClass: 'text-right', cellFilter: 'number: 2' },
                // { name: "Qty Balance", field: "qty_bal" },
                // { name: "TC Balance", field: "totalcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "Qty R Balance", field: "QtyRBalance" },
                { name: "UC Balance", field: "unitcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "R Balance", field: "RBalance", cellClass: 'text-right', cellFilter: 'number: 2' },
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };

        


        modal.getDelivery = function (dtl) {
            LOADING.classList.add("open");
            InvDeliveriesSvc.get({dtl:dtl}).then(function (response) {
                
                if(response.message){
                    modal.ArrayList = [];
                }
                else{
                    modal.ArrayList = response;
                    modal.filtered = modal.ArrayList;
                }
                
            })
        }

 
        modal.computeTotalCost = function (){
            
            // modal.value = filter('number')(modal.weighted,2);
        }

        modal.filter = function(){
            if(modal.variables.delivery){
                modal.disabled = false;
            }
            if(modal.variables.delivery === "adjustment"){
                modal.variables.division_unit = "adjustment";
            }
            else{
                modal.variables.division_unit = "";
            }
        }

        function filterdecimal (data) {
            var num = data
            var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
            return modal.variables.weighted = with2Decimals;
            // rounded.value = with2Decimals;
          }
   
        modal.save = function () {
            modal.variables.center_idlink = modal.center_idlink;
            modal.variables.division_unit = modal.center;
            modal.variables.center_name = modal.center;
            modal.variables.totalcost_rec = modal.total;
            modal.variables.item_code = data.dtl.property_no;
            modal.variables.fund_code = data.hdr.fund_code;
            modal.variables.item_name = data.dtl.item_name;
            modal.variables.item_description = data.dtl.description;
            modal.variables.trans_date = getDate(modal.variables.trans_date);
            modal.variables.unitcost_bal = modal.variables.weighted;
            modal.variables.unitcost_balindiv = modal.weightedindiv;
            modal.variables.stock_no = modal.stock_no;
            if(!modal.variables.qty_rec){
                InvDeliverySvc.showSwal('Warning', "Qty field is empty.", 'warning');
            }
            if(!modal.center){
                InvDeliverySvc.showSwal('Warning', "Please choose PO by.", 'warning');
            }
            else if(!modal.variables.delivery){
                InvDeliverySvc.showSwal('Warning', "Delivery field is empty.", 'warning');
            }
            else if(modal.variables.qty_rec <= 0){
                InvDeliverySvc.showSwal('Warning', "Cannot accept zero and less than zero qty.", 'warning');
            }
            else if(modal.variables.slc_id){
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                    controllerName: "AuthenticationCtrl",
                    viewSize: "sm",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                        TRANSURL  + "inventory_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        modal.variables.activity = "UPDATE";
                        modal.variables.deleted_by = data.FullName;
                        modal.variables.delete_id = data.LoginID;
                        modal.variables.delete_username = data.Username;
                        modal.variables.reason = data.reason;
                        if(modal.variables.slc_id){
                            LogsSvc.save(modal.variables).then(function (response) {
                                if (response.success) {
                                    if (response.id) {
                                        modal.variables.activity_id = response.id;
                                    }
                                } 
                            })
                            InvDeliverySvc.save(modal.variables).then(function (response) {
                                if (response.success) {
                                    if (response.id) {
                                        modal.variables.slc_id = response.id;
                                        InvDeliverySvc.showSwal('Success', response.message, 'success');
                                    }
                                    else {
                                        InvDeliverySvc.showSwal('Success', response.message, 'success');
                                    }
                                    $uibModalInstance.close(modal.variables);
                                } else {
                                    InvDeliverySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                        else{
                            InvDeliverySvc.save(modal.variables).then(function (response) {
                                if (response.success) {
                                    if (response.id) {
                                        modal.variables.slc_id = response.id;
                                        InvDeliverySvc.showSwal('Success', response.message, 'success');
                                    }
                                    else {
                                        InvDeliverySvc.showSwal('Success', response.message, 'success');
                                    }
                                    $uibModalInstance.close(modal.variables);
                                } else {
                                    InvDeliverySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    }
                });
            }
            else{
                // modal.getUserCredentials();
                modal.variables.deleted_by = modal.credentials.user;
                modal.variables.activity = "INSERT";
                    LogsSvc.save(modal.variables).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                modal.variables.activity_id = response.id;
                            }
                        } 
                    })
                    InvDeliverySvc.save(modal.variables).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                modal.variables.slc_id = response.id;
                                InvDeliverySvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                InvDeliverySvc.showSwal('Success', response.message, 'success');
                            }
                            $uibModalInstance.close(modal.variables);
                        } else {
                            InvDeliverySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        LOADING.classList.remove("open");
                    })
                }
        }
        modal.clickRow = function (x) {
            modal.variables = {
                slc_id: x.slc_id,
                pohdr_idlink: x.pohdr_idlink,
                podtl_idlink: x.podtl_idlink,
                po_num: x.po_num,
                fund_idlink: x.fund_idlink,
                fund_name: x.fund_name,
                fund_code: x.fund_code,
                item_name: x.item_name,
                item_description: x.item_description,
                unit_idlink: x.unit_idlink,
                unit: x.unit_name,
                unit_name: x.unit_name,
                property_no: x.item_code,
                reorder_point: x.reorder_point,
                ris	: x.ris	,
                jev: x.jev,
                qty_rec: x.qty_rec,
                unit_rec: x.unit_rec,
                totalcost_rec: x.totalcost_rec,
                qty_issue: x.qty_issue,
                unitcost_issue	: x.unitcost_issue,
                totalcost_issue: x.totalcost_issue,
                qty_bal: x.qty_bal,
                unitcost_bal: x.unitcost_bal,
                totalcost_bal: x.totalcost_bal,
                daysto_consume: x.daysto_consume,
                trans_date: x.trans_date,
                delivery: x.delivery,
                weighted: x.weighted,
                office: x.office,
                office_code: x.office_code,
                office_idlink: x.office_idlink,
                division_unit: x.division_unit,
                center_id: x.center_id,
                center_idlink: x.center_idlink,
                index: modal.slcList.indexOf(x)
            };
            // modal.variables.qty_rec = 0;
            // modal.variables.unit_rec = 0;
            modal.center = modal.variables.division_unit;
            modal.lock = true;
            modal.disabled = true;
            if(!modal.center){
                modal.checker = true;
            }
            else{
                modal.checker = false;
                // modal.disabled = false;
            }
                    modal.physicalcount =  0;
                    modal.inventorycount = filter('number')(0);
                    modal.issuecount = filter('number')(0,2);
                    modal.inventorycost = 0;
                    modal.inventorytotalcost = filter('number')(0,2);
            // modal.getCenterData(modal.variables.property_no,modal.variables.center_id);
            modal.compute();
            // modal.getSlc(modal.variables.pohdr_idlink,modal.variables.podtl_id,modal.variables.property_no);
            if(modal.variables.qty_rec === 0){
                modal.disabled = true;
            }   
            else if (modal.variables.qty_rec <= 0){
                modal.disabled = true;
            }
            else{
                // modal.disabled = false;
            }
            modal.unit_cost = filter('number')(modal.variablesdtl.unit_cost,2);
            // modal.addition();
            modal.getSlc(modal.variables.po_id,modal.variablesdtl.podtl_id);
        }
	modal.searching = function () {
		if (!modal.search) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.po_num.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
	// modal.clickRow = function () {
	// 	$uibModalInstance.close(modal.variables);
	// }
	modal.close = function () {
        $uibModalInstance.dismiss('cancel');
	}
}

function AddpaymentCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
    // modal.variables.po_num = data.hdr.po_num;
    // modal.variables.pohdr_idlink = data.hdr.po_id;
    // modal.variables.fund_name = data.hdr.fund_name;
    // modal.variables.fund_idlink = data.hdr.fund_idlink;
    // modal.variables.unit_idlink = data.dtl.unitid_link;
    // modal.variables.podtl_idlink = data.dtl.podtl_id;
    // modal.variables.unit_rec = data.dtl.unit_cost;
    // modal.variables.unit_name = data.dtl.unit;
    // modal.variables.property_no = data.dtl.property_no;
    // modal.variables.office = data.dtl.office;
    // modal.variables.office_code = data.dtl.office_code;
    // modal.variables.office_idlink = data.dtl.office_idlink;
    // modal.variables.formula = data.dtl.formula;
    modal.variables.po_hdridlink = data.po_id;
    modal.variables.po_num = data.po_num;
    modal.variables.payment_amt = 0;
    modal.variables.payment_amt = filter('number')(0,2);
    modal.variables.amount_orsburs = data.amount_orsburs;
    modal.amount_orsburs = filter('number')(modal.variables.amount_orsburs,2);
    modal.totalada = 0;
    modal.totalada = filter('number')(0,2);
    modal.variables.ada_date = filter("date")(new Date(),"MM/dd/yyyy");
	$ocLazyLoad
        .load([TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               TRANSURL + 'slc_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            InvDeliveriesSvc = $injector.get("InvDeliveriesSvc");
            InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            DeliveryUpdateSvc = $injector.get("DeliveryUpdateSvc");
            SlcSvc = $injector.get("SlcSvc");
            PaymentSvc = $injector.get("PaymentSvc");
            UpdateSvc = $injector.get("UpdateSvc");
            // modal.getDelivery(modal.variables.podtl_id);
            modal.getPayment(modal.variables.po_hdridlink);
        });

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }

        modal.delete = function () {
            if (!modal.variables.payment_id) {
                return PaymentSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            else{
                PaymentSvc.delete(modal.variables.payment_id).then(function (response) {
                        modal.variables.status = "UNPAID";
                        UpdateSvc.save(modal.variables).then(function(response){
                        if(response.success){
                            modal.variables.pohdr_idlink = response.id;
                        }
                    })
                    if (response.success) {
                        modal.ArrayList.splice(
                            modal.variables.index,
                            1
                        );
                        modal.filtered = modal.ArrayList;
                        
                        PaymentSvc.showSwal('Success', response.message, 'success');
                    } else {
                        PaymentSvc.showSwal('Warning', response.message, 'warning');
                    }
                    modal.getPayment(modal.variables.po_hdridlink);
                    $uibModalInstance.close(modal.variables);
                    LOADING.classList.remove("open");
                })
            }
        }

        modal.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "PO number", field: "po_num"},
                { name: "JEV", field: "jev_number"},
                { name: "ADA Date", field: "ada_date" },
                { name: "ADA number", field: "ada_number"},
                { name: "ADA Amount", field: "payment_amt", cellClass: 'text-right', cellFilter: 'number: 2'},
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };

        modal.compute = function (){
            modal.subtotal = parseFloat(modal.variables.amount_orsburs) - parseFloat(modal.variables.payment_amt); 
            modal.amount_orsburs = filter('number')(modal.subtotal,2);
        }

        modal.getPayment = function (data) {
            LOADING.classList.add("open");
            PaymentSvc.get({id:data}).then(function (response) {
                if(response.message){
                    modal.ArrayList = [];
                }
                else{
                    modal.total = 0;
                    angular.forEach(response, function(qty){
                        modal.total = parseFloat(modal.total) + parseFloat(qty.payment_amt);
                    });
                    modal.variables.amount_orsburs = parseFloat(modal.variables.amount_orsburs) - parseFloat(modal.total)
                    modal.totalada = filter('number')(modal.total,2);
                    modal.amount_orsburs = filter('number')(modal.variables.amount_orsburs,2);
                    modal.ArrayList = response;
                    modal.filtered = modal.ArrayList;
                }
                LOADING.classList.remove("open");
            })
        }
   
        modal.save = function () {
                modal.variables.ada_date = getDate(modal.variables.ada_date);
                if(!modal.variables.ada_number){
                    PaymentSvc.showSwal('Ooops', "Please fill-up ADA number to proceed", 'warning');
                }
                else if(!modal.variables.jev_number){
                    PaymentSvc.showSwal('Ooops', "Please fill-up JEV number to proceed", 'warning');
                }
                else if(modal.subtotal < 0){
                    PaymentSvc.showSwal('Ooops', "Payment is too much. Please enter exact payment.", 'warning');
                }
                else{
                    if(modal.subtotal <= 0){
                        modal.variables.status = "PAID";
                    }
                    else{
                        modal.variables.status = "UNPAID";
                    }
                    LOADING.classList.add("open");
                    PaymentSvc.save(modal.variables).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                modal.variables.slc_id = response.id;
                                PaymentSvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                PaymentSvc.showSwal('Success', response.message, 'success');
                            }
                            $uibModalInstance.close(modal.variables);
                            // modal.clearFunction();
                        } else {
                            PaymentSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        LOADING.classList.remove("open");
                    })
                }
        }
        modal.clickRow = function (x) {
            modal.variables = {
                payment_id: x.payment_id,
                ada_date: x.ada_date,
                ada_number: x.ada_number,
                jev_number: x.jev_number,
                payment_amt: x.payment_amt,
                po_num: x.po_num,
                po_hdridlink: x.po_hdridlink,
                index: modal.ArrayList.indexOf(x)
            };
        }
	modal.searching = function () {
		if (!modal.search) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.po_num.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
    modal.clearFunction = function () {
        modal.variables.jev_number = "";
        modal.variables.ada_number = "";
        modal.variables.payment_amt = 0;
        modal.variables.payment_amt = filter('number')(0,2);
        modal.variables.amount_orsburs = data.amount_orsburs;
        modal.amount_orsburs = filter('number')(modal.variables.amount_orsburs,2);
        // modal.totalada = 0;
        // modal.totalada = filter('number')(0,2);
        modal.variables.ada_date = filter("date")(new Date(),"MM/dd/yyyy");
    }
	// modal.clickRow = function () {
	// 	$uibModalInstance.close(modal.variables);
	// }
	modal.close = function () {
        $uibModalInstance.dismiss('cancel');
	}
}

function CancellationCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
    // modal.variables.po_num = data.hdr.po_num;
    // modal.variables.pohdr_idlink = data.hdr.po_id;
    // modal.variables.fund_name = data.hdr.fund_name;
    // modal.variables.fund_idlink = data.hdr.fund_idlink;
    // modal.variables.unit_idlink = data.dtl.unitid_link;
    // modal.variables.podtl_idlink = data.dtl.podtl_id;
    // modal.variables.unit_rec = data.dtl.unit_cost;
    // modal.variables.unit_name = data.dtl.unit;
    // modal.variables.property_no = data.dtl.property_no;
    // modal.variables.office = data.dtl.office;
    // modal.variables.office_code = data.dtl.office_code;
    // modal.variables.office_idlink = data.dtl.office_idlink;
    // modal.variables.formula = data.dtl.formula;
    // modal.variables.po_hdridlink = data.po_id;
    // modal.variables.po_num = data.po_num;
    // modal.variables.payment_amt = 0;
    // modal.variables.payment_amt = filter('number')(0,2);
    // modal.variables.amount_orsburs = data.amount_orsburs;
    // modal.amount_orsburs = filter('number')(modal.variables.amount_orsburs,2);
    // modal.totalada = 0;
    // modal.totalada = filter('number')(0,2);
    // modal.variables.ada_date = filter("date")(new Date(),"MM/dd/yyyy");
    modal.variables.po_num = data.hdr.po_num;
    modal.variables.pohdr_idlink = data.hdr.po_id;
    modal.variables.fund_name = data.hdr.fund_name;
    modal.variables.fund_idlink = data.hdr.fund_idlink;
    modal.variables.unit_idlink = data.dtl.unitid_link;
    modal.variables.podtl_idlink = data.dtl.podtl_id;
    // modal.variables.unit_rec = data.dtl.unit_cost;
    modal.variables.unit_name = data.dtl.unit;
    modal.variables.property_no = data.dtl.property_no;
    modal.variables.office = data.dtl.office;
    modal.variables.office_code = data.dtl.office_code;
    modal.variables.office_idlink = data.dtl.office_idlink;
    modal.variables.formula = data.dtl.formula;
	$ocLazyLoad
        .load([APPURL + 'app.service.js?v=' + VERSION, TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               TRANSURL + 'slc_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            InvDeliveriesSvc = $injector.get("InvDeliveriesSvc");
            InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            DeliveryUpdateSvc = $injector.get("DeliveryUpdateSvc");
            SlcSvc = $injector.get("SlcSvc");
            PaymentSvc = $injector.get("PaymentSvc");
            UpdateSvc = $injector.get("UpdateSvc");
            CancelSvc = $injector.get("CancelSvc");
            LogsSvc = $injector.get("LogsSvc");
            // modal.getDelivery(modal.variables.podtl_id);
            modal.getUserCredentials();
        });

        modal.getUserCredentials = function () {
            LOADING.classList.add("open");
            AppSvc.get().then(function (response) {
                if (response) {
                    modal.credentials = response.record;
                    // modal.profile.ProfilePic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
                }
                modal.variables.canceled_by = modal.credentials.user;
                LOADING.classList.remove("open");
            });
        };

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }
   
        modal.save = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                controllerName: "AuthenticationCtrl",
                viewSize: "sm",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    TRANSURL + "inventory_entry/authentication.html?v=" + VERSION,
                    TRANSURL  + "inventory_entry/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                    if(data){
                        
                        modal.variables.po_id = modal.variables.pohdr_idlink;
                        modal.variables.cancellation_status = "CANCELED";
                        modal.variables.activity = "PO CANCELLATION";
                        modal.variables.deleted_by = data.FullName;
                        modal.variables.delete_id = data.LoginID;
                        modal.variables.username = data.Username;
                        modal.variables.reason = data.reason;
                        LOADING.classList.add("open");
                        CancelSvc.save(modal.variables).then(function (response) {
                            if (response.success) {
                                LogsSvc.save(modal.variables).then(function (response) {
                                    if (response.success) {
                                        if (response.id) {
                                            modal.variables.activity_id = response.id;
                                        }
                                    } 
                                })
                                if (response.id) {
                                    modal.variables.po_id = response.id;
                                    CancelSvc.showSwal('Success', response.message, 'success');
                                    }
                                    else {
                                        CancelSvc.showSwal('Success', response.message, 'success');
                                    }
                                        $uibModalInstance.close(modal.variables);                    
                            } else {
                                        CancelSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                    }
                                    LOADING.classList.remove("open");
                                })
                            }
                    });
        }

    modal.clearFunction = function () {
        
    }
	// modal.clickRow = function () {
	// 	$uibModalInstance.close(modal.variables);
	// }
	modal.close = function () {
        $uibModalInstance.dismiss('cancel');
	}
}

function AuthenticationCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
   
	$ocLazyLoad
        .load([APPURL + 'app.service.js?v=' + VERSION, TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               TRANSURL + 'slc_entry/service.js?v=' + VERSION,]).then(function (d) {
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            InvDeliveriesSvc = $injector.get("InvDeliveriesSvc");
            InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            DeliveryUpdateSvc = $injector.get("DeliveryUpdateSvc");
            SlcSvc = $injector.get("SlcSvc");
            PaymentSvc = $injector.get("PaymentSvc");
            UpdateSvc = $injector.get("UpdateSvc");
            CancelSvc = $injector.get("CancelSvc");
            AuthenticationSvc = $injector.get("AuthenticationSvc");
            // modal.getDelivery(modal.variables.podtl_id);
        });

        modal.getAuth = function () {
            if(!modal.variables.reason){
                AuthenticationSvc.showSwal('Ooops',"Please write a reason to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                AuthenticationSvc.get({username: modal.variables.Username,password:modal.variables.Password}).then(function (response) {
                    if (response.message) {
                        AuthenticationSvc.showSwal('Ooops',"Couldn't find this account.", 'warning');
                        modal.clearFunction();
                    }
                    else{
                        modal.ArrayList = response;
                        modal.variables.UserLevel = modal.ArrayList[0].UserLevel;
                        if(modal.variables.UserLevel === "SCHEMA ADMIN"){
                            modal.variables.LoginID = modal.ArrayList[0].LoginID;
                            modal.variables.FullName = modal.ArrayList[0].FullName;
                            modal.variables.Username = modal.ArrayList[0].Username;
                            $uibModalInstance.close(modal.variables);
                        }
                        
                        else if(modal.variables.UserLevel === "ADMIN"){
                            modal.variables.LoginID = modal.ArrayList[0].LoginID;
                            modal.variables.FullName = modal.ArrayList[0].FullName;
                            modal.variables.Username = modal.ArrayList[0].Username;
                            $uibModalInstance.close(modal.variables);
                        }
                        else{
                            AuthenticationSvc.showSwal('Ooops'," This account is not an admin account.", 'warning');
                        }
                    }
                    LOADING.classList.remove("open");
                });
            }
        };

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }

    modal.clearFunction = function () {
        modal.variables.Username = "";
        modal.variables.Password = "";
    }
	// modal.clickRow = function () {
	// 	$uibModalInstance.close(modal.variables);
	// }
	modal.close = function () {
        $uibModalInstance.dismiss('cancel');
	}
}

function BydateCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    modal.filtered = [];
    modal.search;
    modal.variables.from = filter("date")(new Date(),"MM/dd/yyyy");
    modal.variables.to = filter("date")(new Date(),"MM/dd/yyyy");
    modal.variables.podtl_id = data.dtl.podtl_id;
    modal.variables.fund_name = data.hdr.fund_name;
    modal.variables.item_name = data.dtl.item_name;
    modal.variables.description = data.dtl.description;
    modal.variables.unit = data.dtl.unit;
    modal.variables.property_no = data.dtl.property_no;
    modal.variables.office = data.dtl.office;
    modal.variables.formula = data.dtl.formula;
    modal.variables.additional_desc = data.dtl.additional_desc;

   
	$ocLazyLoad
        .load([APPURL + 'app.service.js?v=' + VERSION, TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               TRANSURL + 'slc_entry/service.js?v=' + VERSION,]).then(function (d) {
            DateSvc = $injector.get("DateSvc");
            CreatePoSvc = $injector.get("CreatePoSvc");
            InvEntrySvc = $injector.get("InvEntrySvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            InvDeliveriesSvc = $injector.get("InvDeliveriesSvc");
            InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            DeliveryUpdateSvc = $injector.get("DeliveryUpdateSvc");
            SlcSvc = $injector.get("SlcSvc");
            PaymentSvc = $injector.get("PaymentSvc");
            UpdateSvc = $injector.get("UpdateSvc");
            CancelSvc = $injector.get("CancelSvc");
            AuthenticationSvc = $injector.get("AuthenticationSvc");
            // modal.getDelivery(modal.variables.podtl_id);
        });


        modal.generateSlc = function(){
            modal.variables.from = getDate(modal.variables.from);
            modal.variables.to = getDate(modal.variables.to);
            if(!modal.variables.podtl_id){
                InvEntrySvc.showSwal('Warning', "Please choose Property to generate.", 'warning');
            }
            else if(!modal.variables.from){
                InvEntrySvc.showSwal('Warning', "Please choose Date from to generate.", 'warning');
            }
            else if(!modal.variables.to){
                InvEntrySvc.showSwal('Warning', "Please choose Date to to generate.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                DateSvc.save({
                id: modal.variables.podtl_id,pro: modal.variables.property_no, from: modal.variables.from, to: modal.variables.to
                }).then(function (response) {
                    window.open(
                      "report/supplies_ledger/bydate?id=" + modal.variables.podtl_id + "&fund_name=" + modal.variables.fund_name +
                      "&item_name=" + modal.variables.item_name + "&description=" + modal.variables.description +
                      "&unit=" + modal.variables.unit + "&property_no=" + modal.variables.property_no + 
                      "&podtl_idlink=" + modal.variables.podtl_id + "&account=" + modal.variables.office + "&formula=" + modal.variables.formula + "&additional_desc=" + modal.variables.additional_desc + 
                      "&from=" + modal.variables.from + "&to=" + modal.variables.to 
                    );
                LOADING.classList.remove("open");
              }); 
            }
          }

        modal.getAuth = function () {
            LOADING.classList.add("open");
            AuthenticationSvc.get({username: modal.variables.Username,password:modal.variables.Password}).then(function (response) {
                if (response.message) {
                    AuthenticationSvc.showSwal('Ooops',"Couldn't find this account.", 'warning');
                    modal.clearFunction();
                }
                else{
                    modal.ArrayList = response;
                    modal.variables.UserLevel = modal.ArrayList[0].UserLevel;
                    if(modal.variables.UserLevel === "SCHEMA ADMIN"){
                        modal.variables.LoginID = modal.ArrayList[0].LoginID;
                        modal.variables.FullName = modal.ArrayList[0].FullName;
                        modal.variables.Username = modal.ArrayList[0].Username;
                        $uibModalInstance.close(modal.variables);
                    }
                    
                    else if(modal.variables.UserLevel === "ADMIN"){
                        modal.variables.LoginID = modal.ArrayList[0].LoginID;
                        modal.variables.FullName = modal.ArrayList[0].FullName;
                        modal.variables.Username = modal.ArrayList[0].Username;
                        $uibModalInstance.close(modal.variables);
                    }
                    else{
                        AuthenticationSvc.showSwal('Ooops'," This account is not an admin account.", 'warning');
                    }
                }
                LOADING.classList.remove("open");
            });
        };

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function getDate(inputDate) {
            var dt = new Date(inputDate);
            var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
            return dtString;
        }

    modal.clearFunction = function () {
        modal.variables.Username = "";
        modal.variables.Password = "";
    }
	// modal.clickRow = function () {
	// 	$uibModalInstance.close(modal.variables);
	// }
	modal.close = function () {
        $uibModalInstance.dismiss('cancel');
	}
}
