app.factory('Auth', function($http){
  let server = 'http://localhost:3000/auth/'

  function getUser() {
    if(localStorage.token) {
      return JSON.parse(atob(localStorage.token.split('.')[1])).user;
    } else {
      return null;
    }
  }

  function login(email, password) {
    return $http.post(server + 'login', {
      email: email,
      password: password
    }).then(function (result) {
      localStorage.token = result.data.token;
      return getUser();
    })
  }

  function signup(user) {
    return $http.post(server + 'signup', user).then(function (result) {
      localStorage.token = result.data.token;
      return getUser();
    });
  }

  return {
    getUser: getUser,
    login: login,
    signup: signup
  }
});
