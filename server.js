// Dependencies
//=============================================================
var express = require('express');
var bodyParser = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var path = require('path');

// module.exports = function (app) {
    
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "./public/home.html"));
    })
    app.get('/tables', function(req, res){
        res.sendFile(path.join(__dirname, "./public/tables.html"));
    })
    app.get('/reserve', function(req, res){
        res.sendFile(path.join(__dirname, "./public/reserve.html"));
    })
// }


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
