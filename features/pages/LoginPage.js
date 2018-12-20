var utils = require('../pages/common/utils.js');



var LoginPage = function () {

    var userName = element(by.xpath("//*[@placeholder ='Username']"));
    var passWord =  element(by.xpath("//*[@placeholder ='Password']"));
    var loginButton =  element(by.xpath("//*[@ng-click ='$ctrl.logIn()']"));

    this.setUserName = function(name) {
        console.log("entering username for itox app");
        userName.sendKeys(name);
    };

    this.setPassWord = function(password) {
        console.log("entering password for itox app");
        passWord.sendKeys(password);
    };

    this.loginButtonClick = function () {
        console.log("clicking on Login button");
        utils.clickAnElement(loginButton);

        return require('./PatientListPage.js')
    };
};
module.exports = new LoginPage();