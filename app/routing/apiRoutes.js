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
    // adds new data to system
    app.post('/api/friends', function(req, res) {

        // user input object
        var surveyInput = req.body;
        //console.log(req.body);

        // grabs the answers array out of the json object
        var surveyAnswers = surveyInput.answers;
        //console.log(surveyAnswers);

        // var matchAnswers = friendlist[i].answers;
        // console.log("matchAnswers: " + matchAnswers);

        var totalDiff = 0;

        // matching object for response
        var bestMatch = {
            name: "",
            photoLink: "",
            friendDiff: 100
        };
       

        for (var i = 0; i < friendList.length; i++) {
            //console.log(friendList[i].answers);

            for (var x = 0; x < friendList[i].answers[x]; x++) {
                // survey answers minus the loop of friendList answers *math absolute*
                totalDiff += Math.abs(parseInt(surveyAnswers[x]) - parseInt(friendList[i].answers[x]));

                if (totalDiff <= bestMatch.friendDiff) {
                    // the fill in bestMatch object
                    bestMatch.name = friendList[i].name;
                    bestMatch.photoLink = friendList[i].photoLink;
                    bestMatch.friendDiff = totalDiff;
                } 
            }
        }
        // posts to api via pushing to the friends data
        friendList.push(surveyInput);
        // console.log(surveyAnswers);

        res.json(bestMatch);
         console.log("here is the match: "+bestMatch.name);
    });

};