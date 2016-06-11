app.controller('addBeer', function($scope, $http, Auth){
  $('.tooltipped').tooltip('remove');
  $scope.user = Auth.getUser();
  $('.tooltipped').tooltip({delay: 50});

  $scope.getBatch = function(){
    return localStorage.getItem('batchData')
  }

  $scope.loggedIn = function() {
    var user = Auth.getUser();
    return user ? user.email : null;
  }

});
