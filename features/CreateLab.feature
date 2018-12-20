Feature: Adding a client to the application and resting its password

  Background:
    Given user navigated to itox lab portal

Scenario Outline: creating a Lab in itox application

When user enter Username field as "<UserName>" and Password as "<Password>"
And click on login button in login page
Then verify the page navigation to "Labs" page
Then click on "Add LabSetup" button
And verify "Save" button is displayed
Then enter the details of the lab name as "<Name>" email as "<Email>" Faxnumber as "<Fax Number>" address1 as "<Address1>" city as "<City>" state as "<State>" zipcode as "<Zip Code>"
And user info as "<User Info UserName>" and password as "<User Info Password>"
And click on Save button

Examples:
|UserName	|Password 	 |Name			|Email					|Fax Number 	|Address1	 |City		|State	|Zip Code|User Info UserName |User Info Password|
|admin		|Admin@1234	 |Test Lab 11	|testlab11@testlab.com	|9876543210		|New Address1|XYZ city	|Ohio	|76543	 |testmaster11		 |Admin$123			|