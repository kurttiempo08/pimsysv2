(function () {
  "use strict";
  angular
    .module("app")

    .factory("RunMonthlySvc", RunMonthlySvc)
    .factory("SOAReportSvc", SOAReportSvc);

RunMonthlySvc.$inject = ["baseService"];
SOAReportSvc.$inject = ["baseService"];

  function RunMonthlySvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/run_monthly";
    return service;
  }
  function SOAReportSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "report/soa_report";
    return service;
  }
})();
