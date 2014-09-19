'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var karma = require('karma').server;

var wiredep = require('wiredep');

gulp.task('test', function() {
  var bowerDeps = wiredep({
    directory: 'app/bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'app/scripts/moviesApp.js',
    'app/scripts/movies/movies.js',
    'app/scripts/bookmarks/bookmarks.js',
    'app/scripts/**/*.js'
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});


gulp.task('tdd', function (done) {

  var bowerDeps = wiredep({
    directory: 'app/bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'app/scripts/moviesApp.js',
    'app/scripts/movies/movies.js',
    'app/scripts/bookmarks/bookmarks.js',
    'app/scripts/**/*.js'
  ]);

  karma.start({
    files : testFiles,
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  }, done);
});
