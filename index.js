var request = require('browser-request');
var through = require('through');
var trumpet = require('trumpet');

var readmeCache = {};

module.exports = function(module, callback) {

  if (readmeCache[module]) {
    callback(null, readmeCache[module]);
  } else {

    var tr = trumpet();
    readmeStream = tr.select('#readme').createStream();

    var moduleURL = 'http://npmjs.org/' + module;
    var req = request(moduleURL).pipe(tr);

    var readme = '';
    req.pipe(through(function(data) {
      readme += data.toString();
    }, function() {
      readmeCache[module] = readme;
      callback(null, readme);
    })).on('error', callback);
    
  }
}
