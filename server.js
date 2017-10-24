// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// port available for heroku and local deployment
var PORT = process.env.PORT || 8080;

// parses user input
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// css accessability
app.use(express.static(path.join(__dirname, './app/public')));

// route files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});



