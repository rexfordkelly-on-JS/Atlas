'use strict';

/**
	Media Aliases provide an efficient and flexible means
	to organize and categorize your media files using json files.

	You can create any number of media alias files, each one will be 
	linked, via it's properties, to it's source file. While you might end
	up with any number of aliases which link back to the same soure files,
	there should never be duplicate	files.

	It's low tech approach makes it usefull in cross app/domain media
	sharing and eliminates all duplicates of the media files themselves.

	While the flat files allow for straight forward interapability, there
	should also be a Database, for more complicated interactions.

*/


const fs = require('fs');
const path = require('path');

require(path.join(__dirname, '/../../autoload'));
const atlas_paths = require('atlas_paths');

const hasher = require('MD5');
const file_hasher = require('hash-file');


function get_index(){
	return JSON.parse(fs.readFileSync(path.join(__dirname, '../../media/aliases/index.json'), 'utf8'));
}

function getAliasPath  ( alias_path ) {
	console.log(alias_path)
	var needles = [ 
		atlas_paths._DOC_ROOT + alias_path.replace('.alias', "") + '.alias',
		atlas_paths._MEDIA_ + '/aliases/' + hasher(alias_path) + '.alias',
		atlas_paths._MEDIA_ + '/aliases/' + alias_path.split('/media/').pop() + '.alias',
	];

	var _needles = needles.filter( function(file_path){
		return fs.existsSync(file_path);
	});

    return _needles || false;
}

function loadAliasDetails( path ){
	if( typeof path !== 'string') return false;
	var file = fs.readFileSync(path, 'utf8');
	if(isJson(file)){
		return JSON.parse(file);
	}
}

function isJson(prop) {
    prop = typeof  prop !== "string" ? JSON.stringify( prop) :  prop ;
    
    try {
         prop = JSON.parse( prop);
    } catch (e) {
        return false;
    }

    if (typeof  prop === "object" &&  prop !== null) {
        return true;
    }

    return false;
}

module.exports.get_index = get_index;
module.exports.loadAliasDetails = loadAliasDetails;
module.exports.getAliasPath = getAliasPath;
module.exports.isJson = isJson;

