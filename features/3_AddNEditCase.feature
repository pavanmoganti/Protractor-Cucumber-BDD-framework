Feature: Adding and Editing a  Case

  Background:
    Given user navigated to itox lab portal


Scenario Outline: Add case
  When user enter Username field as "<UserName>" and Password as "<Password>"
  And click on login button in login page
  Then verify the page navigation to "Accession/ Dashboard" page
  Then click on "New Case" button
    And verify the page navigation to "Case / Create" page
    And select the lab as "<LabName>" from dropdown
  Then click on Add Patient Button
    And enter patient first name as "<Patient FirstName>" last name as "<Patient LastName>" DOB as "<DateOfBirth>" gender as "<Gender>"
    And click on Save button
    And enter date collected as "<Date Collected>" preferred lab as "<Prefered Lab>" practice as "<Practice>" ICD codes as "<ICD Codes>" and prescribed drug as "<Prescribed Drug>" in Case Info
    And check whether Location and Ordering Provider is auto filled
  Then enter type as "<Specimen Type>" and profile as "<Profile>" in Specimen Info
    And click on Save button
  Then verify "Edit Case" button is displayed
    And verify Case Number is displayed in Case Summary


Examples:
  |UserName	|Password 	|Patient FirstName |Patient LastName  |DateOfBirth  |Gender |LabName |Date Collected|Prefered Lab		        |Practice|ICD Codes |Prescribed Drug |Specimen Type|Profile   |
#  |jmaster  |Admin@1234 |Case FirstName    |Case LastName     |02/27/1978   |Male   |CCL     |02/21/2018    |Clinical Connect Laboratory|CCLJ    |M47.817   |Flexeril		|Oral          |cclsj     |
#  |jmaster  |Admin@1234 |Vanaja    |Baddam     |02/27/1978   |Male   |CCL     |02/21/2018    |Clinical Connect Laboratory|CCLJ    |M47.817   |Flexeril		|Oral          |cclsj     |
#  |jmaster  |Admin@1234 |Bharath   |Reddy      |02/27/1978   |Male   |CCL     |02/21/2018    |Clinical Connect Laboratory|CCLJ    |M47.817   |Flexeril		|Oral          |cclsj     |
|jmaster   |Admin@7890 |Krishna 	     |Chennam  		|09/27/1988   |Female  |MNA	|08/01/2017    |Michigan Neurology Associates|Michigan Neurology Associates|M47.817   |Flexeril		|Oral          |MNA|
#|jmaster   |Admin@1234 |WorkBench1 	     |WorkBench2  		|09/27/1988   |Male  |MNA	|08/01/2017    |Michigan Neurology Associates|iToxTest1|M47.817   |Flexeril		|Oral          |MNAprofile|
#  |jmaster   |Admin@7890 |Krishna 	     |Chennam  		|09/27/1988   |Female  |NPC	|08/01/2017    |Neuro Pain Consultants Test |Neuro Pain Consultants Test|M47.817   |Flexeril		|Oral          |NPCTestprofile|


Scenario Outline:  Edit Case
    When user enter Username field as "<UserName>" and Password as "<Password>"
    And click on login button in login page
  Then verify the page navigation to "Accession/ Dashboard" page
    Then click on "Cases" button
      And verify the page navigation to "Cases - All" page
    Then search for the patient name as "<Patient CompleteName>" in the search box and click on enter button
      And click on Edit Case icon
      And verify Case Number is displayed in Case Summary
#    Then click on Show Detail Button
      And check whether Location and Ordering Provider is auto filled
    Then enter type as "<Specimen Type>" and profile as "<Profile>" in Specimen Info
        And click on Save button
     Then verify "Edit Case" button is displayed
#        And verify Case Number is displayed in Case Summary
        And verify that specimen type is changed to "<Specimen Type>" after edit case

    Examples:
      |UserName	|Password 	|Patient CompleteName|Specimen Type|Profile   |
#      |jmaster  |Admin@1234 |Vanaja Baddam       |Blood        |cclsj     |
#      |jmaster  |Admin@1234 |Bharath Reddy       |Blood        |cclsj     |
#       |jmaster  |Admin@7890 |Pavan Moganti|Urine	 |NPCTestprofile|



  Scenario Outline:  Edit Case by adding a test screen and verify the count of test screens
    When user enter Username field as "<UserName>" and Password as "<Password>"
    And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
    Then click on "Cases" button
    And verify the page navigation to "Cases - All" page
    Then search for the patient name as "<Patient CompleteName>" in the search box and click on enter button
    And click on Edit Case icon
#    And verify Case Number is displayed in Case Summary
    And click on "Show Detail" button
    And verify Prescribed drug content is null if null select the prescribed drug as "<Prescribed Drug>"
    Then count the number of Test screens in Specimen Info
    Then click on Add Test screen button in Specimen Info section
    And select compoundId as "<CompoundID>" result as "<CaseResult>" and concentration as "<Concentration>"
    And click on Save button
    Then verify "Edit Case" button is displayed
    Then click on "Edit Case" button
    And count the number of Test screens in Specimen Info
    And verify the Test screen compound id "<CompoundID>" is added in the list
    And click on Save button




    Examples:
      |UserName	|Password 	|Patient CompleteName|CompoundID  |CaseResult |Concentration  |Prescribed Drug |
      |jmaster  |Admin@7890 |Krishna Chennam       |OXAZEPAM    |None       |5              |Flexeril		   |


  Scenario Outline:  Edit Case by deleting a test screen and verify the count of test screens
    When user enter Username field as "<UserName>" and Password as "<Password>"
    And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
    Then click on "Cases" button
    And verify the page navigation to "Cases - All" page
    Then search for the patient name as "<Patient CompleteName>" in the search box and click on enter button
    And click on Edit Case icon
#    And verify Case Number is displayed in Case Summary
    Then count the number of Test screens in Specimen Info
      And search for Test screen name as "<Test Screen Name>"
      And check whether unique Test screen is displayed and click on delete button
      And click on Save button
    Then verify "Edit Case" button is displayed
    Then click on "Edit Case" button
      And count the number of Test screens in Specimen Info



    Examples:
      |UserName	|Password 	|Patient CompleteName|Test Screen Name |
      |jmaster  |Admin@7890 |Krishna Chennam       |OXAZEPAM         |






