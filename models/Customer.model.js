import path from 'path';
import { Model } from 'objection';

class Customers extends Model {
  static get defaultEagers() {
    return `[
        'contacts'
    ]`;
  }
}

Customers.tableName = 'Customers';

Customers.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    age: { type: 'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Customers.relationMappings = {
  contacts: {
    relation: Model.HasManyRelation,
    modelClass: path.join(__dirname, 'Contact.model'),
    join: {
      from: 'Customers.id',
      to: 'Contacts.customer_id',
    },
  },
};

export default Customers;
