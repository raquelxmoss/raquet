var pg = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost:5432',
    database : 'raquet'
  },
  searchPath: 'knex,public'
});

var bookshelf = require('bookshelf')(pg);

module.exports = bookshelf;