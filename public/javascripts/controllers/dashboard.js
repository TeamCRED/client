app.controller('dashboard', function($scope, $http, Auth){
  $scope.user = Auth.getUser();
  if(!$scope.user) {
    Materialize.toast('Login to join the game', 4000);
  }
  $('.tooltipped').tooltip({delay: 50});
});
