var BasePage = function () {

    this.navigateToURL = function (url) {

        console.log("Opening the URL");
        browser.get(url)
    }
    
}
module.exports = new BasePage();