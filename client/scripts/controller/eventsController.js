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
        ctrl.flag = false;
        ctrl.animate = function () {
            console.log("1");
            if(!ctrl.bigDiv){
                ctrl.animated = !ctrl.animated;
                ctrl.flag = !ctrl.flag;

                $timeout(function() {
                    ctrl.bigDiv = !ctrl.bigDiv;
                    ctrl.animated = !ctrl.animated;
                }, 3000);
            } else{

            }
        };

        ctrl.reverseAnimation = function () {
            console.log("2");
            if(ctrl.bigDiv){
                ctrl.reverseAnimated = !ctrl.reverseAnimated;
                ctrl.bigDiv = !ctrl.bigDiv;

                $timeout(function() {
                    ctrl.flag = !ctrl.flag;
                    ctrl.reverseAnimated = !ctrl.reverseAnimated;
                }, 3000);
            }
        }
    }

})();