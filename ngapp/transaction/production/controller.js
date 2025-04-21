//main.js
angular.module('app')
	.controller('ProductionCtrl', ProductionCtrl)
	.controller('CreateBatchCtrl', CreateBatchCtrl)
    .controller('SearchBatchListCtrl', SearchBatchListCtrl)
    ProductionCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];
    CreateBatchCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    SearchBatchListCtrl.$inject  = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter']

function ProductionCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
    vm.slcList = [];
    vm.issueList = [];
	vm.ArrayList = [];
	vm.variables = {};
    vm.variablesdtl = {};
    vm.filtered = [];
    vm.filtered2 = [];
    vm.filtered3 = [];
    vm.variables.production_date = filter("date")(new Date(),"MM/dd/yyyy");
    vm.search;
    vm.searchcode;
    vm.totaliss = 0;
    vm.totaliss = filter('number')(0,2);
    vm.variablesdtl.unitcost_issue = 0;
    vm.variablesdtl.unitcost_issue = filter('number')(0,2);
    vm.variablesdtl.qty_issue = 0;
    vm.variablesdtl.qty_issue = filter('number')(0);
    vm.inventorytotalcost = 0;
    vm.inventorytotalcost = filter('number')(0,2);
    vm.inventorycount = 0;
    vm.inventorycount = filter('number')(0);
    vm.variablesdtl.trans_date = filter('date')(new Date(), "MM/dd/yyyy");

	$ocLazyLoad
		.load([
            TRANSURL + 'production/service.js?v=' + VERSION,
            TRANSURL + 'slc_entry/service.js?v=' + VERSION,
            TRANSURL + 'inventory_entry/service.js?v=' + VERSION,            
    ]).then(function (d) {
            ProductionSvc = $injector.get("ProductionSvc");
            SlcSvc = $injector.get("SlcSvc");
            InvIssuanceSvc = $injector.get("InvIssuanceSvc");
            BatchSvc = $injector.get("BatchSvc");
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
                            console.log(qty.po_num);
                            console.log(qty.qty_rec);
                            console.log(poremain);
                            console.log(issuance);
                            console.log(vm.poremaining);
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

        vm.getBatch = function (id) {
            LOADING.classList.add("open");
            BatchSvc.get({id:id}).then(function (response) {
                if (response.message) {
                    vm.ArrayList = [];
                } else {
                    vm.ArrayList = response;
                }
                vm.filtered3 = vm.ArrayList;
                console.log(response);
                LOADING.classList.remove("open");
            })
        }

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
                    item.fund_name.toUpperCase().startsWith(vm.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchingcode = function () {
            if (!vm.searchcode) {
                return (vm.filtered = vm.ArrayList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.fund_code.toUpperCase().startsWith(vm.searchcode.toUpperCase())
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
                { name: "Property No.", field: "item_code" },
                { name: "Unit", field: "unit_name" },
                // { name: "Other specs", field: "additional_desc" },
                { name: "Item name", field: "item_name" },
                { name: "Description", field: "item_description" },
                // { name: "Account", field: "office" },
                { name: "Qty", field: "qty_issue" },
                { name: "Unit Cost", field: "unitcost_issue", cellClass: 'text-right', cellFilter: 'number: 2'},
                { name: "Amount", field: "totalcost_issue", cellClass: 'text-right', cellFilter: 'number: 2'},
            ],
            data: "vm.filtered3",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        

        vm.openBatchList = function () {
            var options = {
                data: '',
                animation: true,
                templateUrl: TRANSURL + "production/search_batch.html?v=" + VERSION,
                controllerName: "SearchBatchListCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    TRANSURL + "production/search_batch.html?v=" + VERSION,
                    TRANSURL + "production/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    vm.variables.batch_no = data.batch_no;
                    vm.variables.batch_id = data.batch_id;
                    vm.variables.batch_output = data.batch_output;
                    vm.variables.item_desc = data.item_desc;
                    vm.variables.production_date = data.production_date;
                    vm.variables.item_name = data.item_name;
                    vm.variables.subacct_idlink = data.subacct_idlink;
                    vm.variables.office_idlink = data.office_idlink;
                    vm.variables.office = data.office;
                    vm.variables.office_code = data.office_code;
                    vm.variables.uacs_code = data.uacs_code;
                    vm.variables.formula = data.formula;
                    vm.getBatch(vm.variables.batch_id);
                }
                console.log(vm.variables);
            });
        }

        vm.createBatch = function (number) {
            if(number === 1){
                if(!vm.variables.batch_id){
                    SlcSvc.showSwal('Warning', 'Please choose a batch to edit.', 'warning');
                }
                else{
                    var options = {
                        data: vm.variables,
                        animation: true,
                        templateUrl: TRANSURL + "production/create_batch.html?v=" + VERSION,
                        controllerName: "CreateBatchCtrl",
                        viewSize: "lg",
                        windowClass: 'modal modal-slide-in-full',
                        filesToLoad: [
                            TRANSURL + "production/create_batch.html?v=" + VERSION,
                            TRANSURL + "production/controller.js?v=" + VERSION
                        ]
                    };
                    AppSvc.modal(options).then(function (data) {
                        if(data){
                            vm.variables.batch_no = data.batch_no;
                            vm.variables.batch_id = data.batch_id;
                            vm.variables.batch_output = data.batch_output;
                            vm.variables.item_desc = data.item_desc;
                            vm.variables.production_date = data.production_date;
                            vm.variables.item_name = data.item_name;
                            vm.variables.subacct_idlink = data.subacct_idlink;
                            vm.variables.office_idlink = data.office_idlink;
                            vm.variables.office = data.office;
                            vm.variables.office_code = data.office_code;
                            vm.variables.uacs_code = data.uacs_code;
                            vm.variables.formula = data.formula;
                        }
                    });
                }
            }
            else{
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: TRANSURL + "production/create_batch.html?v=" + VERSION,
                    controllerName: "CreateBatchCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        TRANSURL + "production/create_batch.html?v=" + VERSION,
                        TRANSURL + "production/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        vm.variables.batch_no = data.batch_no;
                        vm.variables.batch_id = data.batch_id;
                        vm.variables.batch_output = data.batch_output;
                        vm.variables.item_desc = data.item_desc;
                        vm.variables.production_date = data.production_date;
                        vm.variables.item_name = data.item_name;
                        vm.variables.subacct_idlink = data.subacct_idlink;
                        vm.variables.office_idlink = data.office_idlink;
                        vm.variables.office = data.office;
                        vm.variables.office_code = data.office_code;
                        vm.variables.uacs_code = data.uacs_code;
                        vm.variables.formula = data.formula;
                    }
                });
            }  
        }

        vm.clickRow = function (x) {
            vm.variablesdtl = {
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
                ris: x.ris,
                jev: x.jev,
                qty_rec: x.qty_rec,
                unit_rec: x.unit_rec,
                totalcost_rec: x.totalcost_rec,
                qty_issue: x.qty_issue,
                unitcost_issue: x.unitcost_issue,
                totalcost_issue: x.totalcost_issue,
                qty_bal: x.qty_bal,
                unitcost_bal: x.unitcost_bal,
                totalcost_bal: x.totalcost_bal,
                daysto_consume: x.daysto_consume,
                trans_date: x.trans_date,
                delivery: x.delivery,
                office: x.office,
                office_code: x.office_code,
                office_idlink: x.office_idlink,
                division_unit: x.division_unit,
                cancellation_status: x.cancellation_status,
                cancellation_reason: x.cancellation_reason,
                canceled_by: x.canceled_by,
                batch_idlink: x.batch_idlink,
                batch_no: x.batch_no,
                index: vm.ArrayList.indexOf(x)
            };
            vm.getSlc(vm.variablesdtl.pohdr_idlink,vm.variablesdtl.podtl_idlink,vm.variablesdtl.item_code);
            console.log(vm.variables);
        }

        vm.openModal = function (number) {
            if(!vm.variables.batch_id){
                SlcSvc.showSwal('Warning', 'Please choose Batch number first to proceed.', 'warning');
            }
            else{
                if(number === 1){
                    vm.clearDetail();
                    var options = {
                        data: '',
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
                    AppSvc.modal(options).then(function (data) {
                        console.log(data);
                        if(data){
                            vm.variablesdtl.pohdr_idlink = data.po_id;
                            vm.variablesdtl.po_num = data.po_num;
                            vm.variablesdtl.fund_code = data.fund_code;
                            vm.variablesdtl.fund_name = data.fund_name;
                            vm.variablesdtl.fund_idlink = data.fund_idlink;
                        }
                    });
                }
                else{
                    if(!vm.variablesdtl.pohdr_idlink){
                        SlcSvc.showSwal('Warning', 'Please choose PO number first to proceed.', 'warning');
                    }
                    else{
                        vm.variablesdtl.qty_issue = 0;
                        vm.variablesdtl.qty_issue = filter('number')(0);
                        var options = {
                            data: vm.variablesdtl.pohdr_idlink,
                            animation: true,
                            templateUrl: TRANSURL + "slc_entry/search.html?v=" + VERSION,
                            controllerName: "BrowsePropertyCtrl",
                            viewSize: "lg",
                            windowClass: 'modal modal-slide-in-full',
                            filesToLoad: [
                                TRANSURL + "slc_entry/search.html?v=" + VERSION,
                                TRANSURL + "slc_entry/controller.js?v=" + VERSION
                            ]
                        };
                        AppSvc.modal(options).then(function (data) {
                            console.log(data);
                            if(data){
                                vm.variablesdtl.podtl_idlink = data.podtl_id;
                                vm.variablesdtl.item_code = data.property_no;
                                vm.variablesdtl.unit_name = data.unit;
                                vm.variablesdtl.unit_idlink = data.unitid_link;
                                vm.variablesdtl.item_description = data.description;
                                vm.variablesdtl.unit_cost = data.unit_cost;
                                vm.variablesdtl.item_name = data.item_name;
                            }
                            vm.variablesdtl.unitcost_issue = vm.variablesdtl.unit_cost;
                            vm.variablesdtl.unitcost_bal = vm.variablesdtl.unit_cost;
                            vm.filter();
                            vm.getSlc(vm.variablesdtl.pohdr_idlink,vm.variablesdtl.podtl_idlink,vm.variablesdtl.item_code);
                        });
                    }
                }
            }
        }

        vm.filter = function(){
            if(vm.variablesdtl.podtl_idlink){
                vm.disabled = false;
            }
        }

        vm.compute = function () {
            vm.total = parseFloat(vm.variablesdtl.qty_issue) * parseFloat(vm.variablesdtl.unitcost_issue);
            vm.variablesdtl.totalcost_bal = parseFloat(vm.inventorycost) - parseFloat(vm.total);
            vm.variablesdtl.qty_bal = parseInt(vm.inventorycount) - parseInt(vm.variablesdtl.qty_issue);
            // vm.variables.unitcost_issue = vm.unitcost_issue;
            // vm.inventorytotalcost = filter('number')(vm.variables.totalcost_bal,2);
            vm.totaliss = filter('number')(vm.total,2);
        }

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

        vm.save = function () {
            LOADING.classList.add("open");
            vm.variablesdtl.batch_idlink = vm.variables.batch_id;
            vm.variablesdtl.batch_no = vm.variables.batch_no;
            vm.variablesdtl.totalcost_issue = vm.total;
            vm.variablesdtl.trans_date = getDate(vm.variablesdtl.trans_date);
            vm.variablesdtl.division_unit = vm.variables.batch_no;
            if(vm.physicalcount < vm.variablesdtl.qty_issue){
                InvIssuanceSvc.showSwal('Warning', "Item is not enough.", 'warning');
            }
            else if(vm.variablesdtl.qty_issue <= 0){
                InvIssuanceSvc.showSwal('Warning', "Cannot issue if quantity is zero.", 'warning');
            }
            else if(!vm.variablesdtl.qty_issue){
                InvIssuanceSvc.showSwal('Warning', "Cannot issue if quantity is zero.", 'warning');
            }
            else{
                InvIssuanceSvc.save(vm.variablesdtl).then(function (response) {
                    if (response.success) {
                        if (response.id) {
                            vm.variablesdtl.slc_id = response.id;
                            vm.ArrayList.push(vm.variablesdtl);
                            vm.filtered = vm.ArrayList;
                            InvIssuanceSvc.showSwal('Success', response.message, 'success');
                        }
                        else {
                            vm.ArrayList.splice(
                                vm.variablesdtl.index,
                                1,
                                vm.variablesdtl
                            );
                            vm.filtered = vm.ArrayList;
                            InvIssuanceSvc.showSwal('Success', response.message, 'success');
                        }
                        vm.clearDetail();
                    } else {
                        InvIssuanceSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                })
            }
            LOADING.classList.remove("open");
        }
        vm.delete = function () {
            if (!vm.variables.fund_id) {
                return FundsourceSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            FundsourceSvc.delete(vm.variables.fund_id).then(function (response) {
                if (response.success) {
                    vm.ArrayList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.ArrayList;
                    vm.clearFunction();
                    FundsourceSvc.showSwal('Success', response.message, 'success');
                } else {
                    FundsourceSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
            vm.totaliss = 0;
            vm.totaliss = filter('number')(0,2);
            vm.variablesdtl.unitcost_issue = 0;
            vm.variablesdtl.unitcost_issue = filter('number')(0,2);
            vm.variablesdtl.qty_issue = 0;
            vm.variablesdtl.qty_issue = filter('number')(0);
            vm.inventorytotalcost = 0;
            vm.inventorytotalcost = filter('number')(0,2);
            vm.inventorycount = 0;
            vm.inventorycount = filter('number')(0);
            vm.variablesdtl.trans_date = filter('date')(new Date(), "MM/dd/yyyy");
        }
        vm.clearDetail = function () {
            vm.variablesdtl = {};
            vm.totaliss = 0;
            vm.totaliss = filter('number')(0,2);
            vm.variablesdtl.unitcost_issue = 0;
            vm.variablesdtl.unitcost_issue = filter('number')(0,2);
            vm.variablesdtl.qty_issue = 0;
            vm.variablesdtl.qty_issue = filter('number')(0);
            vm.inventorytotalcost = 0;
            vm.inventorytotalcost = filter('number')(0,2);
            vm.inventorycount = 0;
            vm.inventorycount = filter('number')(0);
            vm.variablesdtl.trans_date = filter('date')(new Date(), "MM/dd/yyyy");
        }
    }

function CreateBatchCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
    // modal.series = [];
    modal.series = 0;
	modal.filtered = [];
    modal.variables.batch_output = 0;
    modal.variables.batch_output = filter("number")(0);
    modal.variables.production_date = filter("date")(new Date(),"MM-dd-yyyy");
    modal.variables.date_series = filter("date")(new Date(),"MM-dd-yyyy");
    modal.edit = true;
	$ocLazyLoad
		.load([TRANSURL + 'production/service.js?v=' + VERSION,]).then(function (d) {
			ProductionSvc = $injector.get("ProductionSvc");
            ProductionSeriesSvc = $injector.get("ProductionSeriesSvc");
            if(data){
                console.log(data);
                modal.variables = data;
                modal.edit = false;
            }
            else{
                modal.getSeries();
            }
            
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

        modal.getSeries = function () {
            LOADING.classList.add("open");
            ProductionSeriesSvc.get().then(function (response) {
                if (response.message) {
                    modal.series = parseInt(1);
                    console.log("first");
                } else {
                    modal.holder = response[0].batch_id;
                    modal.series = parseInt(modal.holder) + 1;
                    console.log(modal.holder);
                }
                modal.variables.batch_no = modal.variables.date_series + "-" + modal.series;
                
                LOADING.classList.remove("open");
            })
        }

        modal.seriesChanger = function () {
            if(modal.edit === true){
                modal.variables.date_series = modal.variables.production_date;
                modal.variables.batch_no = modal.variables.date_series + "-" + modal.series;
            }
            else{
                console.log("none");
            }  
        }

        modal.save = function () {
            LOADING.classList.add("open");
            modal.variables.production_date = getDate(modal.variables.production_date);
            ProductionSvc.save(modal.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        modal.variables.batch_id = response.id;
                        ProductionSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        ProductionSvc.showSwal('Success', response.message, 'success');
                    }
                    $uibModalInstance.close(modal.variables);
                } else {
                    ProductionSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }

        modal.openSubaccount = function () {
            // if(modal.variables.office_idlink){
            //     var options = {
            //         data: modal.variables.office_idlink,
            //         animation: true,
            //         templateUrl: MASTERURL + "office_code/subacct.html?v=" + VERSION,
            //         controllerName: "BrowseSubaccountCtrl",
            //         viewSize: "lg",
            //         windowClass: 'modal modal-slide-in-full',
            //         filesToLoad: [
            //             MASTERURL + "office_code/subacct.html?v=" + VERSION,
            //             MASTERURL + "office_code/controller.js?v=" + VERSION
            //         ]
            //     };
            //     AppSvc.modal(options).then(function (data) {
            //         if(data){
            //             modal.variables.item_name = data.subaccount;
            //             modal.variables.description = data.description;
            //             modal.variables.subacct_idlink = data.subacct_id;
            //             modal.variables.office_idlink = data.office_id;
            //             modal.variables.office = data.office;
            //             modal.variables.office_code = data.office_code;
            //             modal.variables.uacs_code = data.office_UACS;
            //             modal.variables.formula = data.formula;
            //         }
            //         // vm.getSeries(vm.variablesdtl.subacct_idlink);
            //     });
            // }
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
                        modal.variables.item_name = data.subaccount;
                        modal.variables.item_desc = data.description;
                        modal.variables.subacct_idlink = data.subacct_id;
                        modal.variables.office_idlink = data.office_id;
                        modal.variables.office = data.office;
                        modal.variables.office_code = data.office_code;
                        modal.variables.uacs_code = data.office_UACS;
                        modal.variables.formula = data.formula;
                    }
                    // vm.getSeries(vm.variablesdtl.subacct_idlink);
                });
            
        }
    
    modal.clearFunction = function () {
        modal.variables = {};
        modal.variables.production_date = filter("date")(new Date(),"MM/dd/yyyy");
    }
	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

function SearchBatchListCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
    modal.variables = {};
	modal.ArrayList = [];
	modal.filtered = [];
    modal.variables.batch_output = 0;
    modal.variables.batch_output = filter("number")(0);
    modal.variables.production_date = filter("date")(new Date(),"MM-dd-yyyy");
    modal.variables.date_series = filter("date")(new Date(),"MM-dd-yyyy");
	$ocLazyLoad
		.load([TRANSURL + 'production/service.js?v=' + VERSION,]).then(function (d) {
			ProductionSvc = $injector.get("ProductionSvc");
            ProductionSeriesSvc = $injector.get("ProductionSeriesSvc");
            modal.getBatch();
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

        modal.getBatch = function () {
            LOADING.classList.add("open");
            ProductionSvc.get().then(function (response) {
                if (response.message) {
                    modal.ArrayList = [];
                } else {
                    modal.ArrayList = response;
                    modal.filtered = modal.ArrayList;
                }
                console.log(modal.filtered);
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
                { name: "Batch no.", field: "batch_no"},
                { name: "Output", field: "batch_output", cellClass: 'text-right'},
                { name: "Item name", field: "item_name" },
                { name: "Description", field: "item_desc" },
                { name: "Production Date", field: "production_date" },
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };

	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}
