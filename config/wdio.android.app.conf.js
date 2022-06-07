const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        //'appium:chromedriverExecutableDir':'<PATH TO CHROME DRIVER>',
        'appium:deviceName': 'Pixel_3a',
        'appium:platformVersion': '11',
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(
            process.cwd(),
            './apps/Android-NativeDemoApp-0.4.0.apk',
           // './apps/app-release.apk',
        ),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // With these settings the application will not be closed between tests
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': true,
        'appium:newCommandTimeout': 10,
        "appWaitActivity": "com.wdiodemoapp.MainActivity",
        //"appWaitActivity": "com.snapfinance.snap.MainActivity"
    },
];

exports.config = config;
