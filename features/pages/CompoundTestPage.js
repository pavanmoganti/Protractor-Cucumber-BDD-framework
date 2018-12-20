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

var CompoundTestPage = function () {

    /***Add Compound elements*******/
        TEST_CODE_COMPOUNDTEST = element(by.model("$ctrl.compoundTestEdit.testcode"));
        DESCRIPTION_COMPOUND_TEST = element(by.model("$ctrl.compoundTestEdit.description"));

        COMPOUND_NAME = element.all(by.xpath("//*[@id='list-wrapper-r']/tr/td[1]"));
        NAME_COMPOUND = element(by.model("$ctrl.filtersObj.name"))


        this.enterCreateCompoundTest = function (testCode, description) {
            console.log("entering the create compound test");
            TEST_CODE_COMPOUNDTEST.sendKeys(testCode);
            DESCRIPTION_COMPOUND_TEST.sendKeys(description);

        };

        this.selectRequiredCompound = function (compound1,compound2,compound3) {
            //console.log("Total Number of Compounds:" +COMPOUND_NAME.length);
            /*COMPOUND_NAME.then(function (items) {
               console.log("number of Items is "+items.length) ;
                for(var i=0;i<items.length;i++){
                     items[i].getText().then(function (actualText) {
                         if(actualText.indexOf(compound1)){
                             console.log("Found the right compound "+compound1 );
                             element.all(by.xpath("//!*[@id='list-wrapper-r']/tr["+i+"]/td[3]")).click();
                         };
                     });
                    /!*if(text.contains(compound1)){
                        console.log("fond the right compound")
                        element.all(by.xpath("//!*[@id='list-wrapper-r']/tr["+i+"]/td[3]")).click();
                    }*!/

                };
            });*/

            NAME_COMPOUND.sendKeys(compound1);
            element.all(by.xpath("//*[@id='list-wrapper-r']/tr[1]/td[3]")).click();
           NAME_COMPOUND.clear();
            browser.sleep(3000);
            NAME_COMPOUND.sendKeys(compound2);
            element.all(by.xpath("//*[@id='list-wrapper-r']/tr[1]/td[3]")).click();
            NAME_COMPOUND.clear();
            browser.sleep(3000);
            NAME_COMPOUND.sendKeys(compound3);
            element.all(by.xpath("//*[@id='list-wrapper-r']/tr[1]/td[3]")).click();
            NAME_COMPOUND.clear();
        };

        

}
module.exports = new CompoundTestPage();