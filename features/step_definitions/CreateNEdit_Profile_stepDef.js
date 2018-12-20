var expects = require('expect');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
var expect = chai.expect;
var ec = protractor.ExpectedConditions;
var fs = require('fs');


var utils = require('../pages/common/utils.js');


var commonPage = require('../pages/CommonPage.js')
var base_page = require('../pages/BasePage.js');
var login_page = require('../pages/LoginPage.js');
var patient_page = require('../pages/PatientListPage.js');
var clientCreatePage = require('../pages/ClientCreatePage.js');
var physicianCreatePage = require('../pages/PhysicianCreatePage.js');
var userCreatePage = require('../pages/UserCreatePage.js');
var locationCreatePage = require('../pages/LocationCreatePage.js');
var passwordRestPage = require('../pages/PasswordResetPage.js');
var labOrdersPage = require('../pages/LabOrdersPage.js');
var ordersListPage = require('../pages/OrdersListPage.js');
var compoundTestPage = require('../pages/CompoundTestPage.js');
var validityTestPage = require('../pages/ValidityTestPage.js');
var profilePage = require('../pages/ProfilePage.js');


var myStepDefinitionsWrapper = function () {

    this.Then(/^click on "([^"]*)" button$/, function (elementLinkText, callback) {
        browser.waitForAngular().then(function () {
            commonPage.clickOnButtonWithLinkText(elementLinkText);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^enter the values of Test Code as "([^"]*)" and Description as "([^"]*)"$/, function (testCode, description, callback) {
        browser.waitForAngular().then(function () {
            compoundTestPage.enterCreateCompoundTest(testCode, description);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^select the desired compound with name "([^"]*)" "([^"]*)" "([^"]*)"$/, function (compound1, compound2, compound3, callback) {
        browser.waitForAngular().then(function () {
            compoundTestPage.selectRequiredCompound(compound1, compound2,compound3);
        }).then(function () {
            callback();
        });
    });


    /*******
     * Scenario Outline: creating Validity Test Groups
     */

    this.Then(/^enter the values of validity Test Code as "([^"]*)" and validity Description as "([^"]*)"$/, function (testCode, description, callback) {

        browser.waitForAngular().then(function () {
            validityTestPage.enterCreateValidityTest(testCode, description);
        }).then(function () {
            callback();
        });
    });


    /***
     * Scenario Outline: creating a Profile with compound and validity Test Groups
     */

    this.Then(/^click on Profiles button$/, function (callback) {
        browser.waitForAngular().then(function () {
        profilePage.clickOnProfileButton();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^look for the element "([^"]*)"$/, function (linkText, callback) {
        browser.waitForAngular().then(function () {
            webElement = element.all(by.xpath("//*[contains(text(),'Profiles')]")).get(2);
            //utils.scrollIntoElementWithLinkText(linkText)
            utils.scrollIntoView(webElement);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^enter  values for Profile name as "([^"]*)" code as "([^"]*)" client business name as "([^"]*)" risk type as "([^"]*)"$/,
        function (profileName, code, clientBusiness, riskType, callback) {
            browser.waitForAngular().then(function () {
                profilePage.enterProfileInfo(profileName, code, clientBusiness, riskType);
            }).then(function () {
                callback();
            });
    });


    this.Then(/^select the desired compound test group as "([^"]*)" and validity test group as "([^"]*)"$/, function (compoundTest, validityTest, callback) {
        browser.waitForAngular().then(function () {
            profilePage.enterCompoundTGandValidityTG(compoundTest, validityTest);
        }).then(function () {
            callback();
        });
    });

    /**********
     * Scenario Outline: Edit Profile
     */

    this.Then(/^enter search for Profile name as "([^"]*)"$/, function (profileSearch, callback) {
        browser.waitForAngular().then(function () {
            profilePage.searchProfileName(profileSearch);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Edit profile icon$/, function (callback) {
        browser.waitForAngular().then(function () {
            profilePage.clickOnEditProfile();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^edit the work list type as "([^"]*)"$/, function (workList, callback) {
        browser.waitForAngular().then(function () {
            profilePage.enterWorkList(workList);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^edit the risk type as "([^"]*)"$/, function (riskType, callback) {
        browser.waitForAngular().then(function () {
            profilePage.editRiskType(riskType);
        }).then(function () {
            callback();
        });
    });


    this.Then(/^verify the "([^"]*)" field is changed to "([^"]*)"$/, function (elementIdentifier, expectedValue, callback) {
        browser.waitForAngular().then(function () {
            utils.verifyElementValueUpdatedToExpectedText(elementIdentifier,expectedValue);
        }).then(function () {
            callback();
        });
    });

};
module.exports = myStepDefinitionsWrapper;