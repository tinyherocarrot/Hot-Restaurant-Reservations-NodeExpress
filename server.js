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


var htmlRoutes = require("./routes/htmlRoutes.js")
htmlRoutes(app);

// Reservation data

var reservationArray = {}


// var routes = require('./Hot-Restaurant-Reservations-NodeExpress/data/waitingListData.js')
// var api = require('./Hot-Restaurant-Reservations-NodeExpress/data/waitingListData.js')
// var data = require('./Hot-Restaurant-Reservations-NodeExpress/data/tableData.js')



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
