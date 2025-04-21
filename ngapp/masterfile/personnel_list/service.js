(function () {
    'use strict';
    angular
        .module('app')

        .factory('PersonnelSvc', PersonnelSvc);

        PersonnelSvc.$inject = ['baseService'];

    function PersonnelSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/personnel';
        return service;
    }

})();
