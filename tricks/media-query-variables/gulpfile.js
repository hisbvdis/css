const gulp = require("gulp")
const postcss = require("gulp-postcss");
const postcssCustomMedia = require("postcss-custom-media");
const rename = require("gulp-rename");

gulp.task("css", function() {
  return gulp.src("./src/style.css")
    .pipe(postcss([
      postcssCustomMedia()
    ]))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("."))
});