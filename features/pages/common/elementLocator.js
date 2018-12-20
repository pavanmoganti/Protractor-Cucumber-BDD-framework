var yaml = require('js-yaml');
var fs = require('fs');
//var logger = require('./Logger/log.js');

var OR = yaml.load(fs.readFileSync('objectRepo/OR.yaml','utf8'));

var getElement = function (ORName) {
    var identifier = get_OR_identifier_from_yaml(ORName);
    var expression = get_OR_expression_from_yaml(ORName);
    var webElement = null;
    switch (identifier){
        case "id":
            webElement = element(by.id(expression));
            break;
        case "name":
            webElement = element(by.name(expression));
            break;
        case "xpath":
            webElement = element(by.xpath(expression));
            break;
        case "css":
            webElement = element(by.css(expression));
            break;
        case "className":
            webElement = element(by.className(expression));
            break;
        case "tagName":
            webElement = element(by.tagName(expression));
            break;
        case "partialLinkText":
            webElement = element(by.partialLinkText(expression));
            break;
        case "linkText":
            webElement = element(by.linkText(expression));
            break;
        case "buttonText":
            webElement = element(by.buttonText(expression));
            break;
        case "model":
            webElement = element(by.model(expression));
            break;
        default:
            //logger.log('info','Unable to identify the Locator ');
            console.log("unidentified locator");
            break;
    }
    return webElement;

};

var getElements = function (ORName) {
    var identifier = get_OR_identifier_from_yaml(ORName);
    var expression = get_OR_expression_from_yaml(ORName);
    var webElement = null;

    switch (identifier){
        case "id":
            webElement = element.all(by.id(expression));
            break;
        case "xpath":
            webElement = element.all(by.xpath(expression));
            break;
        case "className":
            webElement = element.all(by.className(expression));
            break;
        case "tagName":
            webElement = element.all(by.tagName(expression));
            break;
        case "partialLinkText":
            webElement = element.all(by.partialLinkText(expression));
            break;
        case "linkText":
            webElement = element.all(by.linkText(expression));
            break;
        case "buttonText":
            webElement = element.all(by.buttonText(expression));
            break;
        case "model":
            webElement = element.all(by.model(expression));
            break;
        default:
            console.log("unidentified Locator");
            break;


    }
    return webElement;
};

var get_OR_identifier_from_yaml = function (ORName) {
    var identifier = OR[ORName]["locator"];
    return identifier;
};

var get_OR_expression_from_yaml = function (ORName) {
    var expression = OR[ORName]["expression"];
    return expression;
};

module.exports = {
    getElement: getElement,
    getElements: getElements,
    get_OR_identifier_from_yaml: get_OR_identifier_from_yaml,
    get_OR_expression_from_yaml: get_OR_expression_from_yaml
}