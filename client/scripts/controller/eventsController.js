(function(){
    'use strict';
    angular
        .module('vyuhaa')
        .controller('EventsController', EventsController);
    EventsController.$inject = ['$state', '$scope', '$interval', '$timeout'];
    function EventsController(state, scope, interval, $timeout){
        var ctrl = this;
        ctrl.title = "Home Page";
        ctrl.animated = false;
        ctrl.bigDiv = false;
        
        ctrl.animate = function () {
            if(!ctrl.bigDiv){
                ctrl.animated = !ctrl.animated;

                $timeout(function() {
                    ctrl.bigDiv = !ctrl.bigDiv;
                    ctrl.animated = !ctrl.animated;
                }, 3000);
            } else{
                ctrl.reverseAnimated = !ctrl.reverseAnimated;
                ctrl.bigDiv = !ctrl.bigDiv;

                $timeout(function() {

                    ctrl.reverseAnimated = !ctrl.reverseAnimated;
                }, 3000);
            }
        }
    }

})();