var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
        
    });
    app.post("/api/friends", function(req,res){
        //grabs the new friend's scores to compare with friends in friendList array
        var userInput = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
    
        //runs through all current friends in list
        for(var i = 0; i < friendsArray.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j = 0; j < userInput.length; j++){
            scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(userInput[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
    
        //after all friends are compared, find best match
        for(var i = 0; i < scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
        //return bestMatch data
        var bestie = friendsArray[bestMatch];
        res.json(bestie);
    
        //pushes new submission into the friendsList array
        friendsArray.push(req.body);
      });
    };

    
    




