var assert = require('assert');
var expect = require('expect.js');

var readmeGetter = require('../');
var fs = require('fs');

describe('Fetching readme', function(){

  it('should have no errors', function(done){
    readmeGetter('voxel-walk', function(er, readme){
      expect(er).to.be(null);
      done();
    });
  });

  it('should fetch a requested readme', function(done){
    readmeGetter('voxel-walk', function(er, readme){
      expect(readme).to.be.ok();
      expect(readme).to.be.a('string')
      done();
    });
  });

})