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

var CommonPage = function () {

    this.clickOnButtonWithLinkText = function (elementLinkText) {
        console.log("clicking on Element with LinkText as "+elementLinkText);
        webElement = element(by.linkText(elementLinkText));
//        utils.scrollIntoView(webElement);
        utils.clickAnElement(webElement,5000);
    }

};

module.exports = new CommonPage();