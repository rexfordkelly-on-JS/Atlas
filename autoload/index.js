const path = require('path');

/*
	this is some simple plumbing to enable autoloading
	on the server side.

	Essentially this is adding paths to Nodes default
	require paths.

*/
// AutoLoader Bootstrapper
const paths = [__dirname];
const guard = {};
const module_paths = require( path.join(__dirname, '/../src/node_modules/app-module-path'));

function autoloader(){
	paths.map(function(_path_){
		autoloader.addPath(_path_);
	});
	return autoloader;
}
autoloader.addPath = function(_path_, append ){
	if(guard[_path_] === undefined ){
		guard[_path_] = true;
		append ? paths.push(_path_): paths.unshift(_path_);
		module_paths.addPath(_path_);
	}
}

// Ensure we mount the top level autoloader.
autoloader.addPath(path.join(__dirname, '/../autoload' ));

module.exports = global.autoload ? global.autoload : autoloader;