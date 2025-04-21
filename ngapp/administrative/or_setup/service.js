(function () {
    'use strict';
    angular
        .module('app')

        .factory('OrSvc', OrSvc)

        OrSvc.$inject = ['baseService'];

    function OrSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/or_setup';
        return service;
    }
})();
