const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    env:{
      ...require('./cypress/config/base.config.json'),
    },
  },
});
