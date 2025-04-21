(function () {
    'use strict';
    angular
        .module('app')

        .factory('FundsourceSvc', FundsourceSvc);

        FundsourceSvc.$inject = ['baseService'];

    function FundsourceSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/fundsource';
        return service;
    }

})();
