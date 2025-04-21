//main.js
angular.module('app')
	.controller('FundsourceCtrl', FundsourceCtrl)
	.controller('BrowseFundsourceCtrl', BrowseFundsourceCtrl)
    FundsourceCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
    BrowseFundsourceCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function FundsourceCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.fundsourceList = [];
	vm.variables = {};
    vm.filtered = [];
    // vm.data = [4,3,2,1];
    vm.search;
    vm.searchcode;

	$ocLazyLoad
		.load([MASTERURL + 'fundsource_list/service.js?v=' + VERSION,]).then(function (d) {
            FundsourceSvc = $injector.get("FundsourceSvc");
            vm.getFundsourceList();
        });

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.fundsourceList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.fundsourceList;
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
                return (vm.filtered = vm.fundsourceList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.fundsourceList;
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
                { name: "Fundsource", field: "fund_name" },
                { name: "Code", field: "fund_code" }
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getFundsourceList = function () {
            LOADING.classList.add("open");
            FundsourceSvc.get().then(function (response) {
                if (response.message) {
                    vm.fundsourceList = [];
                } else {
                    vm.fundsourceList = response;
                }
                vm.filtered = vm.fundsourceList;
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow = function (x) {
            vm.variables = {
                fund_id: x.fund_id,
                fund_name: x.fund_name,
                fund_code: x.fund_code,
                index: vm.fundsourceList.indexOf(x)
            };
            console.log(vm.variables);
        }

        vm.save = function () {
            LOADING.classList.add("open");
            FundsourceSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.fund_id = response.id;
                        vm.fundsourceList.push(vm.variables);
                        vm.filtered = vm.fundsourceList;
                        FundsourceSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.fundsourceList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.fundsourceList;
                        FundsourceSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                } else {
                    FundsourceSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.delete = function () {
            if (!vm.variables.fund_id) {
                return FundsourceSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            FundsourceSvc.delete(vm.variables.fund_id).then(function (response) {
                if (response.success) {
                    vm.fundsourceList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.fundsourceList;
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
        }
    }

function BrowseFundsourceCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.ArrayList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'fundsource_list/service.js?v=' + VERSION,]).then(function (d) {
			FundsourceSvc = $injector.get("FundsourceSvc");
			modal.getFund();
		});
	modal.getFund = function () {
		LOADING.classList.add("open");
		FundsourceSvc.get().then(function (response) {
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
			{ name: "Fundsource", field: "fund_name" },
            { name: "Code", field: "fund_code" }
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
