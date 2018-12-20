Feature: Adding a client to the application, resting its password and Editing the client

Background:
	Given user navigated to itox lab portal


	Scenario Outline: verify adding client in itox

	When user enter Username field as "jmaster" and Password as "Admin@7890"
	And click on login button in login page
		Then verify the page navigation to "Accession/ Dashboard" page
	And select the lab as "<LabName>" from dropdown
	And choose "<Accession Type>" from accession drop down
	Then verify the page navigation to "Client List" page
	Then click on the Add Client button in Client List page
	Then verify the page navigation to "Client / Create" page
	And enter the firstName as "<Client FirstName>" and businessName as "<BusinessName>" in Client Creation page
	And click on Save button
	Then verify entered client details with "<BusinessName>" are displayed correctly
	Then select the Physician Tab from the Client Creation Page
	And click on Add Physician button
	Then verify the page navigation to "physician / create" page
	And enter firstname as "<Physician FirstName>" lastname as "<Physician LastName>" npi number as "<NPI>" and business name as "<BusinessName>"
	And click on Save button
	Then click on Users button in Physician Creation page
	And click on Add User button
	And verify the page navigation to "user / create" page
	Then enter firstname as "<Users FirstName>" lastname as "<Users LastName>" username as "<User Name>" password as "<Password>" and retype password as "<Password>"
	And click on Save button
	And verify the page navigation to "<Users FirstName>" page
	Then click on Locations tab
	And click on Add Location buttom
	And verify the page navigation to "location / create" page
	Then enter name as "<LocationName>" address as "<Address>" city as "<City>" state as "<State>" and zipcode as "<ZipCode>"
	And click on Save button

	Examples:
			|LabName	|Accession Type	|Client FirstName|BusinessName				 |Physician FirstName	|Physician LastName	|NPI	|Users FirstName |Users LastName |User Name |Password |LocationName |Address			|City		|State		|ZipCode|
			|NPC		|LabAdmin		|NPCLabs		 |Neuro Pain Consultants Test|James    				|Honet				|1234	|Jennifer	 	 |Jones 	     |jones2	    |Itox@123 |itoxLocation |kennedy Drive		|Columbus	|Ohio		|23456  |
#			|MNA		|LabAdmin		|iToxfirst		|iToxTest		|physicianfirst			|physicianlast		|1234	|userfirstname	 |userlastname	 |itoxtest9 |Itox@123 |itoxLocation |kennedy Drive		|Columbus	|Ohio		|23456  |
#			|ARK		|LabAdmin		|EMCLabs		|Emerald Coast			|Lisa		        |Schmidt		|1234	|Karen		 |Moms		 |karen3	    |Itox@123 |itoxLocation |kennedy Drive		|Columbus	|Ohio		|23456  |
#			|CCL            |LabAdmin	|CCLLabs		|Clinical Connect Laboratory	|Alexander		|Sinofsky		|1234	|William	 |Marler	 |william   |Itox@123 |itoxLocation |kennedy Drive		|Columbus	|Ohio		|23456  |
#			|NPC		|LabAdmin		|Benny			|Neuro				|andrea			|jeremiah		|1234	|Stephen	 |andrews	 |stephen   |Test@123 |itoxLocation |kennedy Drive		|Columbus	|Ohio		|23456  |


	Scenario Outline: Resetting the password for created user

		When user enter Username field as "<UserName>" and Password as "<OldPassword>"
		And click on login button in login page
		Then enter old password as "<OldPassword>" new password as "<NewPassword>" and retype new password
		And click on Change Password button

		Examples:
			|UserName	|OldPassword |NewPassword	|
#			|itoxtest9	|Itox@123	 |Itox$123		|
#			|karen3		|Itox@123	|Itox$123	|
#			|william	|Itox@123	|Itox$123	|
#			|jones		|Itox@123	|Itox$123	|karen2
   			|jones2		|Itox@123	|Itox$123	|
#			|stephen	|Test@123	|Test@1234	|


	Scenario Outline: Edit Client

		When user enter Username field as "<UserName>" and Password as "<Password>"
		And click on login button in login page
		Then verify the page navigation to "Accession/ Dashboard" page
		And select the lab as "<LabName>" from dropdown
		And choose "<Accession Type>" from accession drop down
		Then verify the page navigation to "Client List" page
		Then search for the business name as "<BusinessName>"
		  And click on Edit client icon
#		Then update the phone number field to "<Phone Number>"
		Then update email address field to "<Email Address>"
			And click on Save button
			And verify "Edit Client" button is displayed
			And verify the "Email Address" field is changed to "<Email Address>"


		Examples:
			|UserName	|Password	|LabName|Accession Type|BusinessName			   |Phone Number |Email Address    |
#			|jmaster	|Admin@1234	|CCL    |LabAdmin	   |Clinical Connect Laboratory|1234567890	 |vanaja@dsig.com|
			|jmaster	|Admin@7890	|NPC    |LabAdmin	   |Neuro Pain Consultants-Clarkston|1234567890	 |npcconsultants@dsig.com|
#			|smaster	|Admin@123	|MNA	|LabAdmin	   |iToxTest   		       |7778886665	 |vanaja@dsig.com|