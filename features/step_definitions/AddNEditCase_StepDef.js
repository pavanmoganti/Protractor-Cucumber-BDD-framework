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



var myStepDefinitionsWrapper = function () {
    this.Then(/^enter date collected as "([^"]*)" preferred lab as "([^"]*)" practice as "([^"]*)" ICD codes as "([^"]*)" and prescribed drug as "([^"]*)" in Case Info$/,
        function (dateCollected, preferredLab, practice, icdCode, prescribedDrug, callback) {
            browser.waitForAngular().then(function () {
                caseEditPage.enterCaseInfoDetails(dateCollected, preferredLab, practice, icdCode, prescribedDrug);
            }).then(function () {
                callback();
            });

    });


    this.Then(/^check whether Location and Ordering Provider is auto filled$/, function (callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.checkLocationAndOrderingProvider();
        }).then(function () {
            callback();
        });
    });



    /******
     * Scenario Outline:  Edit Case
     */

    this.Then(/^search for the patient name as "([^"]*)" in the search box and click on enter button$/, function (patientSearchCriteria, callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.searchPatientName(patientSearchCriteria);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Edit Case icon$/, function (callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.clickOnEditCase();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^verify that speciment type is changed to "([^"]*)" after edit case$/, function (arg1, callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.clickOnEditCase();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^verify that specimen type is changed to "([^"]*)" after edit case$/, function (specimenValue, callback) {
        browser.waitForAngular().then(function () {
                    ElementName = element.all(by.xpath("//*[text()='Specimen Type']/following-sibling::div"));
            ElementName.get(1).getAttribute().then(function (value) {
                console.log("Verifying the text "+value);
                expect(value).to.have.string(specimenValue);
                //utils.verifyTextContains(ElementName.get(1), specimenValue);
            })
           // utils.verifyElementTextIsNotNull(ElementName.get(1));

           /* webElement.get(1).getText().then(function (elementText) {
                console.log("Verifying the text "+elementText);
                utils.verifyText(elementText,specimenValue);
            })*/


        }).then(function () {
            callback();
        });
    });
    this.Then(/^if the reasons for test is other enter thee reason as "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^count the number of Test screens in Specimen Info$/, function (callback) {
        browser.waitForAngular().then(function () {
            ////*[@ng-repeat='caseResult in $ctrl.caseEdit.caseSpecimens[0].caseResults']/td[1]
            ELEMENTLIST = element.all(by.xpath("//*[@data-ng-repeat='caseResult in $ctrl.caseEdit.caseSpecimens[0].caseResults | filter: {compound:filterCmpTest}']/td[1]"));
            ELEMENTLIST.count().then(function (count) {
                var TOTALTestScreens = count/2;
                console.log("list of test screens avaialble "+TOTALTestScreens);
            });
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on Add Test screen button in Specimen Info section$/, function (callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.clickOnAddTestScreen();
        }).then(function () {
            callback();
        });
    });


    this.Then(/^select compoundId as "([^"]*)" result as "([^"]*)" and concentration as "([^"]*)"$/, function (compoundId, caseResult, concentration, callback) {
        browser.waitForAngular().then(function () {
                caseEditPage.enterNewTestResult(compoundId, caseResult, concentration)
        }).then(function () {
            callback();
        });
    });


    this.Then(/^verify Prescribed drug content is null if null select the prescribed drug as "([^"]*)"$/, function (prescribedDrug, callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.verifyNenterPrescribedDrug(prescribedDrug);
        }).then(function () {
            callback();
        });
    });


    this.Then(/^verify the Test screen compound id "([^"]*)" is added in the list$/, function (compoudId, callback) {
        browser.waitForAngular().then(function () {
        caseEditPage.verifyTestScreenCompoundName(compoudId);
        }).then(function () {
            callback();
        });
    });


    this.Then(/^search for Test screen name as "([^"]*)"$/, function (testScreenName, callback) {
        browser.waitForAngular().then(function () {
        caseEditPage.searchTestScreenName(testScreenName)
        }).then(function () {
            callback();
        });
    });
    this.Then(/^check whether unique Test screen is displayed and click on delete button$/, function (callback) {
        browser.waitForAngular().then(function () {
        caseEditPage.verifyUniqueTestScreenFound();
        caseEditPage.clickOnDeleteTestScreen();
        browser.sleep(10000);
        }).then(function () {
            callback();
        });
    });


};
module.exports = myStepDefinitionsWrapper;