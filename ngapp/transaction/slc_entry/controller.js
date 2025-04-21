//main.js
angular.module('app')
	.controller('SlcCtrl', SlcCtrl)
    .controller('BrowseROCtrl', BrowseROCtrl)
	.controller('BrowsePropertyCtrl', BrowsePropertyCtrl)
    .controller('BrowseROcentersCtrl', BrowseROcentersCtrl)
    .controller('BrowseGetpropertyCtrl', BrowseGetpropertyCtrl)
    SlcCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];
    BrowsePropertyCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    BrowseROCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    BrowseROcentersCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    BrowseGetpropertyCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function SlcCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
    vm.CenterdataList = [];
    vm.slcList = [];
    vm.issueList = [];
	vm.variables = {};
    vm.filtered = [];
    vm.filtered2 = [];
    vm.totaliss = 0;
    vm.totaliss = filter('number')(0,2);
    vm.variables.unitcost_issue = 0;
    vm.variables.unitcost_issue = filter('number')(0,2);
    vm.variables.qty_issue = 0;
    vm.variables.qty_issue = filter('number')(0);
    vm.disabled = true;
    vm.variables.trans_date = filter('date')(new Date(), "MM/dd/yyyy");
    vm.inventorytotalcost = 0;
    vm.inventorytotalcost = filter('number')(0,2);
    vm.inventorycount = 0;
    vm.inventorycount = filter('number')(0);
    vm.unitcost_issue = 0;
    vm.unitcost_issue = filter('number')(0,2);
    vm.poremaining = 0;
    vm.poremaining = filter('number')(0,2);

    vm.inventorytotalcostindiv = 0;
    vm.inventorytotalcostindiv = filter('number')(0,2);
    vm.inventorycountindiv = 0;
    vm.inventorycountindiv = filter('number')(0);
    vm.valueindiv = 0;
    vm.valueindiv = filter('number')(0,2);
    vm.totalissindvi = 0;
    vm.totalissindvi = filter('number')(0,2);
    vm.disabler = false;
    vm.hide = false;

	$ocLazyLoad
        .load([TRANSURL + 'slc_entry/service.js?v=' + VERSION,
               TRANSURL + 'inventory_entry/service.js?v=' + VERSION,
               ADMINURL + 'admin_lock/service.js?v=' + VERSION,
               APPURL + 'app.service.js?v=' + VERSION
            ]).then(function (d) {
            SlcSvc = $injector.get("SlcSvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            InvIssuanceSvc = $injector.get("InvIssuanceSvc");
            LogsSvc = $injector.get("LogsSvc");
            GetCenterDataSvc = $injector.get("GetCenterDataSvc");
            SlcGenerationOfficeSvc = $injector.get("SlcGenerationOfficeSvc");
            LockSvc = $injector.get("LockSvc");
            GetCenterInfo = $injector.get("GetCenterInfo");
            vm.getUserCredentials();
            vm.getStatusList();
        });

        vm.refresh = function (){
            vm.CenterdataList = [];
            vm.slcList = [];
            vm.issueList = [];
            vm.variables = {};
            vm.filtered = [];
            vm.filtered2 = [];
            vm.totaliss = 0;
            vm.totaliss = filter('number')(0,2);
            vm.variables.unitcost_issue = 0;
            vm.variables.unitcost_issue = filter('number')(0,2);
            vm.variables.qty_issue = 0;
            vm.variables.qty_issue = filter('number')(0);
            vm.disabled = true;
            vm.variables.trans_date = filter('date')(new Date(), "MM/dd/yyyy");
            vm.inventorytotalcost = 0;
            vm.inventorytotalcost = filter('number')(0,2);
            vm.inventorycount = 0;
            vm.inventorycount = filter('number')(0);
            vm.unitcost_issue = 0;
            vm.unitcost_issue = filter('number')(0,2);
            vm.poremaining = 0;
            vm.poremaining = filter('number')(0,2);
        
            vm.inventorytotalcostindiv = 0;
            vm.inventorytotalcostindiv = filter('number')(0,2);
            vm.inventorycountindiv = 0;
            vm.inventorycountindiv = filter('number')(0);
            vm.valueindiv = 0;
            vm.valueindiv = filter('number')(0,2);
            vm.totalissindvi = 0;
            vm.totalissindvi = filter('number')(0,2);
            vm.disabler = false;
            vm.hide = false;
            vm.getUserCredentials();
            vm.getStatusList();
        }

        vm.getStatusList = function () {
            LOADING.classList.add("open");
            $data = 1;
            LockSvc.get({id:$data}).then(function (response) {
                // if (response.message) {
                //     vm.LockList = [];
                // } else {
                //     vm.LockList = response;
                // }
                // vm.filtered = vm.LockList;
                vm.lock_id = response[0].lock_id;
                vm.status = response[0].status;
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
                    vm.variables.center_fname = "";
                }
                else{
                    vm.variables.center_fname = response[0].center_fname;
                }
                LOADING.classList.remove("open");
            })
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



        vm.openCenter = function (data) {
            if(vm.level === "SUPPLY"){
                    var options = {
                        data: '',
                        animation: true,
                        templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                        controllerName: "BrowseROcentersCtrl",
                        viewSize: "lg",
                        windowClass: 'modal modal-slide-in-full',
                        filesToLoad: [
                            MASTERURL + "center_list/search.html?v=" + VERSION,
                            TRANSURL + "slc_entry/controller.js?v=" + VERSION
                        ]
                    };
                    AppSvc.modal(options).then(function (data) {
                        if(data){
                            // vm.variableSub.subacct_id = data.subacct_id;
                            vm.variables.center_id = data.center_id;
                            vm.variables.center_idlink = data.center_id;
                            vm.variables.center_name = data.center_name;
                            vm.variables.division_unit = data.center_name;
                            vm.variables.center_fname = data.center_fname;
                            vm.variables.subadmin_access = data.subadmin_access;
                        }
                    });
                }
                else if(vm.level === "ADMIN"){
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
                        console.log(data);
                        if(data){
                            // vm.variableSub.subacct_id = data.subacct_id;
                            vm.variables.center_id = data.center_id;
                            vm.variables.center_idlink = data.center_id;
                            vm.variables.center_name = data.center_name;
                            vm.variables.division_unit = data.center_name;
                            vm.variables.center_fname = data.center_fname;
                            vm.variables.subadmin_access = data.subadmin_access;
                        }
                    });
                }
                else if(vm.level === "SCHEMA ADMIN"){
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
                        console.log(data);
                        if(data){
                            // vm.variableSub.subacct_id = data.subacct_id;
                            vm.variables.center_id = data.center_id;
                            vm.variables.center_idlink = data.center_id;
                            vm.variables.center_name = data.center_name;
                            vm.variables.division_unit = data.center_name;
                            vm.variables.center_fname = data.center_fname;
                            vm.variables.subadmin_access = data.subadmin_access;
                        }
                    });
                }
                else{
                    vm.variables.division_unit = vm.variables.center_name;
                }
                
            } 
        

        vm.openModal = function (number) {
            if(!vm.variables.division_unit){
                SlcSvc.showSwal('Warning', 'Please choose a center first to proceed.', 'warning');
            }
            else{
                if(number === 1){
                    if(vm.level === "SUPPLY"){
                        var options = {
                            data: vm.variables.center_idlink,
                            animation: true,
                            templateUrl: TRANSURL + "inventory_entry/search.html?v=" + VERSION,
                            controllerName: "BrowseROCtrl",
                            viewSize: "lg",
                            windowClass: 'modal modal-slide-in-full',
                            filesToLoad: [
                                TRANSURL + "inventory_entry/search.html?v=" + VERSION,
                                TRANSURL + "slc_entry/controller.js?v=" + VERSION
                            ]
                        };
                    }
                    else{
                        var options = {
                            data: vm.variables.center_idlink,
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
                        vm.clearFunction();
                        if(data){
                            vm.variables.pohdr_idlink = data.po_id;
                            vm.variables.po_num = data.po_num;
                            // vm.variables.supplier_idlink = data.supplier_idlink;
                            // vm.variables.supplier = data.supplier;
                            // vm.variables.sup_address = data.sup_address;
                            // vm.variables.sup_tin = data.sup_tin;
                            // vm.variables.po_date = data.po_date;
                            // vm.variables.mode_procurement = data.mode_procurement;
                            // vm.variables.orsburs_no = data.orsburs_no;
                            // vm.variables.date_orsburs = getDate(data.date_orsburs);
                            // vm.variables.amount_orsburs = data.amount_orsburs;
                            // vm.variables.total_orsbur = filter('number')(vm.variables.amount_orsburs,2);
                            // vm.variables.award_date = getDate(data.award_date);
                            vm.variables.fund_code = data.fund_code;
                            vm.variables.fund_name = data.fund_name;
                            vm.variables.fund_idlink = data.fund_idlink;
                            // vm.variables.office_idlink = data.office_idlink;
                            // vm.variables.office_code = data.office_code;
                            // vm.variables.office = data.office;
                        }
                    });
                }
                else{
                    if(!vm.variables.center_id){
                        SlcSvc.showSwal('Warning', 'Please choose a center first to proceed.', 'warning');
                    }
                    else{
                        vm.getDetail();
                        var options = {
                            data: vm.variables.center_idlink,
                            animation: true,
                            templateUrl: TRANSURL + "slc_entry/search.html?v=" + VERSION,
                            controllerName: "BrowseGetpropertyCtrl",
                            viewSize: "lg",
                            windowClass: 'modal modal-slide-in-full',
                            filesToLoad: [
                                TRANSURL + "slc_entry/search.html?v=" + VERSION,
                                TRANSURL + "slc_entry/controller.js?v=" + VERSION
                            ]
                        };
                        AppSvc.modal(options).then(function (data) {
                            if(data){
                                vm.variables.podtl_idlink = data.podtl_id;
                                vm.variables.item_code = data.property_no;
                                vm.variables.unit_name = data.unit;
                                vm.variables.unit_idlink = data.unitid_link;
                                vm.variables.item_description = data.description;
                                vm.variables.unit_cost = data.unit_cost;
                                vm.variables.item_name = data.item_name;
                                vm.variables.division_unit = data.center_name;
                                vm.variables.center_idlink = data.center_idlink;
                                vm.variables.center_id = data.center_idlink;
                                vm.variables.unit_costindivi = data.unit_costindivi;
                                vm.variables.office = data.office;
                                vm.variables.office_code = data.office_code;
                                vm.variables.office_idlink = data.office_idlink;
                                vm.variables.additional_desc = data.additional_desc;
                                vm.variables.formula = data.formula;
                                vm.variables.center_name = data.center_name;
                                vm.variables.fund_name = data.fund_name;
                                vm.variables.fund_code = data.fund_code;
                                vm.variables.fund_idlink = data.fund_idlink;
                                vm.variables.pohdr_idlink = data.po_id;
                                vm.variables.po_num = data.po_num;
                                vm.variables.remarks = data.remarks;
                                vm.variables.stock_no = data.stock_no;
                            }
                            console.log(data);
                            // vm.unitcost_issue = filter('number')(vm.variables.unit_cost,2);
                            vm.variables.unitcost_issue = vm.variables.unit_cost;
                            vm.variables.unitcost_bal = vm.variables.unit_cost;
                            vm.filter();
                            vm.getCenterData(vm.variables.item_code,vm.variables.center_idlink);
                            vm.getSlc(vm.variables.pohdr_idlink,vm.variables.podtl_idlink,vm.variables.item_code);
                            // vm.getissue(vm.variables.pohdr_idlink,vm.variables.podtl_idlink);
                        });
                    }
                }
            }
        }

        vm.generateOffice = function(){
            if(!vm.variables.podtl_idlink){
                GetCenterInfo.showSwal('Warning', "Please choose Property to generate.", 'warning');
            }
            else if(!vm.variables.preparedby){
                GetCenterInfo.showSwal('Warning', "Please choose prepared by to proceed.", 'warning');
            }
            else if(!vm.variables.approvedby){
                GetCenterInfo.showSwal('Warning', "Please choose certified by to proceed.", 'warning');
            }
            else if(!vm.variables.center_idlink){
                GetCenterInfo.showSwal('Warning', "Please choose Division/Office to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                SlcGenerationOfficeSvc.save({
                id: vm.variables.podtl_id,pro: vm.variables.property_no,center: vm.variables.center_id
                }).then(function (response) {
                    window.open(
                      "report/supplies_ledger/office?id=" + vm.variables.podtl_idlink + "&fund_name=" + vm.variables.fund_name +
                      "&item_name=" + vm.variables.item_name + "&description=" + vm.variables.item_description +
                      "&unit=" + vm.variables.unit_name + "&property_no=" + vm.variables.item_code + 
                      "&podtl_idlink=" + vm.variables.podtl_idlink + "&account=" + vm.variables.office + "&formula=" + vm.variables.formula + "&additional_desc=" + vm.variables.additional_desc +
                      "&preparedby=" + vm.variables.preparedby + "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby + "&desig2=" + vm.variables.desig2 +
                      "&date_now=" + vm.date_now + "&center_name=" + vm.variables.center_name + "&center_id=" + vm.variables.center_idlink + "&center_fname=" + vm.variables.center_fname

                    );
                LOADING.classList.remove("open");
              }); 
            }
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


        vm.getCenterData = function (pro,id) {
            LOADING.classList.add("open");
            GetCenterDataSvc.get({pro:pro,id:id}).then(function (response) {
                if(response.message){
                    vm.CenterdataList = [];
                    vm.inventorytotalcostindiv = 0;
                    vm.inventorytotalcostindiv = filter('number')(0,2);
                    vm.inventorycountindiv = 0;
                    vm.inventorycountindiv = filter('number')(0);

                    vm.inventorycountindividual = 0;
                    vm.inventorycounttotalindvi = 0;
                    vm.issuecountindivi  = 0;
                    vm.qtycountindv = 0;
                    vm.totalcostindv = 0;
                    vm.inventorytotalcostindividual = 0;
                    vm.inventorytotalcostindiv = 0;
                    vm.inventorycostindiv = 0;
                    vm.issuecostindvi = 0;
                    var RBalanceindv = 0;
                    var QtyRBalanceindv = 0;
                    
                    angular.forEach(vm.CenterdataList, function(qtyindiv){
                        
                        vm.inventorycounttotalindvi = parseInt(vm.inventorycounttotalindvi) + parseInt(qtyindiv.qty_rec);
                        vm.inventorycostindiv = parseFloat(vm.inventorycostindiv) + parseFloat(qtyindiv.totalcost_rec);
                    })
                    angular.forEach(vm.slcList, function(qtyissue){
                        vm.issuecountindivi = parseInt(vm.issuecountindivi) + parseInt(qtyissue.qty_issue);
                        vm.issuecostindvi = parseFloat(vm.issuecostindvi) + parseFloat(qtyissue.totalcost_issue);
                    });
                    vm.inventorycountindividual = parseFloat(vm.inventorycounttotalindvi) - parseFloat(vm.issuecountindivi);
                    vm.inventorycountindiv = filter('number')(vm.inventorycountindividual);
                    vm.inventorytotalcostindividual = parseFloat(vm.inventorycostindiv) - parseFloat(vm.issuecostindvi);
                    vm.inventorytotalcostindiv = filter('number')(vm.inventorytotalcostindividual,2);
                }
                else{
                    vm.CenterdataList = response;
                    vm.inventorycountindividual = 0;
                    vm.inventorycounttotalindvi = 0;
                    vm.issuecountindivi  = 0;
                    vm.qtycountindv = 0;
                    vm.totalcostindv = 0;
                    vm.inventorytotalcostindividual = 0;
                    vm.inventorytotalcostindiv = 0;
                    vm.inventorycostindiv = 0;
                    vm.issuecostindvi = 0;
                    var RBalanceindv = 0;
                    var QtyRBalanceindv = 0;
                    
                    console.log(vm.CenterdataList);
                    angular.forEach(vm.CenterdataList, function(qtyindiv){
                        
                        // modal.inventorycounttotalindvi = parseInt(modal.inventorycounttotalindvi) + parseInt(qtyindiv.qty_rec);
                        // modal.inventorycostindiv = parseFloat(modal.inventorycostindiv) + parseFloat(qtyindiv.totalcost_rec);
                        
                        if(qtyindiv.qty_rec > 0){
                            RBalanceindv = RBalanceindv + parseFloat(qtyindiv.totalcost_rec);
                            QtyRBalanceindv = QtyRBalanceindv + parseInt(qtyindiv.qty_rec);
                            console.log(qtyindiv.totalcost_rec);
                        }
                        else if(qtyindiv.qty_issue > 0){
                            RBalanceindv = RBalanceindv - parseFloat(qtyindiv.totalcost_issue);
                            QtyRBalanceindv = QtyRBalanceindv - parseFloat(qtyindiv.qty_issue);
                            console.log(qtyindiv.totalcost_issue);
                        }
                        
                        // console.log(qtyindiv.RBalanceindv);
                    })
                        vm.inventorytotalcostindividual =  RBalanceindv;
                        vm.inventorycountindividual =  QtyRBalanceindv;
                    // angular.forEach(modal.slcList, function(qtyissue){
                    //     modal.issuecountindivi = parseInt(modal.issuecountindivi) + parseInt(qtyissue.qty_issue);
                    //     modal.issuecostindvi = parseFloat(modal.issuecostindvi) + parseFloat(qtyissue.totalcost_issue);
                    //     // console.log(qtyissue.totalcost_issue)
                    // });
                    // modal.inventorycountindividual = parseFloat(modal.inventorycounttotalindvi) - parseFloat(modal.issuecountindivi);
                    vm.inventorycountindiv = filter('number')(vm.inventorycountindividual);
                    // modal.inventorytotalcostindividual = parseFloat(modal.inventorycostindiv) - parseFloat(modal.issuecostindvi);
                    vm.inventorytotalcostindiv = filter('number')(vm.inventorytotalcostindividual,2);
                };
            })
            LOADING.classList.remove("open");
        }





        vm.generateSlc = function(){
            LOADING.classList.add("open");
            InvDeliverySvc.save({
                id: vm.variables.cr_id,
              }).then(function (response) {
                if (response.success) {
                    window.open(
                      "report/supplies_ledger?id=" + vm.variables.po_id
                    );
                }
                LOADING.classList.remove("open");
              }); 
          }

        vm.compute = function () {
            vm.total = parseFloat(vm.variables.qty_issue) * parseFloat(vm.variables.unitcost_issue);
            vm.variables.totalcost_bal = parseFloat(vm.inventorycost) - parseFloat(vm.total);
            vm.variables.qty_bal = parseInt(vm.inventorycount) - parseInt(vm.variables.qty_issue);

            vm.totalindivi = parseFloat(vm.variables.qty_issue) * parseFloat(vm.variables.unit_costindivi);
            vm.variables.totalcost_balindivi = parseFloat(vm.inventorytotalcostindividual) - parseFloat(vm.totalindivi);
            vm.variables.qty_balindivi = parseInt(vm.inventorytotalcostindividual) - parseInt(vm.variables.qty_issue); 
            // vm.variables.unitcost_issue = vm.unitcost_issue;
            // vm.inventorytotalcost = filter('number')(vm.variables.totalcost_bal,2);
            vm.totalissindvi = filter('number')(vm.totalindivi,2);
            vm.totaliss = filter('number')(vm.total,2);
        }
         
        vm.filter = function(){
            if(vm.variables.podtl_idlink){
                vm.disabled = false;
            }
        }

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.slcList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.slcList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.fund_name.toUpperCase().startsWith(vm.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Qty Receipt", field: "qty_rec" },
                { name: "UC Receipt", field: "unit_rec", cellClass: 'text-right', cellFilter: 'number: 2'},
                { name: "TC Receipt", field: "totalcost_rec", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "Qty Issue", field: "qty_issue" },
                { name: "UC Issue", field: "unitcost_issue", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "TC Issue", field: "totalcost_issue", cellClass: 'text-right', cellFilter: 'number: 2' },
                // { name: "Qty Balance", field: "qty_bal" },
                // { name: "UC Balance", field: "unitcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
                // { name: "TC Balance", field: "totalcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "Qty R Balance", field: "QtyRBalance" },
                { name: "UC Balance", field: "unitcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "R Balance", field: "RBalance", cellClass: 'text-right', cellFilter: 'number: 2' },
                // { name: "Code", field: "fund_code" }
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getSlc = function (hdr,dtl,pro) {
            LOADING.classList.add("open");
            SlcSvc.get({hdr:hdr, dtl:dtl, pro:pro}).then(function (response) {
                if (response.message) {
                    vm.slcList = [];
                } else {
                    vm.slcList = response;
                    vm.filtered = vm.slcList;
                    console.log(vm.filtered);
                    vm.inventorycounttotal = 0;
                    vm.issuecount = 0;
                    var RBalance = 0;
                    var QtyRBalance = 0;
                    angular.forEach(vm.slcList, function(qty){
                        vm.inventorycounttotal = parseInt(vm.inventorycounttotal) + parseInt(qty.qty_rec);
                        if(qty.qty_rec > 0){
                            RBalance = RBalance + parseFloat(qty.totalcost_rec);
                            QtyRBalance = QtyRBalance + parseInt(qty.qty_rec);
                            // console.log(RBalance);
                        }
                        else if(qty.qty_issue > 0 ){
                            RBalance = RBalance - parseFloat(qty.totalcost_issue);
                            QtyRBalance = QtyRBalance - parseFloat(qty.qty_issue);
                            // console.log(RBalance);
                        }
                        qty.RBalance = RBalance;
                        qty.QtyRBalance = QtyRBalance;
                        var poremain = 0;
                        var issuance = 0;
                        if(vm.variables.po_num == qty.po_num){
                            poremain = poremain + parseFloat(qty.qty_rec);
                            issuance = issuance + parseFloat(qty.qty_issue);
                            poremaining = parseFloat(poremain) - parseFloat(issuance);
                            vm.poremaining =  poremaining;
                        }
                        
                    });
                    angular.forEach(vm.slcList, function(qtyissue){
                        vm.issuecount = parseInt(vm.issuecount) + parseInt(qtyissue.qty_issue);
                       
                    });
                    console.log(vm.inventorycounttotal);
                    console.log(vm.issuecount);
                    vm.physicalcount =  parseInt(vm.inventorycounttotal) - parseInt(vm.issuecount);
                    vm.inventorycount = filter('number')(vm.physicalcount);
                    vm.inventorycost = parseFloat(vm.variables.unit_cost) * parseFloat(vm.physicalcount);
                    vm.inventorytotalcost = filter('number')(vm.inventorycost, 2);
                    
                }
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow = function (x) {
            vm.variables = {
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
                unit_name: x.unit_name,
                item_code: x.item_code,
                reorder_point: x.reorder_point,
                ris	: x.ris	,
                jev: x.jev,
                qty_rec: x.qty_rec,
                unit_rec: x.unit_rec,
                totalcost_rec: x.totalcost_rec,
                qty_issue: x.qty_issue,
                unitcost_issue	: x.unitcost_issue	,
                totalcost_issue: x.totalcost_issue,
                qty_bal: x.qty_bal,
                unitcost_bal: x.unitcost_bal,
                totalcost_bal: x.totalcost_bal,
                daysto_consume: x.daysto_consume,
                trans_date: x.trans_date,
                ris: x.ris,
                jev: x.jev,
                office_idlink: x.office_idlink,
                division_unit: x.division_unit,
                remarks: x.remarks,
                index: vm.slcList.indexOf(x)
            };
            vm.disabler = true;
            if(vm.variables.qty_issue === 0){
                vm.disabled = true;
            }   
            else if (vm.variables.qty_issue <= 0){
                vm.disabled = true;
            }
            else{
                vm.disabled = false;
            }
            console.log(vm.variables);
            vm.compute();
        }

        vm.save = function () {
            LOADING.classList.add("open");
            vm.getStatusList();
            LOADING.classList.remove("open");
            vm.getStatusList();
            // if(vm.variables.po_id){
            //     InvDeliverySvc.showSwal('Warning', "Please choose a PO first to proceed.", 'warning');
            // }
            if(vm.variables.podtl_id){
                InvDeliverySvc.showSwal('Warning', "Please choose a Property first to proceed.", 'warning');
            }
            else if(vm.variables.qty_issue <= 0){
                InvDeliverySvc.showSwal('Warning', "Cannot accept less than zero issuance.", 'warning');
            }
            else if(vm.variables.qty_issue > vm.physicalcount){
                InvDeliverySvc.showSwal('Warning', "Issuance is not enough for this PO.", 'warning');
            }
            else if(vm.disabled === true){
                InvDeliverySvc.showSwal('Warning', "Chosen item is a non-issuance please choose a issuance transaction or click clear button.", 'warning');
            }
            else if (vm.filtered.length <= 0) {
                InvDeliverySvc.showSwal('Warning', "This item is empty.", 'warning');
            }
            else if (vm.inventorycountindividual <= 0) {
                InvDeliverySvc.showSwal('Warning', "Insufficient item for issuance.", 'warning');
            }
            else if(!vm.variables.ris){
                InvDeliverySvc.showSwal('Warning', "RIS number is required.", 'warning');
            }
            else if (vm.status === "LOCK") {
                InvDeliverySvc.showSwal('Warning', "Entry is close, please contact the admin.", 'warning');
            }
            else if(vm.variables.slc_id){
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
                        vm.variables.activity = "UPDATING OF ISSUANCE";
                        vm.variables.deleted_by = data.FullName;
                        vm.variables.delete_id = data.LoginID;
                        vm.variables.delete_username = data.Username;
                        vm.variables.reason = data.reason;
                        // vm.variables.item_code = modal.variables.property_no;
                        LOADING.classList.add("open");
                        vm.variables.totalcost_issue = vm.total;
                        vm.variables.trans_date = getDate(vm.variables.trans_date);
                        InvIssuanceSvc.save(vm.variables).then(function (response) {
                            LogsSvc.save(vm.variables).then(function (response) {
                                if (response.success) {
                                    if (response.id) {
                                        vm.variables.activity_id = response.id;
                                    }
                                } 
                            })
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.slc_id = response.id;
                                    vm.slcList.push(vm.variables);
                                    vm.filtered = vm.slcList;
                                    InvIssuanceSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.slcList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.slcList;
                                    InvIssuanceSvc.showSwal('Success', response.message, 'success');
                                }
                                // vm.getSlc();
                                vm.variables.qty_issue = 0;
                                vm.variables.slc_id = "";
                                // vm.variables.division_unit = "";
                                vm.refresh();
                                vm.getSlc(vm.variables.pohdr_idlink,vm.variables.podtl_idlink,vm.variables.item_code);
                                vm.getUserCredentials();
                            } else {
                                InvIssuanceSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                            }
                            LOADING.classList.remove("open");
                            vm.getCenterData(vm.variables.item_code,vm.variables.center_idlink);
                        })
                    }
                }); 
            }
            else{
                LOADING.classList.add("open");
                vm.variables.totalcost_issue = vm.total;
                vm.variables.totalcost_issueindivi = vm.totalindivi;
                vm.variables.trans_date = getDate(vm.variables.trans_date);
                vm.variables.center_idlink = vm.variables.center_idlink;
                InvIssuanceSvc.save(vm.variables).then(function (response) {
                    if (response.success) {
                        if (response.id) {
                            vm.variables.slc_id = response.id;
                            vm.slcList.push(vm.variables);
                            vm.filtered = vm.slcList;
                            InvIssuanceSvc.showSwal('Success', response.message, 'success');
                        }
                        else {
                            vm.slcList.splice(
                                vm.variables.index,
                                1,
                                vm.variables
                            );
                            vm.filtered = vm.slcList;
                            InvIssuanceSvc.showSwal('Success', response.message, 'success');
                        }
                        // vm.getSlc();
                        vm.variables.qty_issue = 0;
                        vm.variables.slc_id = "";
                        // vm.variables.division_unit = "";
                        vm.refresh();
                        vm.getSlc(vm.variables.pohdr_idlink,vm.variables.podtl_idlink,vm.variables.item_code);
                        vm.getUserCredentials();
                    } else {
                        InvIssuanceSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }
        vm.compute = function () {
            vm.total = parseFloat(vm.variables.qty_issue) * parseFloat(vm.variables.unitcost_issue);
            vm.variables.totalcost_bal = parseFloat(vm.inventorycost) - parseFloat(vm.total);
            vm.variables.qty_bal = parseInt(vm.inventorycount) - parseInt(vm.variables.qty_issue);

            vm.totalindivi = parseFloat(vm.variables.qty_issue) * parseFloat(vm.variables.unit_costindivi);
            vm.variables.totalcost_balindivi = parseFloat(vm.inventorytotalcostindividual) - parseFloat(vm.totalindivi);
            vm.variables.qty_balindivi = parseInt(vm.inventorytotalcostindividual) - parseInt(vm.variables.qty_issue); 
            // vm.variables.unitcost_issue = vm.unitcost_issue;
            // vm.inventorytotalcost = filter('number')(vm.variables.totalcost_bal,2);
            vm.totalissindvi = filter('number')(vm.totalindivi,2);
            vm.totaliss = filter('number')(vm.total,2);
        }
        vm.delete = function () {
            vm.getStatusList();
            if (!vm.variables.slc_id) {
                return SlcSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            else if (vm.status === "LOCK") {
                InvDeliverySvc.showSwal('Warning', "Entry is close, please contact the admin.", 'warning');
            }
            else if(vm.variables.qty_rec > 1){
                return SlcSvc.showSwal('Ooops', "This is not an issuance transaction. Please choose an issuance transaction to proceed.", 'warning');
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
                        console.log(data);
                        vm.variables.activity = "DELETION OF ISSUANCE";
                        vm.variables.deleted_by = data.FullName;
                        vm.variables.delete_id = data.LoginID;
                        vm.variables.delete_username = data.Username;
                        vm.variables.reason = data.reason;
                        // vm.variables.item_code = modal.variables.property_no;
                        SlcSvc.delete(vm.variables.slc_id).then(function (response) {
                            LogsSvc.save(vm.variables).then(function (response) {
                                if (response.success) {
                                    if (response.id) {
                                        vm.variables.activity_id = response.id;
                                    }
                                } 
                            })
                            if (response.success) {
                                vm.slcList.splice(
                                    vm.variables.index,
                                    1
                                );
                                vm.filtered = vm.slcList;
                                vm.clearFunction();
                                SlcSvc.showSwal('Success', response.message, 'success');
                            } else {
                                SlcSvc.showSwal('Error', response.message, 'error');
                            }
                            LOADING.classList.remove("open");
                        })
                    }
                }); 
            }
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
                    vm.variables.center_id = response.record.center_idlink;
                    vm.getCenterInfo(vm.variables.center_idlink);
                    // vm.getMenus();
                    if(vm.level === "SUPPLY" || vm.level === "ADMIN" || vm.level === "SCHEMA ADMIN"){
                        vm.hide = false;
                    }
                    else{
                        vm.variables.division_unit = vm.variables.center_name;
                        vm.hide = true;
                    }
                } else {
                    // vm.logout();
                }
            })
            LOADING.classList.remove("open");
        };


 
        vm.getDetail = function () {
            vm.filtered = [];
            vm.totaliss = 0;
            vm.totaliss = filter('number')(0,2);
            vm.variables.unitcost_issue = 0;
            vm.variables.unitcost_issue = filter('number')(0,2);
            vm.variables.qty_issue = 0;
            vm.variables.qty_issue = filter('number')(0);
            vm.disabled = true;
            vm.variables.trans_date = filter('date')(new Date(), "MM/dd/yyyy");
            vm.inventorytotalcost = 0;
            vm.inventorytotalcost = filter('number')(0,2);
            vm.inventorycount = 0;
            vm.inventorycount = filter('number')(0);
            vm.unitcost_issue = 0;
            vm.unitcost_issue = filter('number')(0,2);
        }
        vm.clearFunction = function () {
            vm.variables = {};
            vm.filtered = [];
            vm.totaliss = 0;
            vm.totaliss = filter('number')(0,2);
            vm.variables.unitcost_issue = 0;
            vm.variables.unitcost_issue = filter('number')(0,2);
            vm.variables.qty_issue = 0;
            vm.variables.qty_issue = filter('number')(0);
            vm.disabled = true;
            vm.variables.trans_date = filter('date')(new Date(), "MM/dd/yyyy");
            vm.inventorytotalcost = 0;
            vm.inventorytotalcost = filter('number')(0,2);
            vm.inventorycount = 0;
            vm.inventorycount = filter('number')(0);
            vm.unitcost_issue = 0;
            vm.unitcost_issue = filter('number')(0,2);
            vm.disabler = false;
            vm.getUserCredentials();
            vm.getStatusList();
        }
    }

    function BrowseGetpropertyCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
        var modal = this;
        modal.ArrayList = [];
        modal.filtered = [];
        $ocLazyLoad
            .load([TRANSURL + 'slc_entry/service.js?v=' + VERSION,
                   TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
                InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
                ROSvc = $injector.get("ROSvc");
                PropertyGetBycntrSvc = $injector.get("PropertyGetBycntrSvc");
                modal.getProperty();
                console.log(data);
            });
    
        modal.getProperty = function () {
            LOADING.classList.add("open");
            PropertyGetBycntrSvc.get({id:data}).then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                }
                console.log(response);
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
                // { name: "Property No.", field: "property_no" },
                { name: "Unit", field: "unit",width: 60 },
                { name: "Account", field: "office", width: 180},
                { name: "Sub-account", field: "item_name", width: 185},
                { name: "Description", field: "description", width: 175},
                { name: "Qty", field: "quantity",width: 50 },
                { name: "Unit Cost/Original", field: "original_price", cellClass: 'text-right', cellFilter: 'number: 2', width: 100},
                { name: "Stock", field: "stock_no",width: 100},
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };
        modal.searchingStock = function () {
            if (!modal.searchstock) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.stock_no.toUpperCase().startsWith(modal.searchstock.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (modal.filtered = searchFound);
        }
        modal.searchingDesc = function () {
            if (!modal.searchdesc) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.description.toUpperCase().startsWith(modal.searchdesc.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (modal.filtered = searchFound);
        }
        modal.searchingAccount = function () {
            if (!modal.searchaccount) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.office.toUpperCase().startsWith(modal.searchaccount.toUpperCase())
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
                    item.item_name.toUpperCase().startsWith(modal.search.toUpperCase())
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



    function BrowseROcentersCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
        var modal = this;
        modal.ArrayList = [];
        modal.filtered = [];
        $ocLazyLoad
            .load([TRANSURL + 'slc_entry/service.js?v=' + VERSION,
                   TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
                InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
                ROSvc = $injector.get("ROSvc");
                ROCenterSvc = $injector.get("ROCenterSvc");
                modal.getRO(1);
                console.log(data);
            });
    
        modal.getRO = function () {
            LOADING.classList.add("open");
            ROCenterSvc.get().then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                }
                console.log(response);
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
                { name: "Center/Program", field: "center_name" },
                { name: "Center Fullname", field: "center_fname" },
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
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.fund_name.toUpperCase().startsWith(modal.search.toUpperCase())
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


    function BrowseROCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
        var modal = this;
        modal.ArrayList = [];
        modal.filtered = [];
        $ocLazyLoad
            .load([TRANSURL + 'slc_entry/service.js?v=' + VERSION,
                   TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
                InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
                ROSvc = $injector.get("ROSvc");
                modal.getRO();
                console.log(data);
            });
    
        modal.getRO = function () {
            LOADING.classList.add("open");
            ROSvc.get().then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                }
                console.log(response);
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
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.fund_name.toUpperCase().startsWith(modal.search.toUpperCase())
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

function BrowsePropertyCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.ArrayList = [];
	modal.filtered = [];
	$ocLazyLoad
        .load([TRANSURL + 'slc_entry/service.js?v=' + VERSION,
               TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
			InvEntryDetailSvc = $injector.get("InvEntryDetailSvc");
            modal.getDetail();
            console.log(data);
		});

	modal.getDetail = function () {
        LOADING.classList.add("open");
        InvEntryDetailSvc.get({id:data}).then(function (response) {
            if (response.message) {
                modal.ArrayList = [];
            } else {
                modal.ArrayList = response;
            }
            console.log(response);
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
			{ name: "Property No.", field: "property_no" },
            { name: "Unit", field: "unit" },
            { name: "Description", field: "description" },
            { name: "Qty", field: "quantity" },
            { name: "Unit Cost", field: "unit_cost", cellClass: 'text-right',cellFilter: 'number: 2'},
            { name: "Amount", field: "amount", cellClass: 'text-right',cellFilter: 'number: 2'},
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
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.fund_name.toUpperCase().startsWith(modal.search.toUpperCase())
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
