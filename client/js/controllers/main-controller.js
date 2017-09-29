/**
 * Created by armen on 7/11/2017.
 */
angular
  .module('app')
  .controller('MainController', ['$scope', '$anchorScroll', '$location', 'coreFactory', '$state', "$timeout", "UserEmails", "$interval", "$rootScope", function($scope, $anchorScroll, $location, coreFactory, $state, $timeout, UserEmails, $interval, $rootScope)
  {
    var countDownDate = new Date(Date.UTC(2017, 9, 1, 18, 14)).getTime();

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

    $scope.MenuItemSelectedIndex = -1;
    $scope.SelectedLanguage = coreFactory.Language;

    $scope.Whitepaper = $scope.SelectedLanguage === "EN" ? "EN-whitepaper.pdf" : "РУ-whitepaper.pdf";
    $scope.Benefits = $scope.SelectedLanguage === "EN" ? "EN-profit.pdf" : "РУ-profit.pdf";

    $scope.Comming = function () {
      alert('Coming Soon')
    }
    $scope.SelectMenuItem = function (index)
    {
      $scope.MenuItemSelectedIndex = index ==  $scope.MenuItemSelectedIndex ? -1 : index;

      if(index === 3) $state.go('ico');
      if(index === 2) $state.go('whitepaper');
      if(index === 4) $state.go('crypto-currencies');
      if(index === 5) $state.go('profit');

    }

    $scope.AddEmail = function (form)
    {
      if(form.$valid)
      {
        UserEmails
          .create({'content': $scope.Email.text})
          .$promise
          .then(function() {
            $scope.Email.text = '';
          });
      }
    }

    $scope.CloseMenu = function ()
    {
      $scope.MenuItemSelectedIndex = -1;
    }

    $scope.Email = {text:""}

    /*$scope.SendEmail = function () {
      window.open('mailto:armen.mardoyan@outlook.com?subject=subject&body=' + $scope.Email.text);
    }*/

    $scope.Languages = {
      availableLanguages: [
        {id: '1', name: 'EN'},
        {id: '2', name: 'РУ'}
      ],
      selectedLanguage: {id: '1', name: 'EN'}
    };

    if($rootScope.language == 'EN')
      $scope.Languages.selectedLanguage = {id: '1', name: 'EN'}
      else $scope.Languages.selectedLanguage = {id: '2', name: 'РУ'}



    $scope.ChangeLanguage = function ()
    {
      coreFactory.SetLanguage($scope.Languages.selectedLanguage.name);
      location.reload();
    }

    $scope.GoToTeam = function ()
    {
      $state.go("home");
      timeoutPromise =  $timeout(function(){$scope.GoToById("our-team", true)},200);
    }

    $scope.GoToRoadMap = function () {
      $state.go("home");
      timeoutPromise =  $timeout(function(){$scope.GoToById("roadmap", true)},200);
    }

    $scope.GoToById = function (id, isClose)
    {
      if(isClose)
      {
        $("#ccore-header-menu_button-button-opened").hide();
        $("#ccore-header-menu_button-button-closed").show();

        $( '.ccore-menu' ).slideToggle( "slow", function() {

        });
      }

      var newHash = id;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(id);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    }

    $scope.Language = {
      availableLanguages: [
        {id: '1', name: 'English'},
        {id: '2', name: 'Russian'}
      ],
      selectedLanguage: {id: '1', name: 'English'}
    };

    var timeoutPromise;

    $scope.$on('go-home-ico', function (event) {
      $state.go("home");
     timeoutPromise =  $timeout(function(){$scope.GoToById("home-ico-box")},200);
    });

    $scope.$on('go-home-team', function (event) {
    $state.go("home");
    timeoutPromise =  $timeout(function(){$scope.GoToById("our-team")},200);
  });

    $scope.$on("$destroy", function() {
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }
      if (intervalPromise) {
        $interval.cancel(intervalPromise);
      }
    });
  }]);

