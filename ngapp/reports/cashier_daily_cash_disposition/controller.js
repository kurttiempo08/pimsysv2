angular.module('app')
    .controller('CDCRCtrl', CDCRCtrl)

CDCRCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$filter'];

function CDCRCtrl($scope, $ocLazyLoad, $injector, filter) {
    var vm = this;
    var now = new Date();
    vm.variables = {};
    vm.variables.Mode = 1;
    vm.variables.Date = filter('date')(now, "MM-dd-yyyy");
    vm.variables.DateWords = filter('date')(vm.variables.Date, "longDate");
    // vm.variables.From = filter('date')(now, "MM-dd-yyyy");
    // vm.variables.To = filter('date')(now, "MM-dd-yyyy");

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
        LOADING.classList.remove("open");
    }

    vm.generate = function () {
        vm.report = false;
        LOADING.classList.add('open');
        var data = angular.copy(vm.variables);
        data.Date = AppSvc.getDate(vm.variables.Date);
        data.daily = true;
        CDCRSvc.get(data).then(function (response) {
            if (!response.message) {
                vm.report = true;
                response.forEach(function (item) {
                    var FName = item.FN ? item.FN + ' ' : '';
                    var LName = item.LN ? item.LN + ' ' : '';
                    var MName = item.MN ? item.MN + ' ' : '';
                    var ExtName = item.EXN ? item.EXN : '';
                    item.FullName = FName + LName + MName + ExtName;
                })
                vm.records = response;
                vm.divideRecords();
            } else {
                vm.report = false;
                vm.records = [];
            }
            LOADING.classList.remove('open');
        })
    }
    vm.divideRecords = function () {
        var filtered = angular.copy(vm.records);
        var md = filter('filter')(filtered, { ChAcctGroupCodeName: 'MONTHLY DUES' });
        var totalMD = 0;
        md.forEach(function (item) {
            filtered.splice(filtered.indexOf(item), 1);
            totalMD = totalMD + parseFloat(item.AmountDue);
        })
        vm.totalMD = totalMD;
        var totalAF = 0;
        var af = filter('filter')(filtered, { ChAcctGroupCodeName: 'ANNUAL MEMBERSHIP' });
        af.forEach(function (item) {
            filtered.splice(filtered.indexOf(item), 1);
            totalAF = totalAF + parseFloat(item.AmountDue);
        })
        vm.totalAF = totalAF;
        var totalCB = 0;
        var cb = filter('filter')(filtered, { ChAcctGroupCodeName: 'REFUNDABLE DEPOSITS' });
        cb.forEach(function (item) {
            filtered.splice(filtered.indexOf(item), 1);
            totalCB = totalCB + parseFloat(item.AmountDue);
        })
        vm.totalCB = totalCB;
        totalOI = 0;
        var oi = angular.copy(filtered);
        oi.forEach(function (item) {
            totalOI = totalOI + parseFloat(item.AmountDue);
        })
        vm.totalOI = totalOI;
        vm.md = angular.copy(md);
        vm.af = angular.copy(af);
        vm.cb = angular.copy(cb);
        vm.oi = angular.copy(oi);
        vm.totalOR = vm.totalMD + vm.totalAF + vm.totalOI;
        vm.grandTotal = vm.totalOR + vm.totalCB;
        vm.getPayments();
    }
    vm.getPayments = function () {
        var data = angular.copy(vm.variables);
        data.Date = AppSvc.getDate(vm.variables.Date);
        data.payment = true;
        CDCRSvc.get(data).then(function (response) {
            if (!response.message) {
                vm.payments = response;
                vm.dividePayments();
            } else {
                vm.payments = [];
            }
            LOADING.classList.remove('open');
        })
    }
    vm.dividePayments = function () {
        var payments = angular.copy(vm.payments);
        var paymentModes = [];
        var modes = vm.payments.groupBy('Mode');
        for (var key in modes) {
            var total = 0;
            modes[key].forEach(function (item) {
                total = total + parseFloat(item.NetAmt);
            });
            paymentModes.push({ mode: key, total: total });
        };
        vm.paymentModes = paymentModes;
        var cash = filter('filter')(payments, { Mode: 'CASH' }, true);
        if (cash.length > 0) {
            cash.forEach(function (item) {
                payments.splice(payments.indexOf(item), 1);
            })
        }
        vm.checks = angular.copy(payments);
    }
    vm.print = function () {
        AppSvc.printElement(document.getElementById("report"));
        LOADING.classList.add('open');
        setTimeout(
            function () {
                LOADING.classList.remove('open');
                window.print();
            }, 1000);
    }


    Array.prototype.groupBy = function (prop) {
        return this.reduce(function (groups, item) {
            var val = item[prop];
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
        }, {});
    };
}