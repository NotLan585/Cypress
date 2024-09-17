const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://playwright.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalInteractiveRunEvents: true,   // use for cypress open mode
  },
});

require('@smartbear/visualtest-cypress')(module)