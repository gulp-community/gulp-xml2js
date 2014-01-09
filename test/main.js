var should = require('should');
var gutil = require('gulp-util');
var fs = require('fs');
var gxml = require('../');

require('mocha');

describe('gulp-xml2js', function() {
  it('should compile xml to javascript', function(done) {
   var xml = gxml();
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/normal.xml',
      contents: fs.readFileSync('test/fixtures/normal.xml')
    });

    xml.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(fs.readFileSync('test/expected/normal.js', 'utf8'));
      done();
    });
    xml.write(fakeFile);
  });

  it('should compile xml to javascript', function(done) {
   var xml = gxml();
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/nested.xml',
      contents: fs.readFileSync('test/fixtures/nested.xml')
    });

    xml.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(fs.readFileSync('test/expected/nested.js', 'utf8'));
      done();
    });
    xml.write(fakeFile);
  });

});
