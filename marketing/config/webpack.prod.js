const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageDeps = require("../package.json").dependencies;
const federationConfig = require('../federation.config.json')

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/marketing/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
     ...federationConfig,
      shared: {...packageDeps}
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
