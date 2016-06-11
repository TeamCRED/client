app.controller('profile', function($scope, $http, $state, Auth, $location) {
  $('.tooltipped').tooltip('remove');
  var server = 'http://localhost:3000/';
  $scope.user = Auth.getUser();
  $scope.batchRedirect = function () {
    $location.path('/dashboard/your-brew?beer_id=white-rascal&tank=B4')
  }
  if(!$scope.user) {
    $state.go('login');
  } else {
    $scope.loading = true;

    $http.get(server + 'awards', {
        headers: {
          "Authorization": "Bearer " + localStorage.token,
        }
      })
      .then(function(result) {
        $scope.awards = result.data;
        $scope.loading = false;
      });

    $http.get(server + 'batches/' + $scope.user.id)
    .then(function (result) {
      $scope.batches = result.data;
      $scope.batches.forEach(function (batch) {
        $http.get(server + 'beer/' + batch.beer_id).then(function (result) {
          batch.beer = result.data;
        });
      });
    });

    $http.get(server + 'employees/' + $scope.user.id)
    .then(function (result) {
      $scope.employees = result.data;
    });
  }

  $http.get(server + 'buddies/' + $scope.user.id)
  .then(function (result) {
    $scope.buddies = result.data;
    console.log(result.data);
  });
});
