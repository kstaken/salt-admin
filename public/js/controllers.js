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
  socket.on('send:event', function (data) {
    $scope.event = data.event;
  });
}
//EventsCtrl.$inject = ['$scope', 'socket'];


function GrainsCtrl($scope, $http) {
  $http.get('api/grains').then(function(res) {
    $scope.grains = res.data;                
  });
}
GrainsCtrl.$inject = ['$scope', '$http'];


function PillarCtrl() {
}
PillarCtrl.$inject = [];
