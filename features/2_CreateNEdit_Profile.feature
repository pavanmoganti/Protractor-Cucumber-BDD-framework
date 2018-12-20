Feature: Creating a profile with one compound test group and one validity test group and Editing that profile

  Background:
    Given user navigated to itox lab portal


  Scenario Outline: creating Compound Test Groups

    When user enter Username field as "<UserName>" and Password as "<Password>"
    And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
      And choose "<Accession Type>" from accession drop down
      And verify the page navigation to "Client List / Search" page
      Then click on "Libraries" button
      And verify the page navigation to "Compounds / Search" page
      Then click on "Compound Test Groups" button
      And verify the page navigation to "CompoundTest / Search" page
      Then click on "Add Compound Test" button
      And verify the page navigation to "CompoundTest / Create" page
      And select the lab as "<LabName>" from dropdown
      And enter the values of Test Code as "<TestCode>" and Description as "<Description>"
      Then select the desired compound with name "<CT compound1>" "<CT compound2>" "<CT compound3>"
      And click on Save button
      Then verify "Edit Compound Test" button is displayed


    Examples:
      |UserName	|Password	|Accession Type|TestCode  |Description     |CT compound1   |CT compound2 |CT compound3 |LabName |
#      |jmaster  |Admin@1234 |LabAdmin      |TS6       |testcode Desc6  |CARISOPRODOL   |NALTREXONE   |TRAZODONE    |CCL     |
      |jmaster  |Admin@7890 |LabAdmin      |TStest3       |testcode Desc11  |CARISOPRODOL   |NALTREXONE   |TRAZODONE    |NPC     |
#      |smaster  |Admin@123	|LabAdmin      |MNAcode   |testcode Description |ALPRAZOLAM	|AMITRIPTYLINE|AMPHETAMINE  |MNA     |


  Scenario Outline: creating Validity Test Groups

    When user enter Username field as "<UserName>" and Password as "<Password>"
    And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
    And choose "<Accession Type>" from accession drop down
    And verify the page navigation to "Client List / Search" page
    Then click on "Libraries" button
    And verify the page navigation to "Compounds / Search" page
    Then click on "Validity Test Groups" button
    And verify the page navigation to "ValidityTest / Search" page
    Then click on "Add Validity" button
    And verify the page navigation to "ValidityTest / Create" page
    And select the lab as "<LabName>" from dropdown
    And enter the values of validity Test Code as "<TestCode>" and validity Description as "<Description>"
    Then select the desired compound with name "<compound1>" "<compound2>" "<compound3>"
    And click on Save button
    Then verify "Edit Validity" button is displayed


    Examples:
      |UserName	|Password	|Accession Type|TestCode  |Description          |compound1   |compound2  |compound3         |LabName |
#      |jmaster  |Admin@1234 |LabAdmin      |VC6       |validity code Desc6  |Oxidants    |Creatinine |Specific Gravity  |CCL     |
      |jmaster  |Admin@7890 |LabAdmin      |VCTest3       |validity code Desc11  |Oxidants    |Creatinine |Specific Gravity  |NPC    |
#        |jmaster  |Admin@1234 |LabAdmin      |MNAvalidity       |validity code Desc6  |Oxidants		 |Creatinine |Specific Gravity  |MNA	 |


  Scenario Outline: creating a Profile with compound and validity Test Groups

      When user enter Username field as "<UserName>" and Password as "<Password>"
      And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
      And choose "<Accession Type>" from accession drop down
      And verify the page navigation to "Client List / Search" page
      Then click on "Libraries" button
      And verify the page navigation to "Compounds / Search" page
      Then click on Profiles button
      And verify the page navigation to "Profiles / Search" page
      Then click on "Add Profile" button
      And verify the page navigation to "Profile / Create" page
      And select the lab as "<LabName>" from dropdown
      Then enter  values for Profile name as "<Profile Name>" code as "<Code>" client business name as "<Client Business>" risk type as "<Risk Type>"
      And select the desired compound test group as "<Compound Test>" and validity test group as "<Validity Test>"
      And click on Save button
      Then verify "Edit Profile" button is displayed


      Examples:
        |UserName |Password	|Accession Type|LabName |Profile Name |Code  |Client Business               |Risk Type|Compound Test |Validity Test |
#        |jmaster  |Admin@1234 |LabAdmin    |CCL     |CCLadjust   |1234  |Clinical Connect Laboratory        |Low      |TS6           |VC6           |
        |jmaster  |Admin@7890 |LabAdmin    |NPC     |NPCTestprofile3|1234  |Neuro Pain Consultants Test  |Low      |TSTest3       |VCTest3           |
#  	|jmaster  |Admin@1234 |LabAdmin      |MNA     |MNAprofile   |1234  |Michigan Neurology Associates    |Low      |MNAcode	   |MNAvalidity   |


  Scenario Outline: Edit Profile

    When user enter Username field as "<UserName>" and Password as "<Password>"
    And click on login button in login page
    Then verify the page navigation to "Accession/ Dashboard" page
      And choose "<Accession Type>" from accession drop down
      And verify the page navigation to "Client List / Search" page
    Then click on "Libraries" button
      And verify the page navigation to "Compounds / Search" page
   Then click on Profiles button
      And verify the page navigation to "Profiles / Search" page
      And select the lab as "<LabName>" from dropdown
   Then enter search for Profile name as "<Profile Name>"
     And click on Edit profile icon
#    Then click on "Edit Profile" button
     And verify the page navigation to "<Profile Name>" page
#   Then edit the work list type as "<Work List>"
    Then edit the risk type as "<Risk Type>"
     And click on Save button
     And verify the "Risk Type" field is changed to "<Risk Type>"


    Examples:
      |UserName	|Password	|Accession Type|LabName |Profile Name |Code |Client Business|Work List|Risk Type|
#      |jmaster	|Admin@1234	|LabAdmin      |CCL     |CCLprofile   |3456 |CCLJ           |BASIC    |Low      |
#      |jmaster	|Admin@1234	|LabAdmin      |MNA     |MNAprofile   |3456 |Michigan Neurology Associates |BASIC    |Low      |
      |jmaster	|Admin@7890	|LabAdmin      |NPC     |NPCTestprofile3|3456 |Michigan Neurology Associates |BASIC    |Low      |