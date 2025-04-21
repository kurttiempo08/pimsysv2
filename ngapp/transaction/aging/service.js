(function () {
  "use strict";
  angular
    .module("app")

    .factory("AgingSvc", AgingSvc)
    .factory("AgingReportSvc", AgingReportSvc);

  AgingSvc.$inject = ["baseService"];
  AgingReportSvc.$inject = ["baseService"];

  function AgingSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/aging";
    return service;
  }
  function AgingReportSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "report/aging_report";
    return service;
  }
})();
