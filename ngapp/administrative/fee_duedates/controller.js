angular.module("app").controller("FeeDuedateCtrl", FeeDuedateCtrl);
FeeDuedateCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];

function FeeDuedateCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  vm.Type = "HOUSE and LOT";
  var filter = $injector.get("$filter");
  $ocLazyLoad
    .load([ADMINURL + "fee_duedates/service.js?v=" + VERSION])
    .then(function (d) {
      FeeDuedateSvc = $injector.get("FeeDuedateSvc");
      vm.showGenerated();
    });
  vm.runAnnual = function () {
    if (isNaN(vm.Fee)) {
      return FeeDuedateSvc.showSwal(
        "Warning",
        "Please enter correct input.",
        "warning"
      );
    }
    LOADING.classList.add("open");
    var data = {
      Month: vm.Month,
      day_annual: vm.day_annual,
      day: vm.day,
      Fee: parseFloat(vm.Fee.replace(/,/g, "")),
    };
    FeeDuedateSvc.save(data).then(function (response) {
      if (response.success) {
        FeeDuedateSvc.showSwal("Success", response.message, "success");
      } else {
        FeeDuedateSvc.showSwal("Ooops", response.message, "warning");
      }
      LOADING.classList.remove("open");
    });
  };
  vm.showGenerated = function () {
    LOADING.classList.add("open");
    FeeDuedateSvc.get().then(function (response) {
      if (!response.message) {
        vm.Fee = filter("number")(response['Fee'], 2);
        vm.Month = response['Month'];
        vm.day = response['day'];
        vm.day_annual = response['day_annual'];
      }
      LOADING.classList.remove("open");
    });
  };
}
