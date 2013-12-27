define(['angular', 
  'angular-route',
  'controllers/controllers',
  'controllers/root-controller',
  'directives/directives',
  'directives/datepicker-directive'], function (angular) {
    'use strict';
    var app = angular.module('App', ['controllers', 'directives', 'ngRoute']);

    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/root.html',
            controller: 'RootController'
        });
      }
    ]);

    return app;
});
