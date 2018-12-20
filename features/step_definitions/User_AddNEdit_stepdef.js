var expects = require('expect');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
var expect = chai.expect;
var ec = protractor.ExpectedConditions;
var fs = require('fs');


var utils = require('../pages/common/utils.js');

var caseEditPage = require('../pages/CaseEditPage.js');
var clientCreatePage = require('../pages/ClientCreatePage.js');
var userCreatePage  = require('../pages/UserCreatePage.js');



var myStepDefinitionsWrapper = function () {


    this.Then(/^select the first available element$/, function (callback) {
        browser.waitForAngular().then(function () {
            webElement = element(by.xpath("//*[@id='list-wrapper']/tr[1]/td[1]"));
            webElement.click();
        }).then(function () {
            callback();
        });

    });
    this.Then(/^search for the "([^"]*)" as "([^"]*)"$/, function (fieldName, searchCriteria, callback) {
        browser.waitForAngular().then(function () {
            webElement = element(by.model("$ctrl.filtersObj."+fieldName));
            webElement.sendKeys(searchCriteria);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^enter email address field to "([^"]*)" in client edit$/, function (emailAdress, callback) {
        browser.waitForAngular().then(function () {
            userCreatePage.enterEmail(emailAdress);
        }).then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;