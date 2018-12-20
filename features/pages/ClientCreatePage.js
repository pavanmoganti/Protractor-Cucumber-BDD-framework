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

var ClientCreatePage = function () {

    FIRSTNAME = element(by.model("$ctrl.clientEdit.firstName"));
    BUSINESSNAME = element(by.model("$ctrl.clientEdit.businessName"));
    SAVEBUTTON = element(by.linkText("Save"));
    CLIENTINFOBUSINESSNAME = element(by.xpath("//*[contains(text(),'Business Name')]//following-sibling::div"));
    PHYSICIANTAB = element(by.linkText("Physicians"));
    ADDPHYSCIANBUTTON = element(by.linkText("Add Physician"));


    this.enterInfoToAddClient = function (firstName, businessName) {
        console.log("Entering firstName and businessName to Add Client")
        FIRSTNAME.sendKeys(firstName);
        BUSINESSNAME.sendKeys(businessName);
    }

    this.clickOnSaveButton = function () {
        console.log("clicking on SAVE Button")
        SAVEBUTTON.click();
    }

    this.getClientInfoBusinessName = function (expectedBusinessName) {

        console.log("verifying the Businees Name matches with client details entered");
        utils.verifyText(CLIENTINFOBUSINESSNAME, expectedBusinessName);
    }

    this.clickOnPhysiciansTab = function () {
        console.log("clicking on Physician tab in client create page")
        PHYSICIANTAB.click();
    }

    this.clickOnAddPhysician = function () {
        console.log("clciking on Add Physician button");
        ADDPHYSCIANBUTTON.click();
    }


};

module.exports = new ClientCreatePage();