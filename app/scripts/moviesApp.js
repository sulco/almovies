'use strict';

angular.module('moviesApp', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ui.router',
  'moviesApp.movies',
  'moviesApp.bookmarks',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('finder', {
        url: '/',
        views: {
            'bookmarks': {
                templateUrl: 'partials/bookmarks-list.html',
                controller: 'BookmarksCtrl'
            },
            'finder': {
                templateUrl: 'partials/movies-list.html',
                controller: 'MoviesCtrl'
            },
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
