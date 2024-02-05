const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 40000,	
    experimentalSesssionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log("---- Writing lighthouse report to disk ----")

          fs.writeFile("lighthouse.json", lighthouseReport.report, (error) => {
            error ? console.log(error) : console.log("Report created successfully");
          })
        }),
      });
      
    },
    testIsolation: false,
  },
});
