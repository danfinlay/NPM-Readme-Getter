#Readme-Getter

This module will return the HTML of an npm README, and return it via callback.  To use, just initialize with a reference to either the `request` module or `browser-request` if you're working in the browser.  From there, call `.getReadme()` with the module name and a callback.
```javascript
var request = require('browser-request'); // If browser-side code for browserify.
var request = require('request'); // If server-side node code.
var readmeGetter = require('readme-getter')(request);

readmeGetter.getReadme(moduleName, function(er, readme){
	if(!er) console.log("Readme for %s is:\n %s", moduleName, readme);
});
```
