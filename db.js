var low = require('lowdb');
var FileSync = require('/lowdb/adapters/FileSync');
var adapters = new FileSync('db.json');

db = low(adapters);

db.defaults({ users: [], session: [], transfer: [] })
    .write()

module.exports = db;
    