// This file is test/spec/main.js
var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/spec\.js$/).test(file);
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts',

  paths: {
    'angular': 'vendor/angular.min',
    'angular-route': 'vendor/angular-route.min',
    'angular-mocks': '../../test/vendor/angular-mocks',
    'jquery': 'vendor/jquery',
    'jquery-ui': 'vendor/jquery-ui.min'
  },

  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },
    'jquery-ui': {
        deps: ['jquery']
    },
    'angular-route': {deps: ['angular']},
    'angular-mocks': {deps: ['angular']},
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
