'use strict';

/* Controllers */

function AppCtrl($scope, socket) {
  
  socket.on('send:name', function (data) {
    $scope.name = data.name;
  });

  $scope.views = [
    { name: "View 1", url: "/view1", icon: "icon-time" },
    { name: "View 2", url: "/view2", icon: "icon-wrench" }
  ];

  $scope.selected = $scope.views[0];
  
  $scope.setSelected = function(view) {
    $scope.selected = view
  };

  $scope.isSelected = function(view) {
    return $scope.selected === view
  };
}

function MyCtrl1($scope, socket) {
  socket.on('send:time', function (data) {
    $scope.time = data.time;
  });
}
MyCtrl1.$inject = ['$scope', 'socket'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
