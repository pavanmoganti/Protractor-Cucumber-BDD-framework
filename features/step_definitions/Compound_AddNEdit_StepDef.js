var expects = require('expect');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
var expect = chai.expect;
var ec = protractor.ExpectedConditions;
var fs = require('fs');


var utils = require('../pages/common/utils.js');
var compoundCreatePage = require('../pages/CompoundCreatePage.js');
var drugPage = require('../pages/DrugPage.js');


var myStepDefinitionsWrapper = function () {
    this.Then(/^enter class as "([^"]*)" name as "([^"]*)" type as "([^"]*)"$/, function (className, Name, Type, callback) {
        browser.waitForAngular().then(function () {
        compoundCreatePage.enterClass(className);
        compoundCreatePage.enterName(Name);
        compoundCreatePage.enterType(Type);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^enter unit value as "([^"]*)" and result as "([^"]*)"$/, function (unitValue, result, callback) {
        browser.waitForAngular().then(function () {
        compoundCreatePage.enterUnitInCompound(unitValue)
        compoundCreatePage.enterResult(result);
        }).then(function () {
            callback();
        });

    });

    this.Then(/^enter positive comments as "([^"]*)"$/, function (positiveComments, callback) {
        browser.waitForAngular().then(function () {
            compoundCreatePage.positiveComments(positiveComments);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on Add Specimen button$/, function (callback) {
        browser.waitForAngular().then(function () {
            compoundCreatePage.clickOnAddSpecimen();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^enter Specimen type as "([^"]*)" upper limit as "([^"]*)" detection as "([^"]*)" cutoff as "([^"]*)"$/,
        function (specimenType, upperLimit, detection, cutoff, callback) {
            browser.waitForAngular().then(function () {
                compoundCreatePage.enterSpecimenType(specimenType);
                compoundCreatePage.enterUpperLimit(upperLimit);
                compoundCreatePage.enterDetection(detection);
                compoundCreatePage.enterCutOff(cutoff);
            }).then(function () {
                callback();
            });
    });

    this.Then(/^units as "([^"]*)" minrange as "([^"]*)" and maxrange as "([^"]*)"$/, function (units, minRange, maxRange, callback) {
        browser.waitForAngular().then(function () {
                compoundCreatePage.enterUnits(units);
                compoundCreatePage.enterMinRange(minRange);
                compoundCreatePage.enterMaxRange(maxRange);
        }).then(function () {
            callback();
        });
    });

    /*******
     * Scenario Outline: Edit Compound
     */

    this.Then(/^edit the type screen to "([^"]*)"$/, function (typeScreen, callback) {
        browser.waitForAngular().then(function () {
                compoundCreatePage.enterType(typeScreen);
        }).then(function () {
            callback();
        });
    });


    /*
      Scenario Outline: Create a Drug
     */
    this.Then(/^enter drug name as "([^"]*)" and accession prefix as "([^"]*)"$/, function (drugName, accessionPrefix, callback) {
        browser.waitForAngular().then(function () {
            drugPage.enterDrugName(drugName);
            drugPage.enterAccessionPrefix(accessionPrefix);
        }).then(function () {
            callback();
        });
    });


    this.Then(/^select the first available record by selecting  check box in "([^"]*)" th column$/, function (columnNumber, callback) {
        browser.waitForAngular().then(function () {
            WebElement = element(by.xpath("//*[@id='list-wrapper-r']/tr/td["+columnNumber+"]/label"));
            console.log("selecting the record");
            WebElement.click();
        }).then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;