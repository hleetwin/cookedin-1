'use strict';

angular.module('cookedinApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'app/main/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/blog', {
        templateUrl: 'app/main/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/aboutus', {
        templateUrl: 'app/main/about.html',
        controller: 'AboutCtrl'
      })
      .when('/enter', {
        templateUrl: 'app/main/enter.html',
        controller: 'EnterCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
