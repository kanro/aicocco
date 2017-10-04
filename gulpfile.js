var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
gulp.task('sass',function(){
    gulp.src(['scss/**/*.scss'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}))
});
gulp.task('default',function(){
    browserSync.init({
        server: "./"
    });
	gulp.watch(['**/*.html'],browserSync.reload);
	gulp.watch(['css/**/*.css'],browserSync.reload);
    gulp.watch('scss/**/*.scss',['sass']);
});
