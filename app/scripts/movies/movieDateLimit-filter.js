'use strict';

angular.module('moviesApp.movies')

.filter('movieDateLimit', function () {
    return function (movies, year, before) {


        return movies.filter(function (movie) {
            if (!year) {
                return true;
            }

            var movieYear = new Date(movie.release_date).getFullYear();
            return (before) ? movieYear >= year : movieYear <= year;
        });

    };
});