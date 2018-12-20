module.exports = function Afterhook() {
    this.After(function (scenario, callback) {
        browser.ignoreSynchronization = false;
          if(scenario.isFailed){
            browser.sleep(3000);
            console.log("entering if loop")
            browser.takeScreenshot().then(function (base64png) {
                console.log("*****************taking screen shot************");
                var decoderImage = new Buffer(base64png, 'base64');
                scenario.attach(decoderImage, 'image/png');
                // self.attach(new Buffer(base64png, 'base64'), 'image/png');
                console.log("screen shot taken")
            });
        }else{
            console.log("taking screen shot is not working")
            browser.sleep(10000);

        }
        callback();
    });
};