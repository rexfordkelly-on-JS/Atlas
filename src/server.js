const 	        http = require('http');
const 			path = require('path');

const         express = require("express");
const    atlas_server = require('express')();

// Enable Autoloading
const registry = require(path.join(__dirname, '/../autoload'))()
// Register Additional Require Paths
registry.addPath( path.join(__dirname, '/../autoload') );

const atlas_paths = require('atlas_paths');

// Load application routes
const applications = require('applications');
	applications.forEach(function(app){
		console.log('mounting application ', app.app_name)
		console.log('@ ', app.base_url)
		console.log('from ', atlas_paths._APPS_ + app.app_dir +  app.entry)
		atlas_server.use( app.base_url, require(atlas_paths._APPS_ + app.app_dir +  app.entry))
	});

// Mount Atlas Fallback Routes
require('./routes')(atlas_server, express);

// Attach extensible error handling
atlas_server.use( require( path.join( atlas_paths._APPS_, '/errors/app' )))

// Launch Server
atlas_server.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});



