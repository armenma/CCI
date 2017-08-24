angular
  .module('app')
  .controller('ICOController', ['$scope', '$interval',  function($scope, $interval)
  {
    var vm = this;
    var countDownDate = new Date(Date.UTC(2017, 08, 15, 18, 14)).getTime();

    vm.State = 0;
    vm.CCValue = 0;
    /*vm.ETHValue = 0;*/
    vm.multiplicator = 0;

    vm.ChangeState = function (value) {
      vm.State = value;
    }
    vm.CChange = function ()
    {
     /* var cc_value = Number(vm.CCValue);
      var divider = 2000;
      if(cc_value)*/
      vm.ETHValue = Number((vm.CCValue / 2000).toFixed(2));
    }

    vm.ETHChange = function ()
    {
      var eth_value = Number(vm.ETHValue);
      vm.multiplicator = 3000;
      /*if(eth_value >= 1 && eth_value < 5)
        vm.multiplicator = 1600;
      else if(eth_value >= 5 && eth_value < 10)
        vm.multiplicator = 1800;
      else if(eth_value >= 10 && eth_value < 25)
        vm.multiplicator = 2000;
      else if(eth_value >= 25 && eth_value < 50)
        vm.multiplicator = 2200;
      else if(eth_value >= 50)
        vm.multiplicator = 2500;*/
      vm.CCValue = vm.ETHValue * vm.multiplicator;
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
    vm.GoToHomeIco = function () {
      $scope.$emit("go-home-ico");
    }
    return vm;
  }]);
