(function () {
    'use strict';
    angular
        .module('app')
        .factory('CoaGroupSvc', CoaGroupSvc)
        .factory('CoaGroupSaveSvc', CoaGroupSaveSvc)
        .factory('CoaAllGroupSvc', CoaAllGroupSvc)
        .factory('CoaDeleteSvc', CoaDeleteSvc)
        .factory('CashSvc', CashSvc)
        .factory('CoaSvc', CoaSvc);

        CoaSvc.$inject = ['baseService'];
        CashSvc.$inject = ['baseService'];
        CoaGroupSvc.$inject = ['baseService'];
        CoaAllGroupSvc.$inject = ['baseService'];
        CoaGroupSaveSvc.$inject = ['baseService'];
        CoaDeleteSvc.$inject = ['baseService'];


    function CoaSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/coa';
        return service;
    }

    function CoaGroupSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/coa/group';
        return service;
    }

    function CoaGroupSaveSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/coa/savegroup';
        return service;
    }

    function CashSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/cash';
        return service;
    }

    function CoaAllGroupSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/coa/groupall';
        return service;
    }

    function CoaDeleteSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/coa/group';
        return service;
    }
})();
