(function () {
    'use strict';
    angular
        .module('app')

        .factory('SupplierSvc', SupplierSvc);

        SupplierSvc.$inject = ['baseService'];

    function SupplierSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/supplier';
        return service;
    }

})();
