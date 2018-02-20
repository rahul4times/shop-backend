
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pizza', (table) => {
    table.increments();
    table.string('item');
    table.text('detail');
    table.string('size');
    table.decimal('price');
    table.boolean('in_cart').defaultsTo(false);
    table.string('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pizza');
};
