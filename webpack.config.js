const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
          { from: "public", to: "." },
      ],
  }),
  ],
  resolve: {
    extensions:[".js",".vue"],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};
