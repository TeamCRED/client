app.factory('utils', function () {
  var production = "https://know-your-can.herokuapp.com/";
  var development = "http://localhost:3000/";
  var local = true;

  return {
    server: local ? development : production
  }
});
