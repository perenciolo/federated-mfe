const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageDeps = require('../package.json').dependencies
const federationConfig = require('../federation.config.json')

const devConfig = {
  mode: "development",
  output:{
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      filename: "remoteEntry.js",
     ...federationConfig,
      shared: {...packageDeps}
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
