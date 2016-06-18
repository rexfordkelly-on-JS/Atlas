const fs = require('fs');
const path = require('path');
const url 	= require('url');

const express = require('express');
const router = express.Router();
require(path.join(__dirname, '/../../autoload'));
const atlas_paths = require('atlas_paths');


const MA = require('./media-aliases');

// Basic Route Demos
// -----------------

var app = express();
console.log('loaded media aliases')

app.get('*', function (req, res, next) {
	var media = MA.getAliasPath(url.parse(req.originalUrl).pathname, req.query);
	var alias = MA.loadAliasDetails(media[0])
	var uuid  = atlas_paths._MEDIA_ + '/files/' + alias.uuid + alias.uuid_file_ext;

	console.log(uuid);

  	if(alias.uuid){
  		res.sendfile(uuid)
  	} else {
  		next();
  	}

});

module.exports = app;

