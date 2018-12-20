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

var UserCreatePage = function () {

    USER_FIRSTNAME = element(by.model("$ctrl.userEdit.firstName"));
    USER_LASTNAME = element(by.model("$ctrl.userEdit.lastName"));
    USER_USERNAME = element(by.model("$ctrl.userEdit.username"));
    USER_EMAIL = element(by.model("$ctrl.userEdit.email"));
    USER_PASSWORD = element(by.model("$ctrl.userEdit.password"));
    USER_CONFIRMPASSOWRD = element(by.model("$ctrl.confirmPassword"));

    LOCATIONSTAB = element(by.linkText("Locations"));
    ADDLOCATIONBUTTON = element(by.linkText("Add Location"));

    this.enterUserInfo = function (firstName, lastName, userName, password, retypePassword) {
        console.log("enetering firstName, lastName, UserName, password ")
        USER_FIRSTNAME.sendKeys(firstName);
        USER_LASTNAME.sendKeys(lastName);
        USER_USERNAME.sendKeys(userName);
        USER_PASSWORD.sendKeys(password);
        USER_CONFIRMPASSOWRD.sendKeys(retypePassword);
    };

    this.clickOnLocationsTab = function () {
        console.log("clicking on Locations tab");
        LOCATIONSTAB.click();
    };

    this.clickOnAddLocationButton = function () {
        console.log("clicking on Add Location Button");
        ADDLOCATIONBUTTON.click();
    };

    this.enterEmail = function (emailAddress) {
       console.log("entering email address in Edit page")
        USER_EMAIL.clear();
        USER_EMAIL.sendKeys(emailAddress);
    }

};

module.exports = new UserCreatePage();