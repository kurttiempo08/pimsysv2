//main.js
angular.module('app')
	.controller('ClientrequestCtrl', ClientrequestCtrl)
    .controller('BrowseActivityCtrl', BrowseActivityCtrl)
    .controller('CreateClientCtrl', CreateClientCtrl)
    ClientrequestCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', '$uibModal', '$log', '$filter'];
    BrowseActivityCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];
    CreateClientCtrl.$inject = ['$scope', '$ocLazyLoad', '$injector', 'data', '$uibModalInstance', '$filter'];

function ClientrequestCtrl($scope, $ocLazyLoad, $injector, $uibModal, $log, filter) {
	var vm = this;
	vm.clientList = [];
	vm.variables = {};
    vm.filtered = [];
    vm.variables.remarks = "PENDING";
    vm.variables.request_date = filter("date")(new Date(),"MM/dd/yyyy");
    vm.date_done = filter("date")(new Date(),"MM/dd/yyyy");
	vm.search;

	$ocLazyLoad
		.load([TRANSURL + 'client_request/service.js?v=' + VERSION,]).then(function (d) {
            ClientrequestOthersSvc = $injector.get("ClientrequestOthersSvc");
            ClientrequestreportSvc = $injector.get("ClientrequestreportSvc");
            ClientrequestAdSvc = $injector.get("ClientrequestAdSvc");
            ClientrequestAiSvc = $injector.get("ClientrequestAiSvc");
            ClientrequestSpaySvc = $injector.get("ClientrequestSpaySvc");
            ClientrequestSvc = $injector.get("ClientrequestSvc");
            ClientrequestSampleCollectionSvc = $injector.get("ClientrequestSampleCollectionSvc");
            ClientrequestTreatmentSvc = $injector.get("ClientrequestTreatmentSvc");
            ClientrequestEuthanasiatSvc = $injector.get("ClientrequestEuthanasiatSvc");
            ClientrequestDoneSvc = $injector.get("ClientrequestDoneSvc");
            vm.getRequest();
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
        
        vm.generateRequest = function(){
            if(!vm.variables.cr_id){
              return ClientrequestreportSvc.showSwal("Warning", "Please Select Client to Continue.", "warning");
            }
            LOADING.classList.add("open");
            ClientrequestreportSvc.save({
                id: vm.variables.cr_id,
              }).then(function (response) {
            if(!vm.variables.rabies_nodogcat){
                vm.variables.rabies_nodogcat = " ";
            }
            else if(!vm.variables.ai_species){
                vm.variables.ai_species = " ";
            }
            else if(!vm.variables.ai_datetimeofheat){
                vm.variables.ai_datetimeofheat = " ";
            }
            else if(!vm.variables.ad_reason){
                vm.variables.ad_reason = " ";
            }
            else if(!vm.variables.scom_test){
                vm.variables.scom_test = " ";
            }
            else if(!vm.variables.scom_species){
                vm.variables.scom_species = " ";
            }
            else if(!vm.variables.scom_noofheads){
                vm.variables.scom_noofheads = " ";
            }
            else if(!vm.variables.tc_species){
                vm.variables.tc_species = " ";
            }
            else if(!vm.variables.scom_noofheads){
                vm.variables.scom_noofheads = " ";
            }
            else if(!vm.variables.tc_species){
                vm.variables.tc_species = " ";
            }
                if (response.success) {
                    window.open(
                      "report/client_report?id=" +
                        vm.variables.cr_id + "&recepient_name=" + vm.variables.recepient_name + "&recp_contact=" +
                        vm.variables.recp_contact + "&recp_address=" + vm.variables.recp_address + "&request_type=" + 
                        vm.variables.request_type + "&request_date=" + vm.variables.request_date + "&rabies_nodogcat=" +
                        vm.variables.rabies_nodogcat + "&ai_species=" + vm.variables.ai_species + "&ai_datetimeofheat=" +
                        vm.variables.ai_datetimeofheat + "&ad_reason=" + vm.variables.ad_reason + "&scom_test=" + vm.variables.scom_test +
                        "&scom_species=" + vm.variables.scom_species + "&scom_noofheads=" + vm.variables.scom_noofheads + "&tc_species=" +
                        vm.variables.tc_species + "&tc_noofheads=" + vm.variables.tc_noofheads + "&tc_symptoms=" + vm.variables.tc_symptoms +
                        "&euth_species=" + vm.variables.euth_species + "&euth_noofheads=" + vm.variables.euth_noofheads + "&euth_reason=" +
                        vm.variables.euth_reason + "&sc_species=" + vm.variables.sc_species + "&sc_age=" + vm.variables.sc_age +
                        "&sc_sex=" + vm.variables.sc_sex + "&sc_noofheads=" + vm.variables.sc_noofheads + "&receivedby=" + 
                        vm.variables.receivedby + "&technician=" + vm.variables.technician + "&others=" + vm.variables.others
                    );
                }
                LOADING.classList.remove("open");
              }); 
          }

        vm.searching = function () {
            if (!vm.search) {
                return (vm.filtered = vm.clientList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.clientList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.recepient_name.toUpperCase().startsWith(vm.search.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchingrequest = function () {
            if (!vm.searchtype) {
                return (vm.filtered = vm.clientList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.clientList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.request_type.toUpperCase().startsWith(vm.searchtype.toUpperCase())
                ) {
                    searchFound.push(item);
                }
            });
            return (vm.filtered = searchFound);
        };

        vm.searchingaction = function () {
            if (!vm.searchaction) {
                return (vm.filtered = vm.clientList);
            }
            // declare storage to return (clear for another search)
            var searchFound = [];
            var temp_storage = vm.clientList;
            temp_storage.forEach(function (item) {
                // search field
                if (
                    item.action.toUpperCase().startsWith(vm.searchaction.toUpperCase())
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
                { name: "Client Name", 
                  field: "recepient_name",
                  cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === 'PENDING') {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Client Address", field: "recp_address",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Client Contact", field: "recp_contact",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Request Type", field: "request_type",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Date Requested", field: "request_date",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Technician", field: "technician",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Action", field: "action",
                cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Remarks", field: "remarks",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
                { name: "Date done", field: "date_done",
                    cellClass: function(data, rowRenderIndex) {
                        if (rowRenderIndex.entity.remarks === "PENDING") {
                            return "text-danger";
                        }  else {
                            return "pointer";
                        }
                    }
                },
            ],
            data: "vm.filtered",
            onRegisterApi: function (gridApi) {
                gridApi.selection.on.rowSelectionChanged(null, function (row) {
                    vm.clickRow(row.entity);
                });
            }
        };

        vm.getRequest = function () {
            LOADING.classList.add("open");
            ClientrequestSvc.get().then(function (response) {
                if (response.message) {
                    vm.clientList = [];
                } else {
                    vm.clientList = response;
                }
                vm.filtered = vm.clientList;
                LOADING.classList.remove("open");
            })
        }

        vm.clickRow = function (x) {
                vm.variables = {
                    cr_id: x.cr_id,
                    request_type: x.request_type,
                    recepient_name: x.recepient_name,
                    recp_address: x.recp_address,
                    recp_contact: x.recp_contact,
                    request_date: x.request_date,
                    rabies_nodogcat: x.rabies_nodogcat,
                    tc_species: x.tc_species,
                    tc_noofheads: x.tc_noofheads,
                    tc_symptoms: x.tc_symptoms,
                    euth_species: x.euth_species,
                    euth_noofheads: x.euth_noofheads,
                    euth_reason: x.euth_reason,
                    sc_species: x.sc_species,
                    sc_age: x.sc_age,
                    sc_sex: x.sc_sex,
                    sc_noofheads: x.sc_noofheads,
                    ai_species: x.ai_species,
                    ai_datetimeofheat: x.ai_datetimeofheat,
                    scom_test: x.scom_test,
                    scom_species: x.scom_species,
                    scom_noofheads: x.scom_noofheads,
                    ad_reason: x.ad_reason,
                    others: x.others,
                    behalf: x.behalf,
                    receivedby: x.receivedby,
                    technician: x.technician,
                    action: x.action,
                    remarks: x.remarks,
                    date_done: x.date_done,
                    index: vm.clientList.indexOf(x)
                };
        }

        vm.done = function (){
        if(!vm.variables.recepient_name){
            ClientrequestDoneSvc.showSwal('Ooops', "Please choose client first to continue.", 'warning');
        }
        else if(vm.variables.remarks === "DONE"){
            ClientrequestDoneSvc.showSwal('Ooops', "This request is already DONE.", 'warning');
        }
        else{
                vm.variables.remarks = "DONE";
                vm.variables.date_done = getDate(vm.date_done);
                var data = angular.copy(vm.variables);
                ClientrequestDoneSvc.save(data).then(function (response) {
                if (response.success) {
                    if (response.id) {
                        vm.variables.cr_id = response.id;
                        vm.clientList.push(vm.variables);
                        vm.filtered = vm.clientList;
                        ClientrequestDoneSvc.showSwal('Success', response.message, 'success');
                    }
                    else {
                        vm.clientList.splice(
                            vm.variables.index,
                            1,
                            vm.variables
                        );
                        vm.filtered = vm.clientList;
                        ClientrequestDoneSvc.showSwal('Success', response.message, 'success');
                    }
                        vm.clearFunction();
                    } else {
                        ClientrequestDoneSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                    }
                    LOADING.classList.remove("open");
                }) 
            }
               
        }

        vm.save = function (request) {
            LOADING.classList.add("open");
                vm.variables.request_date = getDate(vm.variables.request_date);
                var data = angular.copy(vm.variables);
                if(request === 1){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.scom_test){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Test field to continue.", 'warning');
                    }
                    else if(!vm.variables.scom_species){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Species field to continue.", 'warning');
                    }
                    else if(!vm.variables.scom_noofheads){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up No. of head field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Sample Collection";
                        ClientrequestSampleCollectionSvc.save(data).then(function (response) {
                        if (response.success) {
                            if (response.id) {
                                vm.variables.cr_id = response.id;
                                vm.clientList.push(vm.variables);
                                vm.filtered = vm.clientList;
                                ClientrequestSampleCollectionSvc.showSwal('Success', response.message, 'success');
                            }
                            else {
                                vm.clientList.splice(
                                    vm.variables.index,
                                    1,
                                    vm.variables
                                );
                                vm.filtered = vm.clientList;
                                ClientrequestSampleCollectionSvc.showSwal('Success', response.message, 'success');
                            }
                                vm.clearFunction();
                            } else {
                                ClientrequestSampleCollectionSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                            }
                            LOADING.classList.remove("open");
                        })
                    }
                }
                else if(request === 2){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.tc_species){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Species field to continue.", 'warning');
                    }
                    else if(!vm.variables.tc_noofheads){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up No. of heads field to continue.", 'warning');
                    }
                    else if(!vm.variables.tc_symptoms){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Symptoms field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Treatment/Check-up";
                        ClientrequestTreatmentSvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestTreatmentSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestTreatmentSvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestTreatmentSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    
                }
                else if(request === 3){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.euth_species){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Species field to continue.", 'warning');
                    }
                    else if(!vm.variables.euth_noofheads){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up No. of heads field to continue.", 'warning');
                    }
                    else if(!vm.variables.euth_reason){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Reason/s field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Euthanasia";
                        ClientrequestEuthanasiatSvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestEuthanasiatSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestEuthanasiatSvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestEuthanasiatSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                   
                    }
                else if(request === 4){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.sc_species){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Species field to continue.", 'warning');
                    }
                    else if(!vm.variables.sc_age){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Age field to continue.", 'warning');
                    }
                    else if(!vm.variables.sc_sex){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Sex field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Spay and Castration";
                        ClientrequestSpaySvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestSpaySvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestSpaySvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestSpaySvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    }
                else if(request === 5){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.ai_species){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Species field to continue.", 'warning');
                    }
                    else if(!vm.variables.ai_datetimeofheat){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Date of heat field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Artificial Insemination";
                        ClientrequestAiSvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestAiSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestAiSvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestAiSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    
                    }
                else if(request === 6){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.ad_reason){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Reason field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Animal Dispersal";
                        ClientrequestAiSvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestAiSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestAiSvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestAiSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    
                    }
                else if(request === 7){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.others){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Reason field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Others";
                        ClientrequestOthersSvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestOthersSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestOthersSvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestOthersSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    }
                else if(request === 8){
                    if(!vm.variables.recepient_name){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "You must choose client First to continue.", 'warning');
                    }
                    else if(!vm.variables.rabies_nodogcat){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up No. dogs/cats field to continue.", 'warning');
                    }
                    else if(!vm.variables.technician){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up technician field to continue.", 'warning');
                    }
                    else if(!vm.variables.receivedby){
                        ClientrequestSampleCollectionSvc.showSwal('Ooops', "Please fill up Received by field to continue.", 'warning');
                    }
                    else{
                        vm.variables.request_type = "Rabies Vaccination";
                        ClientrequestSvc.save(data).then(function (response) {
                            if (response.success) {
                                if (response.id) {
                                    vm.variables.cr_id = response.id;
                                    vm.clientList.push(vm.variables);
                                    vm.filtered = vm.clientList;
                                    ClientrequestSvc.showSwal('Success', response.message, 'success');
                                }
                                else {
                                    vm.clientList.splice(
                                        vm.variables.index,
                                        1,
                                        vm.variables
                                    );
                                    vm.filtered = vm.clientList;
                                    ClientrequestSvc.showSwal('Success', response.message, 'success');
                                }
                                    vm.clearFunction();
                                } else {
                                    ClientrequestSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                                }
                                LOADING.classList.remove("open");
                            })
                        }
                    }
                    vm.getRequest();
                }
        vm.delete = function () {
            if (!vm.variables.cr_id) {
                return ClientrequestSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
            }
            ClientrequestSvc.delete(vm.variables.cr_id).then(function (response) {
                if (response.success) {
                    vm.clientList.splice(
                        vm.variables.index,
                        1
                    );
                    vm.filtered = vm.clientList;
                    vm.clearFunction();
                    ClientrequestSvc.showSwal('Success', response.message, 'success');
                } else {
                    ClientrequestSvc.showSwal('Error', response.message, 'error');
                }
                LOADING.classList.remove("open");
            })
        }

        vm.openPersonnel = function (choice) {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "personnel_list/search.html?v=" + VERSION,
                controllerName: "BrowsePersonnelCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-right',
                filesToLoad: [
                    MASTERURL + "personnel_list/search.html?v=" + VERSION,
                    MASTERURL + "personnel_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    if(choice === 1){
                        console.log(data);
                        vm.variables.technician = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.recepient_idlink = data.recp_id;
                        vm.variables.recp_contact = data.recp_contact;
                        vm.variables.recp_address = data.recp_address;
                    }
                    else if(choice === 2){
                        console.log(data);
                        vm.variables.receivedby = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.recepient_idlink = data.recp_id;
                        vm.variables.recp_contact = data.recp_contact;
                        vm.variables.recp_address = data.recp_address;
                    }
                    else{
                        console.log(data);
                        vm.variables.source = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.source_idlink = data.recp_id;
                    }
                }
            });
        }


        vm.openRecepient = function (choice) {
            var options = {
                data: '',
                animation: true,
                templateUrl: MASTERURL + "recepients_list/search.html?v=" + VERSION,
                controllerName: "BrowseRecepCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-right',
                filesToLoad: [
                    MASTERURL + "recepients_list/search.html?v=" + VERSION,
                    MASTERURL + "recepients_list/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    if(choice === 1){
                        console.log(data);
                        vm.variables.recepient_name = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.recepient_idlink = data.recp_id;
                        vm.variables.recp_contact = data.recp_contact;
                        vm.variables.recp_address = data.recp_address;
                    }
                    else{
                        console.log(data);
                        vm.variables.source = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.source_idlink = data.recp_id;
                    }
                }
            });
        }


        vm.openAddclient = function (choice) {
            var options = {
                data: '',
                animation: true,
                templateUrl: TRANSURL + "client_request/create.html?v=" + VERSION,
                controllerName: "CreateClientCtrl",
                viewSize: "lg",
                windowClass: 'modal modal-slide-in-right',
                filesToLoad: [
                    TRANSURL + "client_request/create.html?v=" + VERSION,
                    TRANSURL + "client_request/controller.js?v=" + VERSION
                ]
            };
            AppSvc.modal(options).then(function (data) {
                if(data){
                    if(choice === 1){
                        console.log(data);
                        vm.variables.recepient_name = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.recepient_idlink = data.recp_id;
                        vm.variables.recp_contact = data.recp_contact;
                        vm.variables.recp_address = data.recp_address;
                    }
                    else{
                        console.log(data);
                        vm.variables.source = data.recp_fname + " " + data.recp_mname.charAt(0) + "." + data.recp_lname + " " + data.recp_suffixname;
                        vm.variables.source_idlink = data.recp_id;
                    }
                }
            });
        }
        vm.openAnimal = function (number) {
            console.log(number);
            if(number === 1){
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "other_income/search.html?v=" + VERSION,
                    controllerName: "BrowseOtherIncCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-right',
                    filesToLoad: [
                        MASTERURL + "other_income/search.html?v=" + VERSION,
                        MASTERURL + "other_income/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    vm.clear();
                    if(data){
                        vm.variables.hoganimal_code = data.hog_code;
                        vm.variables.animal_code = vm.variables.hoganimal_code;
                        vm.variables.animal_idlink = data.hog_id;
                        vm.variables.animal_code = data.hog_code;
                    }
                });
            }
            else{
                var options = {
                    data: '',
                    animation: true,
                    templateUrl: MASTERURL + "cattle_list/search.html?v=" + VERSION,
                    controllerName: "BrowseCattleCtrl",
                    viewSize: "lg",
                    windowClass: 'modal modal-slide-in-right',
                    filesToLoad: [
                        MASTERURL + "cattle_list/search.html?v=" + VERSION,
                        MASTERURL + "cattle_list/controller.js?v=" + VERSION
                    ]
                };
                AppSvc.modal(options).then(function (data) {
                    vm.clear();
                    if(data){
                        vm.variables.cattleanimal_code = data.cattle_code;
                        vm.variables.animal_code = vm.variables.cattleanimal_code;
                        vm.variables.animal_idlink = data.cattle_id;
                        vm.variables.animal_code = data.cattle_code;
                    }
                });
            }
        }
        vm.clearFunction = function () {
            vm.variables = {};
            vm.variables.request_date = filter("date")(new Date(),"MM/dd/yyyy");
            vm.variables.date_done = filter("date")(new Date(),"MM/dd/yyyy");
        }
        vm.clear = function () {
            vm.variables.animal_code = "";
            vm.variables.cattleanimal_code = "";
            vm.variables.hoganimal_code = "";
            vm.variables.animal_idlink = "";
        }
    }

function BrowseActivityCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.incomeList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'other_income/service.js?v=' + VERSION,]).then(function (d) {
			OtherListSvc = $injector.get("OtherListSvc");
			modal.getIncomeList();
		});
	modal.getIncomeList = function () {
		LOADING.classList.add("open");
		OtherListSvc.get({autodebit: true}).then(function (response) {
			if (response.message) {
				modal.incomeList = [];
			} else {
				modal.incomeList = response;
			}
			modal.filtered = modal.incomeList;
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
			{ name: "Other Income Name", field: "ChAcctName" }
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
			return (modal.filtered = modal.incomeList);
		}
		var searchFound = [];
		var temp_storage = modal.incomeList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.OtherIncomeName.toUpperCase().startsWith(modal.search.toUpperCase())
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
function CreateClientCtrl($scope, $ocLazyLoad, $injector, data, $uibModalInstance, filter) {
	var modal = this;
	modal.recepList = [];
	modal.filtered = [];
	$ocLazyLoad
		.load([MASTERURL + 'recepients_list/service.js?v=' + VERSION,]).then(function (d) {
			RecepSvc = $injector.get("RecepSvc");
			modal.getRecepList();
		});
	modal.getRecepList = function () {
		LOADING.classList.add("open");
		RecepSvc.get().then(function (response) {
			if (response.message) {
				modal.recepList = [];
			} else {
				modal.recepList = response;
			}
			modal.filtered = modal.recepList;
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
            { name: "Firstname", field: "recp_fname" },
            { name: "Lastname", field: "recp_lname" },
            { name: "Middlename", field: "recp_mname" },
            { name: "Suffix", field: "recp_suffixname" },
            { name: "Gender", field: "recp_gender" }
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
			return (modal.filtered = modal.recepList);
		}
		var searchFound = [];
		var temp_storage = modal.recepList;
		temp_storage.forEach(function (item) {
			// search field
			if (
				item.recp_lname.toUpperCase().startsWith(modal.search.toUpperCase())
			) {
				searchFound.push(item);
			}
		});
		return (modal.filtered = searchFound);
	}
	modal.clickRow = function (x) {
		modal.variables = {
            recp_id: x.recp_id,
            recp_fname: x.recp_fname,
            recp_lname: x.recp_lname,
            recp_mname: x.recp_mname,
            recp_suffixname: x.recp_suffixname,
            recp_profpic: x.recp_profpic,
            recp_gender: x.recp_gender,
            recp_barangay: x.recp_barangay,
            recp_address: x.recp_address,
            recp_profpic: x.recp_profpic,
            recp_contact: x.recp_contact,
            index: modal.recepList.indexOf(x)
        };
        console.log(modal.variables);
    }
    modal.save = function () {
        // LOADING.classList.add("open");
            var data = angular.copy(modal.variables);
        //     var newData = new FormData();
        //     angular.forEach(data, function(v, k) {
        //         newData.append(k, v);
        // });
        // if (vm.changeImage) {
        //     newData.append('image', vm.image);
        // }
        // else{
            RecepSvc.save(data).then(function (response) {
                console.log(data);
                if (response.success) {
                    modal.clearFunction();
                    modal.getRecepList();
                        // vm.variables.recp_id = response.id;
                        // vm.recepList.push(vm.variables);
                        // vm.filtered = vm.recepList;
                        RecepSvc.showSwal('Success', response.message, 'success');
                    // vm.clearFunction();
                } else {
                    RecepSvc.showSwal('Ooops', "Nothing has changed. Failed Saving", 'warning');
                }
                LOADING.classList.remove("open");
            })
        // }
    }
    modal.delete = function () {
        if (!modal.variables.recp_id) {
            return RecepSvc.showSwal('Ooops', "Select row first to proceed", 'warning');
        }
        RecepSvc.delete(modal.variables.recp_id).then(function (response) {
            if (response.success) {
                modal.recepList.splice(
                    modal.variables.index,
                    1
                );
                modal.filtered = modal.recepList;
                modal.clearFunction();
                RecepSvc.showSwal('Success', response.message, 'success');
            } else {
                RecepSvc.showSwal('Error', response.message, 'error');
            }
            LOADING.classList.remove("open");
        })
    }
    modal.clearFunction = function () {
        modal.variables = {};
    }
	modal.close = function () {
		$uibModalInstance.dismiss('cancel');
	}
}

