var app = angular.module('knowYourBrewApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'partials/landing.html',
      controller: 'MainController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboard'
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
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'login'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'partials/signup.html',
      controller: 'signup'
    });
  });
