'use strict';

/* Filters */

var filters = angular.module('myApp.filters', []);

filters.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  }
}]);

filters.filter('mainnav', function(version) {
  return function(list) {
    var result = [];
    
    for (var key in list) {    
      if (list[key].nav === 'Main') {
        result.push(list[key])
      }
    }    
    return result
  }

});