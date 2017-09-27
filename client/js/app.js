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
    .state('profit', {
      url: '/profit',
      templateUrl: 'views/profit.html',
      controller: 'StaticPagesController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('login', {
    url: '/login',
    templateUrl: 'views/login.view.html',
    controller: 'LoginController'
    })
    .state('register', {
    url: '/register',
    templateUrl: 'views/register.view.html',
    controller: 'RegisterController'
  });

  $urlRouterProvider.otherwise('/home');
}]).run(['coreFactory', '$rootScope', 'User', function (coreFactory, $rootScope, User) {
  $rootScope.language = language;
  $rootScope.CryptoCurrencyIndexes = [];

  console.log("USER: " + User.isAuthenticated());

  /*var timeoutPromise;

  function GetCryptoCurrencyIndexes() {
    CryptoCurrencyIndexes
      .find()
      .$promise
      .then(function(results) {
        $rootScope.CryptoCurrencyIndexes = results;
      }, function (err) {
        if(timeoutPromise)$timeout.cancel(timeoutPromise);
        timeoutPromise = $timeout(function () {
          GetCryptoCurrencyIndexes();
        }, 200);
      });
  }

  GetCryptoCurrencyIndexes();
  var intervalPromise = $interval(function () {
    GetCryptoCurrencyIndexes();
  }, 300000);*/

  coreFactory.Run();

}]);

