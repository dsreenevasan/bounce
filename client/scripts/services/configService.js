(function () {
    'use strict';

    angular
        .module('vyuhaa')
        .factory('ConfigService', ConfigService);

    ConfigService.$inject = ['$http','$rootScope'];
    function ConfigService($http,$rootScope) {
        var service={};
        var server = {
            "local": "localhost",
            "qa"   : "pk9397.co",
            "port": "80"
        };
        service.BaseURI = BaseURI;
        return service;

        function BaseURI()
        {
            return "http://" + server.qa + ":" + server.port;
        }

    }
})();