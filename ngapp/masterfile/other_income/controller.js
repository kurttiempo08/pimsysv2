//main.js
angular.module('app')
	.controller('OtherIncCtrl', OtherIncCtrl)
	.controller('BrowseOtherIncCtrl', BrowseOtherIncCtrl)
OtherIncCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
BrowseOtherIncCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function OtherIncCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.IncomeList = [];
	vm.variables = {};
	vm.filtered = [];
	vm.search;

	$ocLazyLoad
		.load([MASTERURL + 'other_income/service.js?v=' + VERSION,]).then(function (d) {
			OtherListSvc = $injector.get("OtherListSvc");
			vm.getIncomeList();
		});

	vm.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
			{ name: "Hog Code", field: "hog_code" },
			{ name: "Hog weight (Kg)", field: "hog_weight" },
			{ name: "Hog Gender", field: "hog_gender" },
			{ name: "Hog description", field: "hog_desc" }
		],
		data: "vm.filtered",
		onRegisterApi: function (gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function (row) {
				vm.clickRow(row.entity);
			});
		}
	};
	vm.searching = function () {
		if (!vm.search) {
			return (vm.filtered = vm.IncomeList);
		}
		// declare storage to return (clear for another search)
		var searchFound = [];
		var temp_storage = vm.IncomeList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.hog_code.toUpperCase().startsWith(vm.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (vm.filtered = searchFound);
	};
	vm.clickRow = function (x) {
		vm.variables = {
			hog_id: x.hog_id,
			hog_code: x.hog_code,
			hog_weight: x.hog_weight,
			hog_desc: x.hog_desc,
			index: vm.IncomeList.indexOf(x)
		};
		console.log(vm.variables);
	}
	vm.getIncomeList = function () {
		LOADING.classList.add("open");
		OtherListSvc.get().then(function (response) {
			if (response.message) {
				vm.IncomeList = [];
			} else {
				vm.IncomeList = response;
			}
			vm.filtered = vm.IncomeList;
			LOADING.classList.remove("open");
		})
	}
	vm.save = function () {
		LOADING.classList.add("open");
		OtherListSvc.save(vm.variables).then(function (response) {
			if (response.success) {
				if (response.id) {
					vm.variables.hog_id = response.id;
					vm.IncomeList.push(vm.variables);
					vm.filtered = vm.IncomeList;
					OtherListSvc.showSwal('Success', response.message, 'success');
				}
				else {
					vm.IncomeList.splice(
						vm.variables.index,
						1,
						vm.variables
					);
					vm.filtered = vm.IncomeList;
					OtherListSvc.showSwal('Success', response.message, 'success');
				}
				vm.clearFunction();
			} else {
				OtherListSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}
			LOADING.classList.remove("open");
		})
	}
	vm.delete = function () {
		if (!vm.variables.OIListID) {
			return OtherListSvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
		}
		OtherListSvc.delete(vm.variables.OIListID).then(function (response) {
			if (response.success) {
				vm.IncomeList.splice(
					vm.variables.index,
					1
				);
				vm.filtered = vm.IncomeList;
				vm.clearFunction();
				OtherListSvc.showSwal('Success', response.message, 'success');
			} else {
				OtherListSvc.showSwal('Error', response.message, 'error');
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
			{ name: "Hog Code", field: "hog_code" },
			{ name: "Hog weight (Kg)", field: "hog_weight" },
			{ name: "Hog Gender", field: "hog_gender" },
			{ name: "Hog description", field: "hog_desc" }
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
				item.cattle_code.toUpperCase().startsWith(modal.search.toUpperCase())
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
