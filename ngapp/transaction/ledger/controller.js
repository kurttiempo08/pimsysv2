angular.module("app").controller("LedgerCtrl", LedgerCtrl);
LedgerCtrl.$inject = [
  "$scope",
  "$ocLazyLoad",
  "$injector",
  "$uibModal",
  "$filter",
];

function LedgerCtrl($scope, $ocLazyLoad, $injector) {
  var vm = this;
  var filter = $injector.get("$filter");
  vm.filtered1 = [];
  vm.filtered2 = [];
  vm.filtered3 = [];
  vm.menu = "monthly";
  vm.balance1 = filter("number")(0, 2);
  vm.balance2 = filter("number")(0, 2);
  vm.balance3 = filter("number")(0, 2);
  $ocLazyLoad
    .load([TRANSURL + "ledger/service.js?v=" + VERSION])
    .then(function (d) {
      LedgerSvc = $injector.get("LedgerSvc");
    });

  vm.changeBox = function (number) {
    if (number == 1) {
      vm.menu = "monthly";
    } else if (number == 2) {
      vm.menu = "annual";
    } else if (number == 3) {
      vm.menu = "construction";
    }
  };

  vm.runAging = function () {
    vm.getData1(vm.MHOLID, vm.propID);
    vm.getData2(vm.MHOLID, vm.propID);
  };

  vm.getData1 = function (MHOLID, propID) {
    LOADING.classList.add("open");
    LedgerSvc.get({
      type: "monthly",
      MHOLID: MHOLID,
      propID: propID,
    }).then(function (response) {
      if (!response.message) {
        var RBalance = 0;
        response.forEach(function (item) {
          if (item.DebitAmt > 0) {
            RBalance = RBalance + parseFloat(item.DebitAmt);
            item.CreditAmt = "-";
          } else if (item.CreditAmt > 0) {
            RBalance = RBalance - parseFloat(item.CreditAmt);
            item.DebitAmt = "-";
          }
          item.RBalance = RBalance;
          item.address = "Blk" + item.BlockNo + "-Lot" + item.LotNo + " Cluster " + item.PhaseCluster;
        });
        vm.balance1 = filter("number")(RBalance, 2);
        vm.filtered1 = response;
      } else {
        vm.balance1 = filter("number")(0, 2);
        vm.filtered1 = [];
      }
      LOADING.classList.remove("open");
    });
  };

  vm.getData2 = function (MHOLID, propID) {
    LOADING.classList.add("open");
    LedgerSvc.get({
      type: "annual",
      MHOLID: MHOLID,
      propID: propID,
    }).then(function (response) {
      if (!response.message) {
        var RBalance = 0;
        response.forEach(function (item) {
          if (item.DebitAmt > 0) {
            RBalance = RBalance + parseFloat(item.DebitAmt);
            item.CreditAmt = "-";
          } else if (item.CreditAmt > 0) {
            RBalance = RBalance - parseFloat(item.CreditAmt);
            item.DebitAmt = "-";
          }
          item.RBalance = RBalance;
          item.address = "Blk" + item.BlockNo + "-Lot" + item.LotNo + " Cluster " + item.PhaseCluster;
        });
        vm.balance2 = filter("number")(RBalance, 2);
        vm.filtered2 = response;
      } else {
        vm.filtered2 = [];
        vm.balance2 = filter("number")(0, 2);
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
      { name: "Date", field: "TransDate" },
      { name: "Particular", field: "Particulars" },
      {
        name: "Debit Amount",
        field: "DebitAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "Credit Amount",
        field: "CreditAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "R Balance",
        field: "RBalance",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      { name: "Remarks", field: "Remarks", width: "30%" },
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
      { name: "Date", field: "TransDate" },
      { name: "Particular", field: "Particulars" },
      {
        name: "Debit Amount",
        field: "DebitAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "Credit Amount",
        field: "CreditAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "R Balance",
        field: "RBalance",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      { name: "Remarks", field: "Remarks", width: "30%" },
    ],
    data: "vm.filtered2",
  };

  vm.defaultGrid3 = {
    enableRowSelection: true,
    enableCellEdit: false,
    enableColumnMenus: false,
    modifierKeysToMultiSelect: true,
    enableRowHeaderSelection: false,
    columnDefs: [
      { name: "Date", field: "TransDate" },
      { name: "Particular", field: "Particulars" },
      {
        name: "Debit Amount",
        field: "DebitAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      {
        name: "Credit Amount",
        field: "CreditAmt",
        cellClass: "text-right",
        cellFilter: "number:2",
      },
      { name: "Remarks", field: "Remarks", width: "30%" },
    ],
    data: "vm.filtered3",
  };

  vm.openModal = function () {
    var options = {
      data: "",
      animation: true,
      templateUrl: MASTERURL + "member_reg/modal.html?v=" + VERSION,
      controllerName: "PropertyListCtrl",
      viewSize: "lg",
      windowClass: "modal modal-slide-in-right",
      filesToLoad: [
        MASTERURL + "member_reg/modal.html?v=" + VERSION,
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
}
