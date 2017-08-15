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
		

		//compare friends looking for different scores
		var friendScores = req.body.scores
		var scoreDifference = []
		
		//double for loop, looping through both req.body.scores and each person in friendList
		// console.log('friendList length ' + friendList.length)
		for(var i = 0; i < friendList.length; i++){
			var totalDifference = 0
			console.log('current friend ' + friendList[i].name)
			//reset scoreDifference after each new friend
			// scoreDifference = []
			for(var j = 0; j < friendScores.length; j++){
				// scoreDifference.push(Math.abs(friendList[i].scores[j] - friendScores[j]))
				// console.log('difference ' + scoreDifference)
				totalDifference += Math.abs(friendList[i].scores[j] - friendScores[j])

			}
			scoreDifference.push(totalDifference)	
		}

			Array.max = function( scoreDifference ){
	    	return Math.max.apply( Math, scoreDifference);
			};

		console.log("array max " + Array.max(scoreDifference))
		//loop through score differences to find a match
		// for(var i = 0; i < scoreDifference.length; i++){

		// }
		console.log('scoreDifference ' + scoreDifference)

		//push new friend to the frienList
		friendList.push(req.body)


		res.json(friendList)
	})

}