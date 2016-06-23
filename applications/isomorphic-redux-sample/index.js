'use strict';
const path = require('path');

require('babel-core/register')({});
require('babel-polyfill');

const autoloader = require(path.join(__dirname, '/../../autoload'));
      autoloader.addPath(path.join(__dirname, './shared'));

var server = require('./server').default;

if( process.env.ATLAS ){
	
	module.exports = server;	

} else {

	const PORT = process.env.PORT || 3000;

	server.listen(PORT, function () {
		console.log('Server listening on: ' + PORT);
	});

}


