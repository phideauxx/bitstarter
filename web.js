var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var output = fs.readFileSync('index.html');
  
  response.send(output.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
