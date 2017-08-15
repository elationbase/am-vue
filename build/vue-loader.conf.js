var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [require('autoprefixer')()],
  autoprefixer: false,
  scss: 'vue-style-loader!css-loader!sass-loader',
  transformToRequire: {
    image: 'xlink:href'
  }
}
