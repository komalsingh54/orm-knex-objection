exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('Employees').del(),
    knex('Company').del(),
    knex('company_employee').del(),
    knex('Employees').insert([
      { id: 1, employee_name: 'lName' },
      { id: 2, employee_name: 'lName2' },
      { id: 3, employee_name: 'lName3' },
    ]),
    knex('Company')
      .insert([
        { id: 1, company_name: 'info1' },
        { id: 2, company_name: 'info21' },
        { id: 3, company_name: 'info3' },
        { id: 4, company_name: 'info5' },
        { id: 5, company_name: 'info12' },
        { id: 6, company_name: 'info121' },
      ]),
    knex('company_employee')
      .insert([
        { company_id: 1, employee_id: 1, work_hour_start: knex.fn.now(), work_hour_end: knex.fn.now() },
        { company_id: 2, employee_id: 2, work_hour_start: knex.fn.now(), work_hour_end: knex.fn.now() },
        { company_id: 3, employee_id: 3, work_hour_start: knex.fn.now(), work_hour_end: knex.fn.now() },
        { company_id: 4, employee_id: 1, work_hour_start: knex.fn.now(), work_hour_end: knex.fn.now() },
        { company_id: 5, employee_id: 2, work_hour_start: knex.fn.now(), work_hour_end: knex.fn.now() },
        { company_id: 6, employee_id: 3, work_hour_start: knex.fn.now(), work_hour_end: knex.fn.now() },
      ])
  );
};
