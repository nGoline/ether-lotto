const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const purify = require('gulp-purifycss');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');

gulp.task('html', function () {
  return gulp.src('web/src/index.html')
    .pipe(gulp.dest('web/build'));
});

gulp.task('js-dev', function () {
  return gulp.src(['bower_components/jquery/dist/jquery.slim.js',
      'bower_components/web3/dist/web3.js',
      'node_modules/utf8/utf8.js',
      'web/src/js/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('web/build/js'));
});

gulp.task('js-deploy', function () {
  return gulp.src(['bower_components/jquery/dist/jquery.slim.min.js',
      'bower_components/web3/dist/web3.min.js',
      'node_modules/utf8/utf8.js',
      'web/src/js/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(minify({
      ext: {
        min: '.js',
        src: ''
      },
      noSource: true,
      mangle: false
    }))
    .pipe(gulp.dest('web/build/js'));
});

gulp.task('css', function () {
  return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css', 'web/src/css/*.css'])
    .pipe(concat('app.min.css'))
    .pipe(purify(['web/src/js/*.js', 'web/src/index.html']))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('web/build/css'));
});

gulp.task('dev', gulp.parallel('html', 'js-dev', 'css'));

gulp.task('deploy', gulp.parallel('html', 'js-deploy', 'css'));

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('dev', function () {
  browserSync.init({
    server: "./web/build"
  });

  gulp.watch(['web/src/**/*', '!web/src/js/2_abi.js', 'build/contracts/EtherLoto.json'], gulp.series('dev')).on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));