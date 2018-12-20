var expects = require('expect');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
var expect = chai.expect;
var ec = protractor.ExpectedConditions;
var fs = require('fs');


var utils = require('../pages/common/utils.js');



var base_page = require('../pages/BasePage.js');
var login_page = require('../pages/LoginPage.js');
var patient_page = require('../pages/PatientListPage.js');
var clientCreatePage = require('../pages/ClientCreatePage.js');
var physicianCreatePage = require('../pages/PhysicianCreatePage.js');
var userCreatePage = require('../pages/UserCreatePage.js');
var locationCreatePage = require('../pages/LocationCreatePage.js');
var passwordRestPage = require('../pages/PasswordResetPage.js');
var labOrdersPage = require('../pages/LabOrdersPage.js');
var ordersListPage = require('../pages/OrdersListPage.js');
var labPage = require('../pages/LabPage.js');



var myStepDefinitionsWrapper = function () {

    this.setDefaultTimeout(60 * 1000);
    this.Given(/^user navigated to itox lab portal$/, function (callback) {

        base_page.navigateToURL("http://54.158.165.133:5000/#!/login");

        browser.waitForAngular().then(function () {
            console.log("this the step definition file");
        }).then(function () {
            callback();
        })

    });

    this.When(/^user enter Username field as "([^"]*)" and Password as "([^"]*)"$/, function (username, password, callback) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForAngular().then(function () {
            login_page.setUserName(username);
            login_page.setPassWord(password);

        }).then(function () {
            callback();
        });
    });

    this.When(/^click on login button in login page$/, function (callback) {
        browser.waitForAngular().then(function () {
            login_page.loginButtonClick();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^verify the page navigation to "([^"]*)" page$/, function (pagename, callback) {
        browser.waitForAngular().then(function () {
         patient_page.getHeaderValue(pagename);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^select the lab as "([^"]*)" from dropdown$/, function (dropDownValue, callback) {
        browser.waitForAngular().then(function () {
            patient_page.clickingOnDropDown(dropDownValue);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^choose "([^"]*)" from accession drop down$/, function (dropDownValue, callback) {
        browser.waitForAngular().then(function () {
            patient_page.clickOnAccessionDropDown(dropDownValue);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on the Add Client button in Client List page$/, function (callback) {
        browser.waitForAngular().then(function () {
            patient_page.clickOnAddClientButton();
        }).then(function () {
            callback();
        });
    });


    this.Then(/^enter the firstName as "([^"]*)" and businessName as "([^"]*)" in Client Creation page$/, function (firstName, businessName, callback) {
        browser.waitForAngular().then(function () {
            clientCreatePage.enterInfoToAddClient(firstName, businessName);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on Save button in Client Creation page$/, function (callback) {
        browser.waitForAngular().then(function () {
            clientCreatePage.clickOnSaveButton();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^verify entered client details with "([^"]*)" are displayed correctly$/, function (expectedBusinessName, callback) {
        browser.waitForAngular().then(function () {
            clientCreatePage.getClientInfoBusinessName(expectedBusinessName);
        }).then(function () {
            callback();
        });
    });


    this.Then(/^select the Physician Tab from the Client Creation Page$/, function (callback) {
        browser.waitForAngular().then(function () {
            clientCreatePage.clickOnPhysiciansTab()
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Add Physician button$/, function (callback) {
        browser.waitForAngular().then(function () {
            clientCreatePage.clickOnAddPhysician();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^enter firstname as "([^"]*)" lastname as "([^"]*)" npi number as "([^"]*)" and business name as "([^"]*)"$/,
        function (firstName, lastName, npiNumber, businessName, callback) {
        browser.waitForAngular().then(function () {
            physicianCreatePage.enterInfoToAddPhysician(firstName, lastName, npiNumber, businessName)
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Save button in Physician Creation page$/, function (callback) {
        browser.waitForAngular().then(function () {
            physicianCreatePage.clickOnSaveButton();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Users button in Physician Creation page$/, function (callback) {
        browser.waitForAngular().then(function () {
            physicianCreatePage.clickOnUserTab();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Add User button$/, function (callback) {
        browser.waitForAngular().then(function () {
            physicianCreatePage.clickOnAddUser();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^enter firstname as "([^"]*)" lastname as "([^"]*)" username as "([^"]*)" password as "([^"]*)" and retype password as "([^"]*)"$/,
        function (firstName, lastName, userName, password, retypePassword, callback) {
        browser.waitForAngular().then(function () {
            userCreatePage.enterUserInfo(firstName, lastName, userName, password, retypePassword)
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on Save button in User Create page$/, function (callback) {
        browser.waitForAngular().then(function () {
           physicianCreatePage.clickOnSaveButton();
            // clientCreatePage.clickOnSaveButton();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^click on Locations tab$/, function (callback) {
        browser.waitForAngular().then(function () {
            userCreatePage.clickOnLocationsTab();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Add Location buttom$/, function (callback) {
        browser.waitForAngular().then(function () {
            userCreatePage.clickOnAddLocationButton();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^enter name as "([^"]*)" address as "([^"]*)" city as "([^"]*)" state as "([^"]*)" and zipcode as "([^"]*)"$/,
        function (locationName, address, city, state, zipCode, callback) {
            browser.waitForAngular().then(function () {
                locationCreatePage.enterCreateLocation(locationName, address, city, state, zipCode)
            }).then(function () {
                callback();
            });

    });
    this.Then(/^click on Save button in Location Creation page$/, function (callback) {
        browser.waitForAngular().then(function () {
            physicianCreatePage.clickOnSaveButton();
        }).then(function () {
            callback();
        });
    });

    /***
     * Step Definitions for
     * Scenario Outline: Resetting the password for created user
     */

    this.Then(/^enter old password as "([^"]*)" new password as "([^"]*)" and retype new password$/, function (oldPassword, newPassword, callback) {
        browser.waitForAngular().then(function () {
            passwordRestPage.passwordChange(oldPassword, newPassword);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Change Password button$/, function (callback) {
        browser.waitForAngular().then(function () {
            passwordRestPage.clickOnChangePassword();
            browser.sleep(5000);
        }).then(function () {
            callback();
        });
    });

    /***
     * step definitions for
     * Scenario Outline: Adding Lab Portal from the created user
     */
    this.Then(/^click on Add Lab Order button in Lab Order Page$/, function (callback) {
        browser.waitForAngular().then(function () {
        labOrdersPage.clickOnAddOrderButton();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^verify Add Patient Button is displayed in Create Order$/, function (callback) {
        browser.waitForAngular().then(function () {
        labOrdersPage.verifyVisibilityOfAddPatient();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Add Patient Button$/, function (callback) {
        browser.waitForAngular().then(function () {
            labOrdersPage.clickOnAddPatientButton()
        }).then(function () {
            callback();
        });
    });
    this.Then(/^enter patient first name as "([^"]*)" last name as "([^"]*)" DOB as "([^"]*)" gender as "([^"]*)"$/,
        function (firstName, lastName, dob, gender, callback) {
        browser.waitForAngular().then(function () {
            labOrdersPage.enterPatientDetailsInAddPatient(firstName, lastName, dob, gender,callback);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^click on Save button$/, function (callback) {
        browser.waitForAngular().then(function () {
           clientCreatePage.clickOnSaveButton();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^verify if the patient "([^"]*)" is added to the Create Order$/, function (firstName, callback) {
        browser.waitForAngular().then(function () {
            patient_page.getHeaderValue(firstName);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^enter date collected as "([^"]*)" physician as "([^"]*)" ICD codes as "([^"]*)" and prescribed drug as "([^"]*)" in Order Info$/,
        function (dateCollected, physician, icdCode, prescribedDrug, callback) {
        browser.waitForAngular().then(function () {
            labOrdersPage.enterOrderInfoDetails(dateCollected, physician, icdCode, prescribedDrug, callback);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^enter type as "([^"]*)" and profile as "([^"]*)" in Specimen Info$/, function (specimenType, profile, callback) {
        browser.waitForAngular().then(function () {
            labOrdersPage.enterSpecimenInfo(specimenType, profile,callback);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^select the reasons for the test as "([^"]*)"$/, function (reasonForTest, callback) {
        browser.waitForAngular().then(function () {

        }).then(function () {
            callback();
        });
    });

    this.Then(/^if the reasons for test is other enter the reason as "([^"]*)"$/, function (otherReasonDescription, callback) {
        browser.waitForAngular().then(function () {

        }).then(function () {
            callback();
        });
    });


    /**********************/


    this.Then(/^verify whether the order is created with "([^"]*)" and the order details page is displayed$/, function (firstName, callback) {
        browser.waitForAngular().then(function () {
            patient_page.getHeaderValue(firstName,callback);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^verify Edit Order button is displayed$/, function (callback) {
        browser.waitForAngular().then(function () {
            labOrdersPage.verifyVisibilityOfEditOrder();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^verify "([^"]*)" button is displayed$/, function (buttonName, callback) {
        browser.waitForAngular().then(function () {
                utils.verifyVisibilityOfButton(buttonName);
        }).then(function () {
            callback();
        });
    });

    /****
     * step definitions for
     * Scenario Outline: Accepting the order created in clientportal
     */

    this.Then(/^click on Orders button in Patient List page$/, function (callback) {
        browser.waitForAngular().then(function () {
        patient_page.clickOnOrdersButton();
        }).then(function () {
            callback();
        });
    });
    this.Then(/^search for the patient name as "([^"]*)" in the search box and click on accept laborder$/, function (patientSearchCriteria, callback) {
        browser.waitForAngular().then(function () {
        ordersListPage.searchPatient(patientSearchCriteria);
        }).then(function () {
            callback();
        });
    });


    this.Then(/^verify Case Number is displayed in Case Summary$/, function (callback) {
        browser.waitForAngular().then(function () {
            ordersListPage.verifyCaseNumberTextDisplay();
        }).then(function () {
            callback();
        });
    });

    this.Then(/^select macro value as "([^"]*)"$/, function (macroValue, callback) {
        browser.waitForAngular().then(function () {
            ordersListPage.selectMacro(macroValue);
        }).then(function () {
            callback();
        });
    });

    /************
     * step definitions for
     * Scenario Outline: creating a Lab in itox application
     */

    this.Then(/^enter the details of the lab name as "([^"]*)" email as "([^"]*)" Faxnumber as "([^"]*)" address1 as "([^"]*)" city as "([^"]*)" state as "([^"]*)" zipcode as "([^"]*)"$/,
        function (name, email, faxNumber, address1, city, state, zipCode, callback) {
        browser.waitForAngular().then(function () {
            labPage.enterLabDetails(name, email, faxNumber, address1, city, state, zipCode);
        }).then(function () {
            callback();
        });
    });
    this.Then(/^user info as "([^"]*)" and password as "([^"]*)"$/, function (userName, password, callback) {
        browser.waitForAngular().then(function () {
            labPage.enterLabUserInfo(userName, password);
        }).then(function () {
            callback();
        });

    });

    /***
     * Scenario Outline: Edit Client
     */

    this.Then(/^search for the business name as "([^"]*)"$/, function (businessName, callback) {
        browser.waitForAngular().then(function () {
            patient_page.searchBusinessName(businessName);
        }).then(function () {
            callback();
        });

    });

    this.Then(/^click on Edit client icon$/, function (callback) {
        browser.waitForAngular().then(function () {
            patient_page.clickOnEditClient();
        }).then(function () {
            callback();
        });

    });

    this.Then(/^update the phone number field to "([^"]*)"$/, function (phoneNumber, callback) {
        browser.waitForAngular().then(function () {
            patient_page.enterContactNumber(phoneNumber);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^update email address field to "([^"]*)"$/, function (emailAddress, callback) {
        browser.waitForAngular().then(function () {
            patient_page.enterEmailAddress(emailAddress);
        }).then(function () {
            callback();
        });
    });


};
module.exports = myStepDefinitionsWrapper;