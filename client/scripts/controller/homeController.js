(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$state', '$scope', '$interval', 'MainService'];
    function HomeController(state, scope, interval, MainService){
        var ctrl = this;
        ctrl.title = "Home Page";
        ctrl.page = 1;
        
        MainService.SignUp().then(function (response) {
            console.log("Response = " + JSON.stringify(response));
        });

        ctrl.change = function (id) {
            ctrl.page = id;
        }
    }

})();