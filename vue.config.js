module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pkmntcg-decklist/' : '/',
  lintOnSave: true,
  configureWebpack: config => {
    return {
      resolve: {
        alias: {
          '@style': '@/assets/styles',
          '@font': '@/assets/fonts',
          '@img': '@/assets/img',
          '@svg': '@/assets/img/svg-compiled',
        }
      }
    }
  },
  devServer: {
  }
}
