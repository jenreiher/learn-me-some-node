var net = require('net');
// var date = require('date');

var port = process.argv[2]

var server = net.createServer(function (socket) {  
  
  var date = new Date();
  function getDateTime() {
    year = date.getFullYear();  
    month = date.getMonth() + 1;     // starts at 0  
    day = date.getDate();      // returns the day of month  
    hour = date.getHours();  
    minute = date.getMinutes();
    var formattedDate = `${year}-0${month}-0${day} 0${hour}:${minute}\n`;
    // console.log(formattedDate)
    return formattedDate;
  }
  // socket.write(date);
  socket.end(getDateTime());
})  
server.listen(port);

