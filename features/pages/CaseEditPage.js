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

var CaseEditPage = function () {
    /********CASE SUMMARY********/
    SHOW_DETAIL = element(by.xpath("//*[@ng-click='$ctrl.showDetail() ']"));
    PATIENT_SEARCH_SELECTPATIENT = element(by.model("$mdAutocompleteCtrl.scope.searchText"));

    /********ORDER INFO WEB ELEMENTS****/
    //$mdAutocompleteCtrl.scope.searchText
    DATE_COLLECTED_CASE_INFO = element(by.model("$ctrl.caseEdit.dateCollected"));
    PREFRRD_LAB = element(by.xpath("//*[@ng-model='$ctrl.caseEdit.preferredLabId']/preceding-sibling::div"));
    PRACTICE = element(by.xpath("//*[contains(text(),'Select Practice')]"));
    LOCATION = element(by.xpath("//*[@ng-model='$ctrl.caseEdit.physicianLocationId ']/preceding-sibling::div"));//element(by.linkText("Select Location")); $ctrl.caseEdit.physicianLocationId
    ORDERING_PROVIDER = element(by.xpath("//*[@ng-model='$ctrl.caseEdit.primaryPhysicianId']/preceding-sibling::div"));
    ICD_CODES_CASE_INFO = element(by.xpath("//*[@ng-model='$ctrl.selectedIcdCodes']/preceding-sibling::div"));//element(by.model("$ctrl.selectedIcdCodes"));
    PRESCRIBE_DRUG_CASE_INFO = element(by.xpath("//*[@ng-model='$ctrl.caseEdit.prescribedDrugIds']/preceding-sibling::div"));
    //*[@id="s2id_autogen29"]/ul/li[1]/div

    /**************/
    PATIENT_NAME_SEARCH = element(by.model("$ctrl.filtersObj.PatientName"));
    EDIT_CASE = element(by.xpath("//*[@ng-click='$parent.$ctrl.editCase(case)']"))

    /*******Patient Info*******/
    FIRST_NAME_PATIENTINFO = element(by.model("$ctrl.patientInfo.patientFirstName"));
    LAST_NAME_PATIENTINFO = element(by.model("$ctrl.patientInfo.patientLastName"));
    DOB_PATIENTINFO = element(by.model("$ctrl.patientInfo.dateOfBirth"));
    GENDER_PATIENTINFO = element.all(by.xpath("//*[@ng-model='$ctrl.patientInfo.gender']/preceding-sibling::div"))

    /******Specimen Info*******/

    RESULT_SPECIMEN_INFO = element(by.xpath("//*[@ng-model='caseResult.result ']"));
    ADD_TEST_SCREEN = element.all(by.xpath("//*[@ng-click='$ctrl.addTestScreen()']"));
    COMPOUND_ID = element.all(by.xpath("//*[@ng-model='caseResult.compoundId']/preceding-sibling::div"));
    TEST_SCREEN_SEARCH = element.all(by.xpath("//*[@placeholder='Test Screen']"));
    TEST_SCREEN_NAME = element.all(by.xpath("//*[@data-ng-repeat='caseResult in $ctrl.caseEdit.caseSpecimens[0].caseResults | filter: {compound:filterCmpTest}']/td[1]/span"));
    CASE_RESULT = element.all(by.xpath("//*[@ng-model='caseResult.result ']"));
    CONCENTRATION = element.all(by.xpath("//*[@ng-model='caseResult.concentration']"));
    COMMENTS = element.all(by.xpath("//*[@ng-model='caseResult.comments']"));
    DELETE_BUTTON = element(by.xpath("//*[@data-ng-repeat='caseResult in $ctrl.caseEdit.caseSpecimens[0].caseResults | filter: {compound:filterCmpTest}']/td[6]"))

    this.patientSearch = function (patientName) {
        console.log("selecting the patient with name "+patientName);
        utils.searchForElement(PATIENT_SEARCH_SELECTPATIENT, patientName );
        element.all(by.xpath("//*[@class ='ng-scope selected']")).click();

    }

    this.enterCaseInfoDetails = function (dateCollected, preferredLab, practice, icdCode, prescribedDrug) {
        console.log("entering the Order Info details")
        DATE_COLLECTED_CASE_INFO.sendKeys(dateCollected);

        PREFRRD_LAB.click();
        utils.selectValueFromSelect2DropDownWithSearchFirstElement(preferredLab);

        PRACTICE.click();
        utils.selectValueFromSelect2DropDownWithSearchLastElement(practice);

        console.log("clicking on Prescribed Drug");
        PRESCRIBE_DRUG_CASE_INFO.click();
        browser.sleep(1000);
        utils.selectValueFromSelect2DropDownWithNoSearch(prescribedDrug);

        console.log("clicking on ICD code");
        ICD_CODES_CASE_INFO.click();
        utils.selectValueFromSelect2DropDownWithNoSearch(icdCode);

    }
    
    this.checkLocationAndOrderingProvider = function () {
        console.log("Verify whether Location and ordering provider is auto filled");
        utils.verifyElementTextIsNotNull(LOCATION);
        utils.verifyElementTextIsNotNull(ORDERING_PROVIDER);
    }

    this.searchPatientName = function (patientSearchCriteria) {
        console.log("searching the patient search criteria as "+patientSearchCriteria);
        utils.searchForElement(PATIENT_NAME_SEARCH, patientSearchCriteria );
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    this.clickOnEditCase = function () {
        console.log("clicking on Edit Case ");
        EDIT_CASE.click();
    }

    this.clickOnAddTestScreen = function () {
        console.log("clicking on Add Test Screen ");
        browser.executeScript('arguments[0].scrollIntoView()', ADD_TEST_SCREEN.get(1).getWebElement());
        ADD_TEST_SCREEN.get(1).click();
    }

    this.enterNewTestResult = function (compoundId, caseResult, concentration) {
        console.log("entering New Test screen Data");
        COMPOUND_ID.get(1).click();
        utils.selectValueFromSelect2DropDownWithSearchLastElement(compoundId);

     /*   CASE_RESULT.get(0).click();
        utils.selectValueFromSelect2DropDownWithNoSearch(caseResult);*/

        CONCENTRATION.get(0).sendKeys(concentration);
        COMMENTS.get(0).sendKeys("Comments text");

      // utils.scrollIntoElementWithLinkText()


    };

    this.verifyNenterPrescribedDrug = function(prescribedDrug){
        console.log("Verify the prescribed drug is filled in")
            //var verification = utils.verifyElementTextIsNotNull(PRESCRIBE_DRUG_CASE_INFO);
        WEBELEMENT = element(by.xpath("//*[@ng-model='$ctrl.caseEdit.prescribedDrugIds']/preceding-sibling::div/ul/li[1]/div"));
        WEBELEMENT.getText().then(function (elementText) {
            console.log("Printing the value of WEBELEMENT text:"+elementText);
        });
        //console.log("Printing the value of WEBELEMENT text:"+WEBELEMENT.getText());
        if(utils.verifyElementTextIsNotNull(WEBELEMENT)){
            console.log("prescribed drug is null")
            PRESCRIBE_DRUG_CASE_INFO.click();
            browser.sleep(1000);
            utils.selectValueFromSelect2DropDownWithNoSearch(prescribedDrug);
        }

    };

    this.verifyTestScreenCompoundName = function (compoundId) {
        console.log("Verifying the test screen having compound name as "+compoundId+" is present");
        TEST_SCREEN_NAME.count().then(function (countOfTestScreen) {
          for(var i=0;i<countOfTestScreen;i++){
              TEST_SCREEN_NAME.get(i).getText().then(function (CompoundName){
                  if(CompoundName == compoundId){
                      console.log("Matching compound "+CompoundName+" found")
                  }
              });
            }
        })

    };
    
    this.searchTestScreenName = function (testScreenName) {
        console.log("Searching for the compound "+testScreenName+" in test screen");
        browser.sleep(2000);
        TEST_SCREEN_SEARCH.get(1).sendKeys(testScreenName);

    }

    this.verifyUniqueTestScreenFound = function () {
        console.log("Checking whether only one test screen found")
        TEST_SCREEN_NAME.count().then(function (countOfTestScreen) {
            if(countOfTestScreen/2 == 1){
                console.log("Unique element found");
            }
        });
    }
    
    this.clickOnDeleteTestScreen = function () {
        console.log("click on delete button for test screen");
        utils.waitForAnElement(DELETE_BUTTON,5000);
        DELETE_BUTTON.click();
    }

    this.verifyPatientInfoAutofill = function () {

        console.log("Verify whether FirstName, LastName and date of birth fields are auto filled");
        utils.scrollIntoView(FIRST_NAME_PATIENTINFO);
        utils.verifyElementTextIsNotNull(FIRST_NAME_PATIENTINFO);
        utils.verifyElementTextIsNotNull(LAST_NAME_PATIENTINFO);
        utils.verifyElementTextIsNotNull(DOB_PATIENTINFO);

    }

    this.enterGenderInPatientInfo = function (gender) {

        console.log("selecting gender in patient info dropdown: ");
        GENDER_PATIENTINFO.click();
        utils.selectValueFromSelect2DropDownWithSearchLastElement(gender);
    }

    this.clickOnAddInsurance = function () {
        console.log("Clicking on Add Insurance button ");
        element(by.xpath("//*[@ng-click='$ctrl.addInsuranceDialog()']")).click();
        browser.sleep(10000)
    }
};
module.exports = new CaseEditPage();