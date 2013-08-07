var request = require('request');
var through = require('through');
var trumpet = require('trumpet');
var level = require('level');
var db = level('./readme-cache');
var domain = require('domain');

module.exports = function(module, writeStream){
  
  var d = domain.create();
  d.on('error', function(er){
    console.log("Domain caught error: "+er.message);
  })
  d.run(function(){
    db.get(module, function(er, readme){
      if(er){   
        //Module not cached, load it from web:
    
        var tr  = trumpet();
        readmeStream = tr.select('#readme').createStream();

        var moduleURL = 'http://npmjs.org/'+module;
        var req = request(moduleURL).pipe(tr);
        readmeStream.pipe(writeStream);
       
        var readmeCache = ''; 
        req.pipe(through(function(data){
            readmeCache += data.toString();
          }, function(){
            // console.log("Attempting to cache "+module+" with readme: "+readmeCache);
            db.put(module, readme, function(err){
              // console.log("Problem caching module: "+err);
            });
        })); 

      }else{

        //Module is cached, is now readme:
        writeStream.end(readme);
      }
    });
  })
}
