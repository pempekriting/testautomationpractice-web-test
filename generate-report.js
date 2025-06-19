const reporter = require("cucumber-html-reporter");
const fs = require("fs");

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber_report.json",
  output: "reports/report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    Project: "Test Automation Practice",
    Platform: process.platform,
    Executed: "Local",
  },
};

if (!fs.existsSync("reports")) {
  fs.mkdirSync("reports");
}
if (!fs.existsSync("screenshots")) {
  fs.mkdirSync("screenshots");
}
reporter.generate(options);
