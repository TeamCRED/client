app.controller('dashboard', function($scope, $http){
  var server = 'http://localhost:3000/';
  var beerRequested = 'beer/white-rascal';
  var batchRequested = 'white-rascal'
  var tank = 'B4';
  $scope.test = 'something something';
  $http.get(server + beerRequested)
    .then(function (result) {
      $scope.beer = result.data
      return $http.get(server + 'batch?beer_id=' + batchRequested + "&tank=" + tank)
    }).then(function (result) {
      console.log(result);
      $scope.batch = result.data.batch;
      $scope.employees = result.data.employees;
      $scope.users = result.data.users;
    })
});
