
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://passport.amazon.jobs/',
    viewportWidth: 1400,
    viewportHeight: 1200,
    experimentalOriginDependencies: true,
    supportFile: 'cypress/support/e2e.js', // adjust based on your setup
  },

  env: {
    MAILOSAUR_API_KEY: "HfHqlMHv3GWcGrP01dGbw2L6eCOpGWSE",
  },
  
});

