const ora = require('ora')
const webpack = require('webpack')
const prodConfig = require('./webpack.prod.conf')

var spinner = ora('Building for production...')
spinner.start()

webpack(prodConfig, function (err, stats) {
  spinner.stop()
  if (err) {
    throw err
  }
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
