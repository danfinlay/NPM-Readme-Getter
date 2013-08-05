var request = require('request');
var cheerio = require('cheerio')  

module.exports = function(module, callback){
  var moduleURL = 'http://npmjs.org/'+module;
  request({url: moduleURL, json:true}, function(er, res, body){
    // console.log("Err: "+er)
    if(!er && body){
      var npmDOM = cheerio.load(body);
      var normalized = npmDOM('#readme').html();
      // console.log("Body: "+normalized);
      callback(er, normalized);
    }else{
      callback(er, null);
    }
  })
}