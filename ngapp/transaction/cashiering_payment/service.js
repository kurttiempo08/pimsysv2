(function () {
    "use strict";
    angular
        .module("app")

        .factory("CashierPaymentSvc", CashierPaymentSvc)
        .factory("CashierInquirySvc", CashierInquirySvc)

    CashierPaymentSvc.$inject = ["baseService"];
    CashierInquirySvc.$inject = ["baseService"];

    function CashierPaymentSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + "api/cashiering_payment";
        return service;
    }

    function CashierInquirySvc(baseService) {
        var service = new baseService();
        service.url = APIURL + "api/cashiering_payment/inquiry";
        return service;
    }
})();
