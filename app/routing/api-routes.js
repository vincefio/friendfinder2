//load data from our friends file
var friendList = require('../data/friends.js')


//routing
module.exports = function(app){

	//get route to show a JSON of all available friends
	app.get('/api/friends', function(req, res){
		res.json(friendList)
	})

	//post route to handle friend input
	app.post('/api/new', function(req, res){
		//push new friend to the frienList
		friendList.push(req.body)
		res.json(friendList)
	})

}