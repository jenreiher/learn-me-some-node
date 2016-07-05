const bl = require('bl');
const fs = require('fs')
var http = require('http');

var path1 = process.argv[2]
var output1 = null;
var path2 = process.argv[3]
var output2 = null;
var path3 = process.argv[4]
var output3 = null;
var numberCompleted = 0;

function checkResultCompletion() {
  numberCompleted += 1;
  if (numberCompleted === 3) {
    printOutput();
  }
}

function printOutput() {
  console.log(output1);
  console.log(output2);
  console.log(output3);
}

http.get(path1, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    output1 = data.toString();
    checkResultCompletion();
  }));
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});

http.get(path2, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    output2 = data.toString();
    checkResultCompletion();
  }));
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});

http.get(path3, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    output3 = data.toString();
    checkResultCompletion();
  }));
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});