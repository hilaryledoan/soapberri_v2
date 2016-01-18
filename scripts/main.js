angular.module('starterApp', [
    'ui.router'
  ])

.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider

      .state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      })
    ;

    $urlRouterProvider.otherwise('/');

  });


