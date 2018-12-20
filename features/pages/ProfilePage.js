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

var ProfilePage = function () {
    PROFILE_BUTTON = element.all(by.xpath("//*[contains(text(),'Profiles')]")).get(2);

    PROFILE_NAME = element(by.model("$ctrl.profileEdit.profileName"));
    CODE = element(by.model("$ctrl.profileEdit.code"));
    WORKLIST = element(by.xpath("//*[@placeholder='Select worklist']/preceding-sibling::*[1]"));
    CLIENT_BUSINESS = element(by.linkText("Select client"));//element(by.xpath("//*[@placeholder='Select client']"));//element(by.model("$ctrl.profileEdit.labClientId"));//
    RISK_TYPE = element.all(by.xpath("//*[@placeholder='Select risk']/preceding-sibling::*[1]")).get(0);//element.all(by.linkText("Select risk")).get(0); element.all(by.model("$ctrl.profileEdit.riskType"));

    /*******TEST GROUP INFO****/
    COMPOUND_TEST_GROUP = element(by.model("$ctrl.filtersObj.testcode"));
    VALIDITY_TEST_GROUP = element(by.model("$ctrl.filtersValidityObj.testcode"));

    /******Search Boxes*********/
    PROFILE_NAME_SEARCH = element(by.model("$ctrl.filtersObj.profileName"));
    TEST_CODES_SEARCH = element(by.model("$ctrl.filtersObj.compoundTestGroupNames"));
    VALIDITY_CODE_SEARCH = element(by.model("$ctrl.filtersObj.validityTestGroupNames"));
    CODE_SEARCH = element(by.model("$ctrl.filtersObj.Code"));
    PRACTICE_SEARCH = element(by.model("$ctrl.filtersObj.ClientBusinessName"));

    /********Action Buttons*********/
    EDIT_PROFILE = element(by.xpath("//*[@ng-click='$parent.$ctrl.editProfile(profile)']"));
    CREATE_CLONE_PROFILE = element(by.xpath("//*[@ng-click='$parent.$ctrl.createClone(profile)']"));
    DELETE_PROFILE = element(by.xpath("//*[@ng-click='$parent.$ctrl.showConfirm($event,profile)']"));

    this.clickOnProfileButton = function () {
        console.log("scrolling to profile button");
        utils.scrollIntoView(PROFILE_BUTTON);
        console.log("clciking on Profile button");
        utils.clickAnElement(PROFILE_BUTTON,3000);

    };

    this.enterProfileInfo = function (profileName, code, clientBusiness, riskType) {
        console.log("enetering the Profile info");
        PROFILE_NAME.clear();
        PROFILE_NAME.sendKeys(profileName);
        CLIENT_BUSINESS.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(clientBusiness);
        CODE.sendKeys(code);
        RISK_TYPE.click();
       utils.selectValueFromSelect2DropDownWithSearchLastElement(riskType);

    };

    this.enterCompoundTGandValidityTG = function (compoundTest, validityTest) {
        console.log("enetering the compound test group details");
        COMPOUND_TEST_GROUP.sendKeys(compoundTest);
        element.all(by.xpath("//*[@id='list-wrapper-r']/tr[1]/td[2]")).first().click();

        console.log("enetering the validity test group details");
        VALIDITY_TEST_GROUP.sendKeys(validityTest);
        element.all(by.xpath("//*[@id='list-wrapper-r']/tr[1]/td[2]")).last().click();
    };

    this.searchProfileName = function (profileSearch) {
        console.log("searching for the profile name "+profileSearch);
        PROFILE_NAME_SEARCH.sendKeys(profileSearch);
    };

    this.clickOnEditProfile = function () {
        console.log("clicking on Edit Profile button");
        EDIT_PROFILE.click();
    };

    this.editRiskType = function (riskTypeValue) {
        console.log("Changing the risk type to "+riskTypeValue);
        RISK_TYPE.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(riskTypeValue);
    }
    
    this.enterWorkList = function (workListValue) {
        WORKLIST.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(workListValue);
    }


};
module.exports = new ProfilePage();