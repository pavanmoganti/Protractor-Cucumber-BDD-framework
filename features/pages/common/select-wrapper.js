
var SelectWrapper = function(selector) {
    this.webElement = element(selector);
};
SelectWrapper.prototype.getOptions = function() {
    return this.webElement.all(by.tagName('option'));
};
SelectWrapper.prototype.getSelectedOptions = function() {
    return this.webElement.all(by.css('option[selected="selected"]'));
};
SelectWrapper.prototype.selectByValue = function(value) {
    return this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
SelectWrapper.prototype.selectByPartialText = function(text) {
        return this.webElement.all(by.cssContainingText('option', text)).click();
  //  return this.webElement.all(by.cssContainingText(text).click();
};
SelectWrapper.prototype.selectByText = function(text) {
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
   //return this.webElement.all(by.xpath(text)).click();
    //return this.webElement(by.xpath('option[.="' + text + '"]')).click();
};

SelectWrapper.prototype.selectByLinkText = function (text) {
    return element(by.linkText(text)).click();
};



module.exports = SelectWrapper;