app.controller('profile', function($scope, $http){
  console.log('profile controller loaded')
  var award = 'http://localhost:3000/awards';
  var userID = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJlbWFpbCI6ImRsaW5jaDMzQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJFbGFuYSIsImxhc3RfbmFtZSI6IktvcGVsZXZpY2giLCJiaXJ0aGRheSI6IjE5ODAtMDQtMjZUMDA6MDA6MDAuMDAwWiJ9LCJpYXQiOjE0NjU2MzUzNTksImV4cCI6MTQ2NTcyMTc1OX0.GNUfx37-PipEv4m5oudPRxsj22F2WH6ogKMjjrKHWLs";

  $http.get(award, {
    headers: {
      "Authorization": "Bearer " + userID,
  }})
    .then(function (result) {
      console.log(result)
      // $scope.beer = result.data
      // return $http.get(server + 'batch?beer_id=' + batchRequested + "&tank=" + tank)
     })
    //.then(function (result) {
    //   console.log(result);
    //   $scope.batch = result.data.batch;
    //   $scope.employees = result.data.employees;
    //   $scope.users = result.data.users;
    // })
});
