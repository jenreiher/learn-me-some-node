var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback(err, fileContents) {
  file = fileContents.split('\n');
  var count = file.length -1;
  console.log(count);
})

