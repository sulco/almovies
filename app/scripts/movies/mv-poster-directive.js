'use strict';

angular.module('moviesApp.movies')

.directive('mvPoster', function () {


    var posterSizes = {
        xs: 92,
        sm: 154,
        md: 185,
        lg: 342,
        xl: 500,
        xxl: 780
    };
    var width = posterSizes.md;

    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function (scope, element, attrs) {

            element.addClass('mv-poster');

            if (attrs.size) {
                width = posterSizes[attrs.size];
            }

            attrs.$observe('path', function (path) {
                if (path) {
                    element.attr('src', 'http://image.tmdb.org/t/p/w' + width + path);
                } else {
                    element.attr('src', 'http://dummyimage.com/'+width+'x7:10&text=brak+okładki');
                }
            });
        }
    };

});