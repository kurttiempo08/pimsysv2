angular.module('app')
    .controller('RenterCtrl', RenterCtrl)
    .controller('RenterListCtrl', RenterListCtrl);

RenterCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$filter'];
RenterListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function RenterCtrl($scope, $ocLazyLoad, $injector, $uibModal, filter) {
    var vm = this;
    vm.MemberList = [];
    vm.PropertyList = [];
    vm.variables = {};
    vm.variablesdtl = {};
    vm.filtered = [];
    vm.variablesdtl.Subdivision = "PGEHAI";
    vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
    vm.search;
    $ocLazyLoad
        .load([MASTERURL + 'renter/service.js?v=' + VERSION,]).then(function (d) {
            RenterSvc = $injector.get("RenterSvc");
            // PropertySvc = $injector.get("PropertySvc");
            // PropertygetSvc = $injector.get("PropertygetSvc");
            PropertygetAllSvc = $injector.get("PropertygetAllSvc");
            PropertyRentSvc = $injector.get("PropertyRentSvc");
            vm.getPropertyAllList();
        });
    
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
            console.log(vm.variables);
            RenterSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.RLID = response.id;
                    }
                    RenterSvc.showSwal('Success', response.message, 'success');
                } else {
                    RenterSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        else {
            console.log("try");
            LOADING.classList.add("open");
            vm.variablesdtl.Renter_IDLink = vm.variables.RLID;
            vm.variablesdtl.Status = "RENTED";
            vm.variablesdtl.Property_acquired_date = getDate(vm.variablesdtl.Property_acquired_date);
            console.log(vm.variablesdtl);
            PropertyRentSvc.save(vm.variablesdtl).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variablesdtl.propID = response.id;
                        vm.PropertyList.push(vm.variablesdtl);
                        vm.filtered = vm.PropertyList;
                        PropertyRentSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.PropertyList.splice(
                            vm.variablesdtl.index,
                            1,
                            vm.variablesdtl
                        );
                        vm.filtered = vm.PropertyList;
                        PropertyRentSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearProperty();
                    // PropertySvc.showSwal('Success', response.message, 'success');
                } else {
                    PropertyRentSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }

    }

    vm.getPropertyAllList = function () {
        LOADING.classList.add("open");
        PropertygetAllSvc.get().then(function (response) {
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
    }

    vm.clearProperty = function () {
        vm.variablesdtl = {};
        vm.variablesdtl.Subdivision = "PGEHAI";
        vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
    }

    vm.clickRow = function (x) {
        vm.variablesdtl = {
            propID: x.propID,
            memberID: x.memberID,
            OwnershipType: x.OwnershipType,
            PhaseCluster: x.PhaseCluster,
            BlockNo: x.BlockNo,
            LotNo: x.LotNo,
            Street: x.Street,
            Subdivision: x.Subdivision,
            Barangay: x.Barangay,
            City: x.City,
            Province: x.Province,
            Category: x.Category,
            LotAreaSqM: x.LotAreaSqM,
            Remarks: x.Remarks,
            Contract_num: x.Contract_num,
            Remarks: x.Remarks,
            Status: x.Status,
            index: vm.PropertyList.indexOf(x)
        }
        vm.variablesdtl.Property_acquired_date = filter("date")(new Date(),"MM/dd/yyyy");
        console.log(vm.variablesdtl);
    }

    vm.setPrevious = function () {
        // LOADING.classList.add("open");
        // vm.variablesdtl.memberID = vm.variables.MHOLID;
        // vm.variablesdtl.OwnershipType = "PREVIOUS OWNER";
        // // vm.variables.MemberStatus = "INACTIVE";
        // PropertySvc.save(vm.variablesdtl).then(function (response) {
        //     if (response.success) {
        //         if (response.id) {
        //             vm.variablesdtl.propID = response.id;
        //         }
        //         PropertySvc.showSwal('Success', response.message, 'success');
        //     } else {
        //         PropertySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
        //     }
        //     LOADING.classList.remove("open");
        // })

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
                // vm.tranferProperty(vm.variables.MHOLID);
                // vm.getPropertyList(vm.variables.MHOLID);
            }
        });
    }

    vm.openModal = function () {
        vm.clearFunction();
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "renter/modal.html?v=" + VERSION,
            controllerName: "RenterListCtrl",
            viewSize: "lg",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                MASTERURL + "renter/modal.html?v=" + VERSION,
                MASTERURL + "renter/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
                // vm.variables = angular.copy(data);
                vm.variables.RLID = data.RLID;
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
                // vm.getPropertyList(vm.variables.RLID);
            }
        });
    }
}

function RenterListCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
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
        .load([MASTERURL + 'renter/service.js?v=' + VERSION,]).then(function (d) {
            RenterSvc = $injector.get("RenterSvc");
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
        RenterSvc.get().then(function (response) {
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