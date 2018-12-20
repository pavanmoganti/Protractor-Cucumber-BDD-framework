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

var LabOrdersPage = function () {

    /************/
    ADD_ORDER_BUTTON = element(by.linkText("Add Lab Order"));
    EXPORT_ORDERS_BUTTON = element(by.linkText("Export Orders"));

    /********PATIENT DETAILS WEB ELEMENTS****/
    ADD_PATIENT_BUTTON = element(by.xpath("//*[@ng-click='$ctrl.addPatient() ']"));
    FIRST_NAME_PATIENT = element(by.model("$ctrl.patientEdit.patientFirstName"));
    LAST_NAME_PATIENT = element(by.model("$ctrl.patientEdit.patientLastName"));
    DOB_PATIENT = element(by.xpath("//*[@moment-picker ='$ctrl.dateOfBirthTo']"));
    GENDER_PATIENT = element(by.linkText("Gender"));

    /********ORDER INFO WEB ELEMENTS****/
    DATE_COLLECTED_ORDER_INFO = element(by.model("$ctrl.orderEdit.dateCollected"));
    PHYSICIAN_ORDER_INFO = element(by.linkText("Select Primary Physician"));
    ICD_CODES_ORDER_INFO = element(by.xpath("//*[@ng-model='$ctrl.selectedIcdCodes']/preceding-sibling::div"));//element(by.model("$ctrl.selectedIcdCodes"));
    PRESCRIBE_DRUG_ORDER_INFO = element(by.xpath("//*[@ng-model='$ctrl.orderEdit.prescribedDrugIds']/preceding-sibling::div"));

   /***********/
   CLINICAL_HISTORY_INFO = element(by.model("$ctrl.orderEdit.clinicalHistory"));
   ADD_INSURANCE = element(by.linkText("Add Insurance"));

    /********SPECIMEN INFO WEB ELEMENTS****/
    //TYPE_SPECIMEN_INFO = element(by.xpath("//*[contains(text(),'Select a type')]"));
    TYPE_SPECIMEN_INFO = element(by.xpath("//*[@placeholder='Select a type']/preceding-sibling::div"));
//    PROFILE_SPECIMEN_INFO = element(by.xpath("//*[contains(text(),'Select a profile')]"));
    PROFILE_SPECIMEN_INFO = element(by.xpath("//*[@placeholder='Select a profile']/preceding-sibling::div"));

    EDIT_ORDER = element(by.linkText("Edit Order"));


    this.clickOnAddOrderButton = function () {
        console.log("clickin on Add Order Button")
        ADD_ORDER_BUTTON.click();
    };

    this.verifyVisibilityOfAddPatient = function () {
        console.log("checking the visibility of Add Patient button");
        utils.validatePresence(ADD_PATIENT_BUTTON,'Add Patient');
    }

    this.clickOnAddPatientButton = function () {
        console.log("clicking on Add Patient Button");
        ADD_PATIENT_BUTTON.click();
    }

    this.enterPatientDetailsInAddPatient = function (firstName, lastName, dob, gender) {
        console.log("enterting first name, last name, DOB and Gender of patient");
        FIRST_NAME_PATIENT.sendKeys(firstName);
        LAST_NAME_PATIENT.sendKeys(lastName);
        console.log("printing DOB from frature file "+dob)
        DOB_PATIENT.sendKeys(dob);

        GENDER_PATIENT.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(gender);
    }

    this.enterOrderInfoDetails = function (dateCollected, physician, icdCode, prescribedDrug) {

        console.log("clicking on Prescribed Drug");
        PRESCRIBE_DRUG_ORDER_INFO.click();
        browser.sleep(1000);
        utils.selectValueFromSelect2DropDownWithNoSearch(prescribedDrug);

        console.log("clicking on physician order");
        PHYSICIAN_ORDER_INFO.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(physician)

        console.log("clicking on ICD code");
        ICD_CODES_ORDER_INFO.click();
        utils.selectValueFromSelect2DropDownWithNoSearch(icdCode);

        console.log("entering the Order Info details")
        DATE_COLLECTED_ORDER_INFO.sendKeys(dateCollected);


       /* console.log("clicking on Prescribed Drug");
        PRESCRIBE_DRUG_ORDER_INFO.click();
        browser.sleep(3000);
        utils.selectValueFromSelect2DropDownWithNoSearch(prescribedDrug);*/
    }

    this.enterSpecimenInfo = function (specimentType, profile) {


        utils.scrollIntoView(TYPE_SPECIMEN_INFO);
        console.log("entering specimen and profile");
        utils.waitForAnElement(TYPE_SPECIMEN_INFO, 6000);
        TYPE_SPECIMEN_INFO.click();
        element.all(by.xpath("//*[contains(@aria-activedescendant,'select2-result-label')]")).last().sendKeys(specimentType);    /***Since the common method is not picking the last value*******/
        element(by.className("select2-result-label")).click();

       // utils.verifyText(ADD_INSURANCE, 'Add Insurance');
       // CLINICAL_HISTORY_INFO.sendKeys("Nothing");

        utils.waitForAnElement(PROFILE_SPECIMEN_INFO, 6000);
        PROFILE_SPECIMEN_INFO.click();
        element.all(by.xpath("//*[contains(@aria-activedescendant,'select2-result-label')]")).last().sendKeys(profile);    /***Since the common method is not picking the last value*******/
        element(by.className("select2-result-label")).click();


    }

   this.verifyVisibilityOfEditOrder = function(){
        console.log("verify the visibility of Edit Order Button");
       utils.validatePresence(EDIT_ORDER,'Edit Order');
       browser.sleep(3000);
   }







};
module.exports = new LabOrdersPage ();