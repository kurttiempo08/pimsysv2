//main.js
angular.module('app')
.controller('CashCtrl', CashCtrl)
.controller('OpenCoaModalCtrl', OpenCoaModalCtrl)
.controller('ChartofAccountCtrl', ChartofAccountCtrl);
ChartofAccountCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
CashCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
OpenCoaModalCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function ChartofAccountCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
    var vm = this;
	vm.AcctList = [];
	vm.AcctGroupList = [];
	vm.variables = {};
	vm.variablesdtl = {};
	vm.filtered = [];
	vm.filtered2 = [];
	vm.search;
	
	$ocLazyLoad
        .load([MASTERURL + 'coa/service.js?v=' + VERSION,]).then(function (d) {
			CoaSvc = $injector.get("CoaSvc");
			CoaGroupSvc = $injector.get("CoaGroupSvc");
			CoaGroupSaveSvc = $injector.get("CoaGroupSaveSvc");
			CoaDeleteSvc = $injector.get("CoaDeleteSvc");
            vm.getAcctList();
        });

    vm.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
            { name: "Acct Code", field: "AcctCode" },
            { name: "Acct Group Name", field: "AcctGroupName" },
		],
		data: "vm.filtered",
		onRegisterApi: function(gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function(row) {
				vm.clickRow(row.entity);
			});
		}
    };
    vm.typeGrid2 = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
            { name: "Acct Sub Code", field: "ChASubCode" },
            { name: "Acct Details", field: "ChADetails" },
            { name: "Cash Flow Category", field: "CFcategory" },
		],
		data: "vm.filtered2",
		onRegisterApi: function(gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function(row) {
				vm.clickRow2(row.entity);
			});
		}
	};
	vm.openCash = function () {
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "coa/cash.html?v=" + VERSION,
            controllerName: "CashCtrl",
            viewSize: "lg",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                MASTERURL + "coa/cash.html?v=" + VERSION,
                MASTERURL + "coa/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
				// vm.variables = angular.copy(data);
				vm.variablesdtl.CFcategory = data.CFGName;
				vm.variablesdtl.CFID = data.CFGID;
            }
        });
	}
	vm.openModal = function () {
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "coa/modal.html?v=" + VERSION,
            controllerName: "OpenCoaModalCtrl",
            viewSize: "lg",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                MASTERURL + "coa/modal.html?v=" + VERSION,
                MASTERURL + "coa/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
				// vm.variables = angular.copy(data);
				vm.variablesdtl.TotalToAcctCode = data.TotalToAcctCode;
				vm.variablesdtl.TotallingPostingToID = data.TotallingPostingToID;
				vm.variablesdtl.TotalToAcctDtl = data.TotalToAcctDtl;
            }
        });
    }
	vm.searching = function() {
		if (!vm.search) {
			return (vm.filtered = vm.AcctList);
		}
		// declare storage to return (clear for another search)
		var searchFound = [];
		var temp_storage = vm.AcctList;
		temp_storage.forEach(function(item) {
			// search field
			if (
				item.OtherIncomeName.toUpperCase().startsWith(vm.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (vm.filtered = searchFound);
	};
	vm.clickRow = function (x) {
		vm.variables = {
			AcctID: x.AcctID,
			AcctCode: x.AcctCode,
			AcctGroupName: x.AcctGroupName,
			index: vm.AcctList.indexOf(x)
		};
		vm.getAcctGroupList(vm.variables.AcctID);
	}
	vm.clickRow2 = function (x) {
		vm.variablesdtl = {
			ChADID: x.ChADID,
			ChAMIDLink: x.ChAMIDLink,
			ChAMCodeLink: x.ChAMCodeLink,
			ChASubCode: x.ChASubCode,
			ChADetails: x.ChADetails,
			TotallingPostingToID: x.TotallingPostingToID,
			TotalToAcctCode: x.TotalToAcctCode,
			TotalToAcctDtl: x.TotalToAcctDtl,
			CFcategory: x.CFcategory,
			CFID: x.CFID,
			index: vm.AcctGroupList.indexOf(x)
		};
    }
	vm.getAcctList = function () {
        LOADING.classList.add("open");
        CoaSvc.get().then(function (response) {
            if (response.message) {
                vm.AcctList = [];
            } else {
                vm.AcctList = response;
            }
            vm.filtered = vm.AcctList;
            LOADING.classList.remove("open");
        })
	}
	vm.getAcctGroupList = function (data) {
		console.log(data);
        LOADING.classList.add("open");
        CoaGroupSvc.get({AcctGroupID_Link: data}).then(function (response) {
            if (response.message) {
                vm.AcctGroupList = [];
            } else {
                vm.AcctGroupList = response;
            }
			vm.filtered2 = vm.AcctGroupList;
			console.log(vm.filtered2);
            LOADING.classList.remove("open");
        })
	}
	vm.save = function () {
        LOADING.classList.add("open");
        CoaSvc.save(vm.variables).then(function (response) {
            if (response.success) {
                if (response.id) {
					vm.variables.AcctID = response.id;
					vm.AcctList.push(vm.variables);
					vm.filtered = vm.AcctList;
					CoaSvc.showSwal('Success', response.message, 'success');
				}
                else{
					vm.AcctList.splice(
						vm.variables.index,
						1,
						vm.variables
					);
					vm.filtered = vm.AcctList;
				}
				vm.clearFunction();
            } else {
                CoaSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
            }
            LOADING.classList.remove("open");
        })
	}
	vm.saveGroup = function () {
		if(!vm.variables.AcctID){
			CoaGroupSaveSvc.showSwal('Ooops', "Please choose main group first. Failed Saving", 'warning');
		}
		else{
			vm.variablesdtl.ChAMIDLink = vm.variables.AcctID;
			vm.variablesdtl.ChAMCodeLink = vm.variables.AcctCode;
			LOADING.classList.add("open");
			CoaGroupSaveSvc.save(vm.variablesdtl).then(function (response) {
				if (response.success) {
					if (response.id) {
						vm.variablesdtl.ChADID = response.id;
						vm.AcctGroupList.push(vm.variablesdtl);
						vm.filtered2 = vm.AcctGroupList;
						CoaGroupSaveSvc.showSwal('Success', response.message, 'success');
					}
					else{
						vm.AcctGroupList.splice(
							vm.variablesdtl.index,
							1,
							vm.variablesdtl
						);
						vm.filtered2 = vm.AcctGroupList;
					}
					vm.cleardtlFunction();
				} else {
					CoaGroupSaveSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
				}
				LOADING.classList.remove("open");
			})
		}
	}
	vm.delete = function () {
        if (!vm.variables.AcctID) {
            return CoaSvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
        }
        CoaSvc.delete(vm.variables.AcctID).then(function (response) {
            if (response.success) {
				vm.AcctList.splice(
					vm.variables.index,
					1
				);
				vm.filtered = vm.AcctList;
                vm.clearFunction();
                LOADING.classList.remove("open");
                CoaSvc.showSwal('Success', response.message, 'success');
            } else {
                CoaSvc.showSwal('Error', response.message, 'error');
            }
        })
	}

	vm.deletedtl = function () {
        if (!vm.variablesdtl.ChADID) {
            return CoaSvc.showSwal('Ooops', "Select Item First to Proceed", 'warning');
        }
        CoaGroupSvc.delete(vm.variablesdtl.ChADID).then(function (response) {
            if (response.success) {
				vm.AcctGroupList.splice(
					vm.variablesdtl.index,
					1
				);
				vm.filtered2 = vm.AcctGroupList;
                vm.cleardtlFunction();
                LOADING.classList.remove("open");
                CoaSvc.showSwal('Success', response.message, 'success');
            } else {
                CoaSvc.showSwal('Error', response.message, 'error');
            }
        })
	}
	
	vm.clearFunction = function () {
		vm.variables = {};
		vm.variablesdtl = {};
		vm.filtered2 = [];
	}

	vm.cleardtlFunction = function () {
		vm.variablesdtl = {};
	}
}
function CashCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, $filter) {
    var modal = this;
    modal.cashList = [];
    modal.filtered = [];
    modal.olGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'Name', field: 'FullName' },
        ],
        data: 'modal.filtered',
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        },
    };
    $ocLazyLoad
        .load([MASTERURL + 'coa/service.js?v=' + VERSION,]).then(function (d) {
            CashSvc = $injector.get("CashSvc");
            modal.getCashList();
		});
	
	modal.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
			{ name: "Cash flow Category", field: "CFGName" },
		],
		data: "modal.filtered",
		onRegisterApi: function(gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function(row) {
				modal.gridClick(row.entity);
			});
		}
	};


    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }
    modal.getCashList = function () {
        LOADING.classList.add("open");
        CashSvc.get().then(function (response) {
            if (response.message) {
                modal.cashList = [];
            } else {
                modal.cashList = response;
            }
            modal.filtered = modal.cashList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.cashList;
        }
        return modal.filtered = filter('filter')(modal.cashList, { LastName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}

function OpenCoaModalCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, $filter) {
    var modal = this;
    modal.groupList = [];
    modal.filtered = [];
    $ocLazyLoad
        .load([MASTERURL + 'coa/service.js?v=' + VERSION,]).then(function (d) {
            CoaAllGroupSvc = $injector.get("CoaAllGroupSvc");
            modal.getGroupList();
		});
	
	modal.typeGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		columnDefs: [
			{ name: "Code", field: "TotalToAcctCode" },
			{ name: "Totalling", field: "TotalToAcctDtl" },
		],
		data: "modal.filtered",
		onRegisterApi: function(gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function(row) {
				modal.gridClick(row.entity);
			});
		}
	};

    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }
    modal.getGroupList = function () {
        LOADING.classList.add("open");
        CoaAllGroupSvc.get().then(function (response) {
            if (response.message) {
                modal.groupList = [];
            } else {
                modal.groupList = response;
            }
            modal.filtered = modal.groupList;
			LOADING.classList.remove("open");
			console.log(modal.filtered);
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.groupList;
        }
        return modal.filtered = filter('filter')(modal.groupList, { TotalToAcctDtl: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}

