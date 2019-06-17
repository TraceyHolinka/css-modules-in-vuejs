module.exports = {
  productionSourceMap: false,
  css: {
    extract: false,
    loaderOptions: {
      css: {
        use: ['style-loader', 'postcss-loader']
      }
    }
  },
  lintOnSave: true
}
