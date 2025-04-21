angular.module("app").controller("LotRateCtrl", LotRateCtrl);
LotRateCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];

function LotRateCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  vm.Type = "HOUSE and LOT";
  var filter = $injector.get("$filter");
  $ocLazyLoad
    .load([ADMINURL + "lot_rate/service.js?v=" + VERSION])
    .then(function (d) {
      LotRateSvc = $injector.get("LotRateSvc");
      vm.showGenerated();
    });
  vm.runAnnual = function () {
    if (isNaN(vm.Rate)) {
      return LotRateSvc.showSwal(
        "Warning",
        "Please enter correct input.",
        "warning"
      );
    }
    LOADING.classList.add("open");
    var data = {
      Type: vm.Type,
      Rate: parseFloat(vm.Rate.replace(/,/g, ''))
    }
    LotRateSvc.save(data).then(function (response) {
      if (response.success) {
        LotRateSvc.showSwal("Success", response.message, "success");
      } else {
        LotRateSvc.showSwal("Ooops", response.message, "warning");
      }
      LOADING.classList.remove("open");
    });
  };
  vm.showGenerated = function () {
    LOADING.classList.add("open");
    vm.Rate = "0.00";
    LotRateSvc.get({
      Type: vm.Type,
    }).then(function (response) {
      if (!response.message) {
        vm.Rate = filter("number")(response[0].Rate, 2);
      }
      LOADING.classList.remove("open");
    });
  };
}
