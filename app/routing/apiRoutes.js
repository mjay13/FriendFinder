// dependencies
var path = require("path");

// 
var friendList = require("../data/friends.js");


module.exports = function(app) {

    // display friend list in json object
    app.get('/api/friendlist', function(req, res) {
        res.json(friendList);
    });

    // all logic here
    app.post('/api/friends', function(req, res) {

        // user input object
        var surveyInput = req.body;
        //console.log(req.body);
        //console.log(friendList);
        // console.log("surveyInput = " + JSON.stringify(surveyInput));
        friendList.push(surveyInput);
        res.json(surveyInput);

 

    var bestMatch = {
        name: "",
        photoLink: "",
        answers: [
            "", // parseInt?
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    };

    for (var i = 0; i < friendList.length; i++) {
    	//console.log(friendList[i].answers);
    	var matchAnswers = friendList[i].answers;
    	console.log("matchAnswers: "+matchAnswers);
    	
    	
    }

   });





};