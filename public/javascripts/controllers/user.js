app.controller('user', function($scope, $http, $state, Auth, $location, $timeout, $stateParams, utils) {
  var server = utils.server;
  var award = server + 'awards';
  $scope.user = Auth.getUser();
  $('.tooltipped').tooltip('remove');
  $('.tooltipped').tooltip({delay: 50});
  if (!$scope.user || typeof $stateParams.id == 'undefined') {
    $state.go('dashboard.login');
  } else if ($stateParams.id) {
    $scope.loading = true;
    var id = $stateParams.id;

    $http.get(server + 'user/' + id)
      .then(function(result) {
        $scope.user = result.data;
        console.log($scope.user)
      });

    $http.get(server + 'awards/' + id)
      .then(function(result) {
        $scope.awards = result.data;
        $scope.loading = false;
      });

    $http.get(server + 'batches/' + id)
      .then(function(result) {
        $scope.batches = result.data;
        $scope.batches.forEach(function(batch) {
          $http.get(server + 'beer/' + batch.beer_id).then(function(result) {
            batch.beer = result.data;
          });
        });
      });

    $http.get(server + 'employees/' + id)
      .then(function(result) {
        $scope.employees = result.data;
      });
  }

  $http.get(server + 'buddies/' + id)
    .then(function(result) {
      $scope.buddies = result.data;
    });
});
