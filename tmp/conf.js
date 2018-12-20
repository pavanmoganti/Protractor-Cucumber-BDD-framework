exports.config = {
		
		chromeDriver: "../drivers/chromedriver.exe",
		seleniumServerJar:"../drivers/selenium-server-standalone-3.9.0.jar",
		directConnection: false,
		baseUrl: 'http://54.158.165.133:5000/#!/login',
  
		// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [
		{
		browserName: 'chrome'
	},
	],
		
	
		framework: 'custom',
		
		frameworkPath: 'C:\\Protractor_Workspace\\Toxicology_Protractor_Cucumber\\node_modules\\protractor-cucumber-framework\\index.js',
			/*require.resolve('protractor-cucumber-framework'),*/
  
  
		specs: ['../features/*.feature'],


    cucumberOpts: {
        require: ['../features/step_definitions/*.js' ,
					'../support/*.js'],
         tags: '@dev',
        format: [
            "json:./result/TestResult/cucumber_sandwich.json"
        ],

       // profile: false
    },

	onPrepare: function () {
			browser.manage().deleteAllCookies();
        console.log("maximising the screen in conf file");
			browser.manage().window().maximize();
			browser.ignoreSynchronization = false;
	},
	onComplete: function () {
			browser.close();
		console.log("all done");
    },
	allScriptsTimeOut: 140000,
	getPageTimeOut: 100000,
	chromeOnly: true,
	ignoreTheCaughtExceptions: true
}