(function () {
    'use strict';
    angular
        .module('app')

        .factory('OtherListSvc', OtherListSvc)
        .factory('HogListSvc', HogListSvc);

        OtherListSvc.$inject = ['baseService'];
        HogListSvc.$inject = ['HogListSvc'];

    function OtherListSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/hog';
        return service;
    }
    function HogListSvc(baseService) {
        var service = new baseService();
        service.url = APIURL + 'api/hog'
        return service;
    }

})();
