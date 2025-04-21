(function () {
    'use strict';
    angular
        .module('app')

        .factory('YeartSvc', YeartSvc)
        .factory('BarangaySvc', BarangaySvc)
        .factory('CertSvc', CertSvc);
        
        CertSvc.$inject = ['baseService'];
        YeartSvc.$inject = ['baseService'];
        BarangaySvc.$inject = ['baseService'];
    
    function CertSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/certification';
        return service;
    }

    function YeartSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/certification/';
        return service;
    }

    function BarangaySvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/certification/barangay';
        return service;
    }
    


})();