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
        };
        ctrl.isModalOpen = false;
        
        ctrl.toggleModal = function () {
            ctrl.isModalOpen = !ctrl.isModalOpen;
        };
        ctrl.toggleModalEvent = function (eventIndex) {
            ctrl.isModalOpen = !ctrl.isModalOpen;
            var i,mainindex=parseInt(eventIndex);
            for(i=0;i<6;i++)
            {
            	if(this.eventList[i].index===mainindex)
            	{
            		this.cmnindex=mainindex;
            		this.cmnname=this.eventList[i].name;
            		this.cmndescription=this.eventList[i].description;
            		this.cmndate=this.eventList[i].date;
            		this.cmntime=this.eventList[i].time;
            		this.cmnvenue=this.eventList[i].venue;
            		this.cmncontact=this.eventList[i].contact;
            		this.cmnrules=this.eventList[i].rules;
            		this.cmnfaq=this.eventList[i].FAQ;
            		break;
            	}
            }
            //console.log(cmnname);
        };
        var cmnindex,cmnname,cmndescription,cmndate,cmntime,cmnvenue,cmncontact,cmnrules,cmnfaq;

        this.eventList=[

			{
				"index": 1,
				"name": "EventName1",
				"description": "This is event description",
				"date": "10-10-17",
				"time": "10:00PM",
				"venue": "SNH",
				"contact":["AAA : 9999999999","BBB : 8888888888"],
				"rules": ["7 members per team","No internet allowed"],
				"FAQ": [{"question":"Some question?","answer":"Answer"},{"question":"What are prerequisites?","answer":"Mathematics,Puzzles"}]
			},
			{
				"index": 2,
				"name": "EventName2",
				"description": "This is event description",
				"date": "10-10-17",
				"time": "10:00PM",
				"venue": "SNH",
				"contact":["AAA : 9999999999","BBB : 8888888888"],
				"rules": ["4 members per team","No internet allowed"],
				"FAQ": [{"question":"Some question?","answer":"Answer"},{"question":"What are prerequisites?","answer":"Mathematics,Puzzles"}]
			},

			{
				"index": 3,
				"name": "EventName3",
				"description": "This is event description",
				"date": "10-10-17",
				"time": "10:00PM",
				"venue": "SNH",
				"contact":["AAA : 9999999999","BBB : 8888888888"],
				"rules": ["3 members per team","No internet allowed"],
				"FAQ": [{"question":"Some question?","answer":"Answer"},{"question":"What are prerequisites?","answer":"Mathematics,Puzzles"}]
			},

			{
				"index": 4,
				"name": "EventName4",
				"description": "This is event description",
				"date": "10-10-17",
				"time": "10:00PM",
				"venue": "SNH",
				"contact":["AAA : 9999999999","BBB : 8888888888"],
				"rules": ["10 members per team","No internet allowed"],
				"FAQ": [{"question":"Some question?","answer":"Answer"},{"question":"What are prerequisites?","answer":"Mathematics,Puzzles"}]
			},

			{
				"index": 5,
				"name": "EventName5",
				"description": "This is event description",
				"date": "10-10-17",
				"time": "10:00PM",
				"venue": "SNH",
				"contact":["AAA : 9999999999","BBB : 8888888888"],
				"rules": ["21 members per team","No internet allowed"],
				"FAQ": [{"question":"Some question?","answer":"Answer"},{"question":"What are prerequisites?","answer":"Mathematics,Puzzles"}]			
			},
			{
				"index": 6,
				"name": "EventName6",
				"description": "This is event description",
				"date": "10-10-17",
				"time": "10:00PM",
				"venue": "SNH",
				"contact":["AAA : 9999999999","BBB : 8888888888"],
				"rules": ["23 members per team","No internet allowed"],
				"FAQ": [{"question":"Some question?","answer":"Answer"},{"question":"What are prerequisites?","answer":"Mathematics,Puzzles"}]
			}
        ]
    }

})();