//Require the webpack and path
const webpack = require('webpack');
const path = require('path');

//Set up Dist and Src Directories
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

//Set up configuration
const config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app/',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        // exclude: /node_modules/,
        // include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        // include: SRC_DIR,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        // include: SRC_DIR,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

    ]
  }
}

//Export config
module.exports = config;
