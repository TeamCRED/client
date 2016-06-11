app.controller('MainController', function($scope, $http){
  var server = 'https://know-your-can.herokuapp.com/';

  $scope.beers = ["India Pale Ale","White Rascal", "Joe's"];
  $scope.brew = {};

  $scope.submit = function(){
    $http.get(
      server + $scope.brew.beer_id
      + '?quote=' + $scope.brew.quote
      + '&date=' + $scope.brew.date
      + '&time=' + $scope.brew.time
      + '&tank=' + $scope.brew.tank)
      .then(function (result) {
        console.log(result);
        $scope.data = result.data
      })
  }
});
