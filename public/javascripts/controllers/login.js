app.controller('login', function($scope, Auth, $state, $stateParams){
  $('.tooltipped').tooltip('remove');
  $('ul.tabs').tabs();
  if(Auth.getUser()) {
    $state.go('dashboard.profile');
  } else if($stateParams.signup) {
    $('ul.tabs').tabs('select_tab', 'signup');
  }
  $('.tooltipped').tooltip({delay: 50});
  $scope.login = function() {
    $scope.loading = true;
    console.log($scope.email, $scope.password);
    Auth.login($scope.email, $scope.password).then(function (user) {
      $scope.user = user;
      $state.go('dashboard.profile');
      $scope.loading = false;
    })
  }
  $scope.signup = function() {
    $scope.loading = true;
    Auth.signup($scope.user).then(function(user){
      $scope.user = user;
      $state.go('dashboard.profile');
      $scope.loading = false;
    }).catch(function(result) {
      $scope.error = result.data ? result.data.message || result.data.error : "Please try again.";
      $scope.loading = false;
    });
  }
});
