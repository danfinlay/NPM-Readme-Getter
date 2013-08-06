#Readme-Getter

This module will return the HTML of an npm README from within a browser, and return it via a writable stream.  Just pass the module name and a writable stream:

`var readmeGetter = require('readme-getter');
  readmeGetter('moduleName', console.log);
`

Utilizes levelDB caching of readme files for quicker retrieval once files have been requested once.  Right now does not feature a shelf-life, so database must be flushed manually.
