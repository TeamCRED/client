app.controller('MainController', function($scope, $http, $state){
  var server = 'http://localhost:3000/';

  $http.get(server + 'beers')
    .then(function(result){
      $scope.beers = result.data;
      console.log($scope.beers);
    })


  $scope.brew = {};

  $scope.submit = function(){
    let quote = $scope.brew.quote || '';
    let date = $scope.brew.date || '';
    let time = $scope.brew.time || '';
    let tank = $scope.brew.tank || '';

    $state.go('dashboard.your-brew', {
      beer_id: $scope.brew.beer_id,
      quote: quote,
      date: date,
      time: time,
      tank, tank
    });
  }
});