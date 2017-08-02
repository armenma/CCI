angular
  .module('app')
  .controller('GetCryptoCurrencies', ['$scope', '$state', '$filter', 'CryptoCurrencies', 'CryptoCurrencyIndexes', '$interval', '$timeout', function($scope,
      $state, $filter, CryptoCurrencies, CryptoCurrencyIndexes, $interval, $timeout) {

    $scope.CryptoCurrencies = [];
    $scope.CryptoCurrencyIndexes = [];
    $scope.MainCryptoCurrencies = [];
    var timeoutPromise;


    function GetCryptoCurrencies() {
      CryptoCurrencies
        .find()
        .$promise
        .then(function(results) {
          $scope.CryptoCurrencies = results.sort(compare);

        }, function (err) {
          console.log("ERROR CLIENT GetCryptoCurrencies   " + err)
        });
    };

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

          if(timeoutPromise)$timeout.cancel(timeoutPromise);

        }, function (err) {

          if(timeoutPromise)$timeout.cancel(timeoutPromise);
          timeoutPromise = $timeout(function () {
            GetCryptoCurrencyIndexes();
          }, 500);

        });
    }
    GetCryptoCurrencies();
    GetCryptoCurrencyIndexes();

    var intervalPromise = $interval(function () {
      GetCryptoCurrencyIndexes()
    }, 300000);

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
