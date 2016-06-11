app.controller('dashboard', function($scope, $http, Auth){
  Auth.getUser().then(function (user) {
    $scope.user = user;
  })
});
