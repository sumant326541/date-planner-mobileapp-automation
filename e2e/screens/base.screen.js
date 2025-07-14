const { $ } = require('@wdio/globals')

module.exports = class BaseScreen {

    get BtnBack() {
        const androidSelector = `//android.widget.Button[@content-desc="Back"]`
        const iosSelector = `~Back`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get elementByLabel() {
        return (label) => {
            const androidSelector = `//android.view.View[contains(@content-desc,'${label}')]`;
            const iosSelector = `//XCUIElementTypeOther[contains(@label, '${label}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    get ButtonByName() {
        return (name) => {
            const androidSelector = `//android.view.View[contains(@content-desc,'${name}')]`;
            const iosSelector = `//XCUIElementTypeButton[contains(@name, '${name}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    get elementByValue() {
        return (value) => {
            const androidSelector = `//android.view.View[contains(@content-desc,'${value}')]`;
            const iosSelector = `//XCUIElementTypeOther[contains(@label, '${value}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

}

