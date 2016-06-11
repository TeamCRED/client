app.controller('nav', function ($scope, Auth, $state) {
  $scope.loggedIn = function() {
    var user = Auth.getUser();
    return user ? user.email : null;
  }

  $scope.logOut = function () {
    localStorage.clear();
    $state.go('landing');
  }
})
