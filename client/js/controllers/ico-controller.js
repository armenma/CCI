angular
  .module('app')
  .controller('ICOController', ['$scope', '$interval',  function($scope, $interval)
  {
    var vm = this;
    var countDownDate = new Date(Date.UTC(2017, 9, 1, 18, 14)).getTime();

    $scope.State = 0;
    $scope.CCValue = {Value:0};
    $scope.multiplicator = 0;
    $scope.ETHValue = {Value:''};

    $scope.TermsChecked = {Value:true};

    $scope.ChangeState = function (value) {
      $scope.State = value;
    }
    $scope.CChange = function ()
    {
      $scope.ETHValue.Value = Number(($scope.CCValue.Value / 2000).toFixed(2));
    }

    $scope.ETHChange = function ()
    {
      var eth_value = Number($scope.ETHValue.Value);
      $scope.multiplicator = 1200;
      $scope.CCValue.Value = $scope.ETHValue.Value * $scope.multiplicator;
    }

    function calculate()
    {
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      $scope.Deys = Math.floor(distance / (1000 * 60 * 60 * 24));
      $scope.Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      $scope.Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      $scope.Seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    calculate();

    var intervalPromise = $interval(function () {

      calculate();

    }, 1000);


    $scope.$on("$destroy", function() {
      if (intervalPromise) {
        $interval.cancel(intervalPromise);
      }
    });
    $scope.GoToHomeIco = function () {
      $scope.$emit("go-home-ico");
    }
    /*return vm;*/
  }]);
