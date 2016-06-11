app.controller('redeem', function($scope, Auth, $state){
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip('remove');
  $('ul.tabs').tabs();
  $scope.user = Auth.getUser();
  $('.tooltipped').tooltip({delay: 50});
});
