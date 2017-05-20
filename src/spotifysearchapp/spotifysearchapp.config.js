(function() {
  'use strict';

  angular.module('SpotifySearchApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    // Defining UI States
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/spotifysearchapp/home/home.template.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })

    ;

    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
