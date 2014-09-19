'use strict';

describe('<poster> directive', function () {

    beforeEach(module('moviesApp'));

    var element,
        scope;

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile(angular.element(
            '<mv-poster></mv-poster>'
        ))(scope);
    }));


    it('should render <img> tag', function () {
        expect(element.prop('tagName').toLowerCase()).toBe('img');
    });

});