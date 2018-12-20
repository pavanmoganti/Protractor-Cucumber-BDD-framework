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

var CompoundCreatePage = function () {

    /*******Compound Info*****/
    CLASS = element(by.model("$ctrl.compoundEdit.classtype"));
    NAME = element(by.model("$ctrl.compoundEdit.name"));
    TYPE = element(by.xpath("//*[@ng-model='$ctrl.compoundEdit.type']/preceding-sibling::div"));

    /********Compound Information********/
    UNIT_COMPOUND = element(by.xpath("//*[@ng-model='$ctrl.compoundEdit.units']/preceding-sibling::div"));
    RESULT = element(by.xpath("//*[@ng-model='$ctrl.compoundEdit.result']/preceding-sibling::div"));

    /****Comments***/
    POSITIVE_COMMENTS = element(by.model("$ctrl.compoundEdit.positiveComments"));
    NEGATIVE_COMMENTS = element(by.model("$ctrl.compoundEdit.negativeComments"));

    /******Specimen Cutoff Values******/
    ADD_SPECIMEN = element(by.xpath("//*[@ng-click='$ctrl.addSpecimen()']"));
    SPECIMEN_TYPE = element(by.xpath("//*[@ng-model='specimen.specimenTypeId']"));
    UPPER_LIMIT = element(by.xpath("//*[@ng-model='specimen.ulloc']"));
    DETECTION = element(by.xpath("//*[@ng-model='specimen.detectionPeriod']"));
    CUT_OFF = element(by.xpath("//*[@ng-model='specimen.cutoff']"));
    UNITS_SPECIMEN = element(by.xpath("//*[@ng-model='specimen.units']"));
    MIN_RANGE = element(by.xpath("//*[@ng-model='specimen.minRange']")); //specimen.minRange
    MAX_RANGE = element(by.xpath("//*[@ng-model='specimen.maxRange']"));

    this.enterClass = function (className) {
        console.log("enter class name");
        CLASS.clear();
        CLASS.sendKeys(className);
    };

    this.enterName = function (name) {
        console.log("enter name");
        NAME.clear();
        NAME.sendKeys(name);
    };

    this.enterType = function (type) {
        console.log("enter Type");
        TYPE.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(type);
    };

    this.enterUnitInCompound = function (unitCompound) {
        console.log("enter unit value in compound section");
        UNIT_COMPOUND.click();
        utils.selectValueFromSelect2DropDownWithSearchLastElement(unitCompound);
    };

    this.enterResult =function (result) {
        console.log("enter result");
        RESULT.click();
        utils.selectValueFromSelect2DropDownWithSearchLastElement(result);
    };

    this.positiveComments = function (positiveComments) {
        console.log("entering positive comments");
        POSITIVE_COMMENTS.clear();
        POSITIVE_COMMENTS.sendKeys(positiveComments);
    };

    this.clickOnAddSpecimen = function () {
        console.log("clicking on Add Specimen button");
        ADD_SPECIMEN.click();
        utils.waitForAnElement(SPECIMEN_TYPE,5000);
    }

  /*  this.enterAddSpecimen = function (addSpecimen) {
        console.log("entering add specimen");
        ADD_SPECIMEN.clear();
        ADD_SPECIMEN.sendKeys(addSpecimen);
    };*/

    this.enterSpecimenType = function (specimenType) {

    /*    UNITS_SPECIMEN.click();
        console.log("sending the data");
        UNITS_SPECIMEN.sendKeys('ng/ml');
        console.log("data sent");
        utils.selectAndClickFromDropDown('ng/ml',1);*/
         console.log("entering specimen type");
        SPECIMEN_TYPE.click();
        SPECIMEN_TYPE.sendKeys(specimenType);
        utils.selectAndClickFromDropDown(specimenType,1)


    };

    this.enterUpperLimit = function (upperLimit) {
        console.log("entering Upper Limit");
        UPPER_LIMIT.clear();
        UPPER_LIMIT.sendKeys(upperLimit);
    };

    this.enterDetection = function (detection) {
        console.log("entering detection data");
        DETECTION.clear();
        DETECTION.sendKeys(detection);

    };

    this.enterCutOff = function (cutOffValue) {
        console.log("entering cut off value");
        CUT_OFF.clear();
        CUT_OFF.sendKeys(cutOffValue);
    };

    this.enterUnits = function (units) {
        console.log("entering Units value");
        UNITS_SPECIMEN.click();
        UNITS_SPECIMEN.sendKeys(units);
        console.log("data sent");
        utils.selectAndClickFromDropDown(units,4);

    };
    this.enterMinRange = function (minRange) {
        console.log("entering Min Range");
        MIN_RANGE.clear();
        MIN_RANGE.sendKeys(minRange);
    };

    this.enterMaxRange = function (maxRange) {
        console.log("entering Max Range");
        MAX_RANGE.clear();
        MAX_RANGE.sendKeys(maxRange);
    };
}
module.exports = new CompoundCreatePage();