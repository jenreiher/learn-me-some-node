var fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
      if (err) { return callback(err, filteredList); }
      function filterByExt(list) {
      return path.extname(list) === "." + ext;
    }

    var filteredList = list.filter(filterByExt).join('\n');
    callback(null, filteredList);
  }); 
}

  

