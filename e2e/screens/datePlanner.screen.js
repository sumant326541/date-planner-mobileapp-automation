const { $ } = require('@wdio/globals')
const BaseScreen = require('./base.screen');

class DatePlannerScreen extends BaseScreen {

    get datePlannerTitle() {
        const androidSelector = `//android.view.View[@name="Date Planner"]`
        const iosSelector = `//XCUIElementTypeNavigationBar[@name="Date Planner"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get plusButton() {
        const androidSelector = `//android.view.View[@name="Add"]`
        const iosSelector = `//XCUIElementTypeButton[@name="Add"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get newEventTextField() {
        const androidSelector = `//android.view.View[@value="New Event"]`
        const iosSelector = `//XCUIElementTypeTextField[@value="New Event"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get datePicketButton() {
        const androidSelector = `//android.widget.Button[@name="Date"]`
        const iosSelector = `(//XCUIElementTypeDatePicker[@name="Date"]//XCUIElementTypeButton)[2]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get timePicketButton() {
        const androidSelector = `//android.widget.Button[@name="Date"]`
        const iosSelector = `(//XCUIElementTypeDatePicker[@name="Date"]//XCUIElementTypeButton)[3]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get date() {
        return (date) => {
            const androidSelector = `//android.view.View[@content-desc="${date}"]`;
            const iosSelector = `//XCUIElementTypeStaticText[contains(@name, '${date}')]`
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    get hour() {
        const androidSelector = `//android.widget.Button[@value="23 o’clock"]`
        const iosSelector = `//XCUIElementTypePickerWheel[@value="03 o’clock"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get minute() {
        const androidSelector = `//android.widget.Button[@name="14"]`
        const iosSelector = `//XCUIElementTypeStaticText[@name="12"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get dismissPopUp() {
        const androidSelector = `//android.widget.Button[@name="PopoverDismissRegion"]`
        const iosSelector = `//XCUIElementTypeButton[@name="PopoverDismissRegion"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get taskDescriptionTextField() {
        const androidSelector = `//android.widget.Button[@value="Task description"]`
        const iosSelector = `//XCUIElementTypeTextField[@value="Task description"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get addButton() {
        const androidSelector = `//android.view.View[@name="Add"]`
        const iosSelector = `(//XCUIElementTypeButton[@name="Add"])[2]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get taskDoneCircle() {
        const androidSelector = `//android.view.View[@name="Mark task as done"]`
        const iosSelector = `//XCUIElementTypeButton[@name="circle"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get editButton() {
        const androidSelector = `//android.view.View[@name="Edit"]`
        const iosSelector = `//XCUIElementTypeButton[@name="Edit"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get doneButton() {
        const androidSelector = `//android.view.View[@name="Done"]`
        const iosSelector = `//XCUIElementTypeButton[@name="Done"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get datePlannerBackNavBar() {
        const androidSelector = `//android.widget.Button[@name="Back"]`
        const iosSelector = `//XCUIElementTypeButton[@name="Date Planner"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get deleteEventButton() {
        const androidSelector = `//android.view.View[@name="Delete"]`
        const iosSelector = `//XCUIElementTypeStaticText[@name="Delete Event"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get completedEventTaskByName() {
        return (name) => {
            const androidSelector = `//android.view.View[@content-desc="${name}"]//android.widget.Image[@content-desc="Selected"]`;
            const iosSelector = `//XCUIElementTypeButton[contains(@name, '${name}')]//XCUIElementTypeImage[@name="Selected"]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    get secondPastEvent() {
        return (name) => {
            const androidSelector = `//android.view.View[@content-desc="${name}"]//android.widget.Image[@content-desc="Selected"]`;
            const iosSelector = `//XCUIElementTypeStaticText[@name="Past"]//ancestor::XCUIElementTypeCell/following-sibling::XCUIElementTypeCell[2]//XCUIElementTypeButton[contains(@name, '${name}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        }
    }

    async addNewEvent(EventName, TaskDescription, Date) {
        await this.plusButton.click()
        await this.newEventTextField.setValue(EventName);
        await this.datePicketButton.click();
        await this.selectDate(Date);
        try {
            await this.dismissPopUp.click();
        } catch (e) {
            console.warn("Dismiss popup not found, continuing without handling it.");
        }

        // await this.timePicketButton.click();
        // await this.hour.click();
        //  await this.minute.click();
        //  await this.dismissPopUp.click();
        await this.taskDescriptionTextField.setValue(TaskDescription);
        await this.addButton.click();

    }

    async selectDate(date) {
        await this.date(date).click();
    }

    async selectTask(EventName) {
        await this.ButtonByName(EventName).click();
    }

    async markTaskAsDone(EventName) {
        await this.selectTask(EventName);
        await this.editButton.click();
        await this.taskDoneCircle.click();
        await this.doneButton.click();
        await this.datePlannerBackNavBar.click();
    }

    async deleteEvent(EventName) {
        await this.selectTask(EventName);
        await this.editButton.click();
        await this.deleteEventButton.click();
    }

}
module.exports = new DatePlannerScreen();
