// dependencies
var path = require("path");

// 
var friendList = require("../data/friends.js");


module.exports = function(app) {
	 
	 // friend list in json object
	 app.get('/api/friendlist', function (req, res) {
        res.json(friendList);
    });

	//
	app.post('/api/friends', function(req, res) {
		
		// user input object
		var surveyInput = req.body;
		
		// console.log("surveyInput = " + JSON.stringify(surveyInput));
		friendList.push(surveyInput);
		res.json(surveyInput);

		});
};