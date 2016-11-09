var fs = require('fs');
var glob = require('glob');
var path = require('path');
var fm = require('front-matter');

/**
 * Load data from files matching a glob pattern.
 *
 * @param  {[type]}   pattern [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
exports.loadData = loadData = function (pattern, cb) {
  var files = glob.sync(pattern),
      data = {}, i, filePath, fileExt, fileName;

   for (i = files.length - 1; i >= 0; i--) {
    filePath = files[i];
    fileExt = path.extname(filePath);
    fileName = path.basename(filePath, fileExt);

    data[fileName] = cb(fs.readFileSync(filePath, 'utf8'), filePath);
  }

  return data;
};
