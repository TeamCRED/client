app.controller('dashboard', function($scope, $http, Auth){
  if(Auth.getUser()) {
    Auth.getUser().then(function (user) {
      $scope.user = user;
    })
  }
  Materialize.toast('Login to join the game', 4000)
  $('.tooltipped').tooltip({delay: 50});
});
