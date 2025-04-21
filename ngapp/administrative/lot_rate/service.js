(function () {
  "use strict";
  angular
    .module("app")

    .factory("LotRateSvc", LotRateSvc);

  LotRateSvc.$inject = ["baseService"];

  function LotRateSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/lot_rate";
    return service;
  }
})();
