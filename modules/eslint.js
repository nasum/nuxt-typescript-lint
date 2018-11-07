module.exports = function() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts')

  // Extend build
  this.extendBuild(config => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|vue|ts)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules)/,
    })
  })
}