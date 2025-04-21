angular.module('app')
    .controller('CashierPaymentCtrl', CashierPaymentCtrl)
    .controller('CPHeaderCtrl', CPHeaderCtrl)
    .controller('ACKFormCtrl', ACKFormCtrl)
    .controller('ORFormCtrl', ORFormCtrl)
    .controller('PaymentChangeCtrl', PaymentChangeCtrl)

CashierPaymentCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$filter'];
CPHeaderCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
ACKFormCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
ORFormCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
PaymentChangeCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance'];

function CashierPaymentCtrl($scope, $ocLazyLoad, $injector, filter) {
    var vm = this;
    var dateNow = new Date();
    vm.printers = [];
    // JSPM.JSPrintManager.auto_reconnect = true;
    // JSPM.JSPrintManager.start();
    // JSPM.JSPrintManager.WS.onStatusChanged = function () {
    //     if (jspmWSStatus()) {
    //         JSPM.JSPrintManager.getPrinters().then(function (myPrinters) {
    //             for (var i = 0; i < myPrinters.length; i++) {
    //                 vm.printers.push({ name: myPrinters[i] });
    //             }
    //         });
    //     }
    // };
    // function jspmWSStatus() {
    //     if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Open)
    //         return true;
    //     else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Closed) {
    //         alert('JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm');
    //         return false;
    //     }
    //     else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.BlackListed) {
    //         alert('JSPM has blacklisted this website!');
    //         return false;
    //     }
    // }
    vm.menu = 'Header';
    vm.minimizeCB = false;
    vm.minimizeOI = false;
    vm.variables = {};
    vm.variables.IsMember = 'YES';
    vm.variables.TDate = filter('date')(dateNow, "MM-dd-yyyy");
    vm.variables.Status = 'ACTIVE';
    vm.variables.TotalAmountPayable = 0;
    vm.variables.TotalAmountActualPaid = 0;
    vm.variables.Type = 'Official Receipt';
    vm.variables.SpecialTransaction = 'N';
    vm.inquiry = {};
    vm.due = {};
    vm.due.DebitAmt = filter('number')(0, 2);
    vm.Fee = filter('number')(0, 2);
    vm.payment = {};
    vm.payment.TranCheckDate = filter('date')(dateNow, "MM-dd-yyyy");
    vm.payment.Mode = 'CASH';
    vm.fee = {};
    vm.construction = {};
    vm.income = {};
    vm.details = [];
    vm.inquiries = [];
    vm.dues = [];
    vm.fees = [];
    vm.lotRate = [];
    vm.payments = [];
    vm.months = [
        { number: "01", month: 'January' },
        { number: "02", month: 'February' },
        { number: "03", month: 'March' },
        { number: "04", month: 'April' },
        { number: "05", month: 'May' },
        { number: "06", month: 'June' },
        { number: "07", month: 'July' },
        { number: "08", month: 'August' },
        { number: "09", month: 'September' },
        { number: "10", month: 'October' },
        { number: "11", month: 'November' },
        { number: "12", month: 'December' },
    ]
    vm.inquiry.searchBy = 1;
    vm.inquiry.DateFrom = filter('date')(dateNow, "MM-dd-yyyy");
    vm.inquiry.DateTo = filter('date')(dateNow, "MM-dd-yyyy");
    var rowTemplate = '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ui-grid-cell context-menu="grid.appScope.vm.contextmenuOptions()" data-target="myMenu"></div>'
    vm.transGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'Code', displayName: 'Code', field: 'AcctGroupCode', width: 140, },
            { name: 'Particulars', displayName: 'Particulars', field: 'Particulars', width: 400, },
            { name: 'Amt. Due', displayName: 'Amt. Due', field: 'AmountDue', cellFilter: 'number: 2', cellClass: 'text-right', width: 185 },
            { name: 'Amt. Paid', displayName: 'Amt. Paid', field: 'AmtPaid', cellFilter: 'number: 2', cellClass: 'text-right', width: 185 },
        ],
        data: 'vm.details',
        rowTemplate: rowTemplate,
        onRegisterApi: function (gridApi) {
            vm.transGridApi = gridApi;
        }
    }
    vm.inquiryGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'TDate', displayName: 'Date', field: 'TDate', width: 100 },
            { name: 'OR No', displayName: 'O.R No', field: 'ORNo', width: 120 },
            { name: 'AcknowledgementFormNo', displayName: 'Form No', field: 'AcknowledgementFormNo', width: 120 },
            { name: 'Name', displayName: 'Name', field: 'FullName', width: 160 },
            { name: 'Address', displayName: 'Address', field: 'Address', width: 300 },
            { name: 'Amt. Due', displayName: 'Amt. Due', field: 'TotalAmountPayable', cellClass: 'text-right', cellFilter: 'number: 2' },
            { name: 'Amt. Paid', displayName: 'Amt. Paid', field: 'TotalAmountActualPaid', cellClass: 'text-right', cellFilter: 'number: 2' },
        ],
        data: 'vm.inquiries',
        onRegisterApi: function (gridApi) {
            // gridApi.selection.on.rowSelectionChanged(null, function (row) {
            //     modal.gridClick(row.entity);
            // });
        }
    }
    var rowTemplateMD = '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ui-grid-cell context-menu="grid.appScope.vm.monthlyDuesOptions()" data-target="myMenu"></div>'
    vm.monthlyDuesGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: false,
        enableRowHeaderSelection: true,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'Month', displayName: 'Month', field: 'Month', width: 92 },
            { name: 'Year', displayName: 'Year', field: 'xYear', width: 79 },
            { name: 'Amount', displayName: 'Amount', field: 'DebitAmt', cellClass: 'text-right', cellFilter: 'number: 2', width: 110 },
        ],
        data: 'vm.dues',
        rowTemplate: rowTemplateMD,
        onRegisterApi: function (gridApi) {
            vm.monthlyGridApi = gridApi;
        }
    }
    vm.annualFeeGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: false,
        enableRowHeaderSelection: true,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'Year', displayName: 'Year', field: 'xYear', width: 79 },
            { name: 'Amount', displayName: 'Amount', field: 'DebitAmt', cellClass: 'text-right', cellFilter: 'number: 2', width: 198 },
        ],
        data: 'vm.fees',
        onRegisterApi: function (gridApi) {
            vm.annualGridApi = gridApi;
        }
    }
    vm.paymentGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'Mode', displayName: 'Mode', field: 'Mode' },
            { name: 'Bank', displayName: 'Bank', field: 'CardCheckBank' },
            { name: 'Check No', displayName: 'Check No', field: 'CardCheckNo' },
            { name: 'Date', displayName: 'Date', field: 'TranCheckDate' },
            { name: 'Amount', displayName: 'Amount', field: 'AmountTender', cellClass: 'text-right', cellFilter: 'number: 2' },
        ],
        data: 'vm.payments',
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                vm.clickPayment(row.entity);
            });
        }
    }
    $ocLazyLoad
        .load([
            TRANSURL + 'cashiering_payment/service.js?v=' + VERSION,
            ADMINURL + 'or_setup/service.js?v=' + VERSION
        ]).then(function (d) {
            CashierPaymentSvc = $injector.get("CashierPaymentSvc");
            CashierInquirySvc = $injector.get("CashierInquirySvc");
            OrSvc = $injector.get("OrSvc");
            vm.getUserCredentials()
        });
    // NECCESSITIES
    vm.contextmenuOptions = function () {
        var l = vm.transGridApi.selection.getSelectedRows();
        var contextMenuData = [];
        if (l.length > 0) {
            contextMenuData.push(['<i class="fa fa-trash fa-fw"></i> Delete Selected', function () {
                vm.deleteDetails();
            }]);
        }
        return contextMenuData;

    }
    vm.getUserCredentials = function () {
        LOADING.classList.add("open");
        AppSvc.get().then(function (response) {
            if (response) {
                vm.userName = response.record.user;
            }
            vm.getORSetup();
        });
    };
    vm.getORSetup = function (loading) {
        OrSvc.get().then(function (response) {
            if (response.message) {
                vm.OrsetupList = [];
            } else {
                vm.variables.ORNo = response[0].OrNo;
            }
            vm.getLotRate();
            if (loading) {
                LOADING.classList.remove('open');
                if (vm.variables.THDRID) {
                    vm.saveHeader();
                }
            }
        })
    }
    vm.getLotRate = function () {
        CashierPaymentSvc.get({ lotrates: true }).then(function (response) {
            if (response.message) {
                vm.lotRate = [];
            } else {
                vm.lotRate = response;
            }
            vm.getAnnualRate();
        })
    }
    vm.getAnnualRate = function () {
        CashierPaymentSvc.get({ annualrate: true }).then(function (response) {
            if (response.message) {
                vm.memberRate = [];
            } else {
                vm.memberRate = response;
                vm.Fee = filter('number')(response[0].Fee, 2);
            }
            vm.getCOAMD();
        })
    }
    vm.getCOAMD = function () {
        CashierPaymentSvc.get({ coa: true, name: 'MONTHLY DUES' }).then(function (response) {
            if (response.message) {
                vm.COAMD = {};
            } else {
                vm.COAMD = response[0];
            }
            vm.getCOAMF();
        })
    }
    vm.getCOAMF = function () {
        CashierPaymentSvc.get({ coa: true, name: 'ANNUAL MEMBERSHIP' }).then(function (response) {
            if (response.message) {
                vm.COAMF = {};
            } else {
                vm.COAMF = response[0];
            }
            vm.getCOACB();
        })
    }
    vm.getCOACB = function () {
        CashierPaymentSvc.get({ bond: true }).then(function (response) {
            if (response.message) {
                vm.COACBList = [];
                vm.COACB = {};
            } else {
                vm.COACBList = response;
                vm.COACB = response[0];
            }
            vm.getCOAOI()
        })
    }
    vm.getCOAOI = function () {
        CashierPaymentSvc.get({ otherincome: true }).then(function (response) {
            if (response.message) {
                vm.COAOIList = [];
                vm.COAOI = {};
            } else {
                vm.COAOIList = response;
                vm.COAOI = response[0];
            }
            LOADING.classList.remove('open');
        })
    }

    vm.changeBox = function (menu, level) {
        if (level == 2) {
            if (!vm.variables.THDRID) {
                return AppSvc.showSwal('Confirmation', 'Create Header First!', 'warning');
            }
        }
        if (level == 3) {
            if (!vm.variables.THDRID) {
                return AppSvc.showSwal('Confirmation', 'Create Header First!', 'warning');
            }
            if (vm.variables.TotalAmountPayable <= 0) {
                return AppSvc.showSwal('Confirmation', 'No Available Payments!', 'warning');
            }
            vm.showModals('CB', false);
            vm.showModals('MF', false);
            vm.showModals('MD', false);
            vm.showModals('OI', false);
        }
        vm.menu = menu;
    }
    vm.changeCOA = function (x, type) {
        if (type === 'CB') {
            var l = filter('filter')(vm.COACBList, { ChAcctGroupCodeName: x }, true);
            vm.COACB = l[0];
            vm.construction.AcctGroupCode = vm.COACB.ChAcctCode;
            vm.construction.AcctCodeLink = vm.COACB.ADID;
            vm.construction.AcctDetails = vm.COACB.ChAcctName;
            vm.construction.AcctSubGroup = vm.COACB.ChAcctGroupCodeName;
            vm.construction.Particulars = vm.COACB.ChAcctGroupCodeName;
        } else {
            var l = filter('filter')(vm.COAOIList, { ChAcctGroupCodeName: x }, true);
            vm.COAOI = l[0];
            vm.income.AcctGroupCode = vm.COAOI.ChAcctCode;
            vm.income.AcctCodeLink = vm.COAOI.ADID;
            vm.income.AcctDetails = vm.COAOI.ChAcctName;
            vm.income.AcctSubGroup = vm.COAOI.ChAcctGroupCodeName;
            vm.income.Particulars = vm.COAOI.ChAcctGroupCodeName;
        }
    }
    vm.showModals = function (menu, bool) {
        if (menu === 'CB') {
            if (bool) {
                vm.minimizeCB = false;
            }
            vm.construction.AcctGroupCode = vm.COACB.ChAcctCode;
            vm.construction.AcctCodeLink = vm.COACB.ADID;
            vm.construction.AcctDetails = vm.COACB.ChAcctName;
            vm.construction.AcctSubGroup = vm.COACB.ChAcctGroupCodeName;
            vm.construction.Particulars = vm.COACB.ChAcctGroupCodeName;
            vm.showCB = bool;
        } else if (menu === 'OI') {
            if (bool) {
                vm.minimizeOI = false;
            }
            vm.income.AcctGroupCode = vm.COAOI.ChAcctCode;
            vm.income.AcctCodeLink = vm.COAOI.ADID;
            vm.income.AcctDetails = vm.COAOI.ChAcctName;
            vm.income.AcctSubGroup = vm.COAOI.ChAcctGroupCodeName;
            vm.income.Particulars = vm.COAOI.ChAcctGroupCodeName;
            vm.showOI = bool;
        } else if (menu === 'MD') {
            if (bool) {
                vm.minimizeMD = false;
            }
            vm.showMD = bool;
        } else if (menu === 'MF') {
            if (bool) {
                vm.minimizeMF = false;
            }
            vm.showMF = bool;
        }
    }
    vm.minimizeModals = function (menu) {
        if (menu === 'CB') {
            vm.minimizeCB = !vm.minimizeCB;
        } else if (menu === 'OI') {
            vm.minimizeOI = !vm.minimizeOI;
        } else if (menu === 'MD') {
            if (!vm.minimizeMD) {
                vm.openDM = false;
            }
            vm.minimizeMD = !vm.minimizeMD;
        } else if (menu === 'MF') {
            vm.minimizeMF = !vm.minimizeMF;
        }
    }
    vm.changeType = function () {
        var type = angular.copy(vm.lastType);
        if (vm.variables.THDRID && vm.details.length > 0 && vm.variables.Status === 'ACTIVE') {
            AppSvc.confirmation('Warning!', 'Changing type will result to clearing the transaction details. Are you sure you want to proceed?', 'Proceed', 'Cancel', true).then(function (data) {
                if (data) {
                    CashierPaymentSvc.save({ id: vm.variables.THDRID, deleteAll: true }).then(function (response) {
                        if (response.success) {
                            vm.details = [];
                            vm.lastType = angular.copy(vm.variables.Type);
                            vm.variables.TotalAmountPayable = 0;
                            AppSvc.showSwal('Success', response.message, 'success');
                            vm.saveHeader();
                        } else {
                            vm.variables.Type = angular.copy(type);
                            AppSvc.showSwal('Ooops', "Something went wrong", 'danger');
                        }
                        LOADING.classList.remove("open");
                    })
                } else {
                    vm.variables.Type = angular.copy(type);
                }
            })
        } else if (vm.variables.THDRID && vm.details.length < 1 && vm.variables.Status === 'ACTIVE') {
            vm.saveHeader();
        }
    }
    // HEADER
    vm.cancelTrans = function () {
        if (!vm.variables.THDRID) {
            return AppSvc.showSwal('Ooops', 'This transaction is not yet saved. Cancel Denied', 'error');
        }
        if (vm.variables.Status !== 'ACTIVE') {
            return AppSvc.showSwal('Ooops', `This transaction is already ${vm.variables.Status}. Cancel Denied!`, 'error');
        }
        AppSvc.confirmation('Warning!', 'Are you sure to Cancel this transaction?', 'Yes', 'No', true).then(function (data) {
            if (data) {
                CashierPaymentSvc.save({ cancel: true, id: vm.variables.THDRID }).then(function (response) {
                    if (response.success) {
                        vm.variables.Status = 'CANCELLED';
                        AppSvc.showSwal('Success', response.message, 'success');
                    } else {
                        AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                })
            }
        })
    }
    vm.saveHeader = function () {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Saving Failed!', 'error');
        }
        if (vm.variables.IsMember === 'YES' && !vm.variables.MemberID_link) {
            return AppSvc.showSwal('Confirmation', 'Select Member to Proceed', 'warning');
        }
        LOADING.classList.add("open");
        var data = angular.copy(vm.variables);
        data.TDate = AppSvc.getDate(vm.variables.TDate);
        data.header = true;
        CashierPaymentSvc.save(data).then(function (response) {
            if (response.success) {
                if (response.id) {
                    vm.variables.THDRID = response.id;
                    vm.getUnpaidMonthlyDues(vm.variables.Property_IDLink);
                    vm.getUnpaidMembershipFees(vm.variables.Property_IDLink);
                }
                vm.calculateRates();
                vm.variables.AcknowledgementFormNo = response.series;
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
            }
            vm.variables.AcknowledgementFormNo = response.series;
            LOADING.classList.remove("open");
        })
    }
    vm.calculateRates = function () {
        var rate = filter('filter')(vm.lotRate, { Type: vm.variables.Category });
        if (rate.length > 0 && vm.variables.LotAreaSqM > 0) {
            vm.due.DebitAmt = filter('number')(rate[0].Rate * vm.variables.LotAreaSqM, 2);
        }
    }

    vm.searchMember = function () {
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "member_reg/property.html?v=" + VERSION,
            controllerName: "PropertyListCtrl",
            viewSize: "three-fourth",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                MASTERURL + "member_reg/property.html?v=" + VERSION,
                MASTERURL + "member_reg/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
                vm.variables.MemberID_link = data.MHOLID;
                vm.variables.Property_IDLink = data.propID;
                vm.variables.LN = data.LastName;
                vm.variables.FN = data.FirstName;
                vm.variables.MN = data.MiddleName;
                vm.variables.EXN = data.ExtName;
                var block = data.BlockNo ? 'Block ' + data.BlockNo + ' ' : '';
                var lot = data.BlockNo ? 'Lot ' + data.BlockNo + ' ' : '';
                var cluster = data.PhaseCluster ? 'Cluster ' + data.PhaseCluster + ' ' : '';
                var street = data.Street ? data.Street + ' ' : '';
                var subdivision = data.Subdivision ? data.Subdivision + ' ' : '';
                var barangay = data.Barangay ? data.Barangay + ' ' : '';
                var city = data.City ? data.City + ' ' : '';
                var province = data.Province ? data.Province + ' ' : '';
                vm.variables.Address = block + lot + cluster + street + subdivision + barangay + city + province;
                vm.variables.Category = data.Category;
                vm.variables.LotAreaSqM = data.LotAreaSqM;
                var FName = data.FirstName ? data.FirstName + ' ' : '';
                var LName = data.LastName ? data.LastName + ' ' : '';
                var MName = data.MiddleName ? data.MiddleName + ' ' : '';
                var ExtName = data.EXN ? data.EXN : '';
                vm.variables.FullName = FName + LName + MName + ExtName;
            }
        });
    }
    vm.changeMember = function () {
        vm.variables.Address = '';
        vm.variables.Category = '';
        vm.variables.LotAreaSqM = '';
        vm.variables.MemberID_link = '';
        vm.variables.LN = '';
        vm.variables.FN = '';
        vm.variables.MN = '';
        vm.variables.EXN = '';
    }
    vm.searchHeader = function () {
        var options = {
            data: '',
            animation: true,
            templateUrl: TRANSURL + "cashiering_payment/header.html?v=" + VERSION,
            controllerName: "CPHeaderCtrl",
            viewSize: "md",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                TRANSURL + "cashiering_payment/header.html?v=" + VERSION,
                TRANSURL + "cashiering_payment/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
                vm.variables = angular.copy(data);
                vm.calculateRates()
                vm.getUnpaidMonthlyDues(data.Property_IDLink);
                vm.getUnpaidMembershipFees(data.Property_IDLink);
                vm.getDetails(vm.variables.THDRID);
                vm.getPayments(vm.variables.THDRID);
                vm.lastType = angular.copy(data.Type);
                var FName = data.FN ? data.FN + ' ' : '';
                var LName = data.LN ? data.LN + ' ' : '';
                var MName = data.MN ? data.MN + ' ' : '';
                var ExtName = data.EXN ? data.EXN : '';
                vm.variables.FullName = FName + LName + MName + ExtName;
                if (vm.variables.SpecialTransaction === 'Y') {
                    vm.specialTrans = true;
                } else {
                    vm.specialTrans = false;
                }
                vm.showModals('CB', false);
                vm.showModals('OI', false);
                vm.showModals('MD', false);
                vm.showModals('MF', false);
            }
        });
    }
    vm.getDetails = function (id) {
        LOADING.classList.add('open');
        CashierPaymentSvc.get({ details: true, id: id }).then(function (response) {
            if (response.message) {
                vm.details = [];
            } else {
                vm.details = response;
            }
            vm.calculateDetails();
            LOADING.classList.remove('open');
        })
    }
    vm.deleteDetails = function () {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Cannot delete details', 'error');
        }
        var l = vm.transGridApi.selection.getSelectedRows();
        if (l.length < 1) {
            return AppSvc.showSwal('Confirmation', 'Select atleast 1 from the transaction details', 'warning');
        }
        AppSvc.confirmation('Are You Sure?', 'Do you want to proceed deleting this details?', 'Yes', 'No', true).then(function (data) {
            if (data) {
                var ids = [];
                l.forEach(function (item) {
                    ids.push(item.TDTLID);
                });
                CashierPaymentSvc.save({ multipleDel: true, ids: ids }).then(function (response) {
                    if (response.success) {
                        vm.getDetails(vm.variables.THDRID);
                        return AppSvc.showSwal('Success', response.message, 'success');
                    } else {
                        return AppSvc.showSwal('Error', 'Something went wrong', 'error');
                    }
                })
            }
        })
    }
    vm.calculateDetails = function () {
        var sumDebit = 0;
        var particulars = '';
        var remarks = '';
        var md = '';
        var TransDetails = '';
        vm.details.forEach(function (item) {
            sumDebit = sumDebit + parseFloat(item.AmountDue);
            particulars = particulars + item.AcctGroupCode + '-' + item.Particulars + ',';
            if (item.AcctSubGroup.includes('MONTHLY DUES')) {
                md = md + item.Particulars + ', ';
            } else {
                remarks = remarks + item.Particulars + ', ';
            }
        })
        if (md) {
            TransDetails = 'MONTHLY DUES FOR (' + md.replace(/,\s*$/, '') + '), ' + remarks.replace(/,\s*$/, '');
        } else {
            TransDetails = remarks;
        }
        vm.variables.RemarksReport = vm.variables.Remarks + '/' + particulars.replace(/,\s*$/, '');
        vm.variables.TotalAmountPayable = sumDebit;
        vm.variables.TransDetails = TransDetails.replace(/,\s*$/, '');
        if (vm.details.length > 1) {
            vm.variables.TransDetailsYear = vm.details[0].Year;
        }
    }
    vm.clearHeader = function () {
        vm.showCB = false;
        vm.showOI = false;
        vm.variables = {};
        vm.variables.IsMember = 'YES';
        vm.variables.TDate = filter('date')(dateNow, "MM-dd-yyyy");
        vm.variables.Status = 'ACTIVE';
        vm.variables.TotalAmountPayable = 0;
        vm.variables.TotalAmountActualPaid = 0;
        vm.variables.Type = 'Official Receipt';
        vm.variables.SpecialTransaction = 'N';
        vm.specialTrans = false;
        vm.details = [];
        vm.payments = [];
        vm.dues = [];
        vm.getORSetup(true);
    }
    // INQUIRY
    vm.inquiryGet = function () {
        if (vm.inquiry.searchBy == 1) {
            CashierInquirySvc.get({ search: vm.inquiry.searchBy, ORNo: vm.inquiry.ORNo }).then(function (response) {
                if (response.message) {
                    vm.inquiries = [];
                } else {
                    response.forEach(function (item) {
                        var FName = item.FN ? item.FN + ' ' : '';
                        var LName = item.LN ? item.LN + ' ' : '';
                        var MName = item.MN ? item.MN + ' ' : '';
                        var ExtName = item.EXN ? item.EXN : '';
                        item.FullName = FName + LName + MName + ExtName;
                    })
                    vm.inquiries = response;
                }
            })
        } else if (vm.inquiry.searchBy == 2) {
            CashierInquirySvc.get({
                search: vm.inquiry.searchBy,
                from: AppSvc.getDate(vm.inquiry.DateFrom),
                to: AppSvc.getDate(vm.inquiry.DateTo)
            }).then(function (response) {
                if (response.message) {
                    vm.inquiries = [];
                } else {
                    response.forEach(function (item) {
                        var FName = item.FN ? item.FN + ' ' : '';
                        var LName = item.LN ? item.LN + ' ' : '';
                        var MName = item.MN ? item.MN + ' ' : '';
                        var ExtName = item.EXN ? item.EXN : '';
                        item.FullName = FName + LName + MName + ExtName;
                    })
                    vm.inquiries = response;
                }
            })
        }
    }

    // MONTHLY DUES
    vm.monthlyDuesOptions = function () {
        var l = vm.monthlyGridApi.selection.getSelectedRows();
        var contextMenuData = [];
        if (l.length > 0) {
            contextMenuData.push(['<i class="fa fa-trash fa-fw"></i> Delete Selected', function () {
                vm.deleteMonthlyDues(l);
            }]);
        }
        return contextMenuData;

    }
    vm.deleteMonthlyDues = function (array) {
        var load = false;
        var ids = [];
        array.forEach(function (item) {
            if (!item.ORRefNo) {
                load = true;
            }
            ids.push(item.LID);
        })
        if (load) return AppSvc.showSwal('Ooops', 'You selected a row that cannot be deleted. Please select again', 'error');
        AppSvc.confirmation('Confirmation!', 'Are You sure you want to delete the selected Monthly Dues?', 'Yes', 'No', true).then(function (data) {
            if (data) {
                CashierPaymentSvc.save({ ids: ids, deleteMultipleMD: true }).then(function (response) {
                    if (response.success) {
                        array.forEach(function (item) {
                            vm.dues.splice(vm.dues.indexOf(item), 1);
                        })
                        AppSvc.showSwal('Success', response.message, 'success');
                    } else {
                        AppSvc.showSwal('Error', response.message, 'error');
                    }
                })
            }
        })
    }
    vm.exitSpecialTrans = function () {
        if (vm.variables.Status !== 'ACTIVE') {
            return AppSvc.showSwal('Ooops', `This transaction is already ${vm.variables.Status}. Action Denied.`, 'error');
        }
        AppSvc.confirmation('Confirmation', 'Are You sure you want to exit this special transaction? Confirming this means the transaction details will be deleted.', 'Confirm', 'Cancel', true).then(function (data) {
            if (data) {
                vm.specialTrans = false;
                vm.variables.SpecialTransaction = 'N';
                CashierPaymentSvc.save({ id: vm.variables.THDRID, deleteAll: true }).then(function (response) {
                    if (response.success) {
                        vm.saveHeader();
                        vm.getDetails(vm.variables.THDRID);
                    }
                })
            }
        })
    }
    vm.discount = function () {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Cannot continue action', 'error');
        }
        AppSvc.confirmation('Note!', 'Confirming this transaction will delete the other details of this transaction and cannot add more details', 'Confirm', 'Cancel', true).then(function (data) {
            if (data) {
                var year = dateNow.getFullYear() + 1;
                LOADING.classList.add("open");
                var itemCount = 0;
                CashierPaymentSvc.save({ id: vm.variables.THDRID, deleteAll: true }).then(function (response) {
                    if (response.success) {
                        vm.months.forEach(function (item) {
                            var data = {
                                THDR_IDLink: vm.variables.THDRID,
                                AcctCodeLink: vm.COAMD.ADID,
                                AcctDetails: vm.COAMD.ChAcctName,
                                AcctSubGroup: vm.COAMD.ChAcctGroupCodeName,
                                AcctGroupCode: vm.COAMD.ChAcctCode,
                                Gross: AppSvc.getAmount(vm.due.DebitAmt),
                                Discount: 0,
                                AmountDue: AppSvc.getAmount(vm.due.DebitAmt),
                                Year: year,
                                Particulars: item.month + ' ' + year,
                                Month: item.number,
                                Remarks: 'MONTHLY DUE FOR ' + item.month + ' ' + year,
                                detail: true
                            }
                            if (item.month === 'December') {
                                data.Discount = AppSvc.getAmount(vm.due.DebitAmt);
                                data.AmountDue = 0;
                            }
                            CashierPaymentSvc.save(data).then(function (response) {
                                if (response.success) {
                                    data = {};
                                    itemCount = itemCount + 1;
                                } else {
                                    return AppSvc.showSwal('Ooops', "Something went wrong", 'error');
                                }
                                if (itemCount >= 12) {
                                    vm.specialTrans = true;
                                    vm.showMD = false;
                                    vm.showMF = false;
                                    vm.showOI = false;
                                    vm.showCB = false;
                                    vm.variables.SpecialTransaction = 'Y';
                                    vm.saveHeader();
                                    vm.getDetails(vm.variables.THDRID);
                                    LOADING.classList.remove("open");
                                }
                            })
                        })
                    } else {
                        AppSvc.showSwal('Ooops', "Something went wrong", 'danger');
                        LOADING.classList.remove("open");
                    }
                })
            }
        })
    }
    vm.getUnpaidMonthlyDues = function (id) {
        LOADING.classList.add("open");
        CashierPaymentSvc.get({ monthlyDues: true, id: id }).then(function (response) {
            if (response.message) {
                vm.dues = [];
            } else {
                response.forEach(function (item) {
                    var month = new Date(item.xMonth + '/01/2012');
                    item.Month = vm.months[month.getMonth()].month;
                    item.DebitAmt = item.TotalBalance;
                })
                vm.dues = response;
            }
            LOADING.classList.remove("open");
        })
    }
    vm.saveDue = function () {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Cannot append more', 'error');
        }
        LOADING.classList.add("open");
        var data = angular.copy(vm.due);
        data.MemberID_Link = angular.copy(vm.variables.MemberID_link);
        var l = filter('filter')(vm.months, { number: vm.due.xMonth }, true);
        data.Month = l[0].month;
        data.Particulars = l[0].month + ' ' + data.xYear;
        data.DebitAmt = AppSvc.getAmount(vm.due.DebitAmt);
        data.ORRefNo = angular.copy(vm.variables.ORNo);
        data.Property_IDLink = angular.copy(vm.variables.Property_IDLink);
        data.monthlydues = true;
        vm.lastType = angular.copy(data.Type);
        CashierPaymentSvc.save(data).then(function (response) {
            if (response.success) {
                if (response.id) {
                    data.LID = response.id;
                    vm.dues.push(data);
                }
                vm.clearDues();
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                if (response.exist) {
                    AppSvc.showSwal('Ooops', response.message, 'warning');
                } else {
                    AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
            }
            LOADING.classList.remove("open");
        })
    }
    vm.clearDues = function () {
        vm.due = {};
        vm.calculateRates();
    }

    // MEMBERSHIP FEE
    vm.getUnpaidMembershipFees = function (id) {
        LOADING.classList.add("open");
        CashierPaymentSvc.get({ membership: true, id: id }).then(function (response) {
            if (response.message) {
                vm.fees = [];
            } else {
                response.forEach(function (item) {
                    item.DebitAmt = item.TotalBalance;
                })
                vm.fees = response;
            }
            LOADING.classList.remove("open");
        })
    }
    vm.saveFee = function () {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Cannot append more', 'error');
        }
        LOADING.classList.add("open");
        var data = angular.copy(vm.fee);
        data.MemberID_Link = angular.copy(vm.variables.MemberID_link);
        data.Property_IDLink = angular.copy(vm.variables.Property_IDLink);
        data.ORRefNo = angular.copy(vm.variables.ORNo);
        data.Particulars = 'Annual Fee';
        data.DebitAmt = AppSvc.getAmount(vm.fee.DebitAmt);
        data.membership = true;
        CashierPaymentSvc.save(data).then(function (response) {
            if (response.success) {
                if (response.id) {
                    data.LID = response.id;
                    vm.fees.push(data);
                }
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                if (response.exist) {
                    AppSvc.showSwal('Ooops', response.message, 'warning');
                } else {
                    AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
            }
            LOADING.classList.remove("open");
        })
    }
    vm.clearFees = function () {
        vm.fee = {};
        vm.fee.DebitAmt = vm.Fee;
    }
    // APPENDING TO DETAILS
    vm.append = function (number) {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Cannot append more', 'error');
        }
        if (number == 1) {
            var rows = vm.monthlyGridApi.selection.getSelectedRows();
            if (rows.length < 1) {
                return AppSvc.showSwal('Confirmation', 'Select atleast 1 in the list', 'warning');
            }
            if (!vm.COAMD.ChAcctCode) {
                return AppSvc.showSwal('Error', "Can't Proceed, Monthly Due From Chart of Account doesn't exist", 'error');
            }
            rows.forEach(function (item) {
                item.AcctCodeLink = vm.COAMD.ADID;
                item.AcctDetails = vm.COAMD.ChAcctName;
                item.AcctSubGroup = vm.COAMD.ChAcctGroupCodeName;
                item.AcctGroupCode = vm.COAMD.ChAcctCode;
                item.Gross = AppSvc.getAmount(vm.due.DebitAmt)
            })
            LOADING.classList.add("open");
            CashierPaymentSvc.save({ data: rows, id: vm.variables.THDRID, appendMD: true }).then(function (response) {
                if (response.success) {
                    vm.changeBox('Header', 1);
                    vm.getDetails(vm.variables.THDRID);
                    AppSvc.showSwal('Success', response.message, 'success');
                } else {
                    if (response.exist) {
                        AppSvc.showSwal('Ooops', response.message, 'warning');
                    } else {
                        AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                }
                LOADING.classList.remove("open");
            })
        } else if (number == 2) {
            var rows = vm.annualGridApi.selection.getSelectedRows();
            if (rows.length < 1) {
                return AppSvc.showSwal('Confirmation', 'Select atleast 1 in the list', 'warning');
            }
            rows.forEach(function (item) {
                item.AcctCodeLink = vm.COAMF.ADID;
                item.AcctDetails = vm.COAMF.ChAcctName;
                item.AcctSubGroup = vm.COAMF.ChAcctGroupCodeName;
                item.AcctGroupCode = vm.COAMF.ChAcctCode;
                item.Gross = AppSvc.getAmount(vm.fee.DebitAmt)
            })
            LOADING.classList.add("open");
            CashierPaymentSvc.save({ data: rows, id: vm.variables.THDRID, appendMF: true }).then(function (response) {
                if (response.success) {
                    vm.changeBox('Header', 1);
                    vm.getDetails(vm.variables.THDRID);
                    AppSvc.showSwal('Success', response.message, 'success');
                } else {
                    if (response.exist) {
                        AppSvc.showSwal('Ooops', response.message, 'warning');
                    } else {
                        AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                }
                LOADING.classList.remove("open");
            })
        } else if (number == 3) {
            var data = angular.copy(vm.construction);
            data.THDR_IDLink = vm.variables.THDRID;
            data.AmountDue = AppSvc.getAmount(vm.construction.AmountDue);
            data.Gross = AppSvc.getAmount(vm.construction.AmountDue)
            data.AmtPaid = 0;
            data.detail = true;
            LOADING.classList.add("open");
            CashierPaymentSvc.save(data).then(function (response) {
                if (response.success) {
                    data.TDTLID = response.id;
                    vm.details.push(data);
                    vm.calculateDetails();
                    vm.clearBond()
                    AppSvc.showSwal('Success', response.message, 'success');
                } else {
                    AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        } else if (number == 4) {
            var data = angular.copy(vm.income);
            data.THDR_IDLink = vm.variables.THDRID;
            data.AmountDue = AppSvc.getAmount(vm.income.AmountDue);
            data.Gross = AppSvc.getAmount(vm.income.AmountDue);
            data.Explaination = data.Remarks;
            data.AmtPaid = 0;
            data.detail = true;
            LOADING.classList.add("open");
            CashierPaymentSvc.save(data).then(function (response) {
                if (response.success) {
                    data.TDTLID = response.id;
                    vm.details.push(data);
                    vm.calculateDetails();
                    vm.clearIncome()
                    AppSvc.showSwal('Success', response.message, 'success');
                } else {
                    AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
    }

    // PAYMENTS
    vm.getPayments = function (id) {
        LOADING.classList.add("open");
        CashierPaymentSvc.get({ payments: true, id: id }).then(function (response) {
            if (response.message) {
                vm.payments = [];
            } else {
                vm.payments = response;
                vm.calculatePayments();
            }
            LOADING.classList.remove("open");
        })
    }
    vm.clickPayment = function (row) {
        vm.payment = angular.copy(row);
        vm.payment.index = vm.payments.indexOf(row);
    }
    vm.savePayment = function () {
        if (vm.variables.Status === 'TENDERED') {
            return AppSvc.showSwal('Ooops', 'This transaction is already tendered. Cannot append more', 'error');
        }
        var data = angular.copy(vm.payment);
        data.TranCheckDate = AppSvc.getDate(vm.payment.TranCheckDate);
        data.AmountTender = AppSvc.getAmount(vm.payment.AmountTender);
        data.NetAmt = AppSvc.getAmount(vm.payment.AmountTender);
        data.THDRID_Link = vm.variables.THDRID;
        data.payment = true;
        LOADING.classList.add("open");
        CashierPaymentSvc.save(data).then(function (response) {
            if (response.success) {
                if (response.id) {
                    data.TPDID = response.id;
                    vm.payments.push(data);
                } else {
                    vm.payments.splice(vm.payment.index, 1, data);
                }
                vm.clearPayments();
                vm.calculatePayments();
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
            }
            LOADING.classList.remove("open");
        })
    }
    vm.deletePayment = function () {
        CashierPaymentSvc.delete(vm.payment.TPDID).then(function (response) {
            if (response.success) {
                vm.payments.splice(vm.payment.index, 1);
                vm.clearPayments();
                vm.calculatePayments();
                AppSvc.showSwal('Success', response.message, 'success');
            } else {
                AppSvc.showSwal('Error', response.message, 'error');
            }
            LOADING.classList.remove("open");
        })
    }
    vm.tenderPayment = function () {
        if (!vm.variables.THDRID) {
            return AppSvc.showSwal('Confirmation', 'No Transaction to be Tender', 'warning');
        }
        if (vm.variables.Status === 'TENDERED') {
            AppSvc.showSwal('Ooops', 'This Transaction is already Tendered. Tendering Payment Failed!', 'error');
            return vm.getChange(vm.variables);
        }
        if (vm.variables.TotalAmountActualPaid <= 0) {
            vm.changeBox('Payment', 3);
            return AppSvc.showSwal('Confirmation', 'Payments need to be greater than 0', 'warning');
        }
        if (vm.variables.SpecialTransaction === 'Y') {
            if (vm.variables.TotalAmountActualPaid < vm.variables.TotalAmountPayable) {
                return AppSvc.showSwal('Ooops', 'Not enough payment. Partial Payment is not allowed in this transaction.', 'error');
            }
        }
        AppSvc.confirmation('Are You Sure?', 'Tendering this transaction makes the transaction status to Tendered and cannot be edited.', 'Proceed', 'Cancel').then(function (data) {
            if (data) {
                LOADING.classList.add("open");
                var data = {
                    tenderPayment: true,
                    id: vm.variables.THDRID,
                    cash: vm.variables.TotalAmountActualPaid,
                    debt: vm.variables.TotalAmountPayable,
                    type: vm.variables.Type
                };
                if (vm.variables.SpecialTransaction === 'Y') {
                    delete data.tenderPayment;
                    data.tenderSpecialPayment = true;
                }
                CashierPaymentSvc.save(data).then(function (response) {
                    if (response.success) {
                        vm.variables.Status = 'TENDERED';
                        vm.getDetails(vm.variables.THDRID);
                        vm.getChange(vm.variables);
                        AppSvc.showSwal('Success', response.message, 'success');
                        vm.getPayments(vm.variables.THDRID);
                    } else {
                        AppSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                        LOADING.classList.remove("open");
                    }
                })
            }
        })
    }
    vm.getChange = function (data) {
        var options = {
            data: { variables: data, cash: vm.cashOnly, checks: vm.checkDetails, modes: vm.paymentModes, username: vm.userNam, printers: vm.printers },
            animation: true,
            templateUrl: TRANSURL + "cashiering_payment/change.html?v=" + VERSION,
            controllerName: "PaymentChangeCtrl",
            windowClass: 'confirmation-window',
            filesToLoad: [
                TRANSURL + "cashiering_payment/change.html?v=" + VERSION,
                TRANSURL + "cashiering_payment/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options);
    }
    vm.clearPayments = function () {
        vm.payment = {};
        vm.payment.Mode = 'CASH';
        vm.payment.TranCheckDate = filter('date')(dateNow, "MM-dd-yyyy");
    }
    vm.calculatePayments = function () {
        vm.cashOnly = true;
        var sum = 0;
        var modes = vm.payments.groupBy('Mode');
        var checkDetails = [];
        var paymentModes = [];
        var modesWithAmount = '';
        vm.payments.forEach(function (item) {
            sum = sum + parseFloat(item.AmountTender);
            if (item.Mode !== 'CASH') {
                checkDetails.push({ CardNo: item.CardCheckNo, Date: item.TranCheckDate, Bank: item.CardCheckBank })
                vm.cashOnly = false;
            }
        })
        for (var key in modes) {
            var total = 0;
            modes[key].forEach(function (item) {
                total = total + parseFloat(item.NetAmt);
            });
            modesWithAmount = modesWithAmount + key + '(' + filter('number')(total, 2) + '), ';
            paymentModes.push({ mode: key, total: total });
        };
        vm.variables.TotalAmountActualPaid = sum;
        vm.variables.ModesTotal = modesWithAmount.replace(/,\s*$/, '');
        vm.checkDetails = checkDetails;
        vm.paymentModes = paymentModes;
    }

    // OTHER INCOME 
    vm.searchOI = function () {
        var options = {
            data: '',
            animation: true,
            templateUrl: MASTERURL + "other_income/search.html?v=" + VERSION,
            controllerName: "BrowseOtherIncCtrl",
            viewSize: "md",
            windowClass: 'modal modal-slide-in-right',
            filesToLoad: [
                MASTERURL + "other_income/search.html?v=" + VERSION,
                MASTERURL + "other_income/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if (data) {
                vm.income.AcctCodeLink = data.ADID;
                vm.income.Particulars = data.ChAcctName;
                vm.income.AcctGroupCode = data.ChAcctCode;
                vm.income.AcctSubGroup = data.ChAcctGroupCodeName;
                vm.income.AcctDetails = data.ChAcctName;
            }
        });
    }
    vm.clearIncome = function () {
        vm.income = {};
    }

    // CONSTRUCTION BOND
    vm.clearBond = function () {
        vm.construction = {};
    }

    // PRINTING 
    vm.printReport = function () {
        if (vm.variables.Type === 'Acknowledgement Receipt') {
            var options = {
                data: { variables: vm.variables, checks: vm.checkDetails, cash: vm.cashOnly, username: vm.userName, printers: vm.printers },
                animation: true,
                templateUrl: TRANSURL + "cashiering_payment/ack_form.html?v=" + VERSION,
                controllerName: "ACKFormCtrl",
                windowClass: 'modal-print short',
                filesToLoad: [
                    TRANSURL + "cashiering_payment/ack_form.html?v=" + VERSION,
                    TRANSURL + "cashiering_payment/controller.js?v=" + VERSION
                ]
            };
        } else {
            var options = {
                data: { variables: vm.variables, checks: vm.checkDetails, modes: vm.paymentModes, username: vm.userName, printers: vm.printers },
                animation: true,
                templateUrl: TRANSURL + "cashiering_payment/or_form.html?v=" + VERSION,
                controllerName: "ORFormCtrl",
                windowClass: 'modal-print short',
                filesToLoad: [
                    TRANSURL + "cashiering_payment/or_form.html?v=" + VERSION,
                    TRANSURL + "cashiering_payment/controller.js?v=" + VERSION
                ]
            };
        }
        AppSvc.modal(options);
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
function CPHeaderCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, $filter) {
    var modal = this;
    modal.headerList = [];
    modal.filtered = [];
    modal.transGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        enableHorizontalScrollbar: false,
        columnDefs: [
            { name: 'ORNo', displayName: 'O.R/A.F No.', field: 'ORAFNo' },
            { name: 'Date', displayName: 'Date', field: 'TDate' },
        ],
        data: 'modal.filtered',
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                modal.gridClick(row.entity);
            });
        },
    };
    $ocLazyLoad
        .load([TRANSURL + 'cashiering_payment/service.js?v=' + VERSION,]).then(function (d) {
            CashierPaymentSvc = $injector.get("CashierPaymentSvc");
            modal.getHeader();
        });

    modal.getHeader = function () {
        LOADING.classList.add("open");
        CashierPaymentSvc.get({ header: true }).then(function (response) {
            if (response.message) {
                modal.headerList = [];
            } else {
                response.forEach(function (item) {
                    if (item.Type === 'Official Receipt') {
                        item.ORAFNo = item.ORNo;
                    } else {
                        item.ORAFNo = item.AcknowledgementFormNo;
                    }
                })
                modal.headerList = response;
            }
            modal.filtered = modal.headerList;
            LOADING.classList.remove("open");
        })
    }
    modal.searching = function () {
        if (!modal.search) {
            return modal.filtered = modal.headerList;
        }
        return modal.filtered = filter('filter')(modal.headerList, { ORNo: modal.search })
    }
    modal.submitSearch = function () {
        LOADING.classList.add("open");
        CashierPaymentSvc.get({ searchHeader: true }).then(function (response) {
            if (response.message) {
                modal.searchList = [];
            } else {
                modal.searchList = response;
            }
            modal.filtered = modal.searchList;
            LOADING.classList.remove("open");
        })
    }
    modal.gridClick = function (row) {
        $uibModalInstance.close(row);
    }

    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}
function ACKFormCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    modal.variables = angular.copy(data.variables);
    modal.checkDetails = angular.copy(data.checks);
    modal.cashOnly = angular.copy(data.cash);
    modal.userName = data.username;
    // modal.printers = data.printers;
    // var printer = filter('filter')(data.printers, { name: 'EPSON LQ-310' });
    // modal.printer = printer[1].name;
    var decimals = modal.variables.TotalAmountActualPaid.toString().split('.');
    var decimal = '';
    if (decimals.length > 1) {
        decimal = atemp[1] + '/100';
    } else {
        decimal = '00/100';
    }
    modal.variables.AmountInWords = AppSvc.convertNumberToWords(modal.variables.TotalAmountActualPaid) + ' and ' + decimal + ' Pesos Only';
    $ocLazyLoad.load([
        APPURL + 'app.service.js?v=' + VERSION,
    ]).then(function (d) {
        AppSvc = $injector.get('AppSvc');
        modal.getUserCredentials();
    });
    modal.getUserCredentials = function () {
        LOADING.classList.add("open");
        AppSvc.get().then(function (response) {
            LOADING.classList.remove("open");
            modal.print();
        });
    };
    modal.print = function () {
        printElement(document.getElementById("print-ack"));
        window.print();
    }
    function printElement(elem, append, delimiter) {
        var domClone = elem.cloneNode(true);
        var $printSection = document.getElementById("printSection");

        if (!$printSection) {
            var $printSection = document.createElement("div");
            $printSection.id = "printSection";
            document.body.appendChild($printSection);
        }

        if (append !== true) {
            $printSection.innerHTML = "";
        }

        else if (append === true) {
            if (typeof (delimiter) === "string") {
                $printSection.innerHTML += delimiter;
            }
            else if (typeof (delimiter) === "object") {
                $printSection.appendChlid(delimiter);
            }
        }
        $printSection.appendChild(domClone);
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}
function ORFormCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
    var modal = this;
    var modes = angular.copy(data.modes);
    modal.cash = {};
    modal.cash.total = 0;
    modal.variables = angular.copy(data.variables);
    modal.checkDetails = angular.copy(data.checks);
    var cash = filter('filter')(modes, { mode: 'CASH' }, true);
    if (cash.length > 0) {
        var l = cash[0];
        modal.cash = l;
        modes.splice(modes.indexOf(l), 1);
    }
    var sum = 0;
    modes.forEach(function (item) {
        sum = sum + parseFloat(item.total);
    })
    modal.checkModes = angular.copy(modes);
    modal.totalCheck = sum == 0 ? '-' : filter('number')(sum, 2);
    modal.TotalAmount = sum + modal.cash.total;
    var decimals = modal.TotalAmount.toString().split('.');
    var decimal = '';
    if (decimals.length > 1) {
        decimal = atemp[1] + '/100';
    } else {
        decimal = '00/100';
    }
    modal.variables.AmountInWords = AppSvc.convertNumberToWords(modal.TotalAmount) + ' and ' + decimal + ' Pesos Only';
    modal.Details = modal.variables.SpecialTransaction === 'Y' ? 'Advance 1 Year Payment for the Monthly Dues. From January to December ' + modal.variables.TransDetailsYear : modal.variables.TransDetails;
    if (modal.variables.SpecialTransaction === 'Y') {
        modal.TotalAmount = modal.variables.TotalAmountPayable;
        modal.one = parseFloat(modal.TotalAmount) / 11;
        modal.twelve = parseFloat(modal.TotalAmount) + parseFloat(modal.one);
        modal.variables.AmountInWords = AppSvc.convertNumberToWords(modal.TotalAmount) + ' and ' + decimal + ' Pesos Only';
    }
    modal.userName = data.username;
    $ocLazyLoad.load([
        APPURL + 'app.service.js?v=' + VERSION,
    ]).then(function (d) {
        AppSvc = $injector.get('AppSvc');
        modal.getUserCredentials();
    });
    modal.getUserCredentials = function () {
        AppSvc.get().then(function (response) {
            modal.print();
        });
    };
    modal.print = function () {
        AppSvc.printElement(document.getElementById("print-ack"));
        window.print();
    }
    modal.close = function () {
        $uibModalInstance.dismiss('cancel');
    }
}
function PaymentChangeCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance) {
    var modal = this;
    modal.variables = angular.copy(data.variables);
    modal.checks = angular.copy(data.checks);
    modal.cash = angular.copy(data.cash);
    modal.modes = angular.copy(data.modes);
    modal.userName = data.username;
    modal.printers = data.printers;
    if (data.variables.TotalAmountActualPaid < data.variables.TotalAmountPayable) {
        modal.variables.PaymentType = 'Partial Payment';
        modal.variables.Change = 0;
    } else {
        modal.variables.PaymentType = 'Amount Paid';
        modal.variables.Change = parseFloat(data.variables.TotalAmountActualPaid) - parseFloat(data.variables.TotalAmountPayable);
    }

    modal.print = function () {
        if (modal.variables.Type === 'Acknowledgement Receipt') {
            var options = {
                data: { variables: modal.variables, checks: modal.checks, cash: modal.cash, username: modal.userName, printers: modal.printers },
                animation: true,
                templateUrl: TRANSURL + "cashiering_payment/ack_form.html?v=" + VERSION,
                controllerName: "ACKFormCtrl",
                windowClass: 'modal-print short',
                filesToLoad: [
                    TRANSURL + "cashiering_payment/ack_form.html?v=" + VERSION,
                    TRANSURL + "cashiering_payment/controller.js?v=" + VERSION
                ]
            };
        } else {
            var options = {
                data: { variables: modal.variables, checks: modal.checks, modes: modal.modes, username: modal.userName, printers: modal.printers },
                animation: true,
                templateUrl: TRANSURL + "cashiering_payment/or_form.html?v=" + VERSION,
                controllerName: "ORFormCtrl",
                windowClass: 'modal-print short',
                filesToLoad: [
                    TRANSURL + "cashiering_payment/or_form.html?v=" + VERSION,
                    TRANSURL + "cashiering_payment/controller.js?v=" + VERSION
                ]
            };
        }
        AppSvc.modal(options);
    }

    modal.close = function (bool) {
        $uibModalInstance.close(bool);
    }
}