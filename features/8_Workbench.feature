Feature: Adding and Editing a  Case

  Background:
    Given user navigated to itox lab portal

  @dev
  Scenario Outline: Adding Workbench
    When user enter Username field as "<UserName>" and Password as "<Password>"
       And click on login button in login page
    Then click on "New Case" button
        And verify the page navigation to "Case / Create" page
        And select the lab as "<LabName>" from dropdown
    Then search for the patient "<First Name>" in select patient
        And enter date collected as "<Date Collected>" preferred lab as "<Prefered Lab>" practice as "<Practice>" ICD codes as "<ICD Codes>" and prescribed drug as "<Prescribed Drug>" in Case Info
        And check whether Location and Ordering Provider is auto filled
    Then verify First Name Last Name and DOB fields are auto filled in patient info section
        And enter gender as "<Gender>"
    Then click on add insurance button
        And verify "add insurance" frame is displayed
#    Then select the insurance type as "<InsuranceType>" Insurance company as "<InsuranceCompany>" and policy ID as "<PolicyID>"
#        And select guarantor relationship as "<GuarantorRelationship>"
#        And verify if the guarantor relationship is "<GuarantorRelationship>" guarantor name and guarantor DOB is auto populated
#        And click on Save button



#        And click on Save button

#    Then verify the page navigation to "Accession/ Dashboard" page
#       And choose "<Accession Type>" from accession drop down
#       And verify the page navigation to "Worklists - My WorkList Details" page
#    Then click on specimen type value which has a name "<Specimen Type>"
#       And verify the page navigation to "<Specimen Type>" page


    Examples:
      |UserName	|Password	|LabName|First Name|Date Collected|Prefered Lab               |Practice|ICD Codes|Prescribed Drug|Gender|
      |jmaster  |Admin@7890 |CCL    |Baumna Kavon|08/16/2018  |Clinical Connect Laboratory|CCLJ    |M47.812  |Flexeril       |Male  |

#      |Accession Type|Specimen Type|

