angular.module('app')
    .controller('CSRCtrl', CSRCtrl)

CSRCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$filter'];

function CSRCtrl($scope, $ocLazyLoad, $injector, filter) {
    var vm = this;
    var now = new Date();
    vm.variables = {};
    vm.variables.Mode = 2;
    vm.variables.From = filter('date')(now, "MM-dd-yyyy");
    vm.variables.To = filter('date')(now, "MM-dd-yyyy");
    $ocLazyLoad
        .load([
            REPURL + 'cashier_daily_cash_disposition/service.js?v=' + VERSION,
            ADMINURL + 'user_list/service.js?v=' + VERSION
        ]).then(function (d) {
            CDCRSvc = $injector.get("CDCRSvc");
            UserListSvc = $injector.get("UserListSvc");
            vm.getUserCredentials();
        });
    vm.getUserCredentials = function () {
        LOADING.classList.add("open");
        AppSvc.get().then(function (response) {
            if (response) {
                vm.userName = response.record.user;
            }

        });
        vm.getCashiers();
    }
    vm.getCashiers = function () {
        UserListSvc.get({ userlist: true }).then(function (response) {
            if (response.message) {
                vm.cashiers = [];
            } else {
                vm.cashiers = response;
            }
            LOADING.classList.remove("open");
        })
    }

    vm.generate = function () {
        vm.reports = [];
        vm.variables.DateFromWords = filter('date')(new Date(vm.variables.From), "longDate");
        vm.variables.DateToWords = filter('date')(new Date(vm.variables.To), "longDate");
        LOADING.classList.add('open');
        var record = [];
        for (var d = new Date(vm.variables.From); d <= new Date(vm.variables.To); d.setDate(d.getDate() + 1)) {
            var DateWord = new Date(d);
            record.push({ Date: AppSvc.getDate(DateWord), id: vm.variables.id });
        }
        vm.totalMD = 0;
        vm.totalMF = 0;
        vm.totalOI = 0;
        vm.GrandTotalOR = 0;
        vm.totalCB = 0;
        vm.GrandestTotal = 0;
        CDCRSvc.save({ record: record, dateRange: true }).then(function (response) {
            if (response.success) {
                var records = response.records;
                records.forEach(function (item) {
                    if (item.loop) {
                        var rec = vm.divideRecords(item.details);
                        item.MD = filter('number')(rec.MD, 2);
                        item.MF = filter('number')(rec.MF, 2);
                        item.OI = filter('number')(rec.OI, 2);
                        item.CB = filter('number')(rec.CB, 2);
                        item.TotalOR = filter('number')(rec.TotalOR, 2);
                        item.GrandTotal = filter('number')(rec.GrandTotal, 2);
                        vm.totalMD = vm.totalMD + parseFloat(rec.MD);
                        vm.totalMF = vm.totalMF + parseFloat(rec.MF);
                        vm.totalOI = vm.totalOI + parseFloat(rec.OI);
                        vm.totalCB = vm.totalCB + parseFloat(rec.CB);
                        vm.GrandTotalOR = vm.GrandTotalOR + parseFloat(rec.TotalOR);
                        vm.GrandestTotal = vm.GrandestTotal + parseFloat(rec.GrandTotal);
                    }
                    item.DateWord = filter('date')(new Date(item.Date), "MM/dd/yyyy")
                    vm.reports.push(item);
                })
            } else {
                AppSvc.showSwal('Ooops', 'Something went wrong', 'error');
            }
            LOADING.classList.remove('open');
        })
    }
    vm.divideRecords = function (array) {
        var filtered = angular.copy(array);
        var md = filter('filter')(filtered, { ChAcctGroupCodeName: 'MONTHLY DUES' });
        var totalMD = 0;
        md.forEach(function (item) {
            filtered.splice(filtered.indexOf(item), 1);
            totalMD = totalMD + parseFloat(item.AmountDue);
        })
        var totalAF = 0;
        var af = filter('filter')(filtered, { ChAcctGroupCodeName: 'ANNUAL MEMBERSHIP' });
        af.forEach(function (item) {
            filtered.splice(filtered.indexOf(item), 1);
            totalAF = totalAF + parseFloat(item.AmountDue);
        })
        var totalCB = 0;
        var cb = filter('filter')(filtered, { ChAcctGroupCodeName: 'REFUNDABLE DEPOSITS' });
        cb.forEach(function (item) {
            filtered.splice(filtered.indexOf(item), 1);
            totalCB = totalCB + parseFloat(item.AmountDue);
        })
        totalOI = 0;
        var oi = angular.copy(filtered);
        oi.forEach(function (item) {
            totalOI = totalOI + parseFloat(item.AmountDue);
        })
        var totalOR = totalMD + totalAF + totalOI;
        var grandTotal = totalOR + totalCB;
        return { MD: totalMD, MF: totalAF, OI: totalOI, CB: totalCB, TotalOR: totalOR, GrandTotal: grandTotal };
    }
    vm.print = function () {
        AppSvc.printElement(document.getElementById("report"));
        window.print();
    }
}