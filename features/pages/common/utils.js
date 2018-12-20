var chai = require('chai');
var expects = require('expect');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;
var expect = chai.expect;
var fs = require('fs');
var easyjson = require('easyjson');
var webshot = require('webshot');
var numeral = require ('numeral');
var ec = protractor.ExpectedConditions;

var openPage = function (url, webElement, timeMilliSeconds, callback) {
    browser.get(url);
    waitForAnElement(webElement, timeMilliSeconds);
    console.log("Method OUT");
    callback();
}

var openPageNew = function (url, callback) {
    browser.get(url);
    callback();
}

var openPageWithAppend = function (url, urlR, webElement, timeMilliSeconds, callback) {
    console.log("Method IN");
    var ext = '';
    if(typeof urlR === 'object' && urlR.rows){
        var ids = urlR.rows();
        var extIDArray = ids.toString().split(',');
        ext = extIDArray[0];
    }
    if(typeof urlR === 'string'){
        ext = urlR;
    }
    var urlFull = url + ext;
    openPage(urlFull, webElement, timeMilliSeconds, callback)
}

var enterData = function (webElement, testData) {
    console.log('Came to Key IN');
        webElement.sendKeys(testData);
     console.log('Camr to Key OUT');
}

var verifyCurrentURL = function (expectedURL) {
    var currentURL = browser.getCurrentUrl();
    currentURL.then(function (url) {
        expect
    });
};

var verifyPageTitle = function (expectedTitle) {
    browser.getTitle().then(function (title) {
        assert.equal(title,expectedTitle);
    });
    
};

var linkOrButtonClick = function (button, milliSecs, callback) {
    button.click();
    browser.sleep(milliSecs);
    browser.waitForAngular()
    callback();
};

var validatePresence = function (webElement, expectedText) {
    webElement.getText().then(function (actualText) {
        assert.equal(expectedText,actualText);
    });
};

var scrollIntoView = function (webElement) {
    browser.executeScript('arguments[0].scrollIntoView()', webElement.getWebElement());
};

var scrollIntoElementWithLinkText = function (linkText) {
    webElement = element(by.xpath("//*[@href='#!/labadmin/profiles']"))
   browser.executeScript('arguments[0].scrollIntoView()', webElement.getWebElement());
}

var selectValueFromSelect2DropDownWithSearchFirstElement = function (searchCriteria) {
    console.log("selecting the first element from select2 drop down ");
    var webElement = element.all(by.xpath("//*[contains(@aria-activedescendant,'select2-result-label')]"));
       webElement.first().sendKeys(searchCriteria);
    element(by.className("select2-result-label")).click();

};

var selectValueFromSelect2DropDownWithSearchLastElement = function (searchCriteria) {
    console.log("selecting the last element from select2 drop down ");
    var webElement = element.all(by.xpath("//*[contains(@aria-activedescendant,'select2-result-label')]"));
    webElement.last().sendKeys(searchCriteria); /*****LAST ELEMENT****/
    element(by.className("select2-result-label")).click();

};

var verifyVisibilityOfButton = function(buttonName){
    BUTTON_NAME = element(by.linkText(buttonName));
    console.log("verify the visibility of "+ buttonName+" Button");
    validatePresence(BUTTON_NAME,buttonName);
    browser.sleep(3000);
};

var searchForElement = function (webElement, searchCriteria) {
    console.log("searching for the criteria")
    webElement.sendKeys(searchCriteria);
}

var selectValueFromSelect2DropDownWithNoSearch = function (searchCriteria) {
    console.log("selecting the value from select2 drop down  with NO serach option");
    WebElement = element(by.xpath("//*[contains(@aria-activedescendant,'select2-result-label')]"));
    waitForElement(WebElement,3000);
    WebElement.sendKeys(searchCriteria);
    element(by.className("select2-result-label")).click();

};

var selectAndClickFromDropDown =function (dropDownValue,index) {
    DROPDOWN_SELECT = element.all(by.xpath("//*[contains(text(),'"+dropDownValue+"')]")).get(index);
    waitForElement(DROPDOWN_SELECT,3000);
    DROPDOWN_SELECT.click();

}

var verifyTextContains = function (webElement, expectedText) {
    webElement.getText().then(function (actualText) {
        console.log("actual message : "+ actualText + "*********");
        console.log("actual message : "+ expectedText + "*********");
       expect(actualText).to.have.string(expectedText);
    });
};

var getText = function (webElement) {
    return webElement.getText().then(function (actualText) {
        console.log("Lead ID from UTILS :"+actualText+ "*******");
        return actualText;
    });
};

var verifyElementTextIsNotNull = function (webElement) {
    webElement.getText().then(function (actualText) {

        expect(actualText).to.not.be.null;
        console.log("element is having a text "+actualText);
    })

}

var verifyElementDisplayed = function (webElement) {
    webElement.isDisplayed().then(function (isVisible) {
        console.log("webElement is visible: "+ isVisible );
        assert.equal(true,isVisible);
    });
};

var noElementFound = function (webElement) {

    return webElement.isDisplayed().then(function () {
        console.log("Element Found");
        return "Element Found"
    }, function (error) {
        console.log("Element Not Found");
        return "Element Not Found";
    });
};

var waitForElement = function (webElement, timeMilliSeconds) {
    browser.wait(ec.visibilityOf(webElement, timeMilliSeconds)).then(function () {
        console.log("WebElement is visible");
    });

};

var clickAnElement = function (webElement, milliSecs) {
    waitForElement(webElement, milliSecs);
    webElement.click();
};

var verifyAttributeValueContains = function (webElement, expectedValue, attributeName) {
    webElement.getAttribute(attributeName).then(function (actualValue) {
        console.log("Expected Value:" +expectedValue);
        console.log("Actual Value :" +actualValue);
        assert.equal(expectedValue, actualValue);
    });
};

var verifyText = function (webElement, expectedText) {
    webElement.getText().then(function (actualText) {
        console.log("Text from Element :" +actualText);
        assert.equal(actualText, expectedText);
    });
};

var verifyElementValueUpdatedToExpectedText = function (elementIdentifier,expectedText) {
    webElement = element(by.xpath("//*[contains(text(),'"+elementIdentifier+"')]/following-sibling::div"));
    webElement.getText().then(function (actualText) {
        console.log("Text from Element :" +actualText);
        assert.equal(actualText, expectedText);
        console.log("Element Value is matching to the updated value");
    })
}


var modalPaneClose = function (webElement) {
    browser.actions().click(webElement).perform();
}

var browserBack = function (callback) {
    browser.navigate().back();
    callback();
}

var displayTime= function () {
    var str = "";

    var currentTime = new Date();
    var month = (currentTime.getMonth() + 1);
    var date = (currentTime.getDate());
    var year = currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var ampm = hours >= 12 ? 'PM' : 'AM' ;
    hours =hours % 12;
    hours = hours ? hours : 12; //the hour '0' should be '12'

    if(month < 10){
        month = "0" + month;
    }

    if(date < 10 ){
        date = "0" + date;
    }

    if(hours <10){
        hours = "0" + hours;
    }

    if(minutes <10){
        minutes = "0" + minutes;
    }
    if(seconds <10){
        seconds = "0" + seconds;
    }
    return str;
}

module.exports = {
    scrollIntoView: scrollIntoView,
    openPage: openPage,
    openPageWithAppend: openPageWithAppend,
    linkOrButtonClick: linkOrButtonClick,
    validatePresence: validatePresence,
    verifyTextContains: verifyTextContains,
    waitForAnElement: waitForElement,
    verifyElementDisplayed: verifyElementDisplayed,
    getText: getText,
    clickAnElement: clickAnElement,
    verifyAttributeValueContains: verifyAttributeValueContains,
    verifyText: verifyText,
    verifyPageTittle: verifyPageTitle,
    verifyCurrentURL: verifyCurrentURL,
    browserBack: browserBack,
    enterData:enterData,
    displayTime:displayTime,
    noElementFound:noElementFound,
    openPageNew:openPageNew,
    selectValueFromSelect2DropDownWithSearchFirstElement: selectValueFromSelect2DropDownWithSearchFirstElement,
    selectValueFromSelect2DropDownWithSearchLastElement: selectValueFromSelect2DropDownWithSearchLastElement,
    selectValueFromSelect2DropDownWithNoSearch: selectValueFromSelect2DropDownWithNoSearch,
    selectAndClickFromDropDown: selectAndClickFromDropDown,
    verifyVisibilityOfButton: verifyVisibilityOfButton,
    searchForElement: searchForElement,
    verifyElementTextIsNotNull:verifyElementTextIsNotNull,
    scrollIntoElementWithLinkText:scrollIntoElementWithLinkText,
    verifyElementValueUpdatedToExpectedText: verifyElementValueUpdatedToExpectedText
}





