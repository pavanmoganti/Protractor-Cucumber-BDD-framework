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

var DrugPage = function () {
    DRUG_NAME = element(by.xpath("//*[@ng-model='$ctrl.drugEdit.drugName']")); //$ctrl.drugEdit.accPrefix
    ACCESSION_PREFIX = element(by.xpath("//*[@ng-model='$ctrl.drugEdit.accPrefix']/preceding-sibling::div"));


    this.enterDrugName = function (drugName) {
        console.log("entering Drug Name");
        DRUG_NAME.clear();
        DRUG_NAME.sendKeys(drugName);
    }

    this.enterAccessionPrefix = function (accessionPrefix) {
        console.log("enter Accession Prefix");
        ACCESSION_PREFIX.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(accessionPrefix);
    }

};
module.exports = new DrugPage();
