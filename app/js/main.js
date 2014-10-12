require.config({
    'paths': {
      'angular':          '/bower_components/angular/angular',
      'angular-resource': '/bower_components/angular-resource/angular-resource',
      'jquery':           '/bower_components/jquery/dist/jquery',
      'bootstrap':        '/bower_components/bootstrap/dist/js/bootstrap'
    },
    'shim': {
      'angular':          { 'exports': 'angular' },
      'angular-resource': ['angular'],
      'bootstrap':        ['jquery'],
      'app':              ['bootstrap', 'angular', 'angular-resource']
    }
});

define('main', function (require) {
    'use strict';

    var angular = require('angular');

    require('app');
    require('controllers/products');

    angular.bootstrap(document, ['jCatalog']);
});
