var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);

    });
    app.post("/api/friends", function (req, res) {
        //    this grabs user's input to compare to the friends array
        var userInput = req.body;
        console.log(userInput);
        var scoresArray = [];
        var bestMatch = 0;

        // goes through potential best friend matches   
        for (var i = 0; i < friendsArray.length; i++) {
            var scoresDiff = 0;
            //  goes through user's score to compare with potential matches
            for (var j = 0; j < userInput.length; j++) {
           // Math.abs returns the absoulte value of number(this elimanates the possibility of getting a negative number)
                scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(userInput[j])));
            }

            // pushes scores to scoresArray
            scoresArray.push(scoresDiff);
        }

        // this goes through new scoresArray then compares to find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //    this brings back match
        var bestie = friendsArray[bestMatch];
        res.json(bestie);
        // pushes users input to the friends array
        friendsArray.push(req.body);
    });
};







