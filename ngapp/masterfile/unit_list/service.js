(function () {
    'use strict';
    angular
        .module('app')

        .factory('UnitSvc', UnitSvc);

        UnitSvc.$inject = ['baseService'];

    function UnitSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/unit';
        return service;
    }

})();
