(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('EventsController', EventsController);
    EventsController.$inject = ['$state', '$scope', '$interval'];
    function EventsController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Home Page";
    }

})();