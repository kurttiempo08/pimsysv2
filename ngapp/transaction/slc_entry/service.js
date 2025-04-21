(function () {
    'use strict';
    angular
        .module('app')

        .factory('ROSvc', ROSvc)
        .factory('ROCenterSvc', ROCenterSvc)
        .factory('PropertyGetBycntrSvc', PropertyGetBycntrSvc)
        .factory('GetCenterInfo', GetCenterInfo)
        .factory('SlcSvc', SlcSvc);

        ROSvc.$inject = ['baseService'];
        GetCenterInfo.$inject = ['baseService'];
        ROCenterSvc.$inject = ['baseService'];
        PropertyGetBycntrSvc.$inject - ['baseService'];
        SlcSvc.$inject = ['baseService'];

    function ROSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/slc/ro';
        return service;
    }

    function GetCenterInfo(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/center/info';
        return service;
    }

    function ROCenterSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/center/rocenter';
        return service;
    }

    function SlcSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/slc';
        return service;
    }

    function PropertyGetBycntrSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/slc/center';
        return service;
    }

})();
