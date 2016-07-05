const myModule = require('./06_module.js')

var callback = function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data); 
}

myModule(process.argv[2], process.argv[3], callback);

