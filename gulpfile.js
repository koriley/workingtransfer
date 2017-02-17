var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./views"
    });

    gulp.watch("./views/sass/*.scss", ['sass']);
    gulp.watch("./views/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./views/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./views/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
