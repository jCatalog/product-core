define(['app', 'factories/products'], function (app) {
  return app.controller('ProductsController', ['$scope', '$location', 'ProductsService',
    function ProductsController($scope, $location, ProductsService) {
      $scope.products = [];

      $scope.get = function() {
        ProductsService.query().$promise.then(function(products) {
          $scope.products = products;
        });
      };

      $scope.bulk = function() {
        ProductsService.bulk().$promise.then(function() {
          console.log('done');
        });
      };
    }
  ]);
});