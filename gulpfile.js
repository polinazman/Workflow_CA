const gulp = require("gulp");
const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();

function css() {
    return src('sass/**/*.scss')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(dest("css"))
      .pipe(browserSync.stream())
}

function minify() {
	return src("img/*")
	.pipe(imagemin())
	.pipe(dest("minifiedimg"))
	.pipe(browserSync.stream())
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch('./sass/**/*.scss', css);
  gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.watch = watch;