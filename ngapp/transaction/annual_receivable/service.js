(function () {
  "use strict";
  angular
    .module("app")

    .factory("RunAnnualSvc", RunAnnualSvc);

RunAnnualSvc.$inject = ["baseService"];

  function RunAnnualSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/run_annual";
    return service;
  }
})();
