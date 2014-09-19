'use strict';

angular.module('moviesApp.movies')

/*
 * The Movie Database API service
 * API docs: http://docs.themoviedb.apiary.io/
 */

.factory('moviesService', function ($http, $window, $q, APIKEY) {

    var apiUrl = 'http://api.themoviedb.org/3/search/movie';

    return {

        lastQuery: function () {
            return $window.localStorage.query;
        },

        search: function (query) {
            var deferred = $q.defer();

            if (!query) {
                deferred.resolve([]);
                return deferred.promise;
            }

            if ($window.localStorage.query === query && $window.localStorage.movies) {    
                
                var movies = JSON.parse($window.localStorage.movies);
                deferred.resolve(movies);
                
                return deferred.promise;
            }

            $window.localStorage.query = query;

            var config = {
                params: {
                    query: query,
                    api_key: APIKEY
                }
            };
            return $http.get(apiUrl, config).then(function (response) {
                $window.localStorage.movies = JSON.stringify(response.data.results);
                return response.data.results;
            });
        }
    };

});