(function () {
    'use strict';
    angular
        .module('app')

        .factory('RecepSvc', RecepSvc);

        RecepSvc.$inject = ['baseService'];

    function RecepSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/recepient';
        return service;
    }

})();
