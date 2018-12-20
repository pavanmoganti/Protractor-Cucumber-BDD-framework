Feature: Creating a compound and Edit Compound


  Background:
    Given user navigated to itox lab portal


  Scenario Outline: Create Compound
      When user enter Username field as "<UserName>" and Password as "<Password>"
          And click on login button in login page
      Then verify the page navigation to "Accession/ Dashboard" page
         And choose "<Accession Type>" from accession drop down
         And verify the page navigation to "Client List / Search" page
      Then click on "Libraries" button
         And verify the page navigation to "Compounds / Search" page
      Then click on "Add Compound" button
        And verify the page navigation to "Compound / Create" page
      Then enter class as "<Class>" name as "<Name>" type as "<Type>"
        And enter unit value as "<Unit>" and result as "<Result>"
        And enter positive comments as "<Positive Comments>"
      Then click on Add Specimen button
        And enter Specimen type as "<Specimen Type>" upper limit as "<UpperLimit>" detection as "<Detection>" cutoff as "<CutOff>"
        And units as "<Units>" minrange as "<MinRange>" and maxrange as "<MaxRange>"
        And click on Save button
        And verify "Edit Compound" button is displayed
      And verify the page navigation to "<Name>" page
        And verify the "Type" field is changed to "<Type>"


    Examples:
      |UserName	|Password	|Accession Type|Class   |Name     |Type      |Unit   |Result   |Positive Comments  |Specimen Type  |UpperLimit |Detection  |CutOff |Units  |MinRange |MaxRange |
#      |jmaster  |Admin@1234 |LabAdmin      |otalgia |ear pain |TestScreen|ng/ml  |NEG      |testing comments   |Oral           |15         |6 hours    |1.5    |ng/ml  |0        |15       |
      |jmaster  |Admin@7890	|LabAdmin      |otalgia |lab test      |TestScreen|ng/ml  |NEG	|testing comments   |Oral           |15         |6 hours    |1.5    |ng/ml  |0        |15       |


      Scenario Outline: Edit Compound
        When user enter Username field as "<UserName>" and Password as "<Password>"
        And click on login button in login page
        Then verify the page navigation to "Accession/ Dashboard" page
           And choose "<Accession Type>" from accession drop down
           And verify the page navigation to "Client List / Search" page
        Then click on "Libraries" button
          And verify the page navigation to "Compounds / Search" page
        Then search for the "Name" as "<Name>"
          And select the first available element
          And verify the page navigation to "<Name>" page
        Then click on "Edit Compound" button
        Then edit the type screen to "<Type>"
          And click on Save button
          And verify "Edit Compound" button is displayed
          And verify the "Type" field is changed to "<Type>"

        Examples:
          |UserName	|Password	|Accession Type|Name     |Type           |
#          |jmaster  |Admin@1234 |LabAdmin      |ear pain |ValidityTesting|
  	  |jmaster  	|Admin@7890 	|LabAdmin      |lab test      |ValidityTesting|