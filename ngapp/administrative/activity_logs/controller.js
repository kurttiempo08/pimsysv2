//main.js
angular.module('app')
	.controller('ActivityLogsCtrl', ActivityLogsCtrl)
	.controller('BrowseSignatoryCtrl', BrowseSignatoryCtrl)
ActivityLogsCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
BrowseSignatoryCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function ActivityLogsCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.ArrayList = [];
	vm.variables = {};
	vm.filtered = [];
	vm.search;

	$ocLazyLoad
		.load([ADMINURL + 'activity_logs/service.js?v=' + VERSION,]).then(function (d) {
			ActivityLogsSvc = $injector.get("ActivityLogsSvc");
			vm.getLogs();
		});

	vm.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
			{ name: "Activity", field: "activity" },
			{ name: "Authenticated by", field: "deleted_by"},
            { name: "PO #", field: "po_num"},
            { name: "Account", field: "item_name"},
            { name: "Desc", field: "item_description"},
            { name: "Property #", field: "item_code"},
            { name: "Qty_rec", field: "qty_rec"},
            { name: "Unit_rec", field: "unit_rec"},
            { name: "Total_rec", field: "totalcost_rec"},
            { name: "Qty_issue", field: "qty_issue"},
            { name: "Unit_issue", field: "unitcost_issue"},
            { name: "Total_issue", field: "totalcost_issue"},
			{ name: "Reason", field: "reason"},
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
			return (vm.filtered = vm.ArrayList);
		}
		// declare storage to return (clear for another search)
		var searchFound = [];
		var temp_storage = vm.ArrayList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.item_code.toUpperCase().startsWith(vm.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (vm.filtered = searchFound);
	};
	vm.clickRow = function (x) {
		vm.variables = {
			activity_id: x.activity_id,
			activity: x.activity,
			deleted_by: x.deleted_by,
			index: vm.ArrayList.indexOf(x)
		};
		console.log(vm.variables);
	}
	vm.getLogs = function () {
		LOADING.classList.add("open");
		ActivityLogsSvc.get().then(function (response) {
			if (response.message) {
				vm.ArrayList = [];
			} else {
				vm.ArrayList = response;
			}
			vm.filtered = vm.ArrayList;
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
