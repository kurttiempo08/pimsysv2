(function () {
  "use strict";
  angular
    .module("app")

    .factory("FeeDuedateSvc", FeeDuedateSvc);

  FeeDuedateSvc.$inject = ["baseService"];

  function FeeDuedateSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/fee_duedate";
    return service;
  }
})();
