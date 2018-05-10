var gulp = require('gulp');
var replace = require('gulp-string-replace');

gulp.task('default', function () {
    gulp.src(["./src/module/tests/e2e.ts"])
        .pipe(replace(/\[\[ENDPOINT\]\]/g, process.argv[3] + '/'))
        .pipe(gulp.dest('./src/module/tests/'))
});
