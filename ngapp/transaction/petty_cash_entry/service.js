(function () {
  "use strict";
  angular
    .module("app")

    .factory("PettyCashSvc", PettyCashSvc);

  PettyCashSvc.$inject = ["baseService"];

  function PettyCashSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/petty_cash";
    return service;
  }
})();
