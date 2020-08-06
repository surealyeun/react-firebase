'use strict';
const path = require('path');

module.exports = {
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: path.resolve(_dirname, './build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(_dirname, './src'),
        loaders: 'babel-loader',
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: './public',
    host: 'localhost',
    port: 8080,
  },
};
