const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: [
      path.resolve(projectRoot, './src/app.js')
    ]
  },
  externals: {
    config: 'CONFIG'
  },
  output: {
    path: path.resolve(projectRoot, './dist'),
    filename: 'static/js/[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'es2016', 'stage-2']
            }
          },
        ],
        exclude: path.resolve(projectRoot, './node_modules')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/i,
        use: [{
          loader: 'url-loader',
          query: { limit: 10000 }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: { limit: 20000 }
        }]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.vue$/,
      options: {
        vue: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            stylus: ExtractTextPlugin.extract('css-loader!stylus-loader'),
            js: 'babel-loader?presets[]=es2015&presets[]=stage-2!eslint-loader'
          },
          postcss: [
            require('autoprefixer')({
              browsers: ['last 2 versions']
            })
          ]
        }
      }
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(projectRoot, './static/**/*') }
    ]),
    new HtmlWebpackPlugin({
      filename: path.resolve(projectRoot, './dist/index.html'),
      template: path.resolve(projectRoot, './index.html'),
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'static/css/styles.css',
      allChunks: true
    })
  ]
}
