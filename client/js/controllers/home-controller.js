angular
  .module('app')
  .controller('HomeController', ['$scope', 'CryptoCurrencyIndexes','$interval', '$timeout', function($scope, CryptoCurrencyIndexes, $interval, $timeout)
  {
    $scope.Language = {

    };

    $scope.CryptoCurrencyIndexes = [];
    var timeoutPromise;

    function GetCryptoCurrencyIndexes() {
      CryptoCurrencyIndexes
        .find()
        .$promise
        .then(function(results) {
          $scope.CryptoCurrencyIndexes = results;
          $scope.data = [{
            values: $scope.CryptoCurrencyIndexes,
            key: 'Indexes',
            color: '#7777ff',
            area: true
          }];
        }, function (err) {
          if(timeoutPromise)$timeout.cancel(timeoutPromise);
          timeoutPromise = $timeout(function () {
            GetCryptoCurrencyIndexes();
          }, 500);
        });
    }

    GetCryptoCurrencyIndexes();
    var intervalPromise = $interval(function () {
      GetCryptoCurrencyIndexes()
    }, 300000);

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){
          var t = new Date(d.date);
          /*var n = t.toLocaleDateString();*/
          return t;
        },
        y: function(d){
          return d.value;
        },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function(e){ console.log("stateChange"); },
          changeState: function(e){ console.log("changeState"); },
          tooltipShow: function(e){ console.log("tooltipShow"); },
          tooltipHide: function(e){ console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: '',
          tickFormat: function(d){
            return d3.time.format('%Y-%m-%d:%H:%M')(new Date(d));
          },
          ticks: 6

        },
        yAxis: {
          axisLabel: '',
          tickFormat: function(d){
            return d.toFixed(2);
          },
          axisLabelDistance: -10
        },
        callback: function(chart){
          console.log("!!! lineChart callback !!!");
        }

      },
      title: {
        enable: false,
      },
      subtitle: {
        enable: false,
      },
      caption: {
        enable: false,
      }
    };

    $scope.$on('$destroy', function() {
      if(timeoutPromise)$timeout.cancel(timeoutPromise);
      if(intervalPromise)$interval.cancel(intervalPromise);
    });


  }]);
