var webdriver = require('selenium-webdriver');
var protractor = require('protractor-cucumber-framework');

var beforeEachScenarioHooks =function () {
    this.registerHandler('BeforeScenario', function (event, callback) {
        var scenario = event.getPayloadItem('scenario');

        console.info("Scenario Name :" +scenario.getName());
        callback();
    });
};
module.exports = beforeEachScenarioHooks;