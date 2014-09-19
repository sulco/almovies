'use strict';

angular.module('moviesApp.movies')

    .directive('poster', function () {

        var posterSizes = {
            xs: 'w92',
            sm: 'w154',
            md: 'w185',
            lg: 'w342',
            xl: 'w500',
            xxl: 'w780',
            original: 'original'
        };

        return {
            restrict: 'E',
            replace: true,
            template: '<img alt="">',
            link: function (scope, element, attrs) {
                var width = posterSizes.md;
                if (attrs.size) {
                    width = posterSizes[attrs.size];
                }

                attrs.$observe('path', function (path) {
                    if (path) {
                        element.attr('src', 'http://image.tmdb.org/t/p/' + width + path);
                    } else {
                        if (width === 'original') {
                            width = posterSizes.xxl;
                        }
                        element.attr('src', 'http://dummyimage.com/'+width.substr(1)+'x7:10&text=brak+okładki');
                    }
                });

                /* scope.$watch(function () {
                    return attrs.path;
                   }, function (path) {
                    if (path) {
                        element.attr('src', 'http://image.tmdb.org/t/p/' + width + path);
                    } else {
                        if (width === 'original') {
                            width = posterSizes.xxl;
                        }
                        element.attr('src', 'http://dummyimage.com/'+width.substr(1)+'x7:10&text=brak+okładki');
                    }
                 });*/
            }
        };
    });