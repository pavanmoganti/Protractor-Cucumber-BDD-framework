Feature: Adding and Editing user for the client

  Background:
    Given user navigated to itox lab portal


    Scenario Outline: Adding User to the created client

      When user enter Username field as "<UserName>" and Password as "<Password>"
      And click on login button in login page
      Then verify the page navigation to "Accession/ Dashboard" page
      And select the lab as "<LabName>" from dropdown
      And choose "<Accession Type>" from accession drop down
      Then verify the page navigation to "Client List" page
      Then search for the "BusinessName" as "<BusinessName>"
        And select the first available element
      Then verify the page navigation to "<BusinessName>" page
      Then click on "Users" button
      Then click on "Add User" button
      Then verify the page navigation to "user / create" page
      Then enter firstname as "<Users FirstName>" lastname as "<Users LastName>" username as "<User Name>" password as "<User Password>" and retype password as "<User Password>"
        And click on Save button
      And verify the page navigation to "<Users FirstName>" page

      Examples:
        |UserName	|Password	|LabName|Accession Type|BusinessName |Users FirstName |Users LastName |User Name |User Password |
#        |jmaster	|Admin@1234	|CCL    |LabAdmin	   |test-client  |testfirstname1  |testlastname2  |james2    |Admin$1234    |
#        |jmaster	|Admin@1234	|CCL    |LabAdmin	   |Clinical Connect Laboratory  |testfirstname2  |testlastname2  |james3    |Admin$1234    |
        |jmaster	|Admin@7890	|MNA	|LabAdmin	   |Michigan Neurology Associates	|summer		 |wind		 |summer    |Test@123	   |



  Scenario Outline: Adding User to the created client

    When user enter Username field as "<UserName>" and Password as "<Password>"
      And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
      And select the lab as "<LabName>" from dropdown
      And choose "<Accession Type>" from accession drop down
    Then verify the page navigation to "Client List" page
    Then search for the business name as "<BusinessName>"
      And select the first available element
    Then verify the page navigation to "<BusinessName>" page
    Then click on "Users" button
    Then search for the "FirstName" as "<Users FirstName>"
      And select the first available element
    Then click on "Edit User" button
    Then verify the page navigation to "/ Edit" page
    Then enter email address field to "<Email Address>" in client edit
      And click on Save button
      And verify "Edit User" button is displayed
      And verify the "Email" field is changed to "<Email Address>"


    Examples:
      |UserName	|Password	|LabName|Accession Type|BusinessName                 |Users FirstName |Email Address  |
#      |jmaster	|Admin@1234	|CCL    |LabAdmin	   |Clinical Connect Laboratory  |testfirstname2  |vanaja@itox.com|
        |jmaster	|Admin@7890	|MNA	|LabAdmin	   |Michigan Neurology Associates   |summer  |mna@itox.com|