define(['app', 'factories/products'], function (app) {
  return app.controller('ProductsController', ['$scope', '$location', 'ProductsService',
    function ProductsController($scope, $location, ProductsService) {
      $scope.products = [];

      $scope.get = function() {
        ProductsService.query().$promise.then(function(products) {
          $scope.products = products;
        });
      };
    }
  ]);
});