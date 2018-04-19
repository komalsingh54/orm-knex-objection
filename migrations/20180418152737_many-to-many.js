exports.up = function (knex, Promise) {
    return knex.schema.hasTable('Employees').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('Employees', function (table) {
                table.integer('id').primary();
                table.string('employee_name', 50).notNullable();
                table.dateTime('created_at').defaultTo(knex.raw('now()'));
                table.dateTime('updated_at').defaultTo(knex.raw('now()'));
            })
                .createTable('Company', function (table) {
                    table.integer('id').primary();
                    table.string('company_name', 50).notNullable();
                })
                .createTable('company_employee', function (table) {
                    table.integer('company_id').notNullable();
                    table.integer('employee_id').notNullable();
                    table.time('work_hour_start').notNullable();
                    table.time('work_hour_end').notNullable();
                    table.foreign('employee_id').references('id').inTable('Employees').onDelete('CASCADE').onUpdate('CASCADE');
                    table.foreign('company_id').references('id').inTable('Company').onDelete('CASCADE').onUpdate('CASCADE');
                    table.primary(['company_id', 'employee_id', 'work_hour_end', 'work_hour_start']);
                });
        }
    });
}
exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('company_employee')
        .dropTableIfExists('Company')
        .dropTableIfExists('Employees');
}
