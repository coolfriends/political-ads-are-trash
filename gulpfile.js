const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const exec = require("child_process").exec;
const gutil = require("gulp-util");
const apidoc = require("gulp-apidoc");
const rollup = require("rollup-stream");
const sourcemaps = require("gulp-sourcemaps");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('rollup', function() {
  return rollup({
    entry: './src/handler.js',
    sourceMap: true,
    format: 'cjs'
  })
    .pipe(source('handler.js', './src'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./bin'));
});

gulp.task("apidoc", function(done) {
  apidoc({
    src: "src/",
    dest: "docs/"
  }, done);
});

gulp.task("default", ["rollup", "apidoc"]);
