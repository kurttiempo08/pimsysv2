(function () {
  "use strict";
  angular
    .module("app")
    .factory("PropertygetSvc", PropertygetSvc)
    .factory("ContractSvc", ContractSvc)
    .factory("PropertySvc", PropertySvc)
    .factory("HistorySvc", HistorySvc)
    .factory("RenterHistorySvc", RenterHistorySvc)
    .factory("OwnerHistorySvc", OwnerHistorySvc)
    .factory("MemberSvc", MemberSvc);

  PropertygetSvc.$inject = ["baseService"];
  ContractSvc.$inject = ["baseService"]  
  MemberSvc.$inject = ["baseService"];
  PropertySvc.$inject = ["baseService"];
  RenterHistorySvc.$inject = ["baseService"]
  OwnerHistorySvc.$inject = ["baseService"];


  function OwnerHistorySvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list/propertyhistory";
    return service;
  }

  function ContractSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list/contract";
    return service;
  }

  function MemberSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list";
    return service;
  }

  function HistorySvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list/history";
    return service;
  }

  function RenterHistorySvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list/renterhistory";
    return service;
  }

  function PropertySvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list/property";
    return service;
  }

  function PropertygetSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/member_list/propertymember";
    return service;
  }
})();
