(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$state', '$scope', '$interval'];
    function LoginController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Home Page";
    }

})();