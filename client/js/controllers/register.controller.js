angular
  .module('app')
  .controller('RegisterController', ['$scope', '$state', 'authService', '$location', function($scope, $state, authService, $location) {

    $scope.IsBusinnes = {value:false};

    $scope.User = {
      email:"",
      password:"",
      username:"",
      country:"",
      companyName:"",
      isBusiness:false
    };

    function validateEmail (val)
    {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(val);
    }


    $scope.ChangeFormType = function (value)
    {
      $scope.IsBusinnes.value = value;
    }

    $scope.register = function()
    {
      var isValidData = false;

      var isValidEmail = validateEmail($scope.User.email);

      if(!$scope.IsBusinnes.value)
      {
        if(isValidEmail && $scope.User.password.length > 0 && $scope.User.username.length > 0)
        {
          $scope.User.isBusiness = false;
          isValidData = true;
        }
      }
      else
      {
        if(isValidEmail && $scope.User.password.length > 0 && $scope.User.username.length > 0 &&
          $scope.User.country.length > 0 &&  $scope.User.companyName.length > 0)
        {
          $scope.User.isBusiness = true;
          isValidData = true;
        }
      }

      if(isValidData)
      {
        authService.register($scope.User.email, $scope.User.password, $scope.User).then(function (response) {
          console.log(response);
          $location.path('/login');
        }, function (err) {
          console.log(err);
          alert(err.data.error.message);
        });
      }
      else
      {
        alert('Please fill in all required fields');
      }

    }
  }]);
