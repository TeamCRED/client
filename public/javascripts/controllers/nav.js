app.controller('nav', function ($scope, Auth) {
  $scope.loggedIn = function() {
    var user = Auth.getUser();
    return user ? user.email : null;
  }
})
