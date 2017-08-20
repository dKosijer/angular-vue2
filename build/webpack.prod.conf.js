const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.base.conf')
const RemoveWebpackPlugin = require('remove-webpack-plugin')
const env = { NODE_ENV: JSON.stringify('production') }

const projectRoot = path.resolve(__dirname, '../')

config.plugins.push(new webpack.DefinePlugin({'process.env': env}))
config.plugins.push(new RemoveWebpackPlugin(path.resolve(projectRoot, './dist'), 'hide'))
config.devtool = '#source-map'

module.exports = config
