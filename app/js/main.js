require.config({
    'paths': {
      'angular':       '/bower_components/angular/angular',
      'jquery':        '/bower_components/jquery/dist/jquery',
      'bootstrap':     '/bower_components/bootstrap/dist/js/bootstrap'
    },
    'shim': {
      'angular':       { 'exports': 'angular' },
      'bootstrap':     ['jquery'],
      'app':           ['bootstrap', 'angular']
    }
});

define('main', function (require) {
    'use strict';

    var angular = require('angular');

    require('app');

    angular.bootstrap(document, ['jCatalog']);
});
