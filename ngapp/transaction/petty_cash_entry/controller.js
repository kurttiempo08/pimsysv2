angular.module("app").controller("PettyCashCtrl", PettyCashCtrl);
PettyCashCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];

function PettyCashCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  var filter = $injector.get("$filter");
  vm.filtered = [];
  $ocLazyLoad
    .load([TRANSURL + "petty_cash_entry/service.js?v=" + VERSION])
    .then(function (d) {
        PettyCashSvc = $injector.get("PettyCashSvc");
    });
}
