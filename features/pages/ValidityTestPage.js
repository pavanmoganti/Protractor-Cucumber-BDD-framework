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

var ValidityTestPage = function () {

    TEST_CODE_VALIDITYTEST = element(by.model("$ctrl.validityEdit.testcode"));
    DESCRIPTION_VALIDITY_TEST = element(by.model("$ctrl.validityEdit.description"));

    this.enterCreateValidityTest = function (testCode, description) {
        console.log("entering the create validity test");
        TEST_CODE_VALIDITYTEST.sendKeys(testCode);
        DESCRIPTION_VALIDITY_TEST.sendKeys(description);

    }

};
module.exports = new ValidityTestPage();