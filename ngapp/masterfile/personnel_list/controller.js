//main.js
angular.module('app')
	.controller('PersonnelCtrl', PersonnelCtrl)
	.controller('BrowsePersonnelCtrl', BrowsePersonnelCtrl)
    PersonnelCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];
    BrowsePersonnelCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function PersonnelCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.recepList = [];
	vm.variables = {};
	vm.filtered = [];
    vm.search;
    vm.changeImage = false;
    vm.variables.recp_profpic = 'image_files/default.jpg';

	$ocLazyLoad
		.load([MASTERURL + 'personnel_list/service.js?v=' + VERSION,MASTERURL + 'personnel_list/directives.js?v=' + VERSION]).then(function (d) {
            PersonnelSvc = $injector.get("PersonnelSvc");
            vm.getRecepList();
        });
        
        vm.Preview = function() {
            vm.changeImage = true;
            var file = document.getElementById('file').files[0],
                r = new FileReader();
            r.onload = function(e) {
                document.getElementById('img').src = 'data:image/jpeg;base64,' + btoa(e.target.result);
            };
            r.readAsBinaryString(file);
        };

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.recepList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.recepList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.recp_lname.toUpperCase().startsWith(vm.search.toUpperCase())
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
                { name: "Firstname", field: "recp_fname" },
                { name: "Lastname", field: "recp_lname" },
                { name: "Middlename", field: "recp_mname" },
                { name: "Contact", field: "recp_contact" },
                { name: "Gender", field: "recp_gender" }
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getRecepList = function () {
            LOADING.classList.add("open");
            PersonnelSvc.get().then(function (response) {
                if (response.message) {
                    vm.recepList = [];
                } else {
                    vm.recepList = response;
                }
                vm.filtered = vm.recepList;
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow = function (x) {
            vm.variables = {
                recp_id: x.recp_id,
                recp_fname: x.recp_fname,
                recp_lname: x.recp_lname,
                recp_mname: x.recp_mname,
                recp_suffixname: x.recp_suffixname,
                recp_profpic: x.recp_profpic,
                recp_gender: x.recp_gender,
                recp_barangay: x.recp_barangay,
                recp_address: x.recp_address,
                recp_profpic: x.recp_profpic,
                recp_contact: x.recp_contact,
                index: vm.recepList.indexOf(x)
            };
            console.log(vm.variables);
        }

        vm.save = function () {
            // LOADING.classList.add("open");
                var data = angular.copy(vm.variables);
            //     var newData = new FormData();
            //     angular.forEach(data, function(v, k) {
            //         newData.append(k, v);
            // });
            // if (vm.changeImage) {
            //     newData.append('image', vm.image);
            // }
            // else{
                PersonnelSvc.save(data).then(function (response) {
                    // console.log(newData);
                    if (response.success) {
                            vm.clearFunction();
                            vm.getRecepList();
                            // vm.variables.recp_id = response.id;
                            // vm.recepList.push(vm.variables);
                            // vm.filtered = vm.recepList;
                            PersonnelSvc.showSwal('Success', response.message, 'success');
                        // vm.clearFunction();
                    } else {
                        PersonnelSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                })
            // }
        }
        vm.delete = function () {
            if (!vm.variables.recp_id) {
                return PersonnelSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            PersonnelSvc.delete(vm.variables.recp_id).then(function (response) {
                if (response.success) {
                    vm.recepList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.recepList;
                    vm.clearFunction();
                    PersonnelSvc.showSwal('Success', response.message, 'success');
                } else {
                    PersonnelSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
        }
    }

function BrowsePersonnelCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.recepList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'personnel_list/service.js?v=' + VERSION,]).then(function (d) {
			PersonnelSvc = $injector.get("PersonnelSvc");
			modal.getRecep();
		});
	modal.getRecep = function () {
		LOADING.classList.add("open");
		PersonnelSvc.get().then(function (response) {
			if (response.message) {
				modal.recepList = [];
			} else {
				modal.recepList = response;
			}
			modal.filtered = modal.recepList;
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
            { name: "Firstname", field: "recp_fname" },
            { name: "Lastname", field: "recp_lname" },
            { name: "Middlename", field: "recp_mname" },
            { name: "Suffix", field: "recp_suffixname" },
            { name: "Gender", field: "recp_gender" }
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
			return (modal.filtered = modal.recepList);
		}
		var searchFound = [];
		var temp_storage = modal.recepList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.recp_lname.toUpperCase().startsWith(modal.search.toUpperCase())
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
