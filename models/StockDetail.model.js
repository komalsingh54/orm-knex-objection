import path from 'path';
import { Model } from 'objection';

class StockDetails extends Model {
  static get defaultEagers() {
    return `[
        'stocks'
    ]`;
  }
}

StockDetails.tableName = 'StockDetails';

StockDetails.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    comp_name: { type: 'string' },
    comp_desc: { type: 'string' },
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
StockDetails.relationMappings = {
  stocks: {
    relation: Model.HasOneRelation,
    modelClass: path.join(__dirname, 'Stock.model'),
    join: {
      from: 'StockDetails.stock_id',
      to: 'Stocks.stock_id',
    },
  },
};

export default StockDetails;
