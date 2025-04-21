//main.js
angular.module('app')
	.controller('SupplierCtrl', SupplierCtrl)
	.controller('BrowseSupplierCtrl', BrowseSupplierCtrl)
    SupplierCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
    BrowseSupplierCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function SupplierCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.ArrayList = [];
	vm.variables = {};
    vm.filtered = [];
    vm.search;
    vm.searchcode;

	$ocLazyLoad
		.load([MASTERURL + 'supplier_list/service.js?v=' + VERSION,]).then(function (d) {
            SupplierSvc = $injector.get("SupplierSvc");
            vm.getSupplierList();
        });

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
                    item.supplier_name.toUpperCase().startsWith(vm.search.toUpperCase())
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
                { name: "Supplier", field: "supplier_name" },
                { name: "Address", field: "supplier_address" },
                // { name: "TIN", field: "supplier_tin" },
                // { name: "Proprietor Firstname", field: "proprietor_fname" },
                // { name: "Proprietor Lastname", field: "proprietor_lname" },
                // { name: "Proprietor Middlename", field: "proprietor_mname" },
                { name: "Mobile", field: "mobile" },
                { name: "Email", field: "email" },
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getSupplierList = function () {
            LOADING.classList.add("open");
            SupplierSvc.get().then(function (response) {
                if (response.message) {
                    vm.ArrayList = [];
                } else {
                    vm.ArrayList = response;
                }
                vm.filtered = vm.ArrayList;
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow = function (x) {
            vm.variables = {
                supplier_id	: x.supplier_id	,
                supplier_name: x.supplier_name,
                supplier_address: x.supplier_address,
                supplier_tin: x.supplier_tin	,
                proprietor_fname: x.proprietor_fname,
                proprietor_lname: x.proprietor_lname,
                proprietor_mname: x.proprietor_mname,
                mobile: x.mobile,
                email: x.email,
                index: vm.ArrayList.indexOf(x)
            };
            console.log(vm.variables);
        }

        vm.save = function () {
            LOADING.classList.add("open");
            SupplierSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.supplier_id = response.id;
                        vm.ArrayList.push(vm.variables);
                        vm.filtered = vm.ArrayList;
                        SupplierSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.ArrayList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.ArrayList;
                        SupplierSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                } else {
                    SupplierSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.delete = function () {
            if (!vm.variables.supplier_id) {
                return SupplierSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            SupplierSvc.delete(vm.variables.supplier_id).then(function (response) {
                if (response.success) {
                    vm.ArrayList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.ArrayList;
                    vm.clearFunction();
                    SupplierSvc.showSwal('Success', response.message, 'success');
                } else {
                    SupplierSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
        }
    }

function BrowseSupplierCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.ArrayList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'supplier_list/service.js?v=' + VERSION,]).then(function (d) {
			SupplierSvc = $injector.get("SupplierSvc");
			modal.getData();
		});
	modal.getData = function () {
		LOADING.classList.add("open");
		SupplierSvc.get().then(function (response) {
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
            { name: "Supplier", field: "supplier_name" },
            { name: "Address", field: "supplier_address" },
            // { name: "TIN", field: "supplier_tin" },
            // { name: "Proprietor Firstname", field: "proprietor_fname" },
            // { name: "Proprietor Lastname", field: "proprietor_lname" },
            // { name: "Proprietor Middlename", field: "proprietor_mname" },
            // { name: "Mobile", field: "mobile" },
            // { name: "Email", field: "email" },
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
				item.supplier_name.toUpperCase().startsWith(modal.search.toUpperCase())
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
