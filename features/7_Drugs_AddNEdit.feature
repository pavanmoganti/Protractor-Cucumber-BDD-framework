Feature: Creating and Edit a Drug


  Background:
    Given user navigated to itox lab portal


  Scenario Outline: Create a Drug
    When user enter Username field as "<UserName>" and Password as "<Password>"
        And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
        And choose "<Accession Type>" from accession drop down
        And verify the page navigation to "Client List / Search" page
    Then click on "Libraries" button
        And verify the page navigation to "Compounds / Search" page
     Then click on "Drugs" button
        And verify the page navigation to "Drugs / Search" page
      Then click on "Add Drug" button
        And verify the page navigation to "Drug / Create" page
      Then enter drug name as "<Drug Name>" and accession prefix as "<Accession Prefix>"
      Then search for the "name" as "<Name>"
        And select the first available record by selecting  check box in "5" th column
        And click on Save button
        And verify "Edit Drug" button is displayed
        And verify the "Drug Name" field is changed to "<Drug Name>"


      Examples:
      |UserName	|Password	|Accession Type|Drug Name |Accession Prefix |Name     |
#      |jmaster  |Admin@1234 |LabAdmin      |ear Drug  |Both             |ear pain |
#      |jmaster  |Admin@1234 |LabAdmin      |Nose Drug  |Oral            |ear pain |
	|jmaster  |Admin@7890 |LabAdmin      |Bcomplex     |Oral		   |AMPHETAMINE |


  Scenario Outline: Edit a Drug
    When user enter Username field as "<UserName>" and Password as "<Password>"
      And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
      And choose "<Accession Type>" from accession drop down
      And verify the page navigation to "Client List / Search" page
    Then click on "Libraries" button
      And verify the page navigation to "Compounds / Search" page
    Then click on "Drugs" button
      And verify the page navigation to "Drugs / Search" page
    Then search for the "drugName" as "<Drug Name>"
      And select the first available element
      And verify the page navigation to "<Drug Name>" page
    Then click on "Edit Drug" button
    Then enter drug name as "<Drug Name>" and accession prefix as "<Accession Prefix>"
      And click on Save button
      And verify "Edit Drug" button is displayed
      And verify the "Accession Prefix" field is changed to "<Accession Prefix>"

    Examples:
      |UserName	|Password	|Accession Type|Drug Name  |Accession Prefix |
#      |jmaster  |Admin@1234 |LabAdmin      |Nose Drug  |Both             |
  	|jmaster  	 |Admin@7890 |LabAdmin      |Bcomplex     |Oral             |