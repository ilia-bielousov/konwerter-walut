'use strict';

const { parallel, src, watch, dest } = require('gulp');
const scss = require('gulp-sass')(require('sass'));

const dir = './app/assets/'

function Styles() {
  return src(`${dir}sass/main.scss`)
  .pipe(scss())
  .pipe(dest(`${dir}css`))
}

function Watching() {
  watch([`${dir}sass/**.scss`, `${dir}index.html`], Styles);
}

exports.dev = parallel(Styles, Watching);