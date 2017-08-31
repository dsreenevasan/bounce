(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$state', '$scope', '$interval'];
    function HomeController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Home Page";
    }

})();