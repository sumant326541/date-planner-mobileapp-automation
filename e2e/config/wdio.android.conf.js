const { config } = require('./wdio.conf');  // Correct the typo here

config.capabilities = [{
    // capabilities for local Appium web tests on Android emulator
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    "appium:appPackage": "com.example.circus_basket",
    "appium:appActivity": ".MainActivity",
    'appium:app': '/Users/sumantkumar/Downloads/circus_basket/src/build/app/outputs/apk/debug/app-debug.apk'
}];

exports.config = config;  // Correct the typo here
