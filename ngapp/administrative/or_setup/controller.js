//main.js
angular.module('app')
	.controller('OrSetupCtrl', OrSetupCtrl)
	.controller('BrowseOtherIncCtrl', BrowseOtherIncCtrl)
    OrSetupCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
BrowseOtherIncCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function OrSetupCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.OrsetupList = [];
	vm.variables = {};
	vm.filtered = [];
	vm.search;

	$ocLazyLoad
		.load([ADMINURL + 'or_setup/service.js?v=' + VERSION,]).then(function (d) {
			OrSvc = $injector.get("OrSvc");
			vm.getSetup();
		});

	vm.getSetup = function () {
		LOADING.classList.add("open");
		OrSvc.get().then(function (response) {
			if (response.message) {
				vm.OrsetupList = [];
			} else {
				vm.OrsetupList = response[0];
			}
            // console.log(vm.OrsetupList.OrNo);
            vm.variables.OrNo = vm.OrsetupList.OrNo;
			LOADING.classList.remove("open");
		})
	}
	vm.save = function () {
        vm.variables.setupID = 1;
		// LOADING.classList.add("open");
		OrSvc.save(vm.variables).then(function (response) {
			if (response.success) {
				if (response.id) {
					vm.variables.setupID = response.id;
					OrSvc.showSwal('Success', response.message, 'success');
				}
				else {
                    // vm.OrsetupList.splice(
					// 	vm.variables.index,
					// 	1,
					// 	vm.variables
                    // );
                    OrSvc.showSwal('Success', response.message, 'success');
                    vm.getSetup();
				}
				// vm.clearFunction();
			} else {
				OrSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}
			LOADING.classList.remove("open");
		})
	}
	vm.delete = function () {
		if (!vm.variables.SigID) {
			return OrSvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
		}
		OrSvc.delete(vm.variables.SigID).then(function (response) {
			if (response.success) {
				vm.SignatoryList.splice(
					vm.variables.index,
					1
				);
				vm.clearFunction();
				vm.filtered = vm.SignatoryList;
				OrSvc.showSwal('Success', response.message, 'success');
			} else {
				OrSvc.showSwal('Error', response.message, 'error');
			}
			LOADING.classList.remove("open");
		})
	}

	vm.clearFunction = function () {
		vm.variables = {};
	}
}

function BrowseOtherIncCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
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
		OtherListSvc.get().then(function (response) {
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
			{ name: "Other Income Name", field: "OtherIncomeName" }
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
