<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# mobile automation for android and ios app with Appium,WebdriverIO,BDD-Cucumber

## Table of Contents

- [Tools And Technology](#tools-and-technology)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reports](#reports)

## Tools And Technology
- Webdriverio with Javascript
- appium
- BDD-Cucumber
- Configured with emulator and simulator
- Allure-Report

## Prerequisites

- Ensure Node.js and npm are installed on your machine (node -v
v22.3.0 ,npm -v 10.8.1
)
- appium inspector - For inspecting new elements, utilize Appium Inspector.
- appium  install it from package.json or through below command
```sh
npm install appium -g
```
- xcuitest - To enable execution on ios simulator install XCUITest driver using either the package.json or the command 
```sh
npm install appium-xcuitest-driver
```
- uiautomator2 - To enable execution on android simulator using either the package.json or the command 
```sh
npm install uiautomator2
```
- simulator(for ioS) - For iOS testing on simulators, configure Xcode for launching the iOS simulator.
- emulator (for android) - For Android testing on emulators, configure Android SDK, ADB, and AVD Manager for launching Android emulators.
- Visual Studio Code - When writing code, use a code editor, with Visual Studio Code being the preferred choice.

- circus_basket/app-debug.apk'  - need to set app path in conf.json 
- circus_basket/Runner.app - need to set app path in conf.json

## Installation



install dependencies mentioned in package.json

```sh
npm install
```
## Set app path
- android - set app path 'appium:app': 'path/app-debug.apk' in wdio:android.conf.js
- iOS - set app path  'appium:app': 'path/Runner.app' in wdio:ios.conf.js

## Running Tests
### Android

```js
npm run wdio:android
```
### iOS

 ```js
npm run wdio:ios
```

## Reports

### Alluare Report
- Allure report integration implemented
- A report in HTML format will be created within the designated "report" folder.

 ```js
npm run wdio:report
``` 
### dot report
- integared dot report 
