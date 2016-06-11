app.controller('profile', function($scope, $http, Auth) {
  var award = 'http://localhost:3000/awards';

  $scope.user = Auth.getUser();
  console.log($scope.user);
  $scope.loading = true;

  $http.get(award, {
      headers: {
        "Authorization": "Bearer " + localStorage.token,
      }
    })
    .then(function(result) {
      $scope.awards = result.data;
      $scope.loading = false;
      console.log($scope.awards);
    });
});
