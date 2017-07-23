/**
 * Created by armen on 7/11/2017.
 */
angular
  .module('app')
  .controller('MainController', ['$scope', '$anchorScroll', '$location', 'coreFactory', '$state', function($scope, $anchorScroll, $location, coreFactory, $state)
  {
    $scope.MenuItemSelectedIndex = -1;
    $scope.SelectedLanguage = coreFactory.Language;
    $scope.SelectMenuItem = function (index)
    {
      $scope.MenuItemSelectedIndex = index ==  $scope.MenuItemSelectedIndex ? -1 : index;

      if(index === 3) $state.go('ico');
      if(index === 2) $state.go('whitepaper');
      if(index === 4) $state.go('crypto-currencies');

    }

    $scope.CloseMenu = function ()
    {
      $scope.MenuItemSelectedIndex = -1;
    }


    $scope.ChangeLanguage = function (value, event)
    {
      event.stopPropagation();
      //$scope.SelectedLanguage = value;
      coreFactory.SetLanguage(value);
      location.reload();
    }

    $scope.GoToById = function (id)
    {
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
  }]);

