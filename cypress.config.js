const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7n7ggo',
  e2e: {
    baseUrl : 'http://192.168.88.31:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
