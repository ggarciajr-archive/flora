var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //The entry point for the bundle.
  entry: './js/index.js',
  output: {
    //Name of the artifact produced by webpack.
    filename: 'bundle.js',
    //Locatian of the artifact - ./static/js
    path: path.join(__dirname, 'static', 'js')
  }
  ,
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
      { test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules|static/,
        query: { presets: ['es2015', 'react'] }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css', {allChunks: true})
  ]
};
