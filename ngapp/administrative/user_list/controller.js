angular
    .module('app')

    .controller('UserListCtrl', UserListCtrl)
    .controller('ModalCtrl', ModalCtrl);

UserListCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$filter'];
ModalCtrl.$inject = ["$scope", "$ocLazyLoad", "$injector", 'data', '$uibModalInstance', '$filter'];

function UserListCtrl($scope, $ocLazyLoad, $injector, $uibModal, filter) {
    var vm = this;
    vm.variables = {};
    vm.accessRights = [];
    vm.accessList = [];
    vm.accessRightsGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: false,
        enableRowHeaderSelection: true,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'Menu Name', field: 'FormName' },
            { name: 'Menu Group', field: 'FormGroup' },
        ],
        data: 'vm.accessRights',
        onRegisterApi: function (gridApi) {
            vm.gridApi = gridApi;
        },
    }
    $ocLazyLoad
        .load([APPURL + "dashboard/service.js?v=" + VERSION, ADMINURL + 'user_list/service.js?v=' + VERSION,]).then(function (d) {
            MenuSvc = $injector.get("MenuSvc");
            UserListSvc = $injector.get("UserListSvc");
            vm.getMenus();
        });
    vm.getMenus = function () {
        MenuSvc.get().then(function (response) {
            if (response.message) {
                vm.accessRights = [];
            } else {
                vm.accessRights = response;
            }
        })
    }
    vm.openDivision = function (data) {
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
            controllerName: "BrowseCenterCtrl",
            viewSize: "lg",
            windowClass: 'modal modal-slide-in-full',
            filesToLoad: [
                MASTERURL + "center_list/search.html?v=" + VERSION,
                MASTERURL + "center_list/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            console.log(data);
            if(data){
                // vm.variableSub.subacct_id = data.subacct_id;
                vm.variables.center_name = data.center_name;
                vm.variables.center_idlink = data.center_id;
            }
        });
    } 
    vm.openModal = function () {
        var options = {
            data: '',
            animation: true,
            templateUrl: ADMINURL + "user_list/modal.html?v=" + VERSION,
            controllerName: "ModalCtrl",
            viewSize: "md",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                ADMINURL + "user_list/modal.html?v=" + VERSION,
                ADMINURL + "user_list/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
                vm.gridApi.selection.clearSelectedRows();
                vm.variables = angular.copy(data);
                vm.getAccessRights(data.LoginID);
            }
        });
    }
    vm.getAccessRights = function (id) {
        LOADING.classList.add("open");
        UserListSvc.get({ accesslist: true, UserID: id }).then(function (response) {
            if (response.message) {
                vm.accessList = [];
            } else {
                vm.accessList = response;
                vm.toggleAccessList();
            }
            LOADING.classList.remove("open");
        })
    }
    vm.toggleAccessList = function () {
        var $interval = $injector.get('$interval');
        var lists = [];
        vm.accessList.forEach(function (div) {
            var l = filter('filter')(vm.accessRights, { FormID: div.AccessRghtsFormID }, true);
            lists.push(l[0]);
        });
        $interval(
            function () {
                lists.forEach(function (list) {
                    vm.gridApi.selection.toggleRowSelection(vm.accessRights[vm.accessRights.indexOf(list)]);
                });
            },
            0,
            1
        );
    }
    vm.save = function () {
        LOADING.classList.add("open");
        var data = angular.copy(vm.variables);
        data.userlist = true;
        var middle = data.MiddleName ? data.MiddleName.charAt(0).toUpperCase() + '.' : '';
        data.FullName = data.FirstName + ' ' + middle + ' ' + data.LastName;
        UserListSvc.save(data).then(function (response) {
            if (response.success) {
                if (response.id) {
                    vm.variables.LoginID = response.id;
                }
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
            }
            LOADING.classList.remove("open");
        })
    }
    vm.delete = function () {
        if (!vm.variables.LoginID) {
            return AppSvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
        }
        UserListSvc.delete(vm.variables.LoginID).then(function (response) {
            if (response.success) {
                vm.clearFunction();
                LOADING.classList.remove("open");
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                AppSvc.showSwal('Error', response.message, 'error');
            }
        })
    }
    vm.clearFunction = function () {
        vm.variables = {};
        vm.gridApi.selection.clearSelectedRows();
    }
    vm.saveAccessRights = function () {
        if (!vm.variables.LoginID) {
            return AppSvc.showSwal('Ooops', "Select User First to Proceed", 'warning');
        }
        var rows = vm.gridApi.selection.getSelectedRows();
        if (rows.length < 1) {
            return AppSvc.showSwal('Ooops', "Select atleast 1 in the User Access Rights", 'warning');
        }
        var formID = [];
        rows.forEach(function (item) {
            formID.push(item.FormID);
        })
        data = { LoginID: vm.variables.LoginID, FormIDs: formID, accesslist: true };
        LOADING.classList.add("open");
        UserListSvc.save(data).then(function (response) {
            if (response.success) {
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
            }
            LOADING.classList.remove("open");
        })
    }
}
function ModalCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.userList = [];
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
        .load([ADMINURL + 'user_list/service.js?v=' + VERSION]).then(function (d) {
            UserListSvc = $injector.get("UserListSvc");
            modal.getUserList();
        });
    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }
    modal.getUserList = function () {
        LOADING.classList.add("open");
        UserListSvc.get({ userlist: true }).then(function (response) {
            if (response.message) {
                modal.userList = [];
            } else {
                modal.userList = response;
            }
            modal.filtered = modal.userList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.userList;
        }
        return modal.filtered = filter('filter')(modal.userList, { FullName: modal.search });
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}