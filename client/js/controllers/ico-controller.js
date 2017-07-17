angular
  .module('app')
  .controller('ICOController', ['$scope', '$interval',  function($scope, $interval)
  {
    var countDownDate = new Date("Aug 1, 2017 15:37:25").getTime();

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
  }]);
