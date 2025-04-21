(function () {
  "use strict";
  angular
    .module("app")
    .factory("PropertyRentSvc", PropertyRentSvc)
    .factory("PropertygetAllSvc", PropertygetAllSvc)
    .factory("RenterSvc", RenterSvc);

  RenterSvc.$inject = ["baseService"];
  PropertyRentSvc.$inject = ["baseService"];
  PropertygetAllSvc.$inject = ["baseService"];

  function RenterSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/renter_list";
    return service;
  }

  function PropertyRentSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/renter_list/propertyrent";
    return service;
  }

  // function PropertygetSvc(baseService) {
  //   var service = new baseService();
  //   service.url = APIURL + "api/member_list/propertymember";
  //   return service;
  // }

  function PropertygetAllSvc(baseService) {
    var service = new baseService();
    service.url = APIURL + "api/renter_list/propertyall";
    return service;
  }
})();
