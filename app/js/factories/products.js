define(['app'], function (app) {
  'use strict';

  return app.factory('ProductsService', ['$resource', function ($resource) {
    return $resource('/api/tenant/test/products/:id', {}, {
      query: {
        method: 'GET',
        transformResponse: function(data) {
          return angular.fromJson(data);
        },
        isArray: true
      },
      bulk: {
        method: 'POST',
        url: '/api/products'
      }
    });
  }]);
});