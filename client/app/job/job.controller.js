'use strict';

angular.module('cookedinApp')
  .controller('JobCtrl', function ($scope, $location, Job) {
    $scope.job = {};

    console.log($scope.job);

    $scope.addJob = function() {
      Job.addJob($scope.job)
      .then(function(res) {
        console.log(res);
        $location.path('/main');
      })
      .catch(function(error) {
        console.error(error);
      });
    };
    
  });
