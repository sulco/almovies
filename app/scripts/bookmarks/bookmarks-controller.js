'use strict';

angular.module('moviesApp.bookmarks')

.controller('BookmarksCtrl', function ($scope, bookmarksService) {

    $scope.bookmarks = bookmarksService.list;

    $scope.remove = function (movie) {
        bookmarksService.remove(movie.id);
    };

});