#Readme-Getter

This module is intended for use with browserify, and will not work in a node.js server.

This module will return the HTML of an npm README, and return it via callback.  Just pass the module name and a callback:

```javascript
var readmeGetter = require('readme-getter');

readmeGetter(moduleName, function(er, readme){
	if(!er) console.log("Readme for %s is:\n %s", moduleName, readme);
});
```
