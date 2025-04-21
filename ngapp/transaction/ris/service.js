(function () {
    'use strict';
    angular
        .module('app')
        .factory('PrintRisSvc', PrintRisSvc)
        .factory('ApprovedRisSvc', ApprovedRisSvc)
        .factory('RisDtlSvc', RisDtlSvc)
        .factory('SeriesRisSvc', SeriesRisSvc)
        .factory('RisFilterSvc', RisFilterSvc)
        .factory('PrintRsmiSvc', PrintRsmiSvc)
        .factory('PropertyRemainingSvc',PropertyRemainingSvc)
        .factory('RisSvc', RisSvc);

        PrintRisSvc.$inject = ['baseService'];
        RisDtlSvc.$inject = ['baseService'];
        SeriesRisSvc.$inject = ['baseService'];
        RisSvc.$inject = ['baseService'];
        RisFilterSvc.$inject = ['baseService'];
        PrintRsmiSvc.$inject = ['baseService'];
        ApprovedRisSvc.$inject = ['baseService'];
        PropertyRemainingSvc.$inject = ['baseService'];

    function PropertyRemainingSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/ris/remaining';
        return service;
    }    

    function ApprovedRisSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/ris/approved';
        return service;
    }

    function PrintRsmiSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'report/rsmi_report';
        return service;
    }

    function PrintRisSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'report/ris_request';
        return service;
    }
    
    function RisFilterSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/ris/filter';
        return service;
    }

    function RisSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/ris';
        return service;
    }

    function RisDtlSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/ris/dtl';
        return service;
    }

    function SeriesRisSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/ris/series';
        return service;
    }

    

})();
