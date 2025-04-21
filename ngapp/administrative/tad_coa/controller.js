//main.js
angular.module('app')
	.controller('AutoDebitCtrl', AutoDebitCtrl)
	.controller('BrowseOtherIncCtrl', BrowseOtherIncCtrl)
	.controller('BrowseAcctCtrl', BrowseAcctCtrl)
AutoDebitCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
BrowseOtherIncCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
BrowseAcctCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function AutoDebitCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.DebitList = [];
	vm.variables = {};
	vm.filtered = [];
	vm.search;

	$ocLazyLoad
		.load([ADMINURL + 'tad_coa/service.js?v=' + VERSION,]).then(function (d) {
			AutoDebitSvc = $injector.get("AutoDebitSvc");
			vm.getIncomeList();
		});

	vm.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
			{ name: "Other Income", field: "OI_name" },
			{ name: "Other Income Type", field: "OI_type" },
			{ name: "Chart Code", field: "ChAcctCode" },
			{ name: "Chart Acct Name", field: "ChAcctName" },
			{ name: "Chart Group Code", field: "ChAcctGroupCode" },
			{ name: "Chart Group Name", field: "ChAcctGroupCodeName" },
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
			return (vm.filtered = vm.DebitList);
		}
		// declare storage to return (clear for another search)
		var searchFound = [];
		var temp_storage = vm.DebitList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.ChAcctCode.toUpperCase().startsWith(vm.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (vm.filtered = searchFound);
	};
	vm.clickRow = function (x) {
		vm.variables = {
			ADID: x.ADID,
			OI_idlink: x.OI_idlink,
			OI_name: x.OI_name,
			OI_type: x.OI_type,
			ChAcctCode: x.ChAcctCode,
			ChAcctName: x.ChAcctName,
			ChAcctGroupCode: x.ChAcctGroupCode,
			ChAcctGroupCodeName: x.ChAcctGroupCodeName,
			ChAcct_IDlink: x.ChAcct_IDlink,
			ChAcctGroup_IDlink: x.ChAcctGroup_IDlink,
			index: vm.DebitList.indexOf(x)
		};
		console.log(vm.variables);
	}
	vm.getIncomeList = function () {
		LOADING.classList.add("open");
		AutoDebitSvc.get().then(function (response) {
			if (response.message) {
				vm.DebitList = [];
			} else {
				vm.DebitList = response;
			}
			vm.filtered = vm.DebitList;
			LOADING.classList.remove("open");
		})
	}
	vm.save = function () {
		LOADING.classList.add("open");
		AutoDebitSvc.save(vm.variables).then(function (response) {
			if (response.success) {
				if (response.id) {
					vm.variables.ADID = response.id;
					vm.DebitList.push(vm.variables);
					vm.filtered = vm.DebitList;
					AutoDebitSvc.showSwal('Success', response.message, 'success');
				}
				else {
					vm.DebitList.splice(
						vm.variables.index,
						1,
						vm.variables
					);
					vm.filtered = vm.DebitList;
				}
				vm.clearFunction();
			} else {
				AutoDebitSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}
			LOADING.classList.remove("open");
		})
	}
	vm.delete = function () {
		if (!vm.variables.ADID) {
			return AutoDebitSvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
		}
		AutoDebitSvc.delete(vm.variables.ADID).then(function (response) {
			if (response.success) {
				vm.DebitList.splice(
					vm.variables.index,
					1
				);
				vm.clearFunction();
				vm.filtered = vm.DebitList;
				AutoDebitSvc.showSwal('Success', response.message, 'success');
			} else {
				AutoDebitSvc.showSwal('Error', response.message, 'error');
			}
			LOADING.classList.remove("open");
		})
	}

	vm.openModal = function (number) {
		// vm.clearFunction();
		if (number == 1) {
			var options = {
				data: '',
				animation: true,
				templateUrl: ADMINURL + "tad_coa/modal.html?v=" + VERSION,
				controllerName: "BrowseOtherIncCtrl",
				viewSize: "lg",
				windowClass: 'modal modal-slide-in-right',
				filesToLoad: [
					ADMINURL + "tad_coa/modal.html?v=" + VERSION,
					ADMINURL + "tad_coa/controller.js?v=" + VERSION
				]
			};
			AppSvc.modal(options).then(function (data) {
				if (data) {
					// vm.variables = angular.copy(data);
					console.log(data);
					vm.variables.OI_idlink = data.OIListID;
					vm.variables.OI_name = data.OtherIncomeName;
					vm.variables.OI_type = data.type;
				}
			});
		}
		else {
			var options = {
				data: '',
				animation: true,
				templateUrl: ADMINURL + "tad_coa/modal.html?v=" + VERSION,
				controllerName: "BrowseAcctCtrl",
				viewSize: "lg",
				windowClass: 'modal modal-slide-in-right',
				filesToLoad: [
					ADMINURL + "tad_coa/modal.html?v=" + VERSION,
					ADMINURL + "tad_coa/controller.js?v=" + VERSION
				]
			};
			AppSvc.modal(options).then(function (data) {
				if (data) {
					// vm.variables = angular.copy(data);
					console.log(data);
					vm.variables.ChAcctCode = data.ChASubCode;
					vm.variables.ChAcctName = data.AcctGroupName;
					vm.variables.ChAcctGroupCode = data.ChAMCodeLink;
					vm.variables.ChAcctGroupCodeName = data.ChADetails;
					vm.variables.ChAcct_IDlink = data.ChADID;
					vm.variables.ChAcctGroup_IDlink = data.ChAMIDLink;
				}
			});
		}

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

function BrowseAcctCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.ChartList = [];
	modal.filtered = [];

	$ocLazyLoad
		.load([MASTERURL + 'coa/service.js?v=' + VERSION,]).then(function (d) {
			CoaAllGroupSvc = $injector.get("CoaAllGroupSvc");
			modal.getChartList();
		});

	modal.getChartList = function () {
		LOADING.classList.add("open");
		CoaAllGroupSvc.get().then(function (response) {
			if (response.message) {
				modal.ChartList = [];
			} else {
				modal.ChartList = response;
			}
			modal.filtered = modal.ChartList;
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
			{ name: "Chart Acct", field: "AcctGroupName" },
			{ name: "Chart Acct Code", field: "ChAMCodeLink" },
			{ name: "Chart Acct SubGroup", field: "ChADetails" },
			{ name: "Chart Group Code", field: "ChASubCode" },
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
			return (modal.filtered = modal.ChartList);
		}
		var searchFound = [];
		var temp_storage = angular.copy(modal.ChartList);
		temp_storage.forEach(function (item) {
			// search field
			if (item.ChADetails.toUpperCase().startsWith(modal.search.toUpperCase())) {
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

