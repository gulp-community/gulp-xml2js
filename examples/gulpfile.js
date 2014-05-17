var gulp = require('gulp');
var gxml = require('../');

gulp.task('xml', function () {
  gulp.src('./example.xml')
    .pipe(gxml())
    .pipe(gulp.dest('./'));
});

gulp.task('nested', function () {
  gulp.src('./nested.xml')
    .pipe(gxml())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['xml']);