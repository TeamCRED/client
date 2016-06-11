app.controller('yourBrew', function($scope, $http, $stateParams, Auth){
  $('.tooltipped').tooltip('remove');
  var server = 'http://localhost:3000/';
  if (Auth.getUser()) {
    $http.get(server + 'buddies/' + Auth.getUser().id)
    .then(function (result) {
      $scope.buddies = result.data;
      console.log(result.data);
    });
  }
  if($stateParams.batch_id) {
    $scope.loading = true;
    $http.get(server + 'batch/' + $stateParams.batch_id)
    .then(result => {
      if(result.data.batch) {
        $scope.batch = result.data.batch;
        $scope.employees = result.data.employees;
        $scope.users = result.data.users;
        $http.get(server + 'beer/' + $scope.batch.beer_id)
          .then(function (result) {
            $scope.beer = result.data;
          });
      } else {
        $scope.message = "Brew not found! :(";
      }
      $scope.loading = false;
    });
  } else {
    let beer_id = $stateParams.beer_id || '';
    let quote = $stateParams.quote || '';
    let date = $stateParams.date || '';
    let time = $stateParams.time || '';
    let tank = $stateParams.tank || '';

    console.log($stateParams);
    $scope.loading = true;


    $http.get(server + 'beer/' + beer_id)
      .then(function (result) {
        $scope.beer = result.data;
        return $http.get(server + 'batch?beer_id=' + beer_id + "&tank=" + tank + "&quote=" + quote + "&date=" + date + "&time=" + time);
      }).then(function (result) {
        if(result.data.batch) {
          localStorage.setItem('batchData', result.data.batch.id);

          $scope.batch = result.data.batch;
          $scope.employees = result.data.employees;
          $scope.users = result.data.users;
        } else {
          $scope.message = "Brew not found! :(";
        }
        $scope.loading = false;
      }).then(function(){

});
