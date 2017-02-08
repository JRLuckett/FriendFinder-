/*jshint esversion:6 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;


// Database configuration



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// All of the reservations
var friends = [{
  name:'Jerry Lewis',
  photo:'http://vignette4.wikia.nocookie.net/wallaceandgromit/images/3/3e/Wallace-482x298.jpg/revision/latest/scale-to-width-down/299?cb=20140526031303',
  q1: 2,
  a2: 4,
  q3: 2,
  q4: 1,
  q5: 4,
  q6: 3,
  q7: 4,
  q8: 2,
  q9: 4,
  q10: 2
}];

// Route to all HTML pages
app.get("/:zzz?", function(req, res) {
	var chosen = req.params.zzz;

	if (chosen === "survey") {
		res.sendFile(path.join(__dirname, "app/public/survey.html"));
	} else if( chosen === "/api/friends") {
    res.json(friendData);
  } else {
		res.sendFile(path.join(__dirname, "app/public/home.html"));
	}

});
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
