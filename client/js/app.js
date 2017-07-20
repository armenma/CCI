// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var app = angular.module('app', ['lbServices', 'ui.router', 'nvd3']);

app.factory('localFactory', ['coreFactory', function (coreFactory) {

  return coreFactory;
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
                                                              $urlRouterProvider) {
  $stateProvider
    .state('crypto-currencies', {
      url: '/crypto-currencies',
      templateUrl: 'views/main.html',
      controller: 'GetCryptoCurrencies'
    })
    .state('ico', {
      url: '/ico',
      templateUrl: 'views/ico.html',
      controller: 'ICOController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

  $urlRouterProvider.otherwise('/home');
}]).run(['coreFactory', function (coreFactory) {
  coreFactory.Run();
}]);

