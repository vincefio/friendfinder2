//include path dependencie to get file paths for html
var path = require('path')

module.exports = function(app){

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'))
	})

	//set default home path
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'))
	})
}