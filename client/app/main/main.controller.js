'use strict';

angular.module('cookedinApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeJobs = [];

    $http.get('/api/jobs').success(function(awesomeJobs) {
      $scope.awesomeJobs = awesomeJobs;
    });

    $scope.addJob = function() {
      if($scope.newJob === '') {
        return;
      }
      $http.post('/api/jobs', { name: $scope.newJob });
      $scope.newJob = '';
    };

    $scope.deleteJob = function(job) {
      $http.delete('/api/jobs/' + job._id);
    };
  });
