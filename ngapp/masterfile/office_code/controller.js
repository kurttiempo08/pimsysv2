//main.js
angular.module('app')
	.controller('OfficeCodeCtrl', OfficeCodeCtrl)
    .controller('BrowseSubaccountCtrl', BrowseSubaccountCtrl)
	.controller('BrowseOfficeCodeCtrl', BrowseOfficeCodeCtrl)
    OfficeCodeCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];
    BrowseOfficeCodeCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    BrowseSubaccountCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function OfficeCodeCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
	vm.ArrayList = [];
    vm.ArrayList2 = [];
    vm.ArrayCount = [];
    vm.variableSub = {};
	vm.variables = {};
    vm.filtered = [];
    vm.filtered2 = [];
    vm.search;
    vm.searchsub;
    vm.searchcode;
    vm.searchuacs;
    vm.searchdesc;
    vm.viewer = false;
    vm.aa = false;
    vm.slccount = 0;
    vm.variables.account_type = "INVENTORY";
    // vm.kalahi = true;
    vm.date_now = filter('date')(new Date(), "MM/dd/yyyy");

	$ocLazyLoad
		.load([MASTERURL + 'office_code/service.js?v=' + VERSION,
               APPURL + 'app.service.js?v=' + VERSION]).then(function (d) {
            AppSvc = $injector.get('AppSvc');
            OfficeCodeSvc = $injector.get("OfficeCodeSvc");
            OfficeGenerationSvc = $injector.get("OfficeGenerationSvc");
            SubAcctSvc = $injector.get("SubAcctSvc");
            SubAcctactionSvc = $injector.get("SubAcctactionSvc");
            OfficeGenerationOfficeSvc = $injector.get("OfficeGenerationOfficeSvc");
            CheckCountSvc = $injector.get("CheckCountSvc");
            GenerateEndingSvc = $injector.get("GenerateEndingSvc");
            
            vm.getOfficeList();
            vm.getUserCredentials();
        });

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
                    vm.center_name = response.record.center_name;
                    vm.center_idlink = response.record.center_idlink;
                    // vm.getMenus();
                    if(vm.level === "VIEWER"){
                        vm.viewer = true;
                    }
                    else if(vm.level === "AA"){
                        vm.aa = true;
                        vm.viewer = true;
                    }
                    else if(vm.level === "MEMBER"){
                        vm.aa = true;
                        vm.viewer = true;
                        if(vm.center_name === "KALAHI"){
                            vm.kalahi = false;
                            vm.non_kalahi = true;
                        }
                        else{
                            vm.kalahi = true;
                            vm.non_kalahi = false;
                        }
                    }
                    else if(vm.level === "RO-SUPPLY"){
                        vm.aa = true;
                        vm.viewer = false;
                    }
                    else if(vm.level === "ADMIN"){
                        vm.aa = false;
                        vm.viewer = false;
                        vm.kalahi = false;
                    }
                    else{
                        vm.aa = false;
                        vm.viewer = false;
                        vm.kalahi = false;
                    }
                    // console.log(vm.level,vm.aa,vm.viewer);
                } else {
                    // vm.logout();
                }
            })
            LOADING.classList.remove("open");
        };

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
                console.log(data);
                if(data){
                    // vm.variableSub.subacct_id = data.subacct_id;
                    vm.variables.center_name = data.center_name;
                    vm.center_idlink = data.center_id;
                    vm.center_name = data.center_fname;
                }
            });
        }

        vm.generate_kalahi_Ending = function(){
            if(!vm.preparedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose prepared by signatory to proceed.", 'warning');
            }
            else if(!vm.approvedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose approved by signatory to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                    GenerateEndingSvc.save({id: vm.center_idlink, type: "center"}).then(function (response) {
                        console.log(vm.center_idlink);
                        window.open(
                          "report/ending_balance/ending_kalahi?preparedby=" + vm.preparedby + "&desig1=" + vm.desig1 + "&approvedby=" + vm.approvedby +
                          "&desig2=" + vm.desig2 + "&date_now=" + vm.date_now + "&level=" + vm.level + "&center=" + vm.center_name + "&id=" + vm.center_idlink + "&type=center" +
                          "&fund=KALAHI"
                        );
                    LOADING.classList.remove("open");
                  }); 
            }
        }
        
        vm.generateEnding = function(data){
            if(!vm.preparedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose prepared by signatory to proceed.", 'warning');
            }
            else if(!vm.approvedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose approved by signatory to proceed.", 'warning');
            }
            else if(data === 1){
                if(!vm.center_name){
                    OfficeGenerationSvc.showSwal('Warning', "Please choose Center/Program to proceed.", 'warning');
                }
                else{
                    LOADING.classList.add("open");
                    GenerateEndingSvc.save({id: vm.center_idlink, type: "center"}).then(function (response) {
                        console.log(vm.center_idlink);
                        window.open(
                          "report/ending_balance/ending?preparedby=" + vm.preparedby + "&desig1=" + vm.desig1 + "&approvedby=" + vm.approvedby +
                          "&desig2=" + vm.desig2 + "&date_now=" + vm.date_now + "&level=" + vm.level + "&center=" + vm.center_name + "&id=" + vm.center_idlink + "&type=center" 
                        );
                    LOADING.classList.remove("open");
                  }); 
                }
            }
            else{
                LOADING.classList.add("open");
                GenerateEndingSvc.save({id: vm.variables.office_id}).then(function (response) {
                    window.open(
                      "report/ending_balance/ending?preparedby=" + vm.preparedby + "&desig1=" + vm.desig1 + "&approvedby=" + vm.approvedby +
                      "&desig2=" + vm.desig2 + "&date_now=" + vm.date_now + "&level=" + vm.level + "&center=" + vm.center_name
                    );
                LOADING.classList.remove("open");
              }); 
            }
          }

        vm.generateAccount = function(){
            console.log(vm.date_now);
            if(!vm.variables.office_id){
                OfficeGenerationSvc.showSwal('Warning', "Please choose account to generate.", 'warning');
            }
            else if(!vm.preparedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose prepared by signatory to proceed.", 'warning');
            }
            else if(!vm.approvedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose approved by signatory to proceed.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                OfficeGenerationSvc.save({
                id: vm.variables.office_id
                }).then(function (response) {
                    window.open(
                      "report/accounts?id=" + vm.variables.office_id + "&office_code=" + vm.variables.office_code +
                      "&office_UACS=" + vm.variables.office_UACS + "&office=" + vm.variables.office + "&formula=" + vm.variables.formula +
                      "&preparedby=" + vm.preparedby + "&desig1=" + vm.desig1 + "&approvedby=" + vm.approvedby +
                      "&desig2=" + vm.desig2 + "&date_now=" + vm.date_now
                    );
                LOADING.classList.remove("open");
              }); 
            }
          }

          vm.generatecenter = function(){
            if(!vm.variables.office_id){
                OfficeGenerationSvc.showSwal('Warning', "Please choose account to generate.", 'warning');
            }
            else if(!vm.preparedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose prepared by signatory to proceed.", 'warning');
            }
            else if(!vm.approvedby){
                OfficeGenerationSvc.showSwal('Warning', "Please choose approved by signatory to proceed.", 'warning');
            }
            else if(!vm.center_name){
                OfficeGenerationSvc.showSwal('Warning', "Please choose center/unit to generate.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                OfficeGenerationOfficeSvc.save({
                id: vm.variables.office_id, center: vm.center_idlink
                }).then(function (response) {
                    window.open(
                      "report/accounts/office?id=" + vm.variables.office_id + "&office_code=" + vm.variables.office_code +
                      "&office_UACS=" + vm.variables.office_UACS + "&office=" + vm.variables.office + "&formula=" + vm.variables.formula +
                      "&preparedby=" + vm.preparedby + "&desig1=" + vm.desig1 + "&approvedby=" + vm.approvedby +
                      "&desig2=" + vm.desig2 + "&date_now=" + vm.date_now + "&center=" + vm.center_idlink + "&centername=" +
                      vm.center_name
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
                    console.log(data);
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.preparedby = data.Signature;
                        vm.desig1 = data.Designation;
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
                    console.log(data);
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.approvedby = data.Signature;
                        vm.desig2 = data.Designation;
                    }
                });
            }
        } 

        vm.openSub = function () {
            if(vm.variables.office_id){
                var options = {
                    data: vm.variables.office_id,
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
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variableSub.subaccount = data.subaccount;
                        vm.variableSub.description = data.description;
                        vm.variableSub.acct_link = data.acct_link;
                    }
                });
            }
            else{
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
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variableSub.subaccount = data.subaccount;
                        vm.variableSub.description = data.description;
                        vm.variableSub.acct_link = data.acct_link;
                    }
                });
            }
        }  

        vm.searchingSub = function () {
            if (!vm.searchsub) {
                return (vm.filtered2 = vm.ArrayList2);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList2;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.subaccount.toUpperCase().startsWith(vm.searchsub.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered2 = searchFound);
        };

        vm.searchingDesc = function () {
            if (!vm.searchdesc) {
                return (vm.filtered2 = vm.ArrayList2);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList2;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.description.toUpperCase().startsWith(vm.searchdesc.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered2 = searchFound);
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
                    item.office.toUpperCase().startsWith(vm.search.toUpperCase())
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
                    item.office_code.toUpperCase().startsWith(vm.searchcode.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchinguacs = function () {
            if (!vm.searchuacs) {
                return (vm.filtered = vm.ArrayList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.office_UACS.toUpperCase().startsWith(vm.searchuacs.toUpperCase())
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
                { name: "Account", field: "office", width: 500 },
                { name: "UACS", field: "office_UACS" },
                { name: "Account code", field: "office_code" }
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.typeGrid2 = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Sub Acct", field: "subaccount" },
                { name: "Description", field: "description" },
                { name: "Stock no", field: "stock_no" },
                { name: "Brand", field: "brand" },
            ],
            data: "vm.filtered2",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow2(row.entity);
                });
            }
        };

        vm.getCheckSlc = function (id) {
            LOADING.classList.add("open");
            CheckCountSvc.get({id:id}).then(function (response) {
                if (response.message) {
                    vm.ArrayCount = [];
                } else {
                    vm.ArrayCount = response;
                }
                console.log(vm.ArrayCount.length);
                LOADING.classList.remove("open");
            })
        }

        vm.getSubacct = function () {
            LOADING.classList.add("open");
            SubAcctSvc.get({id: vm.variables.office_id}).then(function (response) {
                if (response.message) {
                    vm.ArrayList2 = [];
                } else {
                    vm.ArrayList2 = response;
                }
                vm.filtered2 = vm.ArrayList2;
                LOADING.classList.remove("open");
            })
        }

        vm.getOfficeList = function () {
            LOADING.classList.add("open");
            OfficeCodeSvc.get().then(function (response) {
                if (response.message) {
                    vm.ArrayList = [];
                } else {
                    vm.ArrayList = response;
                }
                vm.filtered = vm.ArrayList;
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow2 = function (x) {
            vm.variableSub = {
                subacct_id: x.subacct_id,
                subaccount: x.subaccount,
                description: x.description,
                stock_no: x.stock_no,
                acct_link: x.acct_link,
                brand: x.brand,
                index: vm.ArrayList2.indexOf(x)
            };
            vm.data = vm.variables.office_UACS + '-' +vm.variableSub.subacct_id;
            vm.getCheckSlc(vm.data);
            // vm.getUserCredentials();
        }

        vm.clickRow = function (x) {
            vm.variables = {
                office_id: x.office_id,
                office: x.office,
                office_code: x.office_code,
                office_UACS: x.office_UACS,
                account_type: x.account_type,
                formula: x.formula,
                index: vm.ArrayList.indexOf(x)
            };
            // console.log(vm.variables);
            vm.getSubacct(vm.variables.office_id);
            // vm.clearDetailFunction();
            // vm.getUserCredentials();
        }

        vm.save = function () {
            if(!vm.variables.office){
                OfficeCodeSvc.showSwal('Ooops', 'Please fill up the office field to proceed', 'warning');
            }
            else if(!vm.variables.office_UACS){
                OfficeCodeSvc.showSwal('Ooops', 'Please fill up the uacs field to proceed', 'warning');
            }
            else{
                LOADING.classList.add("open");
                OfficeCodeSvc.save(vm.variables).then(function (response) {
                    if (response.success) {
                        if (response.id) {
                            vm.variables.office_id = response.id;
                            vm.ArrayList.push(vm.variables);
                            vm.filtered = vm.ArrayList;
                            OfficeCodeSvc.showSwal('Success', response.message, 'success');
                        }
                        else {
                            vm.ArrayList.splice(
                                vm.variables.index,
                                1,
                                vm.variables
                            );
                            vm.filtered = vm.ArrayList;
                            OfficeCodeSvc.showSwal('Success', response.message, 'success');
                        }
                        vm.clearFunction();
                    } else {
                        OfficeCodeSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }

        vm.savesub = function () {
            if(!vm.variables.office_id){
                SubAcctSvc.showSwal('Ooops', 'Please choose a account to proceed', 'warning');
            }
            else if(!vm.variableSub.subaccount){
                SubAcctSvc.showSwal('Ooops', 'Please fill up the subaccount field to proceed', 'warning');
            }
            else if(!vm.variableSub.description){
                SubAcctSvc.showSwal('Ooops', 'Please fill up the description field to proceed', 'warning');
            }
            else{ 
                LOADING.classList.add("open");
                vm.variableSub.acct_link = vm.variables.office_id;
                SubAcctactionSvc.save(vm.variableSub).then(function (response) { 
                    if (response.success) {
                        if (response.id) {
                            vm.variableSub.subacct_id = response.id;
                            vm.ArrayList2.push(vm.variableSub);
                            vm.filtered2 = vm.ArrayList2;
                            SubAcctactionSvc.showSwal('Success', response.message, 'success');
                        }
                        else {
                            vm.ArrayList2.splice(
                                vm.variableSub.index,
                                1,
                                vm.variableSub
                            );
                            vm.filtered2 = vm.ArrayList2;
                            SubAcctactionSvc.showSwal('Success', response.message, 'success');
                        }
                        vm.clearDetailFunction();
                    } else {
                        SubAcctactionSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }
        vm.deletesub = function () {
            
            if (!vm.variableSub.subacct_id) {
                return SubAcctSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            else if(vm.ArrayCount.length > 0){
                return SubAcctSvc.showSwal('Ooops', "Cannot delete this item due to existing data.", 'warning');
            }
            else{
                // LOADING.classList.add("open");
                SubAcctSvc.delete(vm.variableSub.subacct_id).then(function (response) {
                    if (response.success) {
                        vm.ArrayList2.splice(
                            vm.variableSub.index,
                            1
                        );
                        vm.filtered2 = vm.ArrayList2;
                        vm.clearDetailFunction();
                        SubAcctSvc.showSwal('Success', response.message, 'success');
                    } else {
                        SubAcctSvc.showSwal('Error', response.message, 'error');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }
        vm.delete = function () {
            if (!vm.variables.office_id) {
                return OfficeCodeSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            else if(vm.ArrayList2.length > 0){
                return SubAcctSvc.showSwal('Ooops', "Cannot delete this item due to existing data.", 'warning');
            }
            else{
                // LOADING.classList.add("open");
                OfficeCodeSvc.delete(vm.variables.office_id).then(function (response) {
                    if (response.success) {
                        vm.ArrayList.splice(
                            vm.variables.index,
                            1
                        );
                        vm.filtered = vm.ArrayList;
                        vm.clearFunction();
                        OfficeCodeSvc.showSwal('Success', response.message, 'success');
                    } else {
                        OfficeCodeSvc.showSwal('Error', response.message, 'error');
                    }
                })
            }
            LOADING.classList.remove("open");
        }
        vm.clearFunction = function () {
            vm.variables = {};
            vm.variableSub = {};
            vm.filtered2 = [];
            vm.variables.account_type = "INVENTORY";
            // vm.getUserCredentials();
        }
        vm.clearDetailFunction = function () {
            vm.variableSub = {};
            // vm.getUserCredentials();
        }
    }

function BrowseOfficeCodeCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.ArrayList = [];
    modal.filtered = [];
    modal.searchcode;
    modal.searchuacs;
	$ocLazyLoad
		.load([MASTERURL + 'office_code/service.js?v=' + VERSION,]).then(function (d) {
			OfficeCodeSvc = $injector.get("OfficeCodeSvc");
			modal.getofficeList();
		});
        modal.getofficeList = function () {
            LOADING.classList.add("open");
            OfficeCodeSvc.get().then(function (response) {
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
            { name: "Office", field: "office" , width: '60%'},
            { name: "UACS", field: "office_UACS" },
            { name: "office code", field: "office_code" }
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
				item.office.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
    }
    
    modal.searchingcode = function () {
        if (!modal.searchcode) {
            return (modal.filtered = modal.ArrayList);
        }
        // declare storage to return (clear for another search)
        var searchFound = [];
        var temp_storage = modal.ArrayList;
        temp_storage.forEach(function (item) {
            // search field
            if (
                item.office_code.toUpperCase().startsWith(modal.searchcode.toUpperCase())
            ) {
                searchFound.push(item);
            }
        });
        return (modal.filtered = searchFound);
    };

    modal.searchinguacs = function () {
        if (!modal.searchuacs) {
            return (modal.filtered = modal.ArrayList);
        }
        // declare storage to return (clear for another search)
        var searchFound = [];
        var temp_storage = modal.ArrayList;
        temp_storage.forEach(function (item) {
            // search field
            if (
                item.office_UACS.toUpperCase().startsWith(modal.searchuacs.toUpperCase())
            ) {
                searchFound.push(item);
            }
        });
        return (modal.filtered = searchFound);
    };


	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

function BrowseSubaccountCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.ArrayList = [];
    modal.filtered = [];
    modal.searchcode;
    modal.searchuacs;
	$ocLazyLoad
		.load([MASTERURL + 'office_code/service.js?v=' + VERSION,]).then(function (d) {
			OfficeCodeSvc = $injector.get("OfficeCodeSvc");
            SuballAcctSvc = $injector.get("SuballAcctSvc");
			modal.getofficeList();
            console.log(data);
		});
        modal.getofficeList = function () {
            LOADING.classList.add("open");
            if(data){
                SuballAcctSvc.get({id:data}).then(function (response) {
                    if (response.message) {
                        modal.ArrayList = [];
                    } else {
                        modal.ArrayList = response;
                    }
                    modal.filtered = modal.ArrayList;
                    LOADING.classList.remove("open");
                })
            }
            else{
                console.log("no id");
                SuballAcctSvc.get().then(function (response) {
                    if (response.message) {
                        modal.ArrayList = [];
                    } else {
                        modal.ArrayList = response;
                    }
                    modal.filtered = modal.ArrayList;
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
            { name: "Sub Acct", field: "subaccount"},
            { name: "description", field: "description", width: "30%"},
            { name: "Account", field: "office", width: "40%"},
            { name: "Brand", field: "brand"}
		],
		data: "modal.filtered",
		onRegisterApi: function (gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function (row) {
				modal.clickRow(row.entity);
			});
		}
	};

    modal.searchingStockNo = function () {
		if (!modal.searchStock) {
			return (modal.filtered = modal.ArrayList);
		}
		var searchFound = [];
		var temp_storage = modal.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.stock_no.toUpperCase().startsWith(modal.searchStock.toUpperCase())
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
				item.subaccount.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
    }
    
    modal.searchingDesc = function () {
        if (!modal.searchDesc) {
            return (modal.filtered = modal.ArrayList);
        }
        // declare storage to return (clear for another search)
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
    };

    modal.searchinguacs = function () {
        if (!modal.searchuacs) {
            return (modal.filtered = modal.ArrayList);
        }
        // declare storage to return (clear for another search)
        var searchFound = [];
        var temp_storage = modal.ArrayList;
        temp_storage.forEach(function (item) {
            // search field
            if (
                item.office_UACS.toUpperCase().startsWith(modal.searchuacs.toUpperCase())
            ) {
                searchFound.push(item);
            }
        });
        return (modal.filtered = searchFound);
    };


	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

