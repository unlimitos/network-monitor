const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    publicPath:'dist/'
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
            use: [
                {
                    loader: 'url-loader',
                    options: {limit: 40000}
                },
                'image-webpack-loader'
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
      new ExtractTextPlugin('style.css')
  ]
};
