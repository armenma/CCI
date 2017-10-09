angular
    .module('app')
    .controller('LoginController', ['$scope', '$state', 'authService', '$location', 'User', function ($scope, $state, authService, $location, User) {

      $scope.User = {
        email:"",
        password:""
      };

      function validateEmail (val)
      {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(val);
      }

      $scope.login = function ()
      {
        var isValidEmail = validateEmail($scope.User.email);

        if(isValidEmail && $scope.User.password.length > 0)
        {
          authService.login($scope.User.email, $scope.User.password).then(function (response) {
            $location.path('/home');
            console.log(response);

            location.reload();

            /*$rootScope.isAuthenticated = User.isAuthenticated();

            if($rootScope.isAuthenticated)
            {
              User.getCurrent().$promise.then(function (response) {
                console.log(response);
                $rootScope.userData = response.data;
              }, function (err) {
                console.log(err);
              });
            }*/

          }, function (err) {
            alert(err.data.error.message);
            console.log(err);
          });
        }
        else
        {
          alert('Please fill in all required fields');
        }

      };
    }]);
