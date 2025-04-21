(function () {
    'use strict';
    angular
        .module('app')

        .factory('ProductionSeriesSvc', ProductionSeriesSvc)
        .factory('BatchSvc', BatchSvc)
        .factory('ProductionSvc', ProductionSvc);

        ProductionSeriesSvc.$inject = ['baseService'];
        BatchSvc.$inject = ['baseService'];
        ProductionSvc.$inject = ['baseService'];
        

    function ProductionSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/production';
        return service;
    }

    function BatchSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/production/batch';
        return service;
    }

    function ProductionSeriesSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/production/series';
        return service;
    }

})();
