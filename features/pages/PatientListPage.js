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

var PatientListPage = function (){

    dropDownSearchWindow =  element(by.id("s2id_autogen2_search"));
	
	 headerValue = element(by.xpath("//h1"));
	 labDropDown = element(by.xpath("//*[@id='s2id_autogen1']"));
	 accessionDropDown = element(by.xpath("//*[@href='#!/accession/aDashboard']//following-sibling::div"));//element(by.xpath("//*[@href='#!/accession/patients']//following-sibling::div")); #!/accession/aDashboard
	 selectResults = element(by.className("select2-results"));
	 addClientButton = element(by.linkText("Add Client"));

	 ORDERS_BUTTON = element(by.linkText("Orders"));

    /*****Search boxes*****/
    BUSINESS_NAME_SEARCH = element(by.model("$ctrl.filtersObj.BusinessName"));
    CONTACT_PERSON_SEARCH = element(by.model("$ctrl.filtersObj.ContactPerson"));
    CONTACT_EMAIL_SEARCH = element(by.model("$ctrl.filtersObj.ContactEmail"));
    PHONE_NUMBER_SEARCH = element(by.model("$ctrl.filtersObj.Phone"));
    DATE_CREATED_SEARCH = element(by.model("$ctrl.filtersObj.CreatedDate"));

    /*******Actions******/
    EDIT_CLIENT = element(by.xpath("//*[@ng-click='$parent.$ctrl.editClient(client)']"));

    /******Contact Information***/
    PHONE_NUMBER = element(by.model("$ctrl.clientEdit.contactNumber"));
    EMAIL_ADDRESS = element(by.model("$ctrl.clientEdit.contactEmail"));

	this.getHeaderValue = function(name) {

        headerValue.getText().then(function (text) {
            console.log('Requested page has been loaded successfully '+text);
            expect(text).to.have.string(name);
           	return text;
		})

            };

	this.clickingOnDropDown = function (dropDownValue) {
        console.log("Selecting Drop down values");
        labDropDown.click();
        dropDownSearchWindow.sendKeys(dropDownValue);
        selectResults.click();
        browser.sleep(5000)

    };

	this.clickOnAccessionDropDown = function (dropDownValue) {
        console.log("Clicking on Accession drop down");
	    accessionDropDown.click();
        console.log("Selecting value in dropdown");
        var mySelect = new select(accessionDropDown);
        mySelect.selectByLinkText(dropDownValue);

    };

    this.clickOnAddClientButton = function () {
        console.log("clicking on Add Client Button in Client List Page:");
        addClientButton.click();
        browser.sleep(3000);
        return require('./ClientCreatePage.js')
    };

    this.clickOnOrdersButton = function () {
        console.log("clicking on Order Button");
        ORDERS_BUTTON.click();

        return require('./OrdersListPage.js');


    }

    this.searchBusinessName = function (businessNameSearch) {
        console.log("searching for business name"+businessNameSearch);
        BUSINESS_NAME_SEARCH.sendKeys(businessNameSearch);
    };

    this.clickOnEditClient = function () {
        console.log("click on Edit Client icon");
        EDIT_CLIENT.click();
    };

    this.enterContactNumber = function (phoneNumber) {
        console.log("entering contact Number in contact Info");
        PHONE_NUMBER.clear();
        PHONE_NUMBER.sendKeys(phoneNumber);
    };

    this.enterEmailAddress = function (emailAddress) {
        console.log("entering email address in contact Info");
        EMAIL_ADDRESS.clear();
        EMAIL_ADDRESS.sendKeys(emailAddress);
    };
	
};


module.exports = new PatientListPage();