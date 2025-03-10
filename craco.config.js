const sass = require('sass')

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        implementation: sass,
        sassOptions: {
          silenceDeprecations: true,
        },
      },
    },
  },
}
