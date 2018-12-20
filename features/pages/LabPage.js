var expects = require('expect');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
var fs = require('fs');

//var assert = require('assert');
var utils = require('../pages/common/utils.js');
var select = require('../pages/common/select-wrapper.js');
var EC = protractor.ExpectedConditions;

var LabPage = function () {

    /*Lab Info*/
    LAB_NAME = element(by.model("$ctrl.labEdit.labName"));
    LAB_EMAIL = element(by.model("$ctrl.labEdit.emailpin"));

    /*Lab Details*/
    FAX_NUMBER = element(by.model("$ctrl.labEdit.faxNumberForReport"));

    /*Address*/
    ADDRESS1 = element(by.model("$ctrl.labEdit.address1"));
    CITY = element(by.model("$ctrl.labEdit.city"));
    STATE = element(by.model("$ctrl.labEdit.state"));
    ZIP_CODE = element(by.model("$ctrl.labEdit.zip"));

    /*User Info*/
    USERNAME = element(by.model("$ctrl.labEdit.initialLabAdmin.username"));
    PASSWORD = element(by.model("$ctrl.labEdit.initialLabAdmin.password"));

    this.enterLabDetails = function (name, email, faxNumber, address1, city, state, zipCode) {
        console.log("entering LabInfo, details and Address");
        LAB_NAME.sendKeys(name);
        LAB_EMAIL.sendKeys(email);
        FAX_NUMBER.sendKeys(faxNumber);
        ADDRESS1.sendKeys(address1);
        CITY.sendKeys(city);
        STATE.sendKeys(state);
        ZIP_CODE.sendKeys(zipCode);
    }

    this.enterLabUserInfo = function (userName, password) {
        console.log("entering the user info details")
        USERNAME.sendKeys(userName);
        PASSWORD.sendKeys(password);

    }

}
module.exports = new LabPage();