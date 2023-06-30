'use strict';

const { parallel, src, watch, dest, task, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');

const dir = './app/assets/'

function Styles() {
  return src(`${dir}sass/main.scss`)
    .pipe(scss())
    .pipe(dest(`${dir}css`))
}

function JavaScript() {
  return src(`${dir}js/script.js`)
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
    }))
    .pipe(dest('./app/'));
}

task('addImages', function() {
  return src('./node_modules/flag-icons/flags/**/**')
  .pipe(dest(`${dir}/flags`));
});

task('addLibs', function() {
  return src(['./node_modules/flag-icons/css/flag-icons.css', './node_modules/bootstrap/dist/css/bootstrap.css'])
  .pipe(concat('libs.css'))
  .pipe(cssmin())
  .pipe(dest(`${dir}css`));
});

task('start', series('addLibs', 'addImages', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
}));

function Watching() {
  watch([`${dir}sass/**.scss`, `${dir}index.html`], Styles);
  watch(`${dir}js/**/*.js`, JavaScript);
}

exports.dev = parallel(Styles, JavaScript, Watching);