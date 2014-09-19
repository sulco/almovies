'use strict';

describe('<poster> directive', function () {

    beforeEach(module('moviesApp'));

    var element,
        element2,
        scope;

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile(angular.element(
            '<mv-poster path="ufu65"></mv-poster>'
        ))(scope);

        element2 = $compile(angular.element(
            '<mv-poster></mv-poster>'
        ))(scope);
    }));


    it('should render <img> tag', function () {
        expect(element.prop('tagName').toLowerCase()).toBe('img');
    });

    it('should set dummy image source if path not given', function () {
        scope.$apply();
        expect(element2.attr('src').substr(0, 21)).not.toBe('http://image.tmdb.org');
    });

    it('should set image source to cover path if given', function () {
        scope.$apply();
        expect(element.attr('src').substr(0, 21)).toBe('http://image.tmdb.org');
    });

});