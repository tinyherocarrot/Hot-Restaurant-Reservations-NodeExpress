// GET and POST routes to data

module.exports = function(app) {

	app.post("/api/reserve", function(req, res) {
		
		var newReservation = req.body;
		newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

		console.log(newReservation);

		reservationArray.push(newReservation);

		res.json(newReservation);
	});

	app.get("/api/tables", function(req, res) {
	});

}