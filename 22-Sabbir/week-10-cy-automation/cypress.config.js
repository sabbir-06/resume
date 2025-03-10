const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.delekhomes.com',
    viewportWidth: 1400,
    viewportHeight: 1200,
    url :"https://dev.delekhomes.com/dashboard/user/profile"
  },
})
