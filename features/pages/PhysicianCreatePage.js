var expects = require('expect');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
var fs = require('fs');

var utils = require('../pages/common/utils.js');
var select = require('../pages/common/select-wrapper.js');
var EC = protractor.ExpectedConditions;

var PhysicianCreatePage = function () {

    PHYSICIANFIRSTNAME = element(by.model("$ctrl.clientEdit.firstName"));
    PHYSICIANLASTNAME = element(by.model("$ctrl.clientEdit.lastName"));
    NPINUMBER = element(by.model("$ctrl.clientEdit.npi"));
    PHYSICIANBUSINESSNAME = element(by.model("$ctrl.clientEdit.businessName"));
    SAVEBUTTON = element(by.linkText("Save"));
    USERTAB = element(by.linkText("Users"));
    ADDUSER = element(by.linkText("Add User"));

    this.enterInfoToAddPhysician = function (firstName, lastName, npiNumber, physicianBusinessName) {
        console.log("entering firstname, lastname, NPI# and businessname")
        PHYSICIANFIRSTNAME.sendKeys(firstName);
        PHYSICIANLASTNAME.sendKeys(lastName);
        NPINUMBER.sendKeys(npiNumber);
        PHYSICIANBUSINESSNAME.sendKeys(physicianBusinessName);
    }

    this.clickOnSaveButton = function () {
        console.log("clicking on SAVE button");
        SAVEBUTTON.click();
    }

    this.clickOnUserTab = function () {
        console.log("clicking on User tab");
        USERTAB.click();
    }

    this.clickOnAddUser = function () {
        console.log("clicking on Add User button");
        ADDUSER.click();
        browser.sleep(10000);

        //return require('./PatientListPage.js');
    }

};

module.exports = new PhysicianCreatePage();