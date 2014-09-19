'use strict';

angular.module('moviesApp.movies')

.controller('MoviesCtrl', function ($scope, moviesService) {

    $scope.search = function (query) {
        moviesService.search(query).then(function (movies) {
            $scope.movies = movies;
        });
    };

});