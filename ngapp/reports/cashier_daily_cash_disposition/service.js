(function () {
    "use strict";
    angular
        .module("app")

        .factory("CDCRSvc", CDCRSvc)

    CDCRSvc.$inject = ["baseService"];

    function CDCRSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + "api/cash_disposition";
        return service;
    }

})();
