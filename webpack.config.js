//webpack.config.js
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/plugin.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "attractors.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png$/i,
        resourceQuery: /b64/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: true
            }
          }
        ]
      }
    ]
  }
};