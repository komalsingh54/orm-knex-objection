exports.up = function (knex, Promise) {
  return knex.schema.hasTable('Customers').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('Customers', function (table) {
        table.increments('id').primary();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 50).notNullable();
        table.integer('age');
        table.dateTime('created_at').defaultTo(knex.raw('now()'));
        table.dateTime('updated_at').defaultTo(knex.raw('now()'));
      })
        .createTable('Contacts', function (table) {
          table.increments('id').primary();
          table.integer('customer_id').unsigned().notNullable();
          table.string('info');
          table.string('type');
          table.foreign('customer_id').references('id').inTable('Customers').onDelete('CASCADE').onUpdate('CASCADE');
        })
    }
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Contacts')
    .dropTableIfExists('Customers');
};
