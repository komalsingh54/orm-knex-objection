import path from 'path';
import { Model } from 'objection';

class Contacts extends Model {
  static get defaultEagers() {
    return `[
        'customers'
    ]`;
  }
}

Contacts.tableName = 'Contacts';

Contacts.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    info: { type: 'string' },
    type: { type: 'string' },
    customer_id: { type: 'integer' }
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Contacts.relationMappings = {
  customers: {
    relation: Model.HasOneRelation,
    modelClass: path.join(__dirname, 'Customer.model'),
    join: {
      from: 'Contacts.customer_id',
      to: 'Customers.id',
    },
  },
};

export default Contacts;
