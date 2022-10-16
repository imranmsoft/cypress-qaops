const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'abc123',
  e2e: {
    specPattern: 'cypress/e2e/**/*',
  },
  component: {
    specPattern: 'cypress/component-tests/*.spec.js',
    devServer: {
      bundler: 'webpack',
    },
  },
})
