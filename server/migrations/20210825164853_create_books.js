
exports.up = function(knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id');
    table.string('title');
    table.string('author');
    table.string('ISBN');
    table.boolean('checked_out');
    table.string('userid')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
