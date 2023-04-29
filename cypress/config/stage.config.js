const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      ...require('./base.config.json'),
      envSpecificValue: "stage config",
    },
  },
});
