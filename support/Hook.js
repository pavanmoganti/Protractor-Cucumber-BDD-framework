module.exports = function () {

    var outputDir = './result/TestResult/';
    var CucumberHtmlReport = require('cucumber-html-report');
    var Cucumber = require('cucumber');
    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    var fs = require('fs');

    JsonFormatter.log = function (string) {
        if(!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir);
        }

        var targetJson = outputDir + 'cucumber_sandwich_report.json';
        fs.writeFile(targetJson, string, function (err) {

            if(err){
                console.log("Failed to save cucumber test results to json file.");
                console.log(err);
            }else {
                //createHtmlReport(targetJson);
                console.log('executing hook at this point')
                createCucumberSandwichHtmlReport();
            }
        });
    };
    var createCucumberSandwichHtmlReport = function () {
        var reporter = require('cucumber-html-reporter');
        console.log('createCucumberSandwichHtmlReport called')
        var options = {
            theme : 'bootstrap',
            jsonFile : outputDir +'cucumber_sandwich_report.json',
            output : outputDir + 'cucumber_sandwich_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                AppVersion: "iTox application testing_v1.0",
                TestEnvironment : "Functional",
                Browser: "Chrome 54.0.2840.98",
                Platform: "windows 10",
                Executed: "Remote"
            }
        };
        reporter.generate(options);
    };

    this.registerListener(JsonFormatter);

}