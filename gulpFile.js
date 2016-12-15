'use strict';
// Include gulp
var gulp = require('gulp');
// Define base folders
var src = 'src/';
var dest = 'build/';
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var open = require('gulp-open');
var useref = require('gulp-useref');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
/*gulp.task('open', function() {
    gulp.src('./src/app/index.html')
        .pipe(open());
});
*/
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(src + 'js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'js'));
});
// Compile CSS from Sass files
gulp.task('sass', function() {
    gulp.src('src/app/scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('src/app/css'))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'src/app'
        }
    })
});

gulp.task('images', function() {
    return gulp.src(src + 'images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest(dest + 'img'));
});
// Compile html file 
gulp.task('html', function() {
    return gulp.src(src + 'src/app/*.html')
        .pipe(gulp.dest('build/html'));
});
// Watch for changes in files
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch(src + 'js/*.js', ['scripts']);

    // Watch .scss files
    gulp.watch(src + 'scss/*.scss', ['sass']);

    // Watch image files
    gulp.watch(src + 'images/**/*', ['images']);
    gulp.watch(src + 'app/*.html', ['html']);
});

gulp.task('open', function() {
    gulp.src('./src/app/index.html')
        .pipe(open());
});

gulp.task('useref', function() {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});
// Default Task
gulp.task('default', ['scripts', 'sass', 'images', 'watch', 'browserSync']);
