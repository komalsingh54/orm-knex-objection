import path from 'path';
import { Model } from 'objection';

class Employee extends Model {
  static get defaultEagers() {
    return `[
        'Company'
    ]`;
  }
}

Employee.tableName = 'Employees';

Employee.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    employee_name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' },
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Employee.relationMappings = {
  company: {
    relation: Model.ManyToManyRelation,
    modelClass: path.join(__dirname, 'Company.model'),
    join: {
      from: 'Employees.id',
      through: {
        from: 'company_employee.employee_id',
        to: 'company_employee.company_id',
      },
      to: 'Company.id',
    },
  },
};

export default Employee;
