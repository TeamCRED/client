app.controller('dashboard', function($scope, $http){
  var server = 'https://know-your-can.herokuapp.com/';
  var beerRequested = 'white-rascal';
  $scope.test = 'something something';
  $http.get(server + beerRequested)
    .then(function (result) {
      $scope.beer = result.data
      
      // $scope.$apply;
    })
});
