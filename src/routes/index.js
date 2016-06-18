const fs = require('fs');
const path = require('path');
const atlas_paths = require('atlas_paths');

/////////////////////////
module.exports = function(app, express){
  // Static routes
  app.use(express.static( atlas_paths._DOC_ROOT ));
}