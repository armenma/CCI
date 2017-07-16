// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('crypto-currencies', {
        url: '/crypto-currencies',
        templateUrl: 'views/main.html',
        controller: 'GetCryptoCurrencies'
      })
      .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/home');
  }]).run(function () {
  $.ajax({
    "url": 'i18n/' + siteOptions.Language + '.json',
    async: false,
    success: function (systemJson) {

      i18n.Add(systemJson);
    }
  });
});

var i18n = {

  Translations: {},

  Add: function (words) {

    for (var key in words) {

      this.Translations[key] = words[key];
    }
  },

  Translate: function (word) {

    return this.Translations[word] || word;
  }
};
app.filter('i18n', [function () {

  return function (word) {

    return i18n.Translate(word);
  };

}]);
