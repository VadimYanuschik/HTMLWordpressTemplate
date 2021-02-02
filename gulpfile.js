const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

function clear() {
  return del('dist/*.*', {force: true})
}

function js() {
  return src('src/js/**.js')
    .pipe(dest('dist/js'))
}

function libs() {
  return src('scr/libs/**')
      .pipe(dest('dist/libs'))
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/parts/**', series(html)).on('change', sync.reload)
  watch('src/scss/**', series(scss)).on('change', sync.reload)
  watch('src/js/**', series(js)).on('change', sync.reload)
}

exports.build = series(clear, scss, html)
exports.serve = series(clear, scss, html, js, libs, serve)
exports.clear = clear