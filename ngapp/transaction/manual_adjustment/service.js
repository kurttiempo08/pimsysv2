(function () {
    'use strict';
    angular
        .module('app')

        .factory('SlcSvc', SlcSvc);

        SlcSvc.$inject = ['baseService'];

    function SlcSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/slc';
        return service;
    }

})();
