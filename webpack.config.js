const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/popup.html',
  filename: 'popup.html',
  inject: 'body'
});
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: "url-loader" },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, use: 'file-loader' },
    ],
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('style.css')],
}
