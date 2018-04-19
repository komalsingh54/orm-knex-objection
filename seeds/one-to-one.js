
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('StockDetails').del(),

    knex('Stocks').del(),

    knex('Stocks').insert([
      { stock_id: 1, stock_code: 'a', stock_name: 'stock1' },
      { stock_id: 2, stock_code: 'b', stock_name: 'stock2' },
      { stock_id: 3, stock_code: 'c', stock_name: 'stock3' },
    ]),

    knex('StockDetails').insert([
      { stock_id: 1, comp_name: 'abc', comp_desc: 'abasdf' },
      { stock_id: 2, comp_name: 'def', comp_desc: 'asdeg' },
      { stock_id: 3, comp_name: 'ghi', comp_desc: 'ssas' },
    ])
  );
};
