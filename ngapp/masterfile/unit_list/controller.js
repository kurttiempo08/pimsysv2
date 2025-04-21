//main.js
angular.module('app')
	.controller('UnitCtrl', UnitCtrl)
	.controller('BrowseUnitCtrl', BrowseUnitCtrl)
    UnitCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
    BrowseUnitCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function UnitCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.ArrayList = [];
	vm.variables = {};
    vm.filtered = [];
    vm.search;
    vm.searchcode;

	$ocLazyLoad
		.load([MASTERURL + 'unit_list/service.js?v=' + VERSION,]).then(function (d) {
            UnitSvc = $injector.get("UnitSvc");
            vm.getUnitList();
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
                    item.unit_name.toUpperCase().startsWith(vm.search.toUpperCase())
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
                { name: "Unit", field: "unit_name" },
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getUnitList = function () {
            LOADING.classList.add("open");
            UnitSvc.get().then(function (response) {
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
                unit_id: x.unit_id,
                unit_name: x.unit_name,
                index: vm.ArrayList.indexOf(x)
            };
            console.log(vm.variables);
        }

        vm.save = function () {
            LOADING.classList.add("open");
            UnitSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.unit_id = response.id;
                        vm.ArrayList.push(vm.variables);
                        vm.filtered = vm.ArrayList;
                        UnitSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.ArrayList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.ArrayList;
                        UnitSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                } else {
                    UnitSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.delete = function () {
            if (!vm.variables.unit_id) {
                return UnitSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            UnitSvc.delete(vm.variables.unit_id).then(function (response) {
                if (response.success) {
                    vm.ArrayList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.ArrayList;
                    vm.clearFunction();
                    UnitSvc.showSwal('Success', response.message, 'success');
                } else {
                    UnitSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
        }
    }

function BrowseUnitCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.incomeList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'unit_list/service.js?v=' + VERSION,]).then(function (d) {
			UnitSvc = $injector.get("UnitSvc");
			modal.getUnit();
		});
	modal.getUnit = function () {
		LOADING.classList.add("open");
		UnitSvc.get().then(function (response) {
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
			{ name: "Unit", field: "unit_name" },
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
				item.unit_name.toUpperCase().startsWith(modal.search.toUpperCase())
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
