//main.js
angular.module('app')
	.controller('RisCtrl', RisCtrl)
    .controller('BrowseRisCtrl', BrowseRisCtrl)
    .controller('BrowsePropertyCtrl', BrowsePropertyCtrl)
    RisCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];
    BrowseRisCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    BrowsePropertyCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function RisCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
	vm.ArrayList = [];
    vm.SeriesList = [];
    vm.filtered = [];
	vm.variables = {};
    vm.variablesdtl = {};
    vm.search;
    vm.SeriesList = 1;
    vm.variables.ris_date = filter('date')(new Date(), "MM/dd/yyyy");
    vm.variables.from = filter('date')(new Date(), "MM/dd/yyyy");
    vm.variables.to = filter('date')(new Date(), "MM/dd/yyyy");
    vm.ris_date = filter('date')(new Date(), "yyyy-MM");
    vm.variables.status = "PENDING";
    vm.aa = false;
	$ocLazyLoad
		.load([
            TRANSURL + 'ris/service.js?v=' + VERSION,
            APPURL + 'app.service.js?v=' + VERSION,
            TRANSURL + 'slc_entry/service.js?v=' + VERSION,       
    ]).then(function (d) {
        RisSvc = $injector.get("RisSvc");
        SeriesRisSvc = $injector.get("SeriesRisSvc");
        GetCenterInfo = $injector.get("GetCenterInfo");
        RisDtlSvc = $injector.get("RisDtlSvc");
        AppSvc = $injector.get('AppSvc');
        PrintRisSvc = $injector.get('PrintRisSvc');
        PrintRsmiSvc = $injector.get('PrintRsmiSvc');
        ApprovedRisSvc = $injector.get('ApprovedRisSvc');
        vm.getUserCredentials();
       
    });

    function barcodeGen(data) {
            JsBarcode("#barcode", data, {
                background : '#fff',
                color : '#000',
                hieght : 100, 
                displayValue : false
            });
    }

    vm.typeGrid = {
        enableRowSelection: true,
        enableCellEdit: false,
        enableColumnMenus: false,
        modifierKeysToMultiSelect: true,
        enableRowHeaderSelection: false,
        columnDefs: [
            { name: "Stock#", field: "property_no" },
            { name: "Item", field: "item_name" },
            { name: "Description", field: "description", width: 800},
        ],
        data: "vm.filtered",
        onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged(null, function (row) {
                vm.clickRow(row.entity);
            });
        }
    };

    

    vm.getCenterInfo = function (id) {
        LOADING.classList.add("open");
        GetCenterInfo.get({id:id}).then(function (response) {
            if(response.message){
                vm.variables.center_fname = "";
            }
            else{
                vm.variables.center_fname = response[0].center_fname;
            }
            // console.log(vm.variables.center_fname);
            LOADING.classList.remove("open");
        })
    }


    vm.openCenter = function (data) {
        console.log(vm.level);
        if(vm.level === "SUPPLY"){
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                    controllerName: "BrowseROcentersCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        MASTERURL + "center_list/search.html?v=" + VERSION,
                        TRANSURL + "slc_entry/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variables.center_id = data.center_id;
                        vm.variables.center_idlink = data.center_id;
                        vm.variables.center_name = data.center_name;
                        vm.variables.division_unit = data.center_name;
                        vm.variables.center_fname = data.center_fname;
                        vm.variables.subadmin_access = data.subadmin_access;
                    }
                });
            }
            else if(vm.level === "ADMIN"){
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                    controllerName: "BrowseCenterCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        MASTERURL + "center_list/search.html?v=" + VERSION,
                        MASTERURL + "center_list/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variables.center_id = data.center_id;
                        vm.variables.center_idlink = data.center_id;
                        vm.variables.center_name = data.center_name;
                        vm.variables.division_unit = data.center_name;
                        vm.variables.center_fname = data.center_fname;
                        vm.variables.subadmin_access = data.subadmin_access;
                    }
                });
            }
            else if(vm.level === "SCHEMA ADMIN"){
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "center_list/search.html?v=" + VERSION,
                    controllerName: "BrowseCenterCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-full',
                    filesToLoad: [
                        MASTERURL + "center_list/search.html?v=" + VERSION,
                        MASTERURL + "center_list/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    if(data){
                        // vm.variableSub.subacct_id = data.subacct_id;
                        vm.variables.center_id = data.center_id;
                        vm.variables.center_idlink = data.center_id;
                        vm.variables.center_name = data.center_name;
                        vm.variables.division_unit = data.center_name;
                        vm.variables.center_fname = data.center_fname;
                        vm.variables.subadmin_access = data.subadmin_access;
                    }
                });
            }
            else{
                 RisDtlSvc.showSwal('Ooops', "You don't have access to this button.", 'warning');
                vm.variables.division_unit = vm.variables.center_name;
            }
            
        } 

    vm.getUserCredentials = function () {
        LOADING.classList.add("open");
        AppSvc.get().then(function (response) {
            
            if (response) {
                vm.userName = response.record.user;
                vm.level = response.record.level;
                vm.pic = response.record.pic ? response.record.pic : 'assets/images/default.jpg';
                vm.variables.center_name = response.record.center_name;
                vm.variables.center_idlink = response.record.center_idlink;
                vm.variables.center_id = response.record.center_idlink;
                vm.center_idlink = response.record.center_idlink;
                // vm.getMenus();
                vm.getCenterInfo(vm.variables.center_idlink);
                vm.getSeries();
                if(vm.level === "SUPPLY" || vm.level === "ADMIN" || vm.level === "SCHEMA ADMIN"){
                    vm.hide = false;
                    vm.aa = false;
                }
                else if(vm.level == "AA"){
                    vm.aa = true;
                }
                else{
                    vm.variables.division_unit = vm.variables.center_name;
                    vm.hide = true;
                }
            } else {
                // vm.logout();
            }
            
        })
        LOADING.classList.remove("open");
    };

    vm.openRis = function (data) {
        vm.clearFunction();
        vm.filtered = [];
        var options = {
            data: [vm.center_idlink,vm.level],
            animation: true,
            templateUrl: TRANSURL + "ris/search.html?v=" + VERSION,
            controllerName: "BrowseRisCtrl",
            viewSize: "lg",
            windowClass: 'modal modal-slide-in-full',
            filesToLoad: [
                TRANSURL + "ris/search.html?v=" + VERSION,
                TRANSURL + "ris/controller.js?v=" + VERSION
            ]
        };
        AppSvc.modal(options).then(function (data) {
            if(data){
                vm.variables.ris_idhdr = data.ris_idhdr;
                vm.variables.ris_no = data.ris_no;
                vm.variables.responsibility_center = data.responsibility_center;
                vm.variables.status	= data.status;
                vm.variables.center_name = data.center_name;
                vm.variables.center_idlink = data.center_idlink;
                vm.variables.ris_date = getDate(data.ris_date);
                vm.variables.center_fname = data.center_fname;
                vm.variables.purpose = data.purpose;
            }
            if(vm.variables.ris_idhdr){
                vm.getRisList(vm.variables.ris_idhdr);
            }
            
        });
    } 

    vm.printRis = function () {
        if(!vm.variables.ris_idhdr){
            RisDtlSvc.showSwal('Ooops', "Choose a RIS first to proceed.", 'warning');
        }
        else if(!vm.variables.preparedby){
            RisDtlSvc.showSwal('Ooops', "Choose a requested by to proceed", 'warning');
        }
        else if(!vm.variables.approvedby){
            RisDtlSvc.showSwal('Ooops', "Choose an approved by to proceed", 'warning');
        }
        else{
            LOADING.classList.add("open");
            PrintRisSvc.save({id: vm.variables.ris_idhdr}).then(function (response) {
                window.open(
                      "report/ris_request?id=" + vm.variables.ris_idhdr + "&ris=" + vm.variables.ris_no + "&responsibility_center=" + 
                      vm.variables.responsibility_center + "&status=" + vm.variables.status + "&center_name=" + vm.variables.center_name +
                      "&center_idlink=" + vm.variables.center_idlink + "&ris_date=" + vm.variables.ris_date + "&center_fname=" +
                       vm.variables.center_fname + "&purpose=" + vm.variables.purpose + "&requestedby=" + vm.variables.preparedby +
                       "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby +
                       "&desig2=" + vm.variables.desig2
                    );

                window.open(
                      "report/ris_request/iso_ris?id=" + vm.variables.ris_idhdr + "&ris=" + vm.variables.ris_no + "&responsibility_center=" + 
                      vm.variables.responsibility_center + "&status=" + vm.variables.status + "&center_name=" + vm.variables.center_name +
                      "&center_idlink=" + vm.variables.center_idlink + "&ris_date=" + vm.variables.ris_date + "&center_fname=" +
                       vm.variables.center_fname + "&purpose=" + vm.variables.purpose + "&requestedby=" + vm.variables.preparedby +
                       "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby +
                       "&desig2=" + vm.variables.desig2
                    );
            LOADING.classList.remove("open");
            }); 
        }
    }

    vm.printRsmi = function (type) {
        LOADING.classList.add("open");
        vm.variables.from = getDate(vm.variables.from);
        vm.variables.to = getDate(vm.variables.to);
            window.open(
                "report/rsmi_report?id=" + vm.variables.center_idlink + "&responsibility_center=" + vm.variables.responsibility_center + 
                "&from=" + vm.variables.from + "&to=" + vm.variables.to  + "&status=" + vm.variables.status + 
                "&center_name=" + vm.variables.center_name + "&center_idlink=" + vm.variables.center_idlink +
                "&ris_date=" + vm.variables.ris_date + "&center_fname=" + vm.variables.center_fname +
                "&purpose=" + vm.variables.purpose + "&requestedby=" + vm.variables.preparedby +
                "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby + "&desig2=" + vm.variables.desig2  + "&account_type=" + type
              );
          LOADING.classList.remove("open");
    }

    vm.printEntireRsmi = function (type) {
        LOADING.classList.add("open");
        vm.variables.from = getDate(vm.variables.from);
        vm.variables.to = getDate(vm.variables.to);
            window.open(
                "report/rsmi_report/entire?id=" + vm.variables.center_idlink + "&responsibility_center=" + vm.variables.responsibility_center + 
                "&from=" + vm.variables.from + "&to=" + vm.variables.to  + "&status=" + vm.variables.status + 
                "&center_name=" + vm.variables.center_name + "&center_idlink=" + vm.variables.center_idlink +
                "&ris_date=" + vm.variables.ris_date + "&center_fname=" + vm.variables.center_fname +
                "&purpose=" + vm.variables.purpose + "&requestedby=" + vm.variables.preparedby +
                "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby + "&desig2=" + vm.variables.desig2  + "&account_type=" + type
              );
          LOADING.classList.remove("open");
    }

    vm.printDistribution = function () {
        if(!vm.variables.ris_idhdr){
            RisDtlSvc.showSwal('Ooops', "Choose a RIS first to proceed.", 'warning');
        }
        else if(!vm.variables.preparedby){
            RisDtlSvc.showSwal('Ooops', "Choose a requested by to proceed", 'warning');
        }
        else if(!vm.variables.approvedby){
            RisDtlSvc.showSwal('Ooops', "Choose an approved by to proceed", 'warning');
        }
        else{
            LOADING.classList.add("open");
            PrintRisSvc.save({id: vm.variables.ris_idhdr}).then(function (response) {
                window.open(
                      "report/distribution?id=" + vm.variables.ris_idhdr + "&ris=" + vm.variables.ris_no + "&responsibility_center=" + 
                      vm.variables.responsibility_center + "&status=" + vm.variables.status + "&center_name=" + vm.variables.center_name +
                      "&center_idlink=" + vm.variables.center_idlink + "&ris_date=" + vm.variables.ris_date + "&center_fname=" +
                       vm.variables.center_fname + "&purpose=" + vm.variables.purpose + "&requestedby=" + vm.variables.preparedby +
                       "&desig1=" + vm.variables.desig1 + "&approvedby=" + vm.variables.approvedby +
                       "&desig2=" + vm.variables.desig2
                    );
            LOADING.classList.remove("open");
            }); 
        }
        
    }

    vm.openSignatory = function (data) {
        if(data == 1){
            var options = {
                data: '',
                animation: true,
                templateUrl: ADMINURL + "signatory_list/search.html?v=" + VERSION,
                controllerName: "BrowseSignatoryCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    ADMINURL + "signatory_list/search.html?v=" + VERSION,
                    ADMINURL + "signatory_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    // vm.variableSub.subacct_id = data.subacct_id;
                    vm.variables.preparedby = data.Signature;
                    vm.variables.desig1 = data.Designation;
                }
            });
        }
        else{
            var options = {
                data: '',
                animation: true,
                templateUrl: ADMINURL + "signatory_list/search.html?v=" + VERSION,
                controllerName: "BrowseSignatoryCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    ADMINURL + "signatory_list/search.html?v=" + VERSION,
                    ADMINURL + "signatory_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    // vm.variableSub.subacct_id = data.subacct_id;
                    vm.variables.approvedby = data.Signature;
                    vm.variables.desig2 = data.Designation;
                }
            });
        }
    } 

    vm.openPodtl = function (data) {
        if(!vm.variables.ris_idhdr){
            RisDtlSvc.showSwal('Ooops', "Choose a RIS first to proceed.", 'warning');
        }
        else{
                var options = {
                data: vm.variables.center_idlink,
                animation: true,
                templateUrl: TRANSURL + "ris/search_property.html?v=" + VERSION,
                controllerName: "BrowsePropertyCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-full',
                filesToLoad: [
                    TRANSURL + "ris/search_property.html?v=" + VERSION,
                    TRANSURL + "ris/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                console.log(data);
                if(data){
                    vm.variablesdtl.item_name = data.item_name;
                    vm.variablesdtl.description = data.item_description;
                    vm.variablesdtl.podtl_id = data.podtl_idlink;
                    vm.variablesdtl.po_id = data.pohdr_idlink;
                    vm.variablesdtl.po_num = data.item_code;
                    vm.variablesdtl.center_idlink = data.center_idlink;
                    vm.variablesdtl.center_name = data.center_name;
                    vm.variablesdtl.property_no = data.item_code;
                    vm.variablesdtl.unit = data.unit_name;
                    vm.variablesdtl.total_remaining = data.total_remaining;
                }
                console.log(vm.variablesdtl);
            });
        }
        
    } 

    vm.clickRow = function (x) {
        vm.variablesdtl = {
            ris_dtl_id: x.ris_dtl_id,
            ris_hdridlink: x.ris_hdridlink,
            po_id: x.po_id,
            podtl_id: x.podtl_id,
            item_name: x.item_name,
            description: x.description,
            qty: x.qty,
            center_idlink: x.center_idlink,
            center_name: x.center_name,
            property_no: x.property_no,
            purpose: x.purpose,
            po_num: x.po_num,
            unit: x.unit,
            unit_cost: x.unit_cost,
            office: x.office,
            office_code: x.office_code,
            office_idlink: x.office_idlink,
            total_remaining: x.total_remaining,
            index: vm.filtered.indexOf(x)
        };
        console.log(vm.variablesdtl);
        // console.log(vm.variablesdtl);
        barcodeGen(vm.variablesdtl.property_no);
    }

    function pad(number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
    function getDate(inputDate) {
        var dt = new Date(inputDate);
        var dtString = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
        return dtString;
    }


    vm.getSeries = function () {
        LOADING.classList.add("open");
        SeriesRisSvc.get().then(function (response) {
            if (response.message) {
                vm.SeriesList = 1;
            } else {
                vm.SeriesList = response[0].id;
                vm.series = parseInt(vm.SeriesList) + 1;
                vm.variables.ris_no = vm.ris_date + "-" + vm.series + "-" + vm.variables.center_name;
            }
            LOADING.classList.remove("open");
        })
    }
    
    vm.getRisList = function (id) {
        LOADING.classList.add("open");
        RisDtlSvc.get({id:id}).then(function (response) {
            if (response.message) {
                vm.ArrayList = [];
            } else {
                vm.ArrayList = response;
            }
            vm.filtered = vm.ArrayList;
            LOADING.classList.remove("open");
        })
    }

    vm.approved = function () {
        LOADING.classList.add("open");
        // vm.variables.id = vm.series;
        vm.variables.status = "APPROVED";
        vm.variables.ris_date = getDate(vm.variables.ris_date);
        if(!vm.variables.ris_idhdr){
            RisSvc.showSwal('Warning', "Please choose a RIS first.", 'warning');
        }
        else if(vm.filtered.length <= 0){
            RisSvc.showSwal('Warning', "RIS is empty.", 'warning');
        }
        else if(vm.variables.status == "APPROVED"){
            RisSvc.showSwal('Warning', "RIS Already approved", 'warning');
        }
        else{
            ApprovedRisSvc.save({data:[vm.ArrayList], ris:vm.variables.ris_no, date:vm.variables.ris_date, hdr:vm.variables.ris_idhdr, remain:vm.variablesdtl.total_remaining}).then(function (response) {
            })
            RisSvc.showSwal('Success', "Successfully deducted to the inventory.", 'success');
        }
        LOADING.classList.remove("open");
    }

    vm.save = function () {
        vm.variables.id = vm.series;
        vm.variables.ris_date = getDate(vm.variables.ris_date);
        if(vm.variables.status == "APPROVED"){
            RisSvc.showSwal('Warning', "RIS Already approved", 'warning');
        }
        else{
            LOADING.classList.add("open");
            RisSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.ris_idhdr = response.id;
                        // vm.ArrayList.push(vm.variables);
                        // vm.filtered = vm.ArrayList;
                        RisSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        // vm.ArrayList.splice(
                        //     vm.variables.index,
                        //     1,
                        //     vm.variables
                        // );
                        // vm.filtered = vm.ArrayList;
                        RisSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                } else {
                    RisSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
    }
    

    vm.save_dtl = function () {
        
        if(!vm.variables.ris_idhdr){
            RisSvc.showSwal('Warning', "Please choose a RIS first.", 'warning');
        }
        else if(vm.variables.status == "APPROVED"){
            RisSvc.showSwal('Warning', "RIS Already approved", 'warning');
        }
        else{
            LOADING.classList.add("open");
            vm.variablesdtl.ris_hdridlink = vm.variables.ris_idhdr;
            RisDtlSvc.save(vm.variablesdtl).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variablesdtl.ris_dtl_id = response.id;
                        vm.ArrayList.push(vm.variablesdtl);
                        vm.filtered = vm.ArrayList;
                        RisDtlSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.ArrayList.splice(
                            vm.variablesdtl.index,
                            1,
                            vm.variablesdtl
                        );
                        vm.filtered = vm.filtered = vm.ArrayList;;
                        RisDtlSvc.showSwal('Success', response.message, 'success');
                    }
                } else {
                    RisDtlSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                vm.cleardtl();
                LOADING.classList.remove("open");
            })
        }
    }

    vm.delete = function () {
        if (!vm.variables.ris_idhdr) {
            return RisSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
        }
        else if(vm.variables.status == "APPROVED"){
            RisSvc.showSwal('Warning', "RIS Already approved", 'warning');
        }
        else{
            RisSvc.delete(vm.variables.ris_idhdr).then(function (response) {
                if (response.success) {
                    vm.clearFunction();
                    vm.filtered = [];
                    RisSvc.showSwal('Success', response.message, 'success');
                } else {
                    RisSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        
    }

    vm.delete_dtl = function () {
        if (!vm.variablesdtl.ris_dtl_id) {
            return RisDtlSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
        }
        else if(vm.variables.status == "APPROVED"){
            RisSvc.showSwal('Warning', "RIS Already approved", 'warning');
        }
        else{
            RisDtlSvc.delete(vm.variablesdtl.ris_dtl_id).then(function (response) {
                if (response.success) {
                    vm.ArrayList.splice(
                        vm.variablesdtl.index,
                        1
                    );
                    vm.filtered = vm.ArrayList;;
                    vm.cleardtl();
                    RisDtlSvc.showSwal('Success', response.message, 'success');
                } else {
                    RisDtlSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
    }

    vm.cleardtl = function () {
        vm.variablesdtl = {};
        vm.getSeries();
        barcodeGen();
    }
    vm.clearFunction = function () {
            vm.variables = {};
            vm.variablesdtl = {};
            vm.getSeries();
            vm.getUserCredentials();
            vm.variables.ris_date = filter('date')(new Date(), "MM/dd/yyyy");
            vm.ris_date = filter('date')(new Date(), "yyyy-MM");
            vm.variables.from = filter('date')(new Date(), "MM/dd/yyyy");
            vm.variables.to = filter('date')(new Date(), "MM/dd/yyyy");
            vm.variables.status = "PENDING";
            vm.filtered = [];
            barcodeGen();
        }
    }
function BrowsePropertyCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
        var modal = this;
        modal.ArrayList = [];
        modal.filtered = [];
        modal.search = "",
        modal.item = "",
        modal.description = "",
        $ocLazyLoad
            .load([TRANSURL + 'ris/service.js?v=' + VERSION,]).then(function (d) {
                PropertyRemainingSvc = $injector.get("PropertyRemainingSvc")
                modal.center = data;
                modal.getRemaining();
            });

        modal.getRemaining = function () {
            LOADING.classList.add("open");
            PropertyRemainingSvc.get({id:modal.center}).then(function (response) {
                    if (response.message) {
                        modal.ArrayList = [];
                    } else {
                        modal.ArrayList = response;
                    }
                    modal.filtered = modal.ArrayList;
                    LOADING.classList.remove("open");
                })
            }


        modal.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Property No.", field: "item_code"},
                { name: "Unit", field: "unit_name" },
                { name: "Item", field: "item_name" },
                { name: "Description", field: "item_description" },
                { name: "Remaining", field: "total_remaining", cellClass: 'text-right' }
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };
        modal.searching = function () {
            if (!modal.search) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.item_code.toUpperCase().startsWith(modal.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (modal.filtered = searchFound);
        }
        modal.ItemSearching = function () {
            if (!modal.item) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.item_name.toUpperCase().startsWith(modal.item.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (modal.filtered = searchFound);
        }
        modal.DescriptionSearching = function () {
            if (!modal.description) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.item_description.toUpperCase().startsWith(modal.description.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (modal.filtered = searchFound);
        }
        modal.clickRow = function (row) {
            $uibModalInstance.close(row);
        }
        modal.close = function () {
            $uibModalInstance.dismiss('cancel');
        }
    }

    function BrowseRisCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
        var modal = this;
        modal.ArrayList = [];
        modal.filtered = [];
        $ocLazyLoad
            .load([TRANSURL + 'ris/service.js?v=' + VERSION,]).then(function (d) {
                RisSvc = $injector.get("RisSvc");
                RisFilterSvc = $injector.get("RisFilterSvc");
               
                modal.level = data[1];
                modal.center = data[0];
                modal.getRis();
            });

        modal.getRis = function () {
            LOADING.classList.add("open");
                RisSvc.get({id:modal.center,type:modal.level}).then(function (response) {
                    if (response.message) {
                        modal.ArrayList = [];
                    } else {
                        modal.ArrayList = response;
                    }
                    modal.filtered = modal.ArrayList;
                    LOADING.classList.remove("open");
                })
            }

        modal.getFiltered = function (choice) {
            LOADING.classList.add("open");
            RisFilterSvc.get({id:modal.center,type:modal.level,filter:choice}).then(function (response) {
                    if (response.message) {
                        modal.ArrayList = [];
                    } else {
                        modal.ArrayList = response;
                    }
                    modal.filtered = modal.ArrayList;
                    LOADING.classList.remove("open");
                })
            }

        modal.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "RIS", field: "ris_no" },
                { name: "Responsibility center", field: "responsibility_center" },
                { name: "Date", field: "ris_date" },
                { name: "Office/Division", field: "center_name" },
                { name: "Purpose", field: "purpose" },
                { name: "Status", field: "status" },
            ],
            data: "modal.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    modal.clickRow(row.entity);
                });
            }
        };
        modal.searching = function () {
            if (!modal.search) {
                return (modal.filtered = modal.ArrayList);
            }
            var searchFound = [];
            var temp_storage = modal.ArrayList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.ris_no.toUpperCase().startsWith(modal.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (modal.filtered = searchFound);
        }
        modal.clickRow = function (row) {
            $uibModalInstance.close(row);
        }
        modal.close = function () {
            $uibModalInstance.dismiss('cancel');
        }
    }
    

