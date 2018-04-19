import path from 'path';
import { Model } from 'objection';

class Company extends Model {
  static get defaultEagers() {
    return `[
        'employees'
    ]`;
  }
}

Company.tableName = 'Company';

Company.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    company_name: { type: 'string' },
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Company.relationMappings = {
  employees: {
    relation: Model.ManyToManyRelation,
    modelClass: path.join(__dirname, 'Employee.model'),
    join: {
      from: 'Company.id',
      through: {
        from: 'company_employee.company_id',
        to: 'company_employee.employee_id',
      },
      to: 'Employees.id',
    },
  },
};

export default Company;
