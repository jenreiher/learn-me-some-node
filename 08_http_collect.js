const bl = require('bl');
const fs = require('fs')
var http = require('http');

var path = process.argv[2]

http.get(path, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    console.log(data.length); 
    console.log(data.toString());
  }));
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});