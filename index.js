var request = require('request');
var through = require('through');
var trumpet = require('trumpet');
var level = require('level');
var db = level('./readme-cache');

module.exports = function(module, writeStream){
	
	
	db.get(module, function(er, readme){
		if(er){		
	    //Module not cached, load it from web:
	
	    var tr  = trumpet();
      readmeStream = tr.select('#readme').createStream();

	    var moduleURL = 'http://npmjs.org/'+module;
      var req =	request(moduleURL).pipe(tr);
      readmeStream.pipe(writeStream);
     
      var readmeCache = ''; 
      req.pipe(through(function(data){
          readmeCache += data.toString();
        }, function(){
          db.put(module, readme);
      })); 

    }else{

      //Module is cached, is now readme:
      writeStream.end(readme);
    }
  });

}
