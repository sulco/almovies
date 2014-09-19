'use strict';

angular.module('moviesApp.movies')

/*
 * The Movie Database API service
 * API docs: http://docs.themoviedb.apiary.io/
 */

.factory('moviesService', function ($http, APIKEY) {

    var apiUrl = 'http://api.themoviedb.org/3/search/movie';

    return {
        search: function (query) {
            var config = {
                params: {
                    query: query,
                    api_key: APIKEY
                }
            };
            return $http.get(apiUrl, config).then(function (response) {
                return response.data.results;
            });
        }
    };

});