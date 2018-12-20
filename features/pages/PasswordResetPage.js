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

var PasswordResetPage = function (){
    OLD_PASSWORD = element(by.model("$ctrl.passwordChange.oldPassword"));
    NEW_PASSWORD = element(by.model("$ctrl.passwordChange.password"));
    RETYPE_PASSWORD = element(by.model("$ctrl.retypePassword"));
    CHANGE_PASSWORD_BUTTON = element(by.linkText("change password"));
    
    this.passwordChange = function (oldPassword, newPassword) {
        console.log("entering old password and new password ")
        OLD_PASSWORD.sendKeys(oldPassword);
        NEW_PASSWORD.sendKeys(newPassword);
        RETYPE_PASSWORD.sendKeys(newPassword);
    }

    this.clickOnChangePassword = function () {
        console.log("clicking on change password button");
        CHANGE_PASSWORD_BUTTON.click();
    }
}

module.exports = new PasswordResetPage ();