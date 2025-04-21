//main.js
angular.module('app')
	.controller('AdminLockctrl', AdminLockctrl)
AdminLockctrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log'];

function AdminLockctrl($scope, $ocLazyLoad, $injector, $uibModal, $log) {
	var vm = this;
	vm.LockList = [];
	vm.variables = {};
	vm.test = {};
	vm.filtered = [];
	vm.search;
	vm.test.apicode = "TR-KURTT579853_MCHZT";
	vm.test.password = "lfsjvrf4db";
	vm.test.number = "09362579853";
	vm.test.message = "Hello! Kurt this is a test only"

	$ocLazyLoad
		.load([ADMINURL + 'admin_lock/service.js?v=' + VERSION,]).then(function (d) {
			LockSvc = $injector.get("LockSvc");
			TextSvc = $injector.get("TextSvc");
			vm.getStatusList();
			// vm.text(vm.test.number,vm.test.message,vm.test.apicode,vm.test.password);
		});


	vm.getStatusList = function () {
		LOADING.classList.add("open");
		$data = 1;
		LockSvc.get({id:$data}).then(function (response) {
			if (response.message) {
				vm.LockList = [];
			} else {
				vm.LockList = response;
			}
			vm.filtered = vm.LockList;
			vm.variables.lock_id = response[0].lock_id;
			vm.variables.status = response[0].status;
			LOADING.classList.remove("open");
		})
	}

	vm.text = function () {
		vm.test.apicode = "TR-KURTT579853_MCHZT";
		vm.test.password = "lfsjvrf4db";
		vm.test.number = "09362579853";
		vm.test.message = "Hello! Kurt this is a test only"
		// console.log($number,$message,$apicode,$passwd);
		// LOADING.classList.add("open");
		TextSvc.save({number:vm.test.number,message:vm.test.message,apicode:vm.test.apicode,passwd:vm.test.password}).then(function (response) {
			// if (response.success) {
			// 	if (response.id) {
			// 		vm.variables.lock_id = response.id;
			// 		vm.LockList.push(vm.variables);
			// 		vm.filtered = vm.LockList;
			// 		TextSvc.showSwal('Success', response.message, 'success');
			// 	}
			// 	else {
			// 		vm.LockList.splice(
			// 			vm.variables.index,
			// 			1,
			// 			vm.variables
			// 		);
			// 		vm.filtered = vm.LockList;
			// 	}
			// 	vm.clearFunction();
			// } else {
			// 	TextSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			// }
			// LOADING.classList.remove("open");
		})
	}


	vm.save = function () {
		LOADING.classList.add("open");
		LockSvc.save(vm.variables).then(function (response) {
			if (response.success) {
				if (response.id) {
					vm.variables.lock_id = response.id;
					vm.LockList.push(vm.variables);
					vm.filtered = vm.LockList;
					LockSvc.showSwal('Success', response.message, 'success');
				}
				else {
					vm.LockList.splice(
						vm.variables.index,
						1,
						vm.variables
					);
					vm.filtered = vm.LockList;
				}
				vm.clearFunction();
			} else {
				LockSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
			}
			LOADING.classList.remove("open");
		})
	}
	vm.clearFunction = function () {
		vm.variables = {};
		vm.getStatusList();
	}
}