angular.module("app").controller("RunAnnualCtrl", RunAnnualCtrl);
RunAnnualCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];

function RunAnnualCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  var filter = $injector.get("$filter");
  vm.total = "0.00";
  vm.variables = {};
  vm.filtered = [];
  vm.filteredList = [];
  vm.datePicked = getYear(new Date());
  $ocLazyLoad
    .load([TRANSURL + "annual_receivable/service.js?v=" + VERSION])
    .then(function (d) {
      RunAnnualSvc = $injector.get("RunAnnualSvc");
    });
  function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  function getYear(inputDate){
    var dt = new Date(inputDate);
    return dt.getFullYear() + 1;
  }
  function getFullDate(inputDate){
    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return monthNames[d.getMonth()] + " " + pad(d.getDate(), 2) + ", " + d.getFullYear() + " " + strTime;
  }
  function getDate(inputDate) {
    var dt = new Date(inputDate);
    var dtString =
      dt.getFullYear() + "-" + pad(dt.getMonth() + 1) + "-" + pad(dt.getDate());
    return dtString;
  }
  vm.runAnnual = function () {
    if(isNaN(vm.datePicked)){
      return RunAnnualSvc.showSwal("Warning", "Please enter correct input.", "warning");
    }
    AppSvc.confirmation(
      "Warning!",
      "Are you sure you want to run annual receivable? Data will automatically posted.",
      "Run",
      "Cancel",
      true
    ).then(function (data) {
      if (data) {
        LOADING.classList.add("open");
        vm.variables.xYear = vm.datePicked;
        vm.variables.Particulars = "Annual Fee";
        RunAnnualSvc.save(vm.variables).then(function (response) {
          if (response.success) {
            vm.showGenerated();
            RunAnnualSvc.showSwal("Success", response.message, "success");
          } else {
            vm.filtered = [];
            RunAnnualSvc.showSwal("Ooops", response.message, "warning");
          }
          LOADING.classList.remove("open");
        });
      } else {
        RunAnnualSvc.showSwal("Warning", "Posting cancelled.", "warning");
      }
    });
  };
  vm.showGenerated = function () {
    RunAnnualSvc.get({
      xYear: vm.datePicked,
    }).then(function (response) {
      vm.total = "0.00";
      if (!response.message) {
        response.forEach(function(item){
          vm.total = parseFloat(item.DebitAmt) + parseFloat(vm.total);
        })
        vm.total = filter("number")(vm.total, 2);
        vm.filteredList = response;
      } else {
        vm.filteredList = [];
      }
      vm.filtered = vm.filteredList;
    });
  };
  vm.defaultGrid = {
    enableRowSelection: true,
    enableCellEdit: false,
    enableColumnMenus: false,
    modifierKeysToMultiSelect: true,
    enableRowHeaderSelection: false,
    columnDefs: [
      { name: "LastName", field: "LastName" },
      { name: "FirstName", field: "FirstName" },
      { name: "Particular", field: "Particulars" },
      {
        name: "Debit Amount/ Receivable",
        field: "DebitAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
    ],
    data: "vm.filtered",
  };
}
