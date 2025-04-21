//main.js
angular.module('app')
	.controller('SignatoryCtrl', SignatoryCtrl)
	.controller('BrowseSignatoryCtrl', BrowseSignatoryCtrl)
SignatoryCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
BrowseSignatoryCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function SignatoryCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.SignatoryList = [];
	vm.variables = {};
	vm.filtered = [];
	vm.search;

	$ocLazyLoad
		.load([ADMINURL + 'signatory_list/service.js?v=' + VERSION,]).then(function (d) {
			SignatorySvc = $injector.get("SignatorySvc");
			vm.getSignatoryList();
		});

	vm.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
			{ name: "Signatory", field: "Signature" },
			{ name: "Designation", field: "Designation" }
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
			return (vm.filtered = vm.SignatoryList);
		}
		// declare storage to return (clear for another search)
		var searchFound = [];
		var temp_storage = vm.SignatoryList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.Signature.toUpperCase().startsWith(vm.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (vm.filtered = searchFound);
	};
	vm.clickRow = function (x) {
		vm.variables = {
			SigID: x.SigID,
			Signature: x.Signature,
			Designation: x.Designation,
			index: vm.SignatoryList.indexOf(x)
		};
		console.log(vm.variables);
	}
	vm.getSignatoryList = function () {
		LOADING.classList.add("open");
		SignatorySvc.get().then(function (response) {
			if (response.message) {
				vm.SignatoryList = [];
			} else {
				vm.SignatoryList = response;
			}
			vm.filtered = vm.SignatoryList;
			LOADING.classList.remove("open");
		})
	}
	vm.save = function () {
		LOADING.classList.add("open");
		SignatorySvc.save(vm.variables).then(function (response) {
			if (response.success) {
				if (response.id) {
					vm.variables.SigID = response.id;
					vm.SignatoryList.push(vm.variables);
					vm.filtered = vm.SignatoryList;
					SignatorySvc.showSwal('Success', response.message, 'success');
				}
				else {
					vm.SignatoryList.splice(
						vm.variables.index,
						1,
						vm.variables
					);
					vm.filtered = vm.SignatoryList;
				}
				vm.clearFunction();
			} else {
				SignatorySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}
			LOADING.classList.remove("open");
		})
	}
	vm.delete = function () {
		if (!vm.variables.SigID) {
			return SignatorySvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
		}
		SignatorySvc.delete(vm.variables.SigID).then(function (response) {
			if (response.success) {
				vm.SignatoryList.splice(
					vm.variables.index,
					1
				);
				vm.clearFunction();
				vm.filtered = vm.SignatoryList;
				SignatorySvc.showSwal('Success', response.message, 'success');
			} else {
				SignatorySvc.showSwal('Error', response.message, 'error');
			}
			LOADING.classList.remove("open");
		})
	}

	vm.clearFunction = function () {
		vm.variables = {};
	}
}

function BrowseSignatoryCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.signatoryList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([ADMINURL + 'signatory_list/service.js?v=' + VERSION,]).then(function (d) {
			SignatorySvc = $injector.get("SignatorySvc");
			modal.getSignatoryList();
		});
	modal.getSignatoryList = function () {
		LOADING.classList.add("open");
		SignatorySvc.get().then(function (response) {
			if (response.message) {
				modal.signatoryList = [];
			} else {
				modal.signatoryList = response;
			}
			modal.filtered = modal.signatoryList;
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
			{ name: "Signatory", field: "Signature" },
			{ name: "Designation", field: "Designation" },
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
			return (modal.filtered = modal.signatoryList);
		}
		var searchFound = [];
		var temp_storage = modal.signatoryList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.Signature.toUpperCase().startsWith(modal.search.toUpperCase())
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
