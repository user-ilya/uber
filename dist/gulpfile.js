const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("dist/sass/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
})
gulp.task('watch', function() {
    gulp.watch("dist/sass/*.+(scss|sass)", gulp.parallel(styles))
    gulp.watch("dist/*.html").on("change", browserSync.reload);
})

gulp.task('default', gulp.parallel('watch','server', 'styles'));
