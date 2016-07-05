var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString().split('\n');
var count = file.length -1;

console.log(count);