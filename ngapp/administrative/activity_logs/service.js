(function () {
    'use strict';
    angular
        .module('app')

        .factory('ActivityLogsSvc', ActivityLogsSvc)

        ActivityLogsSvc.$inject = ['baseService'];

    function ActivityLogsSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/logs';
        return service;
    }
})();
