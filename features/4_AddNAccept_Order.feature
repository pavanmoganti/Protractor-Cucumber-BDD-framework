Feature: Adding and Accepting Order in itox application

  Background:
    Given user navigated to itox lab portal


Scenario Outline: Adding Lab Portal from the created user

When user enter Username field as "<UserName>" and Password as "<Password>"
And click on login button in login page
Then verify the page navigation to "Lab Order / Orders" page
Then click on Add Lab Order button in Lab Order Page
And verify Add Patient Button is displayed in Create Order
Then click on Add Patient Button
And enter patient first name as "<Patient FirstName>" last name as "<Patient LastName>" DOB as "<DateOfBirth>" gender as "<Gender>"
And click on Save button
Then verify if the patient "<Patient FirstName>" is added to the Create Order
And enter date collected as "<Date Collected>" physician as "<Physician>" ICD codes as "<ICD Codes>" and prescribed drug as "<Prescribed Drug>" in Order Info
Then enter type as "<Specimen Type>" and profile as "<Profile>" in Specimen Info
  And select the reasons for the test as "<Reason for Test>"
  And if the reasons for test is other enter the reason as "<Other reason text>"
And click on Save button
Then verify "Edit Order" button is displayed
Then verify whether the order is created with "<Patient FirstName>" and the order details page is displayed


Examples:
|UserName	|Password	|Patient FirstName |Patient LastName |DateOfBirth |Gender  |Date Collected|Physician					|ICD Codes |Prescribed Drug |Specimen Type |Profile     |Reason for Test  |Other reason text  |
#      |jones		|Itox$123	|Jennifer	   |jones 		 |07/31/1981  |FeMale  |07/19/2012    |James Honet 		    |M47.817   |Flexeril		|Oral          |NPCprofile  |
#      |karen          |Itox$123	|Karen		   |Moms                 |01/09/1958  |FeMale  |02/14/2017    |Lisa Schmidt 		    |M47.817   |Flexeril		|Oral          |EMCprofile  |
|karen2	|Itox$123	|William	   |Marler		 |02/23/2011  |Male    |02/21/2014    |lisa Schmidt	    |M47.817   |Flexeril		|Oral          |CCLprofile  |Other                         |Other reason       |
#      |itoxtest7	|Itox$123	|Hillary		   |clinton 		 |04/05/1965  |FeMale  |02/14/2017    |physicianfirst physicianlast |M47.817   |Flexeril		|Oral          |MNAprofile  |


Scenario Outline: Accepting the order created in client portal

When user enter Username field as "<UserName>" and Password as "<Password>"
  And click on login button in login page
  Then verify the page navigation to "Accession/ Dashboard" page
  Then click on Orders button in Patient List page
  And verify the page navigation to "Orders List / Search Orders" page
Then search for the patient name as "<Patient CompleteName>" in the search box and click on accept laborder
Then verify Case Number is displayed in Case Summary
 #		And select macro value as "<Macro>"
Then click on Save button
And verify "View Report" button is displayed


Examples:
|UserName	|Password	|Patient CompleteName|Macro	|
|jmaster	|Admin@7890	|William Marler  	 ||
