(function () {
    'use strict';
    angular
        .module('app')

        .factory('ClientrequestDoneSvc', ClientrequestDoneSvc)
        .factory('ClientrequestreportSvc', ClientrequestreportSvc)
        .factory('ClientrequestOthersSvc', ClientrequestOthersSvc)
        .factory('ClientrequestAdSvc', ClientrequestAdSvc)
        .factory('ClientrequestAiSvc', ClientrequestAiSvc)
        .factory('ClientrequestSpaySvc', ClientrequestSpaySvc)
        .factory('ClientrequestEuthanasiatSvc', ClientrequestEuthanasiatSvc)
        .factory('ClientrequestTreatmentSvc', ClientrequestTreatmentSvc)
        .factory('ClientrequestSampleCollectionSvc', ClientrequestSampleCollectionSvc)
        .factory('ClientrequestSvc', ClientrequestSvc);

        
        ClientrequestOthersSvc.$inject = ['baseService'];
        ClientrequestreportSvc.$inject = ['baseService'];
        ClientrequestAdSvc.$inject = ['baseService'];
        ClientrequestTreatmentSvc.$inject = ['baseService'];
        ClientrequestEuthanasiatSvc.$inject = ['baseService'];
        ClientrequestAiSvc.$inject = ['baseService'];
        ClientrequestSpaySvc.$inject = ['baseService'];
        ClientrequestSvc.$inject = ['baseService'];
        ClientrequestSampleCollectionSvc.$inject = ['baseService'];
        ClientrequestDoneSvc.$inject = ['baseService']; 

    
    function ClientrequestreportSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'report/client_report';
        return service;
    }
    
        function ClientrequestDoneSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/done';
        return service;
    }

    function ClientrequestSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client';
        return service;
    }

    function ClientrequestSampleCollectionSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/scom';
        return service;
    }

    function ClientrequestTreatmentSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/treatment';
        return service;
    }

    function ClientrequestEuthanasiatSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/euthanasia';
        return service;
    }

    function ClientrequestSpaySvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/spay';
        return service;
    }

    function ClientrequestAiSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/ai';
        return service;
    }

    function ClientrequestAdSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/ad';
        return service;
    }

    function ClientrequestOthersSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/client/other';
        return service;
    }

})();