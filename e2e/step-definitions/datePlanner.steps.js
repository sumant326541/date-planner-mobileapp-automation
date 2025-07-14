const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const DatePlannerScreen = require('../screens/datePlanner.screen');


const screens = {
    dataPlanner: DatePlannerScreen
}

Given(/^I am on the date planner screen$/, async () => {
    await expect(screens.dataPlanner.datePlannerTitle).toBeExisting();
});

When(/^I create a new event with (.+) , (.+) and (.+)$/, async (eventName, taskDescription, date) => {
    await screens.dataPlanner.addNewEvent(eventName, taskDescription, date)
});

Given(/^I should see (.+) at date planner screen$/, async (eventName) => {
    await expect(screens.dataPlanner.ButtonByName(eventName)).toBeExisting();
});

Given(/^I should see (.+) in the past at date planner-screen$/, async (eventName) => {
    await expect(screens.dataPlanner.secondPastEvent(eventName)).toBeExisting();
});

When(/^I mark task as done from (.+)$/, async (eventName) => {
    await screens.dataPlanner.markTaskAsDone(eventName);
});

Then(/^I should see  (.+) task status as done$/, async (eventName) => {
    await expect(screens.dataPlanner.completedEventTaskByName(eventName)).toBeExisting();
});


Then(/^I delete the event with (.+)$/, async (eventName) => {
    await screens.dataPlanner.deleteEvent(eventName);
});

Then(/^I should not see (.+) at date planner screen$/, async (eventName) => {
    await expect(screens.dataPlanner.ButtonByName(eventName)).not.toBeExisting();
});

