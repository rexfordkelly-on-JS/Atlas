var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// API Express App
// ---------------

var app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


require('./routes')(app);
// API Specific 404 / Error Handlers
// ---------------------------------

// API not found
app.use(function(req, res, next){
  res.status(404);
  res.send({"err": "Resource Not Found", "status": 404});
});

// erorrs handler
app.use(function(err, req, res, next){
  var status = err.status || 500;
  res.status(status);
  res.json({
    app: "api",
    status: status,
    error: err.message
  });
});

// Exports
// -------

module.exports = app;
