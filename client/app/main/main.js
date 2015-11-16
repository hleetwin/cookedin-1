'use strict';

angular.module('cookedinApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'app/main/contact.html',
        controller: 'ContactCtrl'
      });
  });
