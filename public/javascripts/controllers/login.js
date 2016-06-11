app.controller('login', function($scope, Auth, $state){
  if(Auth.getUser()) {
    $state.go('dashboard.profile');
  }

  $scope.login = function() {
    Auth.login($scope.email, $scope.password).then(function (user) {
      $scope.user = user;
      $state.go('dashboard.profile');
    })
  }
});
