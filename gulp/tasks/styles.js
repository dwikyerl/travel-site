const gulp = require('gulp'),
plumber = require('gulp-plumber'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(plumber({ errorHandler(err) {
      console.log(err.toString());
    }}))
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./app/temp/styles'));
});