(function () {
    'use strict';
    angular
        .module('app')
        .factory('TextSvc', TextSvc)
        .factory('LockSvc', LockSvc)

        LockSvc.$inject = ['baseService'];
        TextSvc.$inject = ['baseService'];

    function LockSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/Lock';
        return service;
    }

    function TextSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/Lock/text';
        return service;
    }
})();
