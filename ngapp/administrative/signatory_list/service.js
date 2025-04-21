(function () {
    'use strict';
    angular
        .module('app')

        .factory('SignatorySvc', SignatorySvc)

        SignatorySvc.$inject = ['baseService'];

    function SignatorySvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/signatory';
        return service;
    }
})();
