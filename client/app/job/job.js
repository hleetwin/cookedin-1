'use strict';

angular.module('cookedinApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/jobs', {
        templateUrl: 'app/job/job.html',
        controller: 'JobCtrl'
      });
  });
