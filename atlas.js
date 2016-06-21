const path = require('path');
const Atlas = require(path.join(__dirname, '/applications/atlas/app.js'));
process.env.ATLAS = true;
exports = Atlas;
