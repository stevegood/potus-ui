var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    connect = require('gulp-connect'),
    jeet = require('jeet'),
    axis = require('axis'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function(){
  gulp.src('src/styl/**/*.styl')
    .pipe(stylus({
      use: [axis(),jeet()]
    }))
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(connect.reload());
});

gulp.task('connect', function(){
  connect.server({
    root: ['public'],
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch(['src/styl/**/*.styl'], ['stylus']);
});

gulp.task('start', ['stylus', 'connect', 'watch'], function(){
  nodemon({
    script: 'bin/www'
  });
});
