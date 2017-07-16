angular
  .module('app')
  .controller('GetCryptoCurrencies', ['$scope', '$state', '$filter', 'CryptoCurrencies', 'CryptoCurrencyIndexes', function($scope,
      $state, $filter, CryptoCurrencies, CryptoCurrencyIndexes) {

    $scope.CryptoCurrencies = [];
    $scope.CryptoCurrencyIndexes = [];
    $scope.MainCryptoCurrencies = [];


    function GetCryptoCurrencies() {
      CryptoCurrencies
        .find()
        .$promise
        .then(function(results) {
          $scope.CryptoCurrencies = results.sort(compare);
          $scope.MainCryptoCurrencies = $scope.CryptoCurrencies.splice(0, 50);
        });
    };

    function CryptoCurrencyIndexes() {
      CryptoCurrencyIndexes
        .find()
        .$promise
        .then(function(results) {
          $scope.CryptoCurrencyIndexes = results;
        });
    }
    GetCryptoCurrencies();

    $scope.DeleteAllIndexes = function ()
    {
      CryptoCurrencyIndexes.destroyAll().$promise
        .then(function(results) {
          console.log("All data deleted");
        });
    }

    function compare(a, b) {

      var first = Number(a.rank);
      var second = Number(b.rank);

      var comparison = 0;
      if (first > second) {
        comparison = 1;
      } else if (first < second) {
        comparison = -1;
      }
      return comparison;
    }



   /* $scope.addTodo = function() {
      GetCryptoCurrencies
        .create($scope.newTodo)
        .$promise
        .then(function(todo) {
          $scope.newTodo = '';
          $scope.todoForm.content.$setPristine();
          $('.focus').focus();
          getTodos();
        });
    };*/

   /* $scope.removeTodo = function(item) {
      GetCryptoCurrencies
        .deleteById(item)
        .$promise
        .then(function() {
          getTodos();
        });
    };*/
  }]);
