const app = require('express')()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const opn = require('opn')
const devConfig = require('./webpack.dev.conf')

const compiler = webpack(devConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.listen(8080, err => {
  if (err) {
    console.log(err)
    return
  }
  const uri = 'http://localhost:8080'
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})
