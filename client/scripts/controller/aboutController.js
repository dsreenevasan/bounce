(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('AboutController', AboutController);
    AboutController.$inject = ['$state', '$scope', '$interval'];
    function AboutController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Home Page";
    }

})();