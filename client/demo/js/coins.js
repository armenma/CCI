var app = angular.module('app', []);

app.controller('mainCtrl', ['$scope',  function ($scope) {

  $scope.balance = 18300;

  $scope.CoinData = {
    Coins:[
      {Name:"Bitcoin BTC", Index:6100, Coin:"BTC", id:1},
      {Name:"Ccoin CCO", Index:0.1, Coin:"CCO", id:2},
      {Name:"Ethereum ETH", Index:300, Coin:"ETH", id:3},
      {Name:"Litecoin LTC", Index:58, Coin:"LTC", id:4},
      {Name:"USD", Index:1, Coin:"USD", id:5},
      {Name:"EUR", Index:1.18, Coin:"EUR", id:6},
      {Name:"RUB", Index: 0.0174, Coin:"RUB", id:7}
    ],
    SelectedCoin:{Name:"Bitcoin BTC", Index:6100, Coin:"BTC", id:1}
  }
}]);
