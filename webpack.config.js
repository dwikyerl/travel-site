const path = require('path');

const config = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.join(__dirname, 'app', 'temp', 'scripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;