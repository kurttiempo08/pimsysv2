(function () {
    'use strict';
    angular
        .module('app')

        .factory('AutoDebitSvc', AutoDebitSvc)

        AutoDebitSvc.$inject = ['baseService'];

    function AutoDebitSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/auto_debit';
        return service;
    }
})();
