const gulp        = require('gulp');
const browserSync = require('browser-sync');
var sass = require('gulp-sass')

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

