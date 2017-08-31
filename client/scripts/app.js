(function(){
    'use strict';

    var states = [
        {
            name: 'home',
            state:
                {
                    url:'/home',
                    templateUrl: 'views/home.html',
                    data: {
                        text: "Home",
                        visible: false
                    }
                }
        },
        {
            name: 'workshops',
            state:
                {
                    url:'/workshops',
                    templateUrl: 'views/workshops.html',
                    data: {
                        text: "Workshops",
                        visible: false
                    }
                }
        },
        {
            name: 'events',
            state:
                {
                    url:'/events',
                    templateUrl: 'views/events.html',
                    data: {
                        text: "Events",
                        visible: false
                    }
                }
        },
        {
            name: 'contact',
            state:
                {
                    url:'/contact',
                    templateUrl: 'views/contact.html',
                    data: {
                        text: "Contact",
                        visible: false
                    }
                }
        },
        {
            name: 'schedule',
            state:
                {
                    url:'/schedule',
                    templateUrl: 'views/schedule.html',
                    data: {
                        text: "Schedule",
                        visible: false
                    }
                }
        },
        {
            name: 'login',
            state:
                {
                    url:'/login',
                    templateUrl: 'views/login.html',
                    data: {
                        text: "Login",
                        visible: false
                    }
                }
        },
        {
            name: 'register',
            state:
                {
                    url:'/register',
                    templateUrl: 'views/register.html',
                    data: {
                        text: "Register",
                        visible: false
                    }
                }
        }
    ];

    var app = angular.module('vyuhaa', [
        'ui.router',
        'ngCookies'
    ], function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
        .run(
            function ($cookieStore, $location, $rootScope, $state, $window) {
                /*$window.ga('create', 'UA-89398442-1', 'auto');

                // track pageview on state change
                $rootScope.$on('$stateChangeSuccess', function (event) {
                    $window.ga('send', 'pageview', $location.path());
                });*/
                /*$rootScope.$on('$locationChangeStart', function (event, next, current, fromState, toState) {
                    /!*console.log("at location change");
                     console.log("current - " + current);
                     console.log("next - " + next);*!/
                    var authUrl = [
                        "http://localhost:8080/#",
                        "http://localhost:8080/"
                    ];
                    var url = "";
                    var index = -1, itr;
                    for(itr=0; itr < authUrl.length; itr++){
                        index = next.indexOf(authUrl[itr]);
                        if(index != -1){
                            url = authUrl[itr];
                            break;
                        }
                    }
                    var currentUrl = current.replace(url, "");
                    var nextUrl = next.replace(url, "");
                    console.log("nextUrl - " + nextUrl);
                    if ($cookieStore.get('userDetails')) {
                        var userDetails = $cookieStore.get('userDetails');
                        console.log("Setting User Details" + JSON.stringify(userDetails));
                        if(nextUrl != '/login'){
                            $location.path(nextUrl);
                        }
                        else if(currentUrl != '/'){
                            $location.path(currentUrl);
                        }
                        else{
                            $location.path('/login');
                        }
                    }
                    else {
                        $location.path('/login');
                    }
                    //  $location.path(nextUrl);
                });*/

                $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
                    //save the previous state in a rootScope variable so that it's accessible from everywhere
                    $rootScope.previousState = fromState;
                    $rootScope.current = toState;
                    $rootScope.alongPathCompleted = false;
                });
            }
        )
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            angular.forEach(states, function(state){
                $stateProvider.state(state.name, state.state);
            });
        });

})();