var app = angular.module('knowYourBrewApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/dashboard/landing');
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboard'
    })
    .state('dashboard.landing', {
      url: '/landing',
      templateUrl: 'partials/landing.html',
      controller: 'MainController'
    })
    .state('dashboard.profile', {
      url: '/profile',
      templateUrl: 'partials/profile.html',
      controller: 'profile'
    })
    .state('dashboard.your-brew', {
      url: '/your-brew?beer_id&quote&date&time&tank',
      templateUrl: 'partials/your-brew.html',
      controller: 'yourBrew'
    })
    .state('dashboard.batch', {
      url: '/batch/:batch_id',
      templateUrl: 'partials/your-brew.html',
      controller: 'yourBrew'
    })
    .state('dashboard.redeem', {
      url: '/redeem',
      templateUrl: 'partials/redeem.html',
      controller: 'redeem'
    })
    .state('dashboard.addBeer', {
      url: '/addBeer',
      templateUrl: 'partials/addBeer.html',
      controller: 'addBeer'
    })
    .state('dashboard.login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'login'
    })
    .state('dashboard.signup', {
      url: '/signup',
      templateUrl: 'partials/signup.html',
      controller: 'signup'
    });
  });
