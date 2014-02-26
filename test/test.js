var test = require('tape');
var request = require('request');

var readmeGetter = require('../')(request);

test('Fetching readme', function(t){
	t.plan(2);

    readmeGetter.getReadme('voxel-walk', function(er, readme){

			t.equal(er, null);
			t.equal(typeof readme, 'string');

    });

});
