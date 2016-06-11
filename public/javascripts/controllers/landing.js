app.controller('MainController', function($scope, $http){
  var server = 'http://localhost:3000/';

  $http.get(server + 'beers')
    .then(function(result){
      $scope.beers = result.data;
    })


  $scope.brew = {};

  $scope.submit = function(){
    let quote = $scope.brew.quote || '';
    let date = $scope.brew.date || '';
    let time = $scope.brew.time || '';
    let tank = $scope.brew.tank || '';

    $http.get(
      server + 'batch?beer_id=' + $scope.brew.beer_id
      + '&quote=' + quote
      + '&date=' + date
      + '&time=' + time
      + '&tank=' + tank)
      .then(function(result) {
        $scope.data = result.data
        console.log(result);
      })
  }
});
