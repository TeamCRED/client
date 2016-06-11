app.controller('redeem', function($scope, Auth, $state, $http, utils){
  var server = utils.server;
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip('remove');
  $('ul.tabs').tabs();
  $scope.user = Auth.getUser();
  $('.tooltipped').tooltip({delay: 50});

  $http.get(server + 'points/' + $scope.user.id)
      .then(function(result) {
          $scope.points = result.data;
      });
});
