angular
  .module('app')
  .controller('WalletController', ['$scope', function($scope)
  {

    $scope.SelectedTabIndex = 0;

    $scope.SelectedPaymentTabIndex = 0;

    $scope.ChangeSelectedTabIndex = function (index)
    {
      $scope.SelectedTabIndex = index;
    }

    $scope.ChangeSelectedPaymentTabIndex = function (index)
    {
      $scope.SelectedPaymentTabIndex = index;
    }


  }]);
