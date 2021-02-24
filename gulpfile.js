'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const { src, dest, watch } = require('gulp');

const paths = {
    styles: {
        src: 'scss/**/*.scss',
        dest: 'build/css'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('Error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest));
}

function watch_file() {
    gulp.watch(paths.styles.src, styles);
}

exports.watch = watch_file;