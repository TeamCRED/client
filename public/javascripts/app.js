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
      templateUrl: 'partials/profile.html'
    })
    .state('dashboard.your-brew', {
      url: '/your-brew',
      templateUrl: 'partials/your-brew.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html'
    });
  });
