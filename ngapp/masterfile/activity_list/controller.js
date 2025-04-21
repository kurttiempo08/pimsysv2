//main.js
angular.module('app')
	.controller('ActivityCtrl', ActivityCtrl)
	.controller('BrowseActivityCtrl', BrowseActivityCtrl)
    ActivityCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
    BrowseActivityCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function ActivityCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.activityList = [];
	vm.variables = {};
    vm.filtered = [];
    // vm.data = [4,3,2,1];
	vm.search;

	$ocLazyLoad
		.load([MASTERURL + 'activity_list/service.js?v=' + VERSION,]).then(function (d) {
            ActivitySvc = $injector.get("ActivitySvc");
            vm.getActivityList();
        });

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.cattleList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.cattleList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.activity.toUpperCase().startsWith(vm.search.toUpperCase())
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
                { name: "Activity Name", field: "activity" },
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getActivityList = function () {
            LOADING.classList.add("open");
            ActivitySvc.get().then(function (response) {
                if (response.message) {
                    vm.activityList = [];
                } else {
                    vm.activityList = response;
                }
                vm.filtered = vm.activityList;
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow = function (x) {
            vm.variables = {
                activity_id: x.activity_id,
                activity: x.activity,
                index: vm.activityList.indexOf(x)
            };
            console.log(vm.variables);
        }

        vm.save = function () {
            LOADING.classList.add("open");
            ActivitySvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.activity_id = response.id;
                        vm.activityList.push(vm.variables);
                        vm.filtered = vm.activityList;
                        ActivitySvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.activityList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.activityList;
                        ActivitySvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                } else {
                    ActivitySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.delete = function () {
            if (!vm.variables.activity_id) {
                return ActivitySvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            ActivitySvc.delete(vm.variables.activity_id).then(function (response) {
                if (response.success) {
                    vm.activityList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.activityList;
                    vm.clearFunction();
                    ActivitySvc.showSwal('Success', response.message, 'success');
                } else {
                    ActivitySvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
        }
    }

function BrowseActivityCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.incomeList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'other_income/service.js?v=' + VERSION,]).then(function (d) {
			OtherListSvc = $injector.get("OtherListSvc");
			modal.getIncomeList();
		});
	modal.getIncomeList = function () {
		LOADING.classList.add("open");
		OtherListSvc.get({autodebit: true}).then(function (response) {
			if (response.message) {
				modal.incomeList = [];
			} else {
				modal.incomeList = response;
			}
			modal.filtered = modal.incomeList;
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
			{ name: "Other Income Name", field: "ChAcctName" }
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
			return (modal.filtered = modal.incomeList);
		}
		var searchFound = [];
		var temp_storage = modal.incomeList;
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
	modal.clickRow = function (row) {
		$uibModalInstance.close(row);
	}
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}
