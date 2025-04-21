//main.js
angular.module('app')
	.controller('CenterListCtrl', CenterListCtrl)
	.controller('BrowseCenterCtrl', BrowseCenterCtrl)
    CenterListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
    BrowseCenterCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function CenterListCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.ArrayList = [];
	vm.variables = {};
    vm.filtered = [];
    vm.search;
    vm.searchcode;

	$ocLazyLoad
		.load([MASTERURL + 'center_list/service.js?v=' + VERSION,]).then(function (d) {
            CenterSvc = $injector.get("CenterSvc");
            vm.getCenterList();
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
                    item.center_name.toUpperCase().startsWith(vm.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchingFull = function () {
            if (!vm.searchFull) {
                return (vm.filtered = vm.ArrayList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.center_fname.toUpperCase().startsWith(vm.searchFull.toUpperCase())
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
                { name: "Center/Program", field: "center_name", width:200},
                { name: "Center Fullname", field: "center_fname", width:550},
                { name: "Resposibility Center", field: "responsibility" },
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getCenterList = function () {
            LOADING.classList.add("open");
            CenterSvc.get().then(function (response) {
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
                center_id: x.center_id,
                center_name: x.center_name,
                center_fname: x.center_fname,
                responsibility: x.responsibility,
                index: vm.ArrayList.indexOf(x)
            };
            console.log(vm.variables);
        }

        vm.save = function () {
            LOADING.classList.add("open");
            CenterSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.center_id = response.id;
                        vm.ArrayList.push(vm.variables);
                        vm.filtered = vm.ArrayList;
                        CenterSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.ArrayList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.ArrayList;
                        CenterSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                } else {
                    CenterSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.delete = function () {
            if (!vm.variables.center_id) {
                return CenterSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            CenterSvc.delete(vm.variables.center_id).then(function (response) {
                if (response.success) {
                    vm.ArrayList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.ArrayList;
                    vm.clearFunction();
                    CenterSvc.showSwal('Success', response.message, 'success');
                } else {
                    CenterSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
        }
    }

function BrowseCenterCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.incomeList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'center_list/service.js?v=' + VERSION,]).then(function (d) {
			CenterSvc = $injector.get("CenterSvc");
			modal.getCenter();
		});
	modal.getCenter = function () {
		LOADING.classList.add("open");
		CenterSvc.get().then(function (response) {
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
			{ name: "Center/Program", field: "center_name" },
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
				item.center_name.toUpperCase().startsWith(modal.search.toUpperCase())
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
