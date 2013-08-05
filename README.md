#Readme-Getter

This module will return the HTML of an npm README from within a browser, and return it via a callback.  Just pass the module name:

`var readmeGetter = require('readme-getter');
  readmeGetter('moduleName', function(er, readme){
    if(!er){
      console.log("Here's your readme: "+readme);
    }
  });`