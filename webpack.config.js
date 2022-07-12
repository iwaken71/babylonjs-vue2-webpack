const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};
