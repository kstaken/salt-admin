'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/pillar-edit', {
      templateUrl: 'partials/pillar-edit', 
      controller: PillarCtrl, 
      icon: "icon-wrench", 
      label: "Edit Pillar Data", 
      nav: "Main", 
      path: '/pillar-edit'
    });    
  
    $routeProvider.when('/statetree', {
      templateUrl: 'partials/statetree', 
      controller: StateTreeCtrl, 
      icon: "icon-indent-left", 
      label: "Show State Tree", 
      nav: "Main",
      path: '/statetree'
    });

    $routeProvider.when('/grains', {
      templateUrl: 'partials/grains', 
      controller: GrainsCtrl, 
      icon: "icon-time", 
      label: "Grains", 
      nav: "Main",
      path: '/grains'
    });
  
    $routeProvider.when('/events', {
      templateUrl: 'partials/events', 
      controller: EventsCtrl, 
      icon: "icon-tags", 
      label: "Events", 
      nav: "Main", 
      path: '/events'
    });
    
    $routeProvider.otherwise({redirectTo: '/pillar-edit'});
    
    $locationProvider.html5Mode(true);
  }]);