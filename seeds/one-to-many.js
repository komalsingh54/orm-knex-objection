
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('Contacts').del(),
    knex('Customers').del(),
    knex('Customers').insert([
      { first_name: 'fName', last_name: 'lName', age: 12 },
      { first_name: 'fName2', last_name: 'lName2', age: 22 },
      { first_name: 'fName3', last_name: 'lName3', age: 32 },
    ]),
    knex('Contacts')
      .insert([
        { customer_id: 1, info: 'info1', type: 'email' },
        { customer_id: 2, info: 'info21', type: 'phone' },
        { customer_id: 3, info: 'info3', type: 'mail' },
        { customer_id: 1, info: 'info5', type: 'mobile' },
        { customer_id: 2, info: 'info12', type: 'emaila' },
        { customer_id: 3, info: 'info121', type: 'email' },
      ])
  );
}
