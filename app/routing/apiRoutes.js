var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
        
    });
    app.post("/api/friends", function(req, res){
       
        var userInput = req.body;
        console.log(userInput);
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
    
      
        for(var i = 0; i < friendsArray.length; i++){
          var scoresDiff = 0;
         
          for(var j = 0; j < userInput.length; j++){
            scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(userInput[j])));
          }
    
          
          scoresArray.push(scoresDiff);
        }
    
        
        for(var i = 0; i < scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
       
        var bestie = friendsArray[bestMatch];
         res.json(bestie);
    
        friendsArray.push(req.body);
      });
    };

    
    




