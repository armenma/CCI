angular
  .module('app')
  .controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope)
  {

    /*if(IsFirstTime)document.getElementById("bgvid").play();*/

    $scope.Language = {

    };

    var scope = $rootScope;
    $scope.CurrentIndex = 0;

    scope.$watch('CryptoCurrencyIndexes', function(newValue, oldValue) {
      $scope.data = [{
        values: newValue,
        key: 'Indexes',
        color: '#7777ff',
        area: true
      }];
      if(newValue.length > 0)$scope.CurrentIndex = newValue[newValue.length - 1].value.toFixed(2);
    });

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

  }]);
