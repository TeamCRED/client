app.controller('MainController', function($scope, $http, $state, Auth, utils){
  $('.tooltipped').tooltip('remove');
  $('.tooltipped').tooltip({delay: 50});

  $scope.loggedIn = function() {
    var user = Auth.getUser();
    return user ? user.email : null;
  }

  $scope.getBatch = function(){
    return localStorage.getItem('batchData')
  }

  var server = utils.server;

  $http.get(server + 'beers')
    .then(function(result){
      $scope.beers = result.data;
    })


  $scope.brew = {};

  $scope.submit = function(){
    var questCompleted = localStorage.getItem('quest')
    if ($scope.brew.beer_id == "ipa" && !questCompleted) {
      localStorage.setItem('quest', 'true');
      localStorage.setItem('redirect', 'true')
    }
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
