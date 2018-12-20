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

var LocationCreatePage = function () {

    LOCATION_NAME = element(by.model("$ctrl.clientLocationEdit.name"));
    LOCATION_ADDRESS = element(by.model("$ctrl.clientLocationEdit.address"));
    LOCATION_CITY = element(by.model("$ctrl.clientLocationEdit.city"));
    LOCATION_ZIPCODE = element(by.model("$ctrl.clientLocationEdit.zip"));
    LOCATION_STATE = element(by.linkText("State"));
    LOCATION_STATE_SEARCH = element(by.xpath("//*[contains(@aria-activedescendant,'select2-result-label')]"));
    selectResults = element(by.className("select2-result-label"));

        //element(by.xpath("//*[@id='s2id_autogen23']"));

    this.enterCreateLocation = function (name, address, city, state, zipCode) {
        LOCATION_NAME.sendKeys(name);
        LOCATION_ADDRESS.sendKeys(address);
        LOCATION_CITY.sendKeys(city);

        LOCATION_STATE.click();
        LOCATION_STATE_SEARCH.sendKeys(state);
        selectResults.click();

        LOCATION_ZIPCODE.sendKeys(zipCode);


    }


};

module.exports = new LocationCreatePage();
