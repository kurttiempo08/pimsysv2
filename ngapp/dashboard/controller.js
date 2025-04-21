//main.js
angular.module('app')
	.controller('DashboardCtrl', DashboardCtrl)
	.controller('MenuCtrl', MenuCtrl)

DashboardCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector'];
MenuCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$state', '$filter'];

function DashboardCtrl($scope, $ocLazyLoad, $injector) {
	var vm = this;
	vm.title = 'PGHAI Dashboard';
	var date = new Date();
	vm.variables = {};
	vm.variables2 = {};
	vm.filtered = [];
	vm.filtered2 = [];
	vm.variables.recp_profpic = 'image_files/default.jpg';
	vm.fd = {
		start_date: new Date(date.getFullYear(), date.getMonth(), 1),
		end_date: new Date(date.getFullYear(), date.getMonth() + 1, 0),
	};
	$ocLazyLoad
		.load([APPURL + 'app.service.js?v=' + VERSION, APPURL + "dashboard/service.js?v=" + VERSION, MASTERURL + 'recepients_list/service.js?v=' + VERSION,MASTERURL + 'recepients_list/directives.js?v=' + VERSION]).then(function (d) {
			AppSvc = $injector.get('AppSvc');
			RecepSvc = $injector.get("RecepSvc");
			DispersalBoardSvc = $injector.get("DispersalBoardSvc");
			// vm.getRecepList();
			vm.getUserCredentials();
		});
		vm.getUserCredentials = function () {
			LOADING.classList.add("open");
			AppSvc.get().then(function (response) {
				if (response) {
					vm.Fname = response.record.fname;
					vm.level = response.record.level;
					vm.pic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
					// console.log(response);
				}
			})
		};
		
		// vm.getRecepList = function () {
        //     LOADING.classList.add("open");
        //     RecepSvc.get().then(function (response) {
        //         if (response.message) {
        //             vm.recepList = [];
        //         } else {
        //             vm.recepList = response;
        //         }
        //         vm.filtered = vm.recepList;
        //         LOADING.classList.remove("open");
        //     })
		// }

		vm.getDisperse = function (id) {
            LOADING.classList.add("open");
            DispersalBoardSvc.get({id: id}).then(function (response) {
                if (response.message) {
                    vm.DisperseList = [];
                } else {
                    vm.DisperseList = response;
                }
				vm.filtered2 = vm.DisperseList;
				console.log(vm.filtered2);
                LOADING.classList.remove("open");
            })
		}

		vm.clickRow = function (x) {
			vm.clearFunction();
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
                index: vm.recepList.indexOf(x)
			};
			vm.getDisperse(vm.variables.recp_id);
			if(!vm.variables.recp_profpic){
				vm.variables.recp_profpic = "image_files/default.jpg";
			}
            console.log(vm.variables);
		}
		
		vm.clickRow2 = function (row) {
            vm.variables2 = {
                dispersal_id: row.dispersal_id,
                recepient_idlink: row.recepient_idlink,
                animal_idlink: row.animal_idlink,
                animal_type	: row.animal_type,
                animal_code: row.animal_code,
                recepient_name: row.recepient_name,
                dispersal_date: row.dispersal_date,
                source: row.source,
                source_idlink: row.source_idlink,
                index: vm.DisperseList.indexOf(row)
			};
            console.log(vm.variables);
        }
		
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
				{ name: "Suffix", field: "recp_suffixname" }
			],
			data: "vm.filtered",
			onRegisterApi: function (gridApi) {
				gridApi.selection.on.rowSelectionChanged(null, function (row) {
					vm.clickRow(row.entity);
				});
			}
		};

		vm.disperseGrid = {
			enableRowSelection: true,
			enableCellEdit: false,
			enableColumnMenus: false,
			modifierKeysToMultiSelect: true,
			enableRowHeaderSelection: false,
			columnDefs: [
				{ name: "Code", field: "animal_code" },
				{ name: "Type", field: "animal_type" },
				{ name: "Dispersal Date", field: "dispersal_date" },
				{ name: "source", field: "source" }
			],
			data: "vm.filtered2",
			onRegisterApi: function (gridApi) {
				gridApi.selection.on.rowSelectionChanged(null, function (row) {
					vm.clickRow2(row.entity);
				});
			}
		};
		vm.clearFunction = function () {
			vm.variables = {};
			vm.variables2 = {};
			vm.variables.recp_profpic = "image_files/default.jpg";
		}
}
function MenuCtrl($scope, $ocLazyLoad, $injector, $state, filter) {
	var vm = this;
	var registry = $state.router.stateRegistry.states;
	vm.filtered = [];
	vm.menuList = [];
	vm.states = [];
	vm.variables = {};
	vm.menuGrid = {
		enableRowSelection: true,
		enableCellEdit: false,
		enableColumnMenus: false,
		modifierKeysToMultiSelect: true,
		enableRowHeaderSelection: false,
		enableHorizontalScrollbar: false,
		columnDefs: [
			{ name: 'Menu Name', field: 'FormName' },
			{ name: 'Menu Group', field: 'FormGroup' },
		],
		data: 'vm.filtered',
		onRegisterApi: function (gridApi) {
			gridApi.selection.on.rowSelectionChanged(null, function (row) {
				vm.gridClick(row.entity);
			});
		},
	}
	for (var key in registry) {
		if (registry[key].params.urlGroup) {
			vm.states.push({
				FormStates: registry[key].params.urlName.config.value,
				FormGroup: registry[key].params.urlGroup.config.value,
				FormName: registry[key].params.formName.config.value,
				FormLocation: key,
				FormURL: registry[key].self.url
			});
		}
	}
	$ocLazyLoad
		.load([APPURL + "dashboard/service.js?v=" + VERSION]).then(function (d) {
			MenuSvc = $injector.get("MenuSvc");
			vm.getMenus();
		});
	vm.getMenus = function () {
		MenuSvc.get().then(function (response) {
			if (response.message) {
				vm.menuList = [];
			} else {
				vm.menuList = response;
			}
			vm.filtered = vm.menuList;
		})
	}
	vm.gridClick = function (row) {
		vm.variables = angular.copy(row);
		vm.variables.index = vm.menuList.indexOf(row);
	}
	vm.save = function () {
		if (!vm.variables.FormName) {
			return AppSvc.showSwal('Ooops', "Form Name is required", 'warning');
		}
		LOADING.classList.add("open");
		var data = angular.copy(vm.variables);
		MenuSvc.save(data).then(function (response) {
			if (response.success) {
				if (response.id) {
					vm.variables.FormID = response.id;
					vm.menuList.push(vm.variables);
				} else {
					vm.menuList.splice(vm.variables.index, 1, vm.variables);
				}
				vm.filtered = vm.menuList;
				vm.clearFunction();
				AppSvc.showSwal('Success', response.message, 'success');
			} else {
				AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}
			LOADING.classList.remove("open");
		})
	}
	vm.delete = function () {
		if (!vm.variables.FormID) {
			return AppSvc.showSwal('Ooops', "Select Menu First to Proceed", 'warning');
		}
		MenuSvc.delete(vm.variables.FormID).then(function (response) {
			if (response.success) {
				vm.menuList.splice(vm.variables.index, 1);
				vm.filtered = vm.menuList;
				vm.clearFunction();
				LOADING.classList.remove("open");
				AppSvc.showSwal('Success', response.message, 'success');
			} else {
				AppSvc.showSwal('Error', response.message, 'error');
			}
		})
	}
	vm.clearFunction = function () {
		vm.variables = {}
		vm.variables.recp_profpic = "image_files/default.jpg";
	}
	vm.changeLocation = function () {
		var l = filter('filter')(vm.states, { FormStates: vm.variables.FormStates }, true);
		vm.variables = angular.copy(l[0]);
	}
}
