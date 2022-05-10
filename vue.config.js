module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.43.145.90:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
