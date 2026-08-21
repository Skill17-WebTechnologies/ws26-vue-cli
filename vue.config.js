const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 80,
    allowedHosts: 'all',
    // The router uses history mode, so deep links like /about must fall back to
    // index.html. Defining devServer here replaces the default that set this.
    historyApiFallback: true,
  },
})
