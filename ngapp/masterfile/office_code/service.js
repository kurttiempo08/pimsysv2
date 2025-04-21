(function () {
    'use strict';
    angular
        .module('app')

        .factory('OfficeGenerationSvc', OfficeGenerationSvc)
        .factory('SubAcctSvc', SubAcctSvc)
        .factory('SuballAcctSvc', SuballAcctSvc)
        .factory('SubAcctactionSvc', SubAcctactionSvc)
        .factory('OfficeGenerationOfficeSvc', OfficeGenerationOfficeSvc)
        .factory('CheckCountSvc', CheckCountSvc)
        .factory('GenerateEndingSvc', GenerateEndingSvc)
        .factory('OfficeCodeSvc', OfficeCodeSvc);

        OfficeGenerationSvc.$inject = ['baseService'];
        OfficeCodeSvc.$inject = ['baseService'];
        SubAcctSvc.$inject = ['baseService'];
        SuballAcctSvc.$inject = ['baseService'];
        SubAcctactionSvc.$inject = ['baseService'];
        OfficeGenerationOfficeSvc.$inject = ['baseService'];
        CheckCountSvc.$inject = ['baseService'];
        GenerateEndingSvc.$inject = ['baseService'];

    function OfficeCodeSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/office';
        return service;
    }

    function CheckCountSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/office/count';
        return service;
    }

    function SubAcctSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/office/sub';
        return service;
    }

    function SubAcctactionSvc(baseService){
        var service = new baseService();
        service.url = APIURL + 'api/office/action'
        return service;
    }

    function SuballAcctSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/office/suball';
        return service;
    }


    function OfficeGenerationSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'report/accounts';
        return service;
    }

    function OfficeGenerationOfficeSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'report/accounts/office';
        return service;
    }

    function GenerateEndingSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'report/ending_balance/ending';
        return service;
    }

})();
