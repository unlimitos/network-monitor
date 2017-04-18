const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [ "faker", "lodash","react","react-dom", "react-input-range", "react-redux", "react-router", "redux",
"redux-form","redux-thunk"];

module.exports = {
  entry: {
      bundle: './src/index.js',
      vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath:'/'
  },
  module : {
    rules : [
        {
          use: 'babel-loader',
          test:/\.js$/,
          exclude: /node_modules/
        },
        {
           loader: ExtractTextPlugin.extract({
                loader: 'css-loader'
            }),
           test: /\.css$/
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            use : [
                {
                    loader: 'url-loader',
                    options : {limit : 40000}
                }
            ]
        }
    ]
  },
  plugins : [
      new webpack.optimize.CommonsChunkPlugin({
            name : ['vendor', 'manifest']
      }),
      new HtmlWebPackPlugin({
            template: 'src/index.html'
      }),
      new webpack.DefinePlugin(
          {
              'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
          }
      ),
      new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            { from: './node_modules/font-awesome/css',to :'style/css' },
            { from: './node_modules/font-awesome/fonts',to :'style/fonts'},
            { from: './node_modules/admin-lte/dist/css/skins/_all-skins.min.css',to :'style/css'},
            { from: './node_modules/admin-lte/bootstrap/css/bootstrap.min.css',to :'style/css'},
            { from: './node_modules/admin-lte/dist/css/AdminLTE.css',to :'style/css'},
            { from: './node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',to :'js'},
            { from: './node_modules/admin-lte/bootstrap/js/bootstrap.min.js',to :'js'},
            { from: './node_modules/admin-lte/plugins/fastclick/fastclick.js',to :'js'},
            { from: './node_modules/admin-lte/dist/js/app.js',to :'js'}
        ])
  ]
};

