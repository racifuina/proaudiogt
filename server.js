//Express server
var express = require("express");
var app = express();
var http = require("http").Server(app);
//var io = require("socket.io")(http);
app.use(express.static('public'));

var HTTP_PORT = process.env.PORT || 8000;

//home
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/acerca.html');
});

//404
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');;
});

http.listen(HTTP_PORT, function () {
    console.log("Web Server Started");
});

process.on("uncaughtException", function (err) {
    console.log("---------------> Uncaught Exception <---------------", err);
});
