var app = angular.module('knowYourBrewApp', ['ui.router', 'ngAnimate', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'partials/landing.html',
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboard'
    })
    .state('dashboard.profile', {
      url: '/dashboard/profile',
      templateUrl: 'partials/profile.html'
    })
    .state('dashboard.your-brew', {
      url: '/dashboard/your-brew',
      templateUrl: 'partials/profile.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html'
    });
  });
