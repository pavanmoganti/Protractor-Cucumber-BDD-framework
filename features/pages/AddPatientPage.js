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


var AddPatientPage = function () {

    /*********Insurance Info*********/

    INSURANCE_TYPE = element(by.xpath("//*[@ng-model='insuranceEdit.insuranceType']/preceding-sibling::div"))


};
module.exports = new AddPatientPage();
