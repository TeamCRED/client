app.controller('redeem', function($scope, Auth, $state, $http){
  var server = 'http://localhost:3000/';
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip('remove');
  $('ul.tabs').tabs();
  $scope.user = Auth.getUser();
  $('.tooltipped').tooltip({delay: 50});

  $http.get(server + 'points/' + $scope.user.id)
      .then(function(result) {
          $scope.points = result.data;
          console.log(result.data);
      });
});
