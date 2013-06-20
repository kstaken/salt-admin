'use strict';

/* Controllers */

function AppCtrl($scope, $route, $location, socket) {
  
  socket.on('send:name', function (data) {
    $scope.name = data.name;
  });

  $scope.views = $route.routes

  if (! $scope.selected) {
    $scope.selected = $location.path();    
  }
  
  $scope.setSelected = function(view) {
    $scope.selected = view.path
  };

  $scope.isSelected = function(view) {
    return $scope.selected === view.path
  };
}

function EventsCtrl($scope, socket) {
  socket.on('send:time', function (data) {
    $scope.time = data.time;
  });
}
EventsCtrl.$inject = ['$scope', 'socket'];


function GrainsCtrl() {
}
GrainsCtrl.$inject = [];

function PillarCtrl() {
}
PillarCtrl.$inject = [];
