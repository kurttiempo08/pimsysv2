(function () {
  "use strict";
  angular
    .module("app")

    .factory("LedgerSvc", LedgerSvc);

  LedgerSvc.$inject = ["baseService"];

  function LedgerSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/ledger";
    return service;
  }
})();
