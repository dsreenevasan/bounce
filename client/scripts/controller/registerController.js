(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('RegisterController', RegisterController);
    RegisterController.$inject = ['$state', '$scope', '$interval'];
    function RegisterController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Home Page";
    }

})();