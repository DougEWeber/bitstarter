var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var titleBuffer = fs.readFile('index.html');
titleText = titleBuffer.toString();
app.get('/', function(request, response) {
  response.send(titleText);
});

console.log(titleText);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
