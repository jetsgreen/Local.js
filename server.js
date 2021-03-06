var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Friend Finder app is listening on PORT: " + PORT);
  });

