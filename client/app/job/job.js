'use strict';

angular.module('cookedinApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/jobs', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
