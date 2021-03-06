require.config({
  paths: {
    'angular': 'vendor/angular.min',
    'angular-route': 'vendor/angular-route.min',
    'jquery': 'vendor/jquery',
    'jquery-ui': 'vendor/jquery-ui.min',
    'underscore': 'vendor/underscore',
    'highcharts': 'vendor/highcharts'
  },
  shim: {
    'jquery': {
        exports: 'jquery'
    },
    'jquery-ui': {
        deps: ['jquery']
    },
    'angular': {
      deps: [ 'jquery'],
      exports: 'angular'
    },
    'angular-route': {
        deps: ['angular']
    },
    'underscore': {
        exports: "underscore"
    },
    'highcharts': {
        exports: "highcharts",
        deps: ['jquery']
    }
  }
});

// the app/scripts/main.js file, which defines our RequireJS config
require([
  'angular',
  'app',
  'jquery'
],
  function (angular, app, jquery) {
    'use strict';

    jquery(function() {
      angular.bootstrap(document, ['App']);
    });
  }
);
