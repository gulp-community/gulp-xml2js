var map = require('map-stream');
var gutil = require('gulp-util');
var xml2js = require('xml2js').parseString;

module.exports = function(options) {
  var options = options ? options : {}

  function modifyContents(file, cb) {
    // Remember that contents is ALWAYS a buffer
    if (file.isNull()) return cb(null, file); // pass along
    if (file.isStream()) return cb(new Error("gulp-xml2js: Streaming not supported")); // pass error if streaming is not supported
 
    xml2js(file.contents.toString('utf8'), options, function(err, result){
      if (err) cb(new Error(err));
      file.contents = new Buffer(JSON.stringify(result));
      file.path = gutil.replaceExtension(file.path, '.js');
    });
    cb(null, file);
  }

  return map(modifyContents);
};
