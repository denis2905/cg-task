var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('assets/sass/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
});

function watch() {
    const watcher = gulp.watch('assets/sass/style.sass');
    watcher.on('change', function(path, stats) {
        sass();
    });
}

exports.default = gulp.series(watch);
