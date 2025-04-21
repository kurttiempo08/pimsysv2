angular.module('app')
    .controller('MemberRegCtrl', MemberRegCtrl)
    .controller('MemberListCtrl', MemberListCtrl)
    .controller('TransferCtrl', TransferCtrl)
    .controller('HistoryListCtrl', HistoryListCtrl)
    .controller('OwnerHistoryListCtrl', OwnerHistoryListCtrl)
    .controller('PropertyListCtrl', PropertyListCtrl);

MemberRegCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$filter'];
MemberListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
TransferCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
PropertyListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
HistoryListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
OwnerHistoryListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function MemberRegCtrl($scope, $ocLazyLoad, $injector, $uibModal, filter) {
    var vm = this;
    vm.MemberList = [];
    vm.PropertyList = [];
    vm.ContractList = [];
    vm.variables = {};
    vm.variablesdtl = {};
    vm.filtered = [];
    vm.variablesdtl.Subdivision = "PGEHAI";
    vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
    vm.search;
    $ocLazyLoad
        .load([MASTERURL + 'member_reg/service.js?v=' + VERSION,]).then(function (d) {
            MemberSvc = $injector.get("MemberSvc");
            PropertySvc = $injector.get("PropertySvc");
            ContractSvc = $injector.get("ContractSvc");
            // PropertygetSvc = $injector.get("PropertygetSvc");
            vm.getContactList();
        });


    vm.getContactList = function () {
        LOADING.classList.add("open");
        ContractSvc.get().then(function (response) {
            if (response.message) {
                vm.ContractList = [];
            } else {
                vm.ContractList = response[0];
                vm.variablesdtl.Auto_contract = response[0].Auto_contract; 
                vm.variablesdtl.ContractID = response[0].ContractID; 
                // vm.variablesdtl.Contract_num = "PGEHAI" + "-" + vm.variablesdtl.auto;
            }
            // vm.filtered = vm.ContractList;
            console.log(vm.variablesdtl.auto);
            LOADING.classList.remove("open");
        })
    }
    
    function pad(number, length) {
		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}
		return str;
	}
	function getDate(inputDate) {
		var dt = new Date(inputDate);
		var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
		return dtString;
    } 
       
    vm.save = function (number) {
        if (number == 1) {
            LOADING.classList.add("open");
            MemberSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.MHOLID = response.id;
                    }
                    MemberSvc.showSwal('Success', response.message, 'success');
                } else {
                    MemberSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        else if (number == 2){
            if(!vm.variables.MHOLID){
                PropertySvc.showSwal('Ooops', "Please choose homeowner first.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                vm.variablesdtl.memberID = vm.variables.MHOLID;
                vm.variablesdtl.Status = "OWNED";
                vm.variablesdtl.Property_acquired_date = getDate(vm.variablesdtl.Property_acquired_date);
                console.log(vm.variablesdtl);
                if(!vm.variablesdtl.Contract_num){
                    vm.variablesdtl.Contract_num = "PGEHAI"+ "-" + vm.variablesdtl.Auto_contract;
                    vm.variablesdtl.Auto_contract = parseInt(vm.variablesdtl.Auto_contract) + parseInt(1);
                    vm.variablesdtl.ContractID = 1;
                    console.log(vm.variablesdtl.Auto_contract);
                    PropertySvc.save(vm.variablesdtl).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                vm.variablesdtl.propID = response.id;
                                vm.PropertyList.push(vm.variablesdtl);
                                vm.filtered = vm.PropertyList;
                                PropertySvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                vm.PropertyList.splice(
                                    vm.variablesdtl.index,
                                    1,
                                    vm.variablesdtl
                                );
                                vm.filtered = vm.PropertyList;
                                PropertySvc.showSwal('Success', response.message, 'success');
                            }
                            vm.clearProperty();
                            // PropertySvc.showSwal('Success', response.message, 'success');
                        } else {
                            PropertySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        LOADING.classList.remove("open");
                    })
                }else{
                    vm.variablesdtl.auto = vm.variablesdtl.auto;
                    vm.variablesdtl.ContractID = 1;
                    PropertySvc.save(vm.variablesdtl).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                vm.variablesdtl.propID = response.id;
                                vm.PropertyList.push(vm.variablesdtl);
                                vm.filtered = vm.PropertyList;
                                PropertySvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                vm.PropertyList.splice(
                                    vm.variablesdtl.index,
                                    1,
                                    vm.variablesdtl
                                );
                                vm.filtered = vm.PropertyList;
                                PropertySvc.showSwal('Success', response.message, 'success');
                            }
                            vm.clearProperty();
                            // PropertySvc.showSwal('Success', response.message, 'success');
                        } else {
                            PropertySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        }
                        LOADING.classList.remove("open");
                    })
                }
            }
        }
        else {
            if(!vm.variables.MHOLID){
                PropertySvc.showSwal('Ooops', "Please choose homeowner first.", 'warning');
            }
            else if(!modal.variables.propID){
                PropertySvc.showSwal('Ooops', "Please choose property first.", 'warning');
            }
            else{
                LOADING.classList.add("open");
                vm.variablesdtl.memberID = vm.variables.MHOLID;
                vm.variablesdtl.Status = "OWNED";
                vm.variablesdtl.Renter_IDLink = 0;
                vm.variablesdtl.Property_acquired_date = getDate(vm.variablesdtl.Property_acquired_date);
                vm.variablesdtl.Date_leave = getDate(vm.variablesdtl.Date_leave);
                console.log(vm.variablesdtl);
                PropertySvc.save(vm.variablesdtl).then(function (response) {
                    if (response.success) {
                        if (response.id) {
                            vm.variablesdtl.propID = response.id;
                            vm.PropertyList.push(vm.variablesdtl);
                            vm.filtered = vm.PropertyList;
                            PropertySvc.showSwal('Success', response.message, 'success');
                        }
                        else {
                            vm.PropertyList.splice(
                                vm.variablesdtl.index,
                                1,
                                vm.variablesdtl
                            );
                            vm.filtered = vm.PropertyList;
                            PropertySvc.showSwal('Success', response.message, 'success');
                        }
                        vm.clearProperty();
                        // PropertySvc.showSwal('Success', response.message, 'success');
                    } else {
                        PropertySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                })
            }
        }
    }

    vm.tranferProperty = function (data) {
        LOADING.classList.add("open");
            vm.variablesdtl.memberID = vm.variables.MHOLID;
            vm.variablesdtl.Property_acquired_date = getDate(vm.variablesdtl.Property_acquired_date);
            vm.variablesdtl.Property_transfered_date = getDate(vm.variablesdtl.Property_transfered_date);
            PropertySvc.save(vm.variablesdtl).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variablesdtl.propID = response.id;
                        vm.PropertyList.push(vm.variablesdtl);
                        vm.filtered = vm.PropertyList;
                        PropertySvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.PropertyList.splice(
                            vm.variablesdtl.index,
                            1,
                            vm.variablesdtl
                        );
                        vm.filtered = vm.PropertyList;
                        PropertySvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearProperty();
                    // PropertySvc.showSwal('Success', response.message, 'success');
                } else {
                    PropertySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
    }
    vm.getPropertyList = function () {
        LOADING.classList.add("open");
        PropertySvc.get({ memberID: vm.variables.MHOLID }).then(function (response) {
            if (response.message) {
                vm.PropertyList = [];
            } else {
                vm.PropertyList = response;
            }
            vm.filtered = vm.PropertyList;
            LOADING.classList.remove("open");
        })
    }

    vm.typeGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        columnDefs: [
            { name: "Contract #", field: "Contract_num" },
            { name: "Status", field: "Status" },
        ],
        data: "vm.filtered",
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                vm.clickRow(row.entity);
            });
        }
    };
    vm.clearFunction = function () {
        vm.variables = {};
        vm.variablesdtl = {};
        vm.variablesdtl.Subdivision = "PGEHAI";
        vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
        vm.getContactList();
    }

    vm.clearProperty = function () {
        vm.variablesdtl = {};
        vm.variablesdtl.Subdivision = "PGEHAI";
        vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
        vm.getContactList();
    }

    vm.clickRow = function (x) {
        vm.variablesdtl = angular.copy(x);
        vm.variablesdtl.index = vm.PropertyList.indexOf(x);
        // vm.variablesdtl = {
        //     propID: x.propID,
        //     memberID: x.memberID,
        //     OwnershipType: x.OwnershipType,
        //     PhaseCluster: x.PhaseCluster,
        //     BlockNo: x.BlockNo,
        //     LotNo: x.LotNo,
        //     Street: x.Street,
        //     Subdivision: x.Subdivision,
        //     Barangay: x.Barangay,
        //     City: x.City,
        //     Province: x.Province,
        //     Category: x.Category,
        //     LotAreaSqM: x.LotAreaSqM,
        //     Remarks: x.Remarks,
        //     Contract_num: x.Contract_num,
        //     Remarks: x.Remarks,
        //     Renter_IDLink: x.Renter_IDLink,
        //     Status: x.Status,
        //     Property_acquired_date: x.Property_acquired_date,
        //     index: vm.PropertyList.indexOf(x),
        // }
        vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
        console.log(vm.variablesdtl);
    }

    vm.setPrevious = function () {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "member_reg/transfer.html?v=" + VERSION,
                    controllerName: "TransferCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-right',
                    filesToLoad: [
                        MASTERURL + "member_reg/transfer.html?v=" + VERSION,
                        MASTERURL + "member_reg/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if (data) {
                        // vm.variables = angular.copy(data);
                        vm.variables.MHOLID = data.MHOLID;
                        vm.variables.LastName = data.LastName;
                        vm.variables.FirstName = data.FirstName;
                        vm.variables.MiddleName = data.MiddleName;
                        vm.variables.ExtName = data.ExtName;
                        vm.variables.ContactNo = data.ContactNo;
                        vm.variables.MobileNo1 = data.MobileNo1;
                        vm.variables.MobileNo2 = data.MobileNo2;
                        vm.variables.EmailAddress = data.EmailAddress;
                        vm.variables.OwnerProvAddress = data.OwnerProvAddress;
                        vm.variables.OtherContactPerson = data.OtherContactPerson;
                        vm.variablesdtl.remarks = data.remarks;
                        vm.variablesdtl.Property_transfered_date = getDate(data.Property_transfered_date);
                        vm.tranferProperty(vm.variables.MHOLID);
                        vm.getPropertyList(vm.variables.MHOLID);
                    }
                });
              Swal.fire(
                'Succesfully Transfered!',
                'Your property has been transfered.',
                'success'
              )
            }
          })
    }

    vm.openModal = function () {
        vm.clearFunction();
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "member_reg/modal.html?v=" + VERSION,
            controllerName: "MemberListCtrl",
            viewSize: "lg",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                MASTERURL + "member_reg/modal.html?v=" + VERSION,
                MASTERURL + "member_reg/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
                // vm.variables = angular.copy(data);
                vm.variables.MHOLID = data.MHOLID;
                vm.variables.LastName = data.LastName;
                vm.variables.FirstName = data.FirstName;
                vm.variables.MiddleName = data.MiddleName;
                vm.variables.ExtName = data.ExtName;
                vm.variables.ContactNo = data.ContactNo;
                vm.variables.MobileNo1 = data.MobileNo1;
                vm.variables.MobileNo2 = data.MobileNo2;
                vm.variables.EmailAddress = data.EmailAddress;
                vm.variables.OwnerProvAddress = data.OwnerProvAddress;
                vm.variables.OtherContactPerson = data.OtherContactPerson;
                vm.getPropertyList(vm.variables.MHOLID);
            }
        });
    }

    vm.openHistory = function (number) {
        if(number == 1){
            console.log("try");
            var options = {
                data: {propID:vm.variablesdtl.propID, memberID:vm.variablesdtl.memberID,renterID:vm.variablesdtl.Renter_IDLink},
                animation: true,
                templateUrl: MASTERURL + "member_reg/history.html?v=" + VERSION,
                controllerName: "HistoryListCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-right',
                filesToLoad: [
                    MASTERURL + "member_reg/history.html?v=" + VERSION,
                    MASTERURL + "member_reg/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
            });
        }
        else{
            console.log("try");
            var options = {
                data: {propID:vm.variablesdtl.propID, memberID:vm.variablesdtl.memberID,renterID:vm.variablesdtl.Renter_IDLink},
                animation: true,
                templateUrl: MASTERURL + "member_reg/ownerhistory.html?v=" + VERSION,
                controllerName: "OwnerHistoryListCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-right',
                filesToLoad: [
                    MASTERURL + "member_reg/ownerhistory.html?v=" + VERSION,
                    MASTERURL + "member_reg/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
            });
        }
    }
        


}

function MemberListCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.memberList = [];
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
        .load([MASTERURL + 'member_reg/service.js?v=' + VERSION,]).then(function (d) {
            MemberSvc = $injector.get("MemberSvc");
            modal.getUserList();
            
        });

    modal.typeGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        columnDefs: [
            { name: "FirstName", field: "FirstName" },
            { name: "LastName", field: "LastName" }
        ],
        data: "modal.filtered",
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        }
    };


    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }
    modal.getUserList = function () {
        LOADING.classList.add("open");
        MemberSvc.get().then(function (response) {
            if (response.message) {
                modal.memberList = [];
            } else {
                modal.memberList = response;
            }
            modal.filtered = modal.memberList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.memberList;
        }
        return modal.filtered = filter('filter')(modal.memberList, { LastName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}

function TransferCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variablesdtl = {};
    modal.memberList = [];
    modal.filtered = [];
    modal.variablesdtl.Property_transfered_date = filter("date")(new Date(),"MM/dd/yyyy");
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
        .load([MASTERURL + 'member_reg/service.js?v=' + VERSION,]).then(function (d) {
            MemberSvc = $injector.get("MemberSvc");
            modal.getUserList();
        });

    modal.typeGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        columnDefs: [
            { name: "FirstName", field: "FirstName" },
            { name: "LastName", field: "LastName" }
        ],
        data: "modal.filtered",
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        }
    };


    modal.gridClick = function (row) {
         row.remarks = modal.variablesdtl.remarks;
         row.Property_transfered_date = modal.variablesdtl.Property_transfered_date ;
        console.log(row);
        $uibModalInstance.close(row);
    }
    modal.getUserList = function () {
        LOADING.classList.add("open");
        MemberSvc.get().then(function (response) {
            if (response.message) {
                modal.memberList = [];
            } else {
                modal.memberList = response;
            }
            modal.filtered = modal.memberList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.memberList;
        }
        return modal.filtered = filter('filter')(modal.memberList, { LastName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}

function PropertyListCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.memberList = [];
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
        .load([MASTERURL + 'member_reg/service.js?v=' + VERSION,]).then(function (d) {
            MemberSvc = $injector.get("MemberSvc");
            modal.getUserList();
        });

    modal.typeGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        columnDefs: [
            { name: "FirstName", field: "FirstName" },
            { name: "LastName", field: "LastName" },
            { name: "PhaseCluster", field: "PhaseCluster" },
            { name: "BlockNo", field: "BlockNo" },
            { name: "LotNo", field: "LotNo" },
            { name: "Street", field: "Street" },
            { name: "Subdivision", field: "Subdivision" },
        ],
        data: "modal.filtered",
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        }
    };


    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }
    modal.getUserList = function () {
        LOADING.classList.add("open");
        MemberSvc.get({ property: true }).then(function (response) {
            if (response.message) {
                modal.memberList = [];
            } else {
                modal.memberList = response;
            }
            modal.filtered = modal.memberList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.memberList;
        }
        return modal.filtered = filter('filter')(modal.memberList, { LastName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}
function HistoryListCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.historyList = [];
    modal.filtered = [];
    modal.variables = {};
    modal.variables.Date_leave = new Date();
    modal.olGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'First Name', field: 'FirstName' },
            { name: 'Last Name', field: 'LastName' },
            { name: 'Date Rented', field: 'Date_rented' },
            { name: 'Date left', field: 'Date_leave' },
        ],
        data: 'modal.filtered',
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        },
    };
    $ocLazyLoad
        .load([MASTERURL + 'member_reg/service.js?v=' + VERSION,]).then(function (d) {
            MemberSvc = $injector.get("MemberSvc");
            HistorySvc = $injector.get("HistorySvc");
            RenterHistorySvc = $injector.get("RenterHistorySvc");
            modal.getHistoryList();
            
        });

    modal.save = function () {
        LOADING.classList.add("open");
        var data = angular.copy(modal.variables);
        data.Date_rented = getDate(modal.variables.Date_rented);
        data.Date_leave = getDate(modal.variables.Date_leave);
        console.log(data);
		RenterHistorySvc.save(data).then(function (response) {
			if (response.success) {
				if (response.id) {
					modal.variables.RHID = response.id;
					modal.historyList.push(modal.variables);
					modal.filtered = vm.historyList;
					RenterHistorySvc.showSwal('Success', response.message, 'success');
				}
				else {
					modal.historyList.splice(
						modal.variables.index,
						1,
						modal.variables
					);
					modal.filtered = modal.historyList;
					RenterHistorySvc.showSwal('Success', response.message, 'success');
				}
				modal.clearFunction();
			} else {
				RenterHistorySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}

			LOADING.classList.remove("open");
		})
    }
    
    modal.clearFunction = function () {
       modal.variables = {};
    }
    function pad(number, length) {
		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}
		return str;
	}
	function getDate(inputDate) {
		var dt = new Date(inputDate);
		var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
		return dtString;
    } 

    // vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
    modal.gridClick = function (x) {
        modal.variables = angular.copy(x);
        modal.variables.index = modal.historyList.indexOf(x);
        modal.variables.Date_leave = new Date(x.Date_leave);
        modal.variables.Date_rented = new Date(x.Date_rented);
        console.log(modal.variables);
        // modal.variables = {
        //     Date_leave = row.Date_leave,
        //     Date_rented = row.Date_rented,
        // }
        // $uibModalInstance.close(row);
    }
    modal.getHistoryList = function () {
        LOADING.classList.add("open");
        
        HistorySvc.get({propID:data.propID,memberID:data.memberID,renterID:data.renterID}).then(function (response) {
            if (response.message) {
                modal.historyList = [];
            } else {
                modal.historyList = response;
            }
            console.log(response);
            modal.filtered = modal.historyList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.memberList;
        }
        return modal.filtered = filter('filter')(modal.memberList, { LastName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}
function OwnerHistoryListCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.historyList = [];
    modal.filtered = [];
    modal.olGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'FirstName', field: 'FirstName' },
            { name: 'LastName', field: 'LastName' },
            { name: 'Contract #', field: 'Contract_num' },
            { name: 'Remarks', field: 'History_remarks' },
        ],
        data: 'modal.filtered',
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        },
    };
    $ocLazyLoad
        .load([MASTERURL + 'member_reg/service.js?v=' + VERSION,]).then(function (d) {
            MemberSvc = $injector.get("MemberSvc");
            HistorySvc = $injector.get("HistorySvc");
            OwnerHistorySvc = $injector.get("OwnerHistorySvc");
            modal.getHistoryList();
        });


    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }
    modal.getHistoryList = function () {
        LOADING.classList.add("open");
        
        OwnerHistorySvc.get({propID:data.propID,memberID:data.memberID}).then(function (response) {
            if (response.message) {
                modal.historyList = [];
            } else {
                modal.historyList = response;
            }
            console.log(response);
            modal.filtered = modal.historyList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.memberList;
        }
        return modal.filtered = filter('filter')(modal.memberList, { LastName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}