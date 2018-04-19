import path from 'path';
import { Model } from 'objection';

class Stocks extends Model {
  static get defaultEagers() {
    return `[
        'stockdetails'
    ]`;
  }
}

Stocks.tableName = 'Stocks';

Stocks.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    stock_code: { type: 'string' },
    stock_name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' },
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Stocks.relationMappings = {
  stockdetails: {
    relation: Model.HasOneRelation,
    modelClass: path.join(__dirname, 'StockDetail.model'),
    join: {
      from: 'Stocks.stock_id',
      to: 'StockDetails.stock_id',
    },
  },
};

export default Stocks;
