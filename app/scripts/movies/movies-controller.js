'use strict';

angular.module('moviesApp.movies')

.controller('MoviesCtrl', function ($scope, moviesService, bookmarksService) {

    $scope.query = moviesService.lastQuery();

    $scope.search = function (query) {
        moviesService.search(query).then(function (movies) {
            $scope.movies = movies;
        });
    };

    if ($scope.query) {
        $scope.search($scope.query);
    }

    $scope.bookmark = function (movie) {
        bookmarksService.add(movie);
    };

});