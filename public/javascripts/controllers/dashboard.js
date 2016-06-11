app.controller('dashboard', function($scope, $http, Auth){
  $('.tooltipped').tooltip('remove');
  $scope.user = Auth.getUser();
  if(!$scope.user) {
    Materialize.toast('Login to join the game', 4000);
  }
  $('.tooltipped').tooltip({delay: 50});

  $scope.getBatch = function(){
    return localStorage.getItem('batchData')
  }

});
