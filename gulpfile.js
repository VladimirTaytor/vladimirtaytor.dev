const gulp = require('gulp')
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')

const buildClient = ({ isWatching = false }) =>
  gulp
    .src('src/client/index.js')
    .pipe(webpack({ watch: !!isWatching, ...webpackConfig }))
    .pipe(gulp.dest('public/dist'))

gulp.task('default', () => buildClient())

gulp.task('watch:client', () => buildClient({ isWatching: true }))
