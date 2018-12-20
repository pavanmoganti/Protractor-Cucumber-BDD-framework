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

var OrdersListPage = function () {

    PATIENT_NAME_SEARCH = element(by.model("$ctrl.filtersObj.PatientName"));
    TABLE_MATCHING_SEARCH = element(by.xpath("//*[@id='list-wrapper']/tr[1]/td[3]"));
    ACCEPT_LABORDER_BUTTON = element(by.xpath("//*[@data-ng-click = '$ctrl.accept(labOrder)']"));
    CASE_NUMBER_TEXT = element(by.xpath("//*[text()='Case Number']/following-sibling::div"));

    MACRO = element(by.linkText("Select macro"));

    this.searchPatient = function (patientSearchCriteria) {
        console.log("searching the patient search criteria as "+patientSearchCriteria);
        utils.searchForElement(PATIENT_NAME_SEARCH, patientSearchCriteria );
        utils.verifyTextContains(TABLE_MATCHING_SEARCH,patientSearchCriteria);


          ACCEPT_LABORDER_BUTTON.click();

    };

    this.verifyCaseNumberTextDisplay = function () {
        console.log("checking for the case number Text");
        utils.verifyElementTextIsNotNull(CASE_NUMBER_TEXT);
    }

    this.selectMacro = function (macroValue) {
        console.log("selecting Macro value as "+macroValue);
        MACRO.click();
        utils.selectValueFromSelect2DropDownWithSearch(macroValue)
    }
};

module.exports = new OrdersListPage();