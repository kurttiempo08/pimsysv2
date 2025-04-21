//main.js
angular.module('app')
	.controller('SlcCtrl', SlcCtrl)
	.controller('BrowsePropertyCtrl', BrowsePropertyCtrl)
    SlcCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];
    BrowsePropertyCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function SlcCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
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
    vm.qty_rec = 0;
    vm.qty_rec = filter('number')(0);
    vm.unitcost_rec = 0;
    vm.unitcost_rec = filter('number')(0,2);
    vm.totalcost_rec = 0;
    vm.totalcost_rec = filter('number')(0,2);
    vm.variables.qty_rec = 0;
    vm.variables.qty_rec = filter('number')(0);
    vm.variables.unit_rec = 0;
    vm.variables.unit_rec = filter('number')(0,2);
    vm.variables.totalcost_rec = 0;
    vm.variables.totalcost_rec = filter('number')(0,2);
    vm.variables.unitcost_bal = 0;
    vm.variables.unitcost_bal = filter('number')(0,2);
    vm.variables.qty_bal = 0;
    vm.variables.qty_bal = filter('number')(0);
    vm.variables.totalcost_bal = 0;
    vm.variables.totalcost_bal = filter('number')(0,2);

	$ocLazyLoad
        .load([TRANSURL + 'slc_entry/service.js?v=' + VERSION,
               TRANSURL + 'inventory_entry/service.js?v=' + VERSION,]).then(function (d) {
            SlcSvc = $injector.get("SlcSvc");
            InvDeliverySvc = $injector.get("InvDeliverySvc");
            
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
            vm.total = parseFloat(vm.variables.qty_issue) * parseFloat(vm.unitcost_issue);
            // vm.variables.totalcost_bal = parseFloat(vm.inventorycost) - parseFloat(vm.total);
            // vm.variables.qty_bal = parseInt(vm.inventorycount) - parseInt(vm.variables.qty_issue);
            // vm.variables.unitcost_issue = vm.unitcost_issue;
            // vm.totalcost_rec = parseFloat(vm.variables.qty_rec) * (vm.variables.unit_rec);
            // vm.variables.totalcost_rec = filter('number')(vm.totalcost_rec,2);
            // vm.inventorytotalcost = filter('number')(vm.variables.totalcost_bal,2);
            // vm.totaliss = filter('number')(vm.total,2);
            vm.totalcost_bal = parseFloat(vm.variables.qty_bal) * parseFloat(vm.variables.unitcost_bal);
            vm.variables.totalcost_bal = filter('number')(vm.totalcost_bal,2);
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
                { name: "Qty Balance", field: "qty_bal" },
                { name: "UC Balance", field: "unitcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
                { name: "TC Balance", field: "totalcost_bal", cellClass: 'text-right', cellFilter: 'number: 2' },
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
                    vm.inventorycounttotal = 0;
                    vm.issuecount = 0;
                    var RBalance = 0;
                    var QtyRBalance = 0;
                    angular.forEach(vm.slcList, function(qty){
                        vm.inventorycounttotal = parseInt(vm.inventorycounttotal) + parseInt(qty.qty_rec);
                        if(qty.qty_rec > 0){
                            RBalance = RBalance + parseFloat(qty.totalcost_rec);
                            QtyRBalance = QtyRBalance + parseInt(qty.qty_rec);
                            console.log(RBalance);
                        }
                        else if(qty.qty_issue > 0){
                            RBalance = RBalance - parseFloat(qty.totalcost_issue);
                            QtyRBalance = QtyRBalance - parseFloat(qty.qty_issue);
                            console.log(RBalance);
                        }
                        qty.RBalance = RBalance;
                        qty.QtyRBalance = QtyRBalance;
                        
                    });
                    angular.forEach(vm.slcList, function(qtyissue){
                        vm.issuecount = parseInt(vm.issuecount) + parseInt(qtyissue.qty_issue);
                       
                    });
                    vm.physicalcount =  parseInt(vm.inventorycounttotal) - parseInt(vm.issuecount);
                    vm.inventorycount = filter('number')(vm.physicalcount);
                    vm.inventorycost = parseFloat(vm.variables.unit_cost) * parseFloat(vm.physicalcount);
                    vm.inventorytotalcost = filter('number')(vm.inventorycost, 2);
                    console.log(vm.variables.unit_cost);
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
                delivery: x.delivery,
                index: vm.slcList.indexOf(x)
            };
            // vm.qty_rec = filter('number')(vm.variables.qty_rec,2);
            // vm.unitcost_rec = filter('number')(vm.variables.unit_rec,2);
            // vm.totalcost_rec = filter('number')(vm.variables.totalcost_rec,2);
            if(vm.variables.qty_issue === 0){
                vm.disabled = true;
            }   
            else if (vm.variables.qty_issue <= 0){
                vm.disabled = true;
            }
            else{
                vm.disabled = false;
            }
            vm.compute();
            console.log(vm.variables);
        }

        vm.save = function () {
            if(!vm.variables.pohdr_idlink){
                InvDeliverySvc.showSwal('Warning', "Please choose a PO first to proceed.", 'warning');
            }
            else if(!vm.variables.podtl_idlink){
                InvDeliverySvc.showSwal('Warning', "Please choose a Property first to proceed.", 'warning');
            }
            else if(!vm.variables.slc_id){
                InvDeliverySvc.showSwal('Warning', "Please choose a row first to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                // vm.variables.totalcost_issue = vm.total;
                vm.variables.totalcost_bal = vm.totalcost_bal;

                vm.variables.trans_date = getDate(vm.variables.trans_date);
                InvDeliverySvc.save(vm.variables).then(function (response) {
                    if (response.success) {
                        if (response.id) {
                            vm.variables.slc_id = response.id;
                            vm.slcList.push(vm.variables);
                            vm.filtered = vm.slcList;
                            InvDeliverySvc.showSwal('Success', response.message, 'success');
                        }
                        else {
                            vm.slcList.splice(
                                vm.variables.index,
                                1,
                                vm.variables
                            );
                            vm.filtered = vm.slcList;
                            InvDeliverySvc.showSwal('Success', response.message, 'success');
                        }
                        vm.getSlc(vm.variables.pohdr_idlink,vm.variables.podtl_idlinkm,vm.variables.item_code);
                    } else {
                        InvDeliverySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }
        vm.delete = function () {
            if (!vm.variables.slc_id) {
                return SlcSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            SlcSvc.delete(vm.variables.slc_id).then(function (response) {
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
        vm.openModal = function (number) {
            if(number === 1){
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
                        vm.variables.po_id = data.po_id;
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
                if(!vm.variables.pohdr_idlink){
                    SlcSvc.showSwal('Warning', 'Please choose PO number first to proceed.', 'warning');
                }
                else{
                    var options = {
                        data: vm.variables.pohdr_idlink,
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
                            vm.variables.podtl_idlink = data.podtl_id;
                            vm.variables.item_code = data.property_no;
                            vm.variables.unit_name = data.unit;
                            vm.variables.unit_idlink = data.unitid_link;
                            vm.variables.item_description = data.description;
                            vm.variables.unit_cost = data.unit_cost;
                            vm.variables.item_name = data.item_name;
                            vm.variables.qty_rec = data.qty_rec;
                            vm.variables.unit_rec = data.unit_rec;
                            vm.variables.totalcost_rec = data.totalcost_rec;
                        }
                        // vm.unitcost_issue = filter('number')(vm.variables.unit_cost,2);
                        // vm.variables.unitcost_bal = vm.variables.unit_cost;
                        vm.filter();
                        vm.getSlc(vm.variables.pohdr_idlink,vm.variables.podtl_idlinkm,vm.variables.item_code);
                        // vm.getissue(vm.variables.pohdr_idlink,vm.variables.podtl_idlink);
                    });
                }
            }
                
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
