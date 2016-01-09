exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('messages', function (table) {
      table.increments();
      table.string('subject');
      table.text('body');
      table.integer('user_id')
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('messages')
  ])
};
