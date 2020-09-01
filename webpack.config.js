const path = require("path");
require("babel-polyfill");

module.exports = {
  externals: {
    paths: path
  },
  entry: {
    main: "./src/js/general.js"
  },
  mode: "development",

  output: {
    filename: "general.js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          query: {
            presets: [
              ["@babel/preset-env", { modules: false }]
            ],
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                {
                  "legacy": true
                }
              ],
              [
                "@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ],
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      "%modules%": path.resolve(__dirname, "src/blocks")
    }
  }
};
