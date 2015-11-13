'use strict';

angular.module('cookedinApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/job', {
        templateUrl: 'app/job/job.html',
        controller: 'JobCtrl'
      });
  });
