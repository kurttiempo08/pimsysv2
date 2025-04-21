(function () {
	'use strict';
	angular
		.module('app')

		.factory('DashboardSvc', DashboardSvc)
		.factory('DispersalBoardSvc', DispersalBoardSvc)
		.factory('MenuSvc', MenuSvc)

	DashboardSvc.$inject = ['baseService'];
	DispersalBoardSvc.$inject = ['baseService'];
	MenuSvc.$inject = ['baseService'];

	function DashboardSvc(baseService) {
		var service = new baseService();
		service.url = APIURL + 'api/budgets';
		service.sales = new baseService();
		service.sales.url = APIURL + 'data/perpaymentmode';
		return service;
	}
	function DispersalBoardSvc(baseService) {
		var service = new baseService();
		service.url = APIURL + 'api/dispersal/disperse';
		return service;
	}
	function MenuSvc(baseService) {
		var service = new baseService();
		service.url = APIURL + 'api/menu_list';
		return service;
	}
})();
