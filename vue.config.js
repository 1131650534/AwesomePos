module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './',
    //跨域
    // devServer: {
    //     proxy: 'http://localhost:4000'
    //   }
  }