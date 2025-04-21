(function () {
    'use strict';
    angular
        .module('app')

        .factory('CenterSvc', CenterSvc);

        CenterSvc.$inject = ['baseService'];

    function CenterSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/center';
        return service;
    }

})();
