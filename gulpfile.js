const path = require('path');

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');
const prerender = require('./prerender');

// Load some files into the registry
const hub = new HubRegistry([
  'gulp_tasks/misc.js',
  'gulp_tasks/browsersync.js',
  'gulp_tasks/karma.js',
  'gulp_tasks/webpack.js'
]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist'), 'prerender'));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);
gulp.task('prerender', prerender);

function watch(done) {
  gulp.watch(path.join(conf.paths.tmp, 'index.html'), browserSync.reload);
  done();
}

// function prerenderTask() {
//   return prerender();
// }
