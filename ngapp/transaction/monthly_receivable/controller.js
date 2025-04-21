angular
  .module("app")
  .controller("RunMonthlyCtrl", RunMonthlyCtrl)
  .controller("PrintIndividualCtrl", PrintIndividualCtrl);
RunMonthlyCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];
PrintIndividualCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "data",
  "$uibModalInstance",
  "$filter",
];

function RunMonthlyCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  var filter = $injector.get("$filter");
  vm.total = "0.00";
  vm.variables = {};
  vm.filtered = [];
  vm.filteredList = [];
  vm.datePicked = new Date();
  $ocLazyLoad
    .load([TRANSURL + "monthly_receivable/service.js?v=" + VERSION])
    .then(function (d) {
      RunMonthlySvc = $injector.get("RunMonthlySvc");
      SOAReportSvc = $injector.get("SOAReportSvc");
    });
  function getMonthName(inputDate) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date(inputDate);
    return monthNames[d.getMonth()];
  }
  function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  function getDate(inputDate) {
    var dt = new Date(inputDate);
    var dtString =
      dt.getFullYear() + "-" + pad(dt.getMonth() + 1) + "-" + pad(dt.getDate());
    return dtString;
  }
  vm.runMonthly = function () {
    LOADING.classList.add("open");
    vm.variables.xMonth = pad(vm.datePicked.getMonth() + 1, 2);
    vm.variables.xYear = vm.datePicked.getFullYear();
    vm.variables.Particulars =
      getMonthName(vm.datePicked) + " " + vm.datePicked.getFullYear();
    RunMonthlySvc.save(vm.variables).then(function (response) {
      if (response.success) {
        vm.showGenerated();
        RunMonthlySvc.showSwal("Success", response.message, "success");
      } else {
        vm.filtered = [];
        RunMonthlySvc.showSwal("Warning", response.message, "warning");
      }
      LOADING.classList.remove("open");
    });
  };
  vm.showGenerated = function () {
    RunMonthlySvc.get({
      xMonth: pad(vm.datePicked.getMonth() + 1, 2),
      xYear: vm.datePicked.getFullYear(),
    }).then(function (response) {
      vm.total = "0.00";
      if (!response.message) {
        var count = 0;
        response.forEach(function (item) {
          count = count + 1;
          item.Count = count;
          vm.total = parseFloat(item.DebitAmt) + parseFloat(vm.total);
          item.address =
            "BLK" +
            item.BlockNo +
            "-LOT" +
            item.LotNo +
            " Cluster" +
            item.PhaseCluster;
        });
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
      { name: "No.", field: "Count", width: "3%" },
      { name: "LastName", field: "LastName", width: "15%" },
      { name: "FirstName", field: "FirstName", width: "15%" },
      { name: "Address", field: "address", width: "40%" },
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
  vm.generatePrint = function (number) {
    if (number == 1) {
      LOADING.classList.add("open");
      SOAReportSvc.save({
        xMonth: pad(vm.datePicked.getMonth() + 1, 2),
        xYear: vm.datePicked.getFullYear(),
      }).then(function (response) {
        if (response.success) {
          window.open(
            "report/soa_report?xMonth=" +
              pad(vm.datePicked.getMonth() + 1, 2) +
              "&xYear=" +
              vm.datePicked.getFullYear()
          );
        }else{
          RunMonthlySvc.showSwal("Warning", response.message, "warning");
        }
        LOADING.classList.remove("open");
      });
    } else if (number == 2) {
      LOADING.classList.add("open");
      SOAReportSvc.save({
        xMonth: pad(vm.datePicked.getMonth() + 1, 2),
        xYear: vm.datePicked.getFullYear(),
        receivable: true,
      }).then(function (response) {
        if (response.success) {
          window.open(
            "report/soa_report?xMonth=" +
              pad(vm.datePicked.getMonth() + 1, 2) +
              "&xYear=" +
              vm.datePicked.getFullYear() +
              "&receivable=true"
          );
        }else{
          RunMonthlySvc.showSwal("Warning", response.message, "warning");
        }
        LOADING.classList.remove("open");
      });
    } else {
      console.log("ghere");
      var options = {
        data: "",
        animation: true,
        templateUrl:
          TRANSURL + "monthly_receivable/individual.html?v=" + VERSION,
        controllerName: "PrintIndividualCtrl",
        viewSize: "full",
        windowClass: "modal modal-slide-in-right",
        filesToLoad: [
          TRANSURL + "monthly_receivable/individual.html?v=" + VERSION,
          TRANSURL + "monthly_receivable/controller.js?v=" + VERSION,
        ],
      };
      AppSvc.modal(options);
    }
  };
  vm.postMe = function () {
    AppSvc.confirmation(
      "Warning!",
      "Are you sure you want to POST these data?",
      "Post",
      "Cancel",
      true
    ).then(function (data) {
      if (data) {
        RunMonthlySvc.save({
          post_data: true,
          xMonth: pad(vm.datePicked.getMonth() + 1, 2),
          xYear: vm.datePicked.getFullYear(),
        }).then(function (response) {
          if (response.success) {
            vm.filtered = [];
            vm.filteredList = [];
            RunMonthlySvc.showSwal("Success", response.message, "success");
          } else {
            RunMonthlySvc.showSwal("Confirmation", response.message, "warning");
          }
          LOADING.classList.remove("open");
        });
      } else {
        RunMonthlySvc.showSwal("Warning", "Posting cancelled.", "warning");
      }
    });
  };
}
function PrintIndividualCtrl(
  $scope,
  $ocLazyLoad,
  $injector,
  data,
  $uibModalInstance,
  $filter
) {
  var modal = this;
  var filter = $injector.get("$filter");
  modal.MHOLID = "";
  modal.datePicked = new Date();
  modal.filtered = [];
  modal.filteredList = [];
  $ocLazyLoad
    .load([TRANSURL + "monthly_receivable/service.js?v=" + VERSION])
    .then(function (d) {
      SOAReportSvc = $injector.get("SOAReportSvc");
    });
  function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  modal.openModal = function () {
    var options = {
      data: "",
      animation: true,
      templateUrl: MASTERURL + "member_reg/modal.html?v=" + VERSION,
      controllerName: "MemberListCtrl",
      viewSize: "lg",
      windowClass: "modal modal-slide-in-right",
      filesToLoad: [
        MASTERURL + "member_reg/modal.html?v=" + VERSION,
        MASTERURL + "member_reg/controller.js?v=" + VERSION,
      ],
    };
    AppSvc.modal(options).then(function (data) {
      if (data) {
        modal.MHOLID = data.MHOLID;
        modal.name =
          data.FirstName +
          " " +
          data.MiddleName +
          " " +
          data.LastName +
          " " +
          data.ExtName;
        modal.address =
          "Blk" +
          data.BlockNo +
          "-Lot" +
          data.LotNo +
          " Cluster " +
          data.PhaseCluster;
      }
    });
  };
  modal.generatePrint = function (number) {
    if(number == 1){
      LOADING.classList.add("open");
      SOAReportSvc.save({
        xMonth: pad(modal.datePicked.getMonth() + 1, 2),
        xYear: modal.datePicked.getFullYear(),
        MHOLID: modal.MHOLID
      }).then(function (response) {
        if (response.success) {
          window.open(
            "report/soa_report?xMonth=" +
              pad(modal.datePicked.getMonth() + 1, 2) +
              "&xYear=" +
              modal.datePicked.getFullYear() +
              "&MHOLID=" + 
              modal.MHOLID
          );
        }else{
          RunMonthlySvc.showSwal("Warning", response.message, "warning");
        }
        LOADING.classList.remove("open");
      });
    }else{
      LOADING.classList.add("open");
      SOAReportSvc.save({
        MHOLID: modal.MHOLID,
        All: true
      }).then(function (response) {
        if (response.success) {
          window.open(
            "report/soa_report?MHOLID=" +
              modal.MHOLID +
              "&All=true"
          );
        }else{
          RunMonthlySvc.showSwal("Warning", response.message, "warning");
        }
        LOADING.classList.remove("open");
      });
    }
  };
  modal.showReceivable = function () {
    RunMonthlySvc.get({
      showReceivable: true,
      MHOLID: modal.MHOLID
    }).then(function (response) {
      console.log(response);
      modal.total = "0.00";
      if (!response.message) {
        var count = 0;
        response.forEach(function (item) {
          count = count + 1;
          item.Count = count;
          modal.total = parseFloat(item.SumDebitAmt) + parseFloat(modal.total);
          item.address =
            "BLK" +
            item.BlockNo +
            "-LOT" +
            item.LotNo +
            " Cluster" +
            item.PhaseCluster;
        });
        modal.total = filter("number")(modal.total, 2);
        modal.filteredList = response;
      } else {
        modal.filteredList = [];
      }
      modal.filtered = modal.filteredList;
    });
  };
  modal.defaultGrid = {
    enableRowSelection: true,
    enableCellEdit: false,
    enableColumnMenus: false,
    modifierKeysToMultiSelect: true,
    enableRowHeaderSelection: false,
    columnDefs: [
      { name: "No.", field: "Count", width: "5%" },
      { name: "LastName", field: "LastName", width: "15%" },
      { name: "FirstName", field: "FirstName", width: "15%" },
      { name: "Address", field: "address", width: "40%" },
      { name: "Particular", field: "Particulars" },
      {
        name: "Debit Amount/ Receivable",
        field: "SumDebitAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
    ],
    data: "modal.filtered",
  };
  modal.close = function(){
    $uibModalInstance.dismiss();
  }
}
