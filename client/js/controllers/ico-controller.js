angular
  .module('app')
  .controller('ICOController', ['$scope', '$interval',  function($scope, $interval)
  {
    var vm = this;
    var countDownDate = new Date("Aug 5, 2017 15:37:25").getTime();

    vm.State = 0;
    vm.CCValue = 0;
    vm.ETHValue = 0;

    vm.ChangeState = function (value) {
      vm.State = value;
    }
    vm.CChange = function ()
    {
      vm.ETHValue = Number((vm.CCValue / 2000).toFixed(2));
    }

    vm.ETHChange = function ()
    {
      vm.CCValue = Number((vm.ETHValue * 2000).toFixed(2));
    }

    function calculate()
    {
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      vm.Deys = Math.floor(distance / (1000 * 60 * 60 * 24));
      vm.Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      vm.Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      vm.Seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
    return vm;
  }]);
