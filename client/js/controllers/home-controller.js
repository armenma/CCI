angular
  .module('app')
  .controller('HomeController', ['$scope', '$rootScope', '$controller', '$document', 'authService', function($scope, $rootScope, $controller, $document, authService)
  {

    /*if(IsFirstTime)document.getElementById("bgvid").play();*/

    $controller('ICOController', { $scope: $scope });

    $scope.Language = {

    };

    $scope.showAlert = function (message) {
      alert(message);
    }

    $scope.WalletHref = $rootScope.isAuthenticated ? "#/wallet" : "#/login";
    $scope.IcoHref = "#/ico";

   /* authService.getCurrentUser().then(function (response) {
      console.log(response);
    }, function (err) {
      console.log(err);
    });*/

    /*var scope = $rootScope;
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
    };*/

    setTimeout(function(){
      jQuery('.ccore-team-slick_slider-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      });
    }, 10);

  }]);
