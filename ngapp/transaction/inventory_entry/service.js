(function () {
    'use strict';
    angular
        .module('app')

        .factory('SlcGenerationSvc', SlcGenerationSvc)
        .factory('InvEntrySvc', InvEntrySvc)
        .factory('InvEntryDetailSvc', InvEntryDetailSvc)
        .factory('InvDeliverySvc', InvDeliverySvc)
        .factory('InvDeliveriesSvc', InvDeliveriesSvc)
        .factory('DeliveryUpdateSvc', DeliveryUpdateSvc)
        .factory('ShowAllPropertySvc', ShowAllPropertySvc)
        .factory('SeriesSvc', SeriesSvc)
        .factory('CheckpropSvc', CheckpropSvc)
        .factory('InvIssuanceSvc', InvIssuanceSvc)
        .factory('PaymentSvc', PaymentSvc)
        .factory('UpdateSvc', UpdateSvc)
        .factory('CancelSvc', CancelSvc)
        .factory('AuthenticationSvc', AuthenticationSvc)
        .factory('LogsSvc', LogsSvc)
        .factory('DateSvc', DateSvc)
        .factory('ReactSvc', ReactSvc)
        .factory('GetCenterDataSvc', GetCenterDataSvc)
        .factory('SlcGenerationOfficeSvc',SlcGenerationOfficeSvc)
        .factory('CheckExistingPOSvc', CheckExistingPOSvc)
        .factory('SearchItemSvc', SearchItemSvc)
        .factory('SearchPoHdrSvc', SearchPoHdrSvc)
        .factory('CreatePoSvc', CreatePoSvc);

        SlcGenerationSvc.$inject = ['baseService'];
        AuthenticationSvc.$inject = ['baseService'];
        LogsSvc.$inject = ['baseService'];
        CreatePoSvc.$inject = ['baseService'];
        InvEntrySvc.$inject = ['baseService'];
        InvDeliverySvc.$inject = ['baseService'];
        InvEntryDetailSvc.$inject = ['baseService'];
        InvDeliveriesSvc.$inject = ['baseService'];
        ShowAllPropertySvc.$inject = ['baseService'];
        SeriesSvc.$inject = ['baseService'];
        CheckpropSvc.$inject = ['baseService'];
        InvIssuanceSvc.$inject = ['baseService'];
        PaymentSvc.$inject = ['baseService'];
        UpdateSvc.$inject = ['baseService'];
        CancelSvc.$inject = ['baseService'];
        DateSvc.$inject = ['baseService'];
        ReactSvc.$inject = ['baseService'];
        GetCenterDataSvc.$inject = ['baseService'];
        SlcGenerationOfficeSvc.$inject = ['baseService'];
        CheckExistingPOSvc.$inject = ['baseService'];
        SearchItemSvc.$inject = ['baseService'];
        SearchPoHdrSvc.$inject = ['baseService'];

        function SearchPoHdrSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/pohdr'
            return service;
        }

        function SearchItemSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/item'
            return service;
        }

        function CheckExistingPOSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/existpo'
            return service;
        }

        function ReactSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/reactlogs'
            return service;
        }

        function DateSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'report/supplies_ledger/bydate'
            return service;
        }

        function LogsSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/logs'
            return service;
        }

        function AuthenticationSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/auth'
            return service;
        }

        function CancelSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/cancel'
            return service;
        }

        function SeriesSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/series'
            return service;
        }

        function UpdateSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/update'
            return service;
        }

        function PaymentSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/payment'
            return service;
        }

        function CheckpropSvc(baseService){
            var service = new baseService();
            service.url = APIURL + 'api/inventory/check'
            return service;
        }     

        function SlcGenerationSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'report/supplies_ledger';
            return service;
    }

     function SlcGenerationOfficeSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'report/supplies_ledger/office';
            return service;
    }

        function CreatePoSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/po';
            return service;
    }
        function DeliveryUpdateSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/deliveryupdate';
            return service;
    }
        function InvEntrySvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory';
            return service;
    }

        function InvEntryDetailSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/detail';
            return service;
    }
    
    
        function InvIssuanceSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/issuance';
            return service;
    }

        function InvDeliverySvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/delivery';
            return service;
    }

        function InvDeliveriesSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/deliverylist';
            return service;
    }

        function ShowAllPropertySvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/propertyall';
            return service;
    }

        function GetCenterDataSvc(baseService) {
            var service = new baseService();
            service.url = APIURL + 'api/inventory/center';
            return service;
    }

})();
