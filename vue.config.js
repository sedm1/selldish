module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/selldish/'
    : '/'
}