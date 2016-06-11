app.controller('yourBrew', function($scope, $http, $stateParams){
  $('.tooltipped').tooltip('remove');
  var server = 'http://localhost:3000/';

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
        $scope.batch = result.data.batch;
        $scope.employees = result.data.employees;
        $scope.users = result.data.users;
      } else {
        $scope.message = "Brew not found! :(";
      }
      $scope.loading = false;
    })
});
