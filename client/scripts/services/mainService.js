(function () {
    'use strict';

    angular
        .module('vyuhaa')
        .factory('MainService', MainService);

    MainService.$inject = ['$http','$rootScope', 'ConfigService'];
    function MainService($http,$rootScope, ConfigService) {
        var service={};

        service.SignUp = SignUp;

        return service;

        function SignUp(params)
        {
            params = {
                "user": {
                    "name": "Test",
                    "cid" : "2014103038",
                    "email": "test@test.com",
                    "password": "12345678901234567890",
                    "mobile": "1234567890",
                    "organization": "CEG",
                    "field": "CS",
                    "gender": "Male",
                    "dob": "01/01/1999",
                    "isonline": true,
                    "istudent": true
                }
            }
            return $http.post(ConfigService.BaseURI() + '/api/v1/user/signup', params).then(handleSuccess, handleRemoteError);
        }

        function handleRemoteError(data) {
            return data;
        }

        function handleSuccess(data) {
            return data;
        }

    }
})();