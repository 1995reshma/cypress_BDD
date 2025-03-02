const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true, // Embed screenshots in the report
      inlineAssets: true,        // Inline assets for portability
      quiet: true,
    },
    screenshotOnRunFailure: true, // Automatically take a screenshot on failure
    baseUrl: "https://automationexercise.com/", 
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    env: {
      stepDefinitions: "cypress/e2e/stepDefinitions/**/*.js",
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)], 
        })
      );

      on("task", {
        log() {
          return null;
        },
        error(message) {
          console.error("ERROR:", message);
          return null;
        },
      });

      return config;
    },
  },
});
