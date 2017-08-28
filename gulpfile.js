var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    header = require('gulp-header');

var js_name = 'jquery.checks';

// Clean dist folder
gulp.task('clean', function() {
    return gulp.src('dist').pipe(clean());
});

// Copy
gulp.task('copy', function() {
    return gulp.src('src/jquery.checks.js')
        .pipe(gulp.dest('dist'));
});

// Uglify / Compress
gulp.task('uglify', function() {
    return gulp.src('src/jquery.checks.js')
        .pipe(uglify())
        .pipe(concat('jquery.checks.min.js'))
        .pipe(header('/* jquery.checks.js - @author Vic - https://github.com/yijian002/jquery.checks */'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'copy', 'uglify']);
