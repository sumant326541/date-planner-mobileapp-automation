const { config } = require('./wdio.conf');

config.capabilities = [{
    // capabilities for local Appium web tests on iOS simulator
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 15 Pro Max',
    'appium:platformVersion': '17.5',
    'appium:automationName': 'XCUITest',
    //"appium:bundleId": "com.example.circusBasket",
    'appium:app': '/Users/sumantkumar/Desktop/datePlanner/Date Planner.app',
    "appium:noReset": false,
    "appium:autoLaunch": true,
}];

exports.config = config;
