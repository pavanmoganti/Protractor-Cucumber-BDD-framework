var webdriver = require('selenium-webdriver');
var protractor = require('protractor-cucumber-framework');

var beforeEachFeatureHooks = function () {
    /***
     * Function is run before each feature
     */

    this.BeforeFeature(function (event, callback) {
        browser.ignoreSynchronization = false;
        browser.manage().deleteAllCookies();
        console.log("maximising the screen in before each feature");
        browser.driver.manage().window().maximize().then(callback);
    });
};
module.exports = beforeEachFeatureHooks;