app.controller('yourBrew', function($scope, $http, $stateParams, Auth, $location, $state, utils) {
  $('.tooltipped').tooltip('remove');
  $('.tooltipped').tooltip({
    delay: 50
  });

  var server = utils.server;
  var redirect = JSON.parse(localStorage.getItem('redirect'));

  if (redirect) {
    $state.go('dashboard.profile')
  }

  $scope.batch = true;

  function getBuddies(batch_id) {
    var user = Auth.getUser();
    if (user) {
      $http.get(server + 'buddies/' + user.id + '/batch/' + batch_id)
        .then(function(result) {
          $scope.buddies = result.data;
          console.log(result.data);
        });
    }
  }

  if ($stateParams.batch_id) {
    $scope.loading = true;

    getBuddies($stateParams.batch_id);

    $http.get(server + 'batch/' + $stateParams.batch_id)
      .then(result => {
        if (result.data.batch) {
          $scope.batch = result.data.batch;
          $scope.employees = result.data.employees;
          $scope.users = result.data.users;
          $http.get(server + 'beer/' + $scope.batch.beer_id)
            .then(function(result) {
              $scope.beer = result.data;
            });
        } else {
          $scope.message = "Brew not found! :(";
        }
        $scope.loading = false;
      });
  } else if ($stateParams.beer_id || $stateParams.quote || $stateParams.date || $stateParams.time || $stateParams.tank) {
    let beer_id = $stateParams.beer_id || '';
    let quote = $stateParams.quote || '';
    let date = $stateParams.date || '';
    let time = $stateParams.time || '';
    let tank = $stateParams.tank || '';

    $http.get(server + 'beer/' + beer_id)
      .then(function(result) {
        $scope.beer = result.data;
        return $http.get(server + 'batch?beer_id=' + beer_id + "&tank=" + tank + "&quote=" + quote + "&date=" + date + "&time=" + time);
      }).then(function(result) {
        if (result.data.batch) {
          localStorage.setItem('batchData', result.data.batch.id);

          $scope.batch = result.data.batch;
          $http.post(server + 'user_batch', {
            batch_id: $scope.batch.id
          }, {
            headers: {
              "Authorization": "Bearer " + localStorage.token,
            }
          }).then(function(result) {
            getBuddies($scope.batch.id);
          }).catch(function() {
            getBuddies($scope.batch.id);
          });
          $scope.employees = result.data.employees;
          $scope.users = result.data.users;
        } else {
          $scope.message = "Brew not found! :(";
        }
        $scope.loading = false;
      })
  } else {
    $scope.batch = false;
  }
});
