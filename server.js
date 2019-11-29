var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
 

app.use(bodyParser.json());

require(".routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Friend Finder app is listening on PORT: " + PORT);
  });
