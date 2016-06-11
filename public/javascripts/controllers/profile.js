app.controller('profile', function($scope, $http){
  console.log('profile controller loaded')
  var award = 'http://localhost:3000/awards';
  var userID = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImRsaW5jaDMzQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJEZXJpayIsImxhc3RfbmFtZSI6IkxpbmNoIiwiYmlydGhkYXkiOiIxOTkxLTA0LTI2VDAwOjAwOjAwLjAwMFoifSwiaWF0IjoxNDY1NjI3MjM2LCJleHAiOjE0NjU3MTM2MzZ9.BBCT75E1VreQxo_ldlxIGL1zIu8l4yGIH4lv_287NGU";

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
