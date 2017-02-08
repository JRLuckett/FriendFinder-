// var path = require('path');
// var app = express();
//
// module.exports = function (app){
//   app.get("/survey", function(req, res) {
//   	res.sendFile(path.join(__dirname, "/../public/survey.html"));
//   });
//   app.use( function(req, res) {
//   	res.sendFile(path.join(__dirname, "/../public/home.html"));
//   });
// };
// app.listen(PORT, function() {
// 	console.log("App listening on PORT " + PORT);
// });

// All of the reservations
// var tables = [];
//
// // Route to all HTML pages
// app.get("/:zzz?", function(req, res) {
// 	var chosen = req.params.zzz;
//
// 	if (chosen === "survey") {
// 		res.sendFile(path.join(__dirname, "app/public/survey.html"));
// 	} else if( chosen === "/api/friends") {
//     res.json(friendData);
//   } else {
// 		res.sendFile(path.join(__dirname, "app/public/home.html"));
// 	}
// });
