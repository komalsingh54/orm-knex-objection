exports.up = function (knex, Promise) {
  return knex.schema.hasTable('Stocks').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('Stocks', function (table) {
        table.increments('stock_id').primary();
        table.string('stock_code', 50).notNullable();
        table.string('stock_name', 50).notNullable();
        table.dateTime('created_at').defaultTo(knex.raw('now()'));
        table.dateTime('updated_at').defaultTo(knex.raw('now()'));
        table.unique(['stock_code', 'stock_name']);
      })
        .createTable('StockDetails', function (table) {
          table.increments('stock_id').primary();
          table.string('comp_name');
          table.string('comp_desc');
          table.foreign('stock_id').references('stock_id').inTable('Stocks').onDelete('CASCADE').onUpdate('CASCADE');
        })
    }
  });
}
exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('StockDetails')
    .dropTableIfExists('Stocks');
}
