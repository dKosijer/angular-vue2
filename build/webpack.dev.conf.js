const webpack = require('webpack')
const config = require('./webpack.base.conf')
const env = { NODE_ENV: JSON.stringify('development') }

Object.keys(config.entry).forEach(key => {
  config.entry[key].push('webpack-hot-middleware/client?noInfo=true&reload=true')
})

config.plugins.push(new webpack.DefinePlugin({'process.env': env}))
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.devtool = '#eval-source-map'

module.exports = config
