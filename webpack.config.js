const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
          }
        }]
      }
    ],
  },
};

const client = {
  entry: `${SRC_DIR}/client.js`,
  output: {
    path: DIST_DIR,
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
};

const server = {
  entry: `${SRC_DIR}/server.js`,
  target: 'node',
  output: {
    path: DIST_DIR,
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];
