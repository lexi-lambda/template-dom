import gulp from 'gulp';
const $ = require('gulp-load-plugins')();

const build = watch => {
  const src = gulp.src('src/**');
  const plumbed = watch
    ? src.pipe($.plumber())
    : src;

  return plumbed
    .pipe($.babel())
    .pipe(gulp.dest('lib'));
};

gulp.task('build', () => build(false));
gulp.task('build:watch', () => build(true));

gulp.task('watch', () =>
  gulp.watch('src/**', ['build:watch']));
