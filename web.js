//var express = require('express');
  var fs  = require('fs');
  var http = require('http');
//var app = express.createServer(express.logger());


fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(5000);
});

console.log("Listening on port 5000");

//app.get('/', function(request, response) {
  //response.sendfile(__dirname + '/index.html');
//});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
  //console.log("Listening on " + port);
//});