'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var source = 'jquery.placeholder.js';
var exportSource = 'jquery.placeholder.min.js';

gulp.task('minify', function() {
    gulp.src(source)
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(rename(exportSource))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['minify']);
