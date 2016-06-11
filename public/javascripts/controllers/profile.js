app.controller('profile', function($scope, $http, Auth) {
  var award = 'http://localhost:3000/awards';

  $scope.user = Auth.getUser();
  console.log($scope.user);

  $http.get(award, {
      headers: {
        "Authorization": "Bearer " + localStorage.token,
      }
    })
    .then(function(result) {
      $scope.awards = result.data;
      console.log($scope.awards);
    });
});
