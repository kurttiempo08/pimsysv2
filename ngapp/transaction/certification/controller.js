//main.js
angular.module('app')
	.controller('CertificationCtrl', CertificationCtrl)
    CertificationCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];

function CertificationCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
    vm.aiList = [];
    vm.barangaylist = [];
	vm.variables = {};
    vm.filtered = [];
    vm.search;
    vm.searchtrade;
    vm.searchbarangay;
    vm.searchBPYear;
    vm.variables.date_inspected = filter("date")(new Date(),"MM/dd/yyyy");

	$ocLazyLoad
		.load([TRANSURL + 'certification/service.js?v=' + VERSION,]).then(function (d) {
            CertSvc = $injector.get("CertSvc");
            BarangaySvc = $injector.get("BarangaySvc");
            vm.getAiList();
            vm.getbarangay();
        });

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


        vm.printCertification = function(){
            if(!vm.variables.client_name)
            {
                CertSvc.showSwal('Ooops', "No data to print please choose a data from the table.", 'warning');
            }
            else{
                if(!vm.variables.client_designation2){
                    vm.variables.client_designation2 = " ";
                }
                LOADING.classList.add("open");
                    if(vm.variables.request_type == "PROCESS FOOD"){
                        window.open(
                            "report/certification?certissuance_id=" + vm.variables.certissuance_id + "&request_type=" + vm.variables.request_type + 
                            "&client_name=" + vm.variables.client_name + "&client_tradename=" + vm.variables.client_tradename  + "&client_BPYear=" + vm.variables.client_BPYear
                            + "&client_dayissuance=" + vm.variables.client_dayissuance + "&client_monthissuance=" + vm.variables.client_monthissuance +
                            "&client_yearissuance=" + vm.variables.client_yearissuance + "&client_signatory=" + vm.variables.client_signatory + "&client_designation="
                            + vm.variables.client_designation + "&client_address=" + vm.variables.client_address
                            );
                    }
                    else if(vm.variables.request_type == "MEAT"){
                        if(!vm.variables.client_tradename){
                            window.open(
                                "report/certificate/nomeat?certissuance_id=" + vm.variables.certissuance_id + "&request_type=" + vm.variables.request_type + 
                                "&client_name=" + vm.variables.client_name + "&client_tradename=" + vm.variables.client_tradename  + "&client_BPYear=" + vm.variables.client_BPYear
                                + "&client_dayissuance=" + vm.variables.client_dayissuance + "&client_monthissuance=" + vm.variables.client_monthissuance +
                                "&client_yearissuance=" + vm.variables.client_yearissuance + "&client_signatory=" + vm.variables.client_signatory + "&client_designation="
                                + vm.variables.client_designation + "&client_address=" + vm.variables.client_address
                                );
                        }
                        else{
                            window.open(
                                "report/certificate/meat?certissuance_id=" + vm.variables.certissuance_id + "&request_type=" + vm.variables.request_type + 
                                "&client_name=" + vm.variables.client_name + "&client_tradename=" + vm.variables.client_tradename  + "&client_BPYear=" + vm.variables.client_BPYear
                                + "&client_dayissuance=" + vm.variables.client_dayissuance + "&client_monthissuance=" + vm.variables.client_monthissuance +
                                "&client_yearissuance=" + vm.variables.client_yearissuance + "&client_signatory=" + vm.variables.client_signatory + "&client_designation="
                                + vm.variables.client_designation + "&client_address=" + vm.variables.client_address
                                ); 
                        }
                    }
                    else{
                        window.open(
                            "report/certification/dressed?certissuance_id=" + vm.variables.certissuance_id + "&request_type=" + vm.variables.request_type + 
                            "&client_name=" + vm.variables.client_name + "&client_tradename=" + vm.variables.client_tradename + "&client_BPYear=" + vm.variables.client_BPYear
                            + "&client_dayissuance=" + vm.variables.client_dayissuance + "&client_monthissuance=" + vm.variables.client_monthissuance +
                            "&client_yearissuance=" + vm.variables.client_yearissuance + "&client_signatory=" + vm.variables.client_signatory + "&client_designation="
                            + vm.variables.client_designation + "&client_address=" + vm.variables.client_address
                            );
                    }
                    // if(vm.variables.client_status == "PENDING"){
                    //     window.open(
                    //         "report/certification/promisory?certissuance_id=" + vm.variables.certissuance_id + "&request_type=" + vm.variables.request_type + 
                    //         "&client_name=" + vm.variables.client_name + "&client_tradename=" + vm.variables.client_tradename  + "&client_BPYear=" + vm.variables.client_BPYear
                    //         + "&client_dayissuance=" + vm.variables.client_dayissuance + "&client_monthissuance=" + vm.variables.client_monthissuance +
                    //         "&client_yearissuance=" + vm.variables.client_yearissuance + "&client_signatory=" + vm.variables.client_signatory + "&client_designation="
                    //         + vm.variables.client_designation + "&client_designation2=" + vm.variables.client_designation2 + "&client_address=" + vm.variables.client_address
                    //         );
                    // }
                LOADING.classList.remove("open");
            }
          }



          vm.printFilter = function($choice){
            // if(!vm.variables.client_name)
            // {
            //     CertSvc.showSwal('Ooops', "No data to print please choose a data from the table.", 'warning');
            // }
            // else{
                LOADING.classList.add("open");
                    if($choice === 1){
                        if(!vm.searchbarangay){
                            CertSvc.showSwal('Ooops', "Please choose barangay to filter.", 'warning');
                        }
                        else{
                            window.open(
                                "report/certification/brgy?client_barangay=" +  vm.searchbarangay
                                );
                        }
                            
                    }
                    else{
                        if(!vm.searchBPYear){
                            CertSvc.showSwal('Ooops', "Please fill up BP year to generate report.", 'warning');
                        }
                        else{
                            window.open(
                                "report/certification/year?client_BPYear=" + vm.searchBPYear
                                );
                        }
                    }
                LOADING.classList.remove("open");
          }

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.aiList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.aiList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.client_name.toUpperCase().startsWith(vm.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchingTrade = function () {
            if (!vm.searchtrade) {
                return (vm.filtered = vm.aiList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.aiList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.client_tradename.toUpperCase().startsWith(vm.searchtrade.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };
        vm.searchfilterbarangay = function () {
            if (!vm.searchbarangay) {
                return (vm.filtered = vm.aiList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.aiList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.client_barangay.toUpperCase().startsWith(vm.searchbarangay.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchfilterBPYear = function () {
            if (!vm.searchBPYear) {
                return (vm.filtered = vm.aiList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.aiList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.client_BPYear.toUpperCase().startsWith(vm.searchBPYear.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.typeGrid = {
            enableRowSelection: true,
            enableCellEdit: false,
            enableColumnMenus: false,
            modifierKeysToMultiSelect: true,
            enableRowHeaderSelection: false,
            columnDefs: [
                { name: "Client name", field: "client_name" },
                { name: "Address", field: "client_address" },
                { name: "Trade Name", field: "client_tradename" },
                { name: "BPYear", field: "client_BPYear" },
                { name: "client_contact", field: "client_contact" }
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };
        vm.getAiList = function () {
            LOADING.classList.add("open");
            CertSvc.get().then(function (response) {
                if (response.message) {
                    vm.aiList = [];
                } else {
                    vm.aiList = response;
                }
                vm.filtered = vm.aiList;
                LOADING.classList.remove("open");
            })
        }

        vm.getbarangay = function () {
            LOADING.classList.add("open");
            BarangaySvc.get().then(function (response) {
                if (response.message) {
                    vm.barangaylist = [];
                } else {
                    vm.barangaylist = response;
                }
                console.log(vm.barangaylist);
                LOADING.classList.remove("open");
            })
        }

        vm.getYear = function () {
            LOADING.classList.add("open");
            CertSvc.get({client_BPYear: vm.variables.client_BPYear}).then(function (response) {
                if (response.message) {
                    vm.aiList = [];
                } else {
                    vm.aiList = response;
                }
                vm.filtered = vm.aiList;
                LOADING.classList.remove("open");
            })
        }
        vm.clickRow = function (x) {
            vm.variables = {
                certissuance_id: x.certissuance_id,
                request_type: x.request_type,
                client_name: x.client_name,
                client_tradename: x.client_tradename,
                client_address: x.client_address,
                client_BPYear: x.client_BPYear,
                client_dayissuance: x.client_dayissuance,
                client_BPYear: x.client_BPYear,
                client_monthissuance: x.client_monthissuance,
                client_yearissuance: x.client_yearissuance,
                client_signatory: x.client_signatory,
                client_designation: x.client_designation,
                client_designation2: x.client_designation2,
                client_contact: x.client_contact,
                client_barangay: x.client_barangay,
                client_remarks: x.client_remarks,
                client_status: x.client_status,
                // inspected: x.inspected,
                // date_inspected: x.date_inspected,
                index: vm.aiList.indexOf(x)
            };
        }

        vm.save = function () {
            if(!vm.variables.client_name){
                CertSvc.showSwal('Ooops', "Please fill up client name field to continue.", 'warning');
            }
            // else if(!vm.variables.client_tradename){
            //     CertSvc.showSwal('Ooops', "Please fill up trade name field to continue.", 'warning');
            // }
            else if(!vm.variables.client_address){
                CertSvc.showSwal('Ooops', "Please fill up address field to continue.", 'warning');
            }
            else if(!vm.variables.client_barangay){
                CertSvc.showSwal('Ooops', "Please fill up Barangay year field to continue.", 'warning');
            }
            else if(!vm.variables.client_BPYear){
                CertSvc.showSwal('Ooops', "Please fill up Business year field to continue.", 'warning');
            }
            else if(!vm.variables.client_dayissuance){
                CertSvc.showSwal('Ooops', "Please fill up issuance day field to continue.", 'warning');
            }
            else if(!vm.variables.client_monthissuance){
                CertSvc.showSwal('Ooops', "Please fill up issuance month field to continue.", 'warning');
            }
            else if(!vm.variables.client_yearissuance){
                CertSvc.showSwal('Ooops', "Please fill up issuance year field to continue.", 'warning');
            }
            else if(!vm.variables.client_signatory){
                CertSvc.showSwal('Ooops', "Please fill up signatory field to continue.", 'warning');
            }
            else if(!vm.variables.client_designation){
                CertSvc.showSwal('Ooops', "Please fill up designation field to continue.", 'warning');
            }
            LOADING.classList.add("open");
            vm.variables.date_inspected = getDate(vm.variables.date_inspected);
            CertSvc.save(vm.variables).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.certissuance_id = response.id;
                        vm.aiList.push(vm.variables);
                        vm.filtered = vm.aiList;
                        CertSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.aiList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.aiList;
                        CertSvc.showSwal('Success', response.message, 'success');
                    }
                    vm.clearFunction();
                    vm.getAiList();
                } else {
                    CertSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.delete = function () {
            if (!vm.variables.certissuance_id) {
                return CertSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            CertSvc.delete(vm.variables.certissuance_id).then(function (response) {
                if (response.success) {
                    vm.aiList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.aiList;
                    vm.clearFunction();
                    CertSvc.showSwal('Success', response.message, 'success');
                } else {
                    CertSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }
        vm.clearFunction = function () {
            vm.variables = {};
        }
    }