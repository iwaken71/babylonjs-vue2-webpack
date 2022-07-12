const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 c”¨
    },
  }
}