const { config } = require('../wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/features/**/*.feature'
];

config.exclude = [
    // 'path/to/excluded/files'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        'browserstack.debug': true,
        'browserstack.networkLogs':true,

        // Set URL of the application under test
        app: process.env.BROWSERSTACK_APP_ID || 'bs://659be97e6daad777f5d6a0f628dc27f57a10e988',

        // Specify device and os_version for testing
        device: 'Google Pixel 3',
        os_version: '9.0',

        // Set other BrowserStack capabilities
        project: 'Project Finance',
        build: 'android',
        name: 'Project-Login'
    },
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'lanterndev1';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'zWYv81jK2zPatDGyvBgu';
// Use browserstack service
config.services = ['browserstack'];

// This port was defined in the `wdio.shared.conf.js`
delete config.port;

exports.config = config;
