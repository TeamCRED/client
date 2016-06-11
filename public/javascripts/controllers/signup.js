app.controller('signup', function ($scope, Auth, $state) {
  $scope.user = {};
  $scope.signup = function() {
    $scope.loading = true;
    Auth.signup($scope.user).then(function(user){
      $scope.user = user;
      $state.go('dashboard.profile');
      $scope.loading = false;
    }).catch(function(result) {
      $scope.error = result.data.message || result.data.error;
      $scope.loading = false;
    });
  }
})
