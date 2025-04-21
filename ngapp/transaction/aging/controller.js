angular.module("app").controller("AgingCtrl", AgingCtrl);
AgingCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];

function AgingCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  var filter = $injector.get("$filter");
  vm.MHOLID = "";
  vm.name = "";
  vm.filtered1 = [];
  vm.filtered2 = [];
  vm.menu = "monthly";
  $ocLazyLoad
    .load([TRANSURL + "aging/service.js?v=" + VERSION])
    .then(function (d) {
      AgingSvc = $injector.get("AgingSvc");
      AgingReportSvc = $injector.get("AgingReportSvc");
    });

  vm.changeBox = function (number) {
    if (number == 1) {
      vm.menu = "monthly";
    } else if (number == 2) {
      vm.menu = "annual";
    }
  };

  vm.dateDiff = function (date1) {
    const date = new Date(date1);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  vm.openModal = function () {
    var options = {
      data: "",
      animation: true,
      templateUrl: MASTERURL + "member_reg/property.html?v=" + VERSION,
      controllerName: "PropertyListCtrl",
      viewSize: "lg",
      windowClass: "modal modal-slide-in-right",
      filesToLoad: [
        MASTERURL + "member_reg/property.html?v=" + VERSION,
        MASTERURL + "member_reg/controller.js?v=" + VERSION,
      ],
    };
    AppSvc.modal(options).then(function (data) {
      if (data) {
        vm.MHOLID = data.MHOLID;
        vm.propID = data.propID;
        vm.name =
          data.FirstName +
          " " +
          data.MiddleName +
          " " +
          data.LastName +
          " " +
          data.ExtName;
        vm.address =
          "Blk" +
          data.BlockNo +
          "-Lot" +
          data.LotNo +
          " Cluster " +
          data.PhaseCluster;
      }
    });
  };

  vm.runAging = function () {
    vm.getData1(vm.MHOLID, vm.propID);
    vm.getData2(vm.MHOLID, vm.propID);
  };

  vm.getData1 = function (MHOLID,propID) {
    LOADING.classList.add("open");
    AgingSvc.get({
      type: "monthly",
      MHOLID: MHOLID,
      propID: propID,
    }).then(function (response) {
      if (!response.message) {
        response.forEach(function (item) {
          item.agedDays = vm.dateDiff(item.duedate);
          if (item.agedDays > 0 && item.agedDays <= 30) {
            item.thirty = item.TotalBalance;
          } else if (item.agedDays > 30 && item.agedDays <= 60) {
            item.sixty = item.TotalBalance;
          } else if (item.agedDays > 60 && item.agedDays <= 90) {
            item.ninety = item.TotalBalance;
          } else if (item.agedDays > 90 && item.agedDays <= 120) {
            item.onetweny = item.TotalBalance;
          } else if (item.agedDays > 120) {
            item.above = item.TotalBalance;
          }
          item.address = "Blk" + item.BlockNo + "-Lot" + item.LotNo + " Cluster " + item.PhaseCluster;
        });
        vm.filtered1 = response;
      } else {
        vm.filtered1 = [];
      }
      LOADING.classList.remove("open");
    });
  };

  vm.getData2 = function (MHOLID,propID) {
    LOADING.classList.add("open");
    AgingSvc.get({
      type: "annual",
      MHOLID: MHOLID,
      propID: propID,
    }).then(function (response) {
      if (!response.message) {
        response.forEach(function (item) {
          item.agedDays = vm.dateDiff(item.duedate);
          if (item.agedDays > 0 && item.agedDays <= 30) {
            item.thirty = item.TotalBalance;
          } else if (item.agedDays > 30 && item.agedDays <= 60) {
            item.sixty = item.TotalBalance;
          } else if (item.agedDays > 60 && item.agedDays <= 90) {
            item.ninety = item.TotalBalance;
          } else if (item.agedDays > 90 && item.agedDays <= 120) {
            item.onetweny = item.TotalBalance;
          } else if (item.agedDays > 120) {
            item.above = item.TotalBalance;
          }
          item.address = "Blk" + item.BlockNo + "-Lot" + item.LotNo + " Cluster " + item.PhaseCluster;
        });
        vm.filtered2 = response;
      } else {
        vm.filtered2 = [];
      }
      LOADING.classList.remove("open");
    });
  };

  vm.defaultGrid1 = {
    enableRowSelection: true,
    enableCellEdit: false,
    enableColumnMenus: false,
    modifierKeysToMultiSelect: true,
    enableRowHeaderSelection: false,
    columnDefs: [
      { name: "Particular", field: "Particulars" },
      { name: "Duedate", field: "duedate" },
      {
        name: "Aged Days",
        field: "agedDays",
        cellClass: "text-center",
      },
      {
        name: "0-30",
        field: "thirty",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "31-60",
        field: "sixty",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "61-90",
        field: "ninety",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "91-120",
        field: "onetweny",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "Above 120",
        field: "above",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
    ],
    data: "vm.filtered1",
  };

  vm.defaultGrid2 = {
    enableRowSelection: true,
    enableCellEdit: false,
    enableColumnMenus: false,
    modifierKeysToMultiSelect: true,
    enableRowHeaderSelection: false,
    columnDefs: [
      { name: "Particular", field: "Particulars" },
      { name: "Duedate", field: "duedate" },
      {
        name: "Aged Days",
        field: "agedDays",
        cellClass: "text-center",
      },
      {
        name: "0-30",
        field: "thirty",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "31-60",
        field: "sixty",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "61-90",
        field: "ninety",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "91-120",
        field: "onetweny",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "Above 120",
        field: "above",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
    ],
    data: "vm.filtered2",
  };

  vm.generateAging = function(){
    if(!vm.MHOLID){
      return RunMonthlySvc.showSwal("Warning", "Please Select Homeowner to Continue.", "warning");
    }
    LOADING.classList.add("open");
    AgingReportSvc.save({
        type: "monthly",
        id: vm.MHOLID,
      }).then(function (response) {
        if (response.success) {
            window.open(
              "report/aging_report?type=" +
                "monthly" +
                "&id=" +
                vm.MHOLID
            );
        }
        LOADING.classList.remove("open");
      });
  }
}
