(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('ContactUsController', ContactUsController);
    ContactUsController.$inject = ['$state', '$scope', '$interval'];
    function ContactUsController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Home Page";
    }

})();