//require our npm packages
var express = require('express')
var bodyParser = require('body-parser')

//initialize our express server
var app = express();

//set an initial port 
var PORT = process.env.PORT || 3000

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require route files
require('./app/routing/api-routes')(app)
require('./app/routing/html-routes')(app)

//app listener

app.listen(PORT, function(){
	console.log('App listening on port ' + PORT)
})