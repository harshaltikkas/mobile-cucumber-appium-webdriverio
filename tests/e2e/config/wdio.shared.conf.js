const path = require("path")

const defaultTimeoutInterval = process.env.DEBUG ? 60 * 60 * 500 : 10000// wait for default 10 sec , in debug mode wait for 1800 sec
// import {ReportAggregator, HtmlReporter} from 'wdio-html-nice-reporter';
// let reportAggregator= ReportAggregator;
exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'trace',
    deprecationWarnings: true,
    outputDir: path.resolve(__dirname, "../../e2e/logs"),
    bail: 0,
    baseUrl: '',
    waitforTimeout: 6000,
    connectionRetryTimeout: 90000,//90000
    connectionRetryCount: 3,
    specs: ['./tests/e2e/features/**/Snap_Login.feature'],
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './tests/e2e/reports/allure-results/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],

        [
            "html-nice",
            {
              debug: true,
              outputDir: "./tests/e2e/reports/html-reports/",
              filename: "report.html",
              reportTitle: "Test Report Title",
              showInBrowser: true,
              //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,
            },
          ],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: true,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: true,
        tags: [],
        timeout: defaultTimeoutInterval,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        // If you need a logs from appium server, make log equal true.
        log: true,
        args: ['--allow-insecure=get_server_logs'],
        command: 'appium',
    },

    port: 4723,

    // ====================
    // Some hooks
    // ====================
    
    before() {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require("chai")
        global.expect = chai.expect
        global.assert = chai.assert
        global.should = chai.should()
      },
    //This code is responsible for taking the screenshot in case of error and attaching it to the report
    afterStep(uri, feature, scenario) {
         if (scenario.error) {
             driver.takeScreenshot();
         }
     },
    // afterStep: function (stepResult) {
    //     const path = require("path")
    //     const moment = require("moment")
    //     const timestamp = moment().format("YYYYMMDD-HHmmss")
    //     const filepath = path.join(
    //       "tests/e2e/reports/html-reports/screenshots/",
    //       `${timestamp}.png`
    //     )
    //     browser.saveScreenshot(filepath)
    //     process.emit("test:screenshot", filepath)
    //   },

    //   onPrepare: function (config, capabilities) {
    //      reportAggregator = new ReportAggregator({
    //       outputDir: "./tests/e2e/reports/html-reports/",
    //       filename: "master-report.html",
    //       reportTitle: "Master Report",
    //       browserName:'Chrome',
    //       collapseTests: true,
    //     });
    //     reportAggregator.clean();
    
    //    reportAggregator = reportAggregator;
    //   },

    //   onComplete: function(exitCode, config, capabilities, results) {
    //     (async () => {
    //         await reportAggregator.createReport();
    //     })();
    // },

      afterScenario() {
          console.log("after scenarios")
        driver.reloadSession()
      },

};
