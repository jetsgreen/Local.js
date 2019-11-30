var path = require("path");
var friendsArray = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
        
    });

    app.post("/api/friends", function(req,res){
       
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
    
        for(var i= 0; i< friendsArray.length; i++){
          var scoresDiff = 0;
          var x = friendsArray[i].scores;
          
          for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (parseInt(x[i].scores[j] - parseInt(newFriendScores[j])));
          }
    
          scoresArray.push(scoresDiff);
        }
    
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
        var bff = friendsArray[bestMatch];
        res.json(bff);
    
        friendsArray.push(req.body);
      });
    };




