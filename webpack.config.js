var path = require('path');

module.exports = {
  //The entry point for the bundle.
  entry: './js/index.js',
  output: {
    //Name of the artifact produced by webpack.
    filename: 'bundle.js',
    //Locatian of the artifact - ./static/js
    path: path.join(__dirname, 'static', 'js')
  }
};
