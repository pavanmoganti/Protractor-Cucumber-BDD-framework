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

    this.Then(/^click on specimen type value which has a name "([^"]*)"$/, function (specimenType, callback) {
        browser.waitForAngular().then(function () {
            SPECIMENTYPE_ROW = element.all(by.xpath("//*[@data-ng-repeat = 'workList in $ctrl.myWorklists']/td"));


            SPECIMENTYPE_ROW.then(function (items) {
               console.log("number of Items is "+items.length) ;
                for(var i=0;i<items.length;i++){
                    console.log("iterating the loop for "+i+" time");
                    console.log("printing the text "+items[i].getText().then(function (text) {
                        if(text === specimenType ){
                            console.log("enetered IF LOOP when strings matched")
                            console.log("Found the right specimen type: "+specimenType );
                            console.log("Found in the index: "+i );
                        }
                    }));
                /*    if(items[i].getText() === specimenType){
                        console.log("enetered IF LOOP when strings matched")
                        console.log("Found the right specimen type: "+specimenType );
                        console.log("Found in the index: "+i );
                    }*/
                    browser.sleep(10000);
                     /*items[i].getText().then(function (actualText) {
                         console.log("Actual Specimen type: "+actualText);
                         if(actualText === specimenType){
                             console.log("enetered IF LOOP when strings matched")
                             console.log("Found the right specimen type: "+specimenType );
                             console.log("Found in the index: "+i );
                         }
                        // items[i].click();
                     });*/
                };
            });

        }).then(function () {
            callback();
        });
    });
    this.Then(/^search for the patient "([^"]*)" in select patient$/, function (patientName, callback) {
        browser.waitForAngular().then(function () {
        caseEditPage.patientSearch(patientName)
        }).then(function () {
            callback();
        });
    });
    this.Then(/^verify First Name Last Name and DOB fields are auto filled in patient info section$/, function (callback) {

        browser.waitForAngular().then(function () {
            caseEditPage.verifyPatientInfoAutofill();
            /*console.log("Verify whether FirstName, LastName and date of birth fields are auto filled");
            FIRST_NAME_PATIENTINFO = element(by.model("$ctrl.patientInfo.patientFirstName"));
            LAST_NAME_PATIENTINFO = element(by.model("$ctrl.patientInfo.patientLastName"));
            DOB_PATIENTINFO = element(by.model("$ctrl.patientInfo.dateOfBirth"));
            utils.scrollIntoView(FIRST_NAME_PATIENTINFO);
            utils.verifyElementTextIsNotNull(FIRST_NAME_PATIENTINFO);
            utils.verifyElementTextIsNotNull(LAST_NAME_PATIENTINFO);
            utils.verifyElementTextIsNotNull(DOB_PATIENTINFO);
*/
        }).then(function () {
            callback();
        });


    });
    this.Then(/^enter gender as "([^"]*)"$/, function (gender, callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.enterGenderInPatientInfo(gender);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on add insurance button$/, function (callback) {
        browser.waitForAngular().then(function () {
            caseEditPage.clickOnAddInsurance();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^verify "([^"]*)" frame is displayed$/, function (arg1, callback) {
        browser.waitForAngular().then(function () {

        }).then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;