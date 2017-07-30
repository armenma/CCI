// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var app = angular.module('app', ['lbServices', 'ui.router', 'nvd3', 'ngOnload']);

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
      controller: 'ICOController',
      controllerAs: 'vm'
    })
    .state('modules', {
      url: '/modules',
      templateUrl: 'views/modules.html',
      controller: 'ModulesController'
    })
    .state('whitepaper', {
      url: '/whitepaper',
      templateUrl: 'views/whitepaper.html',
      controller: 'StaticPagesController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

  $urlRouterProvider.otherwise('/home');
}]).run(['coreFactory', '$rootScope', function (coreFactory, $rootScope) {
  $rootScope.language = language;
  coreFactory.Run();

}]);

