import path from 'path';
import { Model } from 'objection';

class CompanyEmployee extends Model {

}

CompanyEmployee.tableName = 'LoginUsers';

CompanyEmployee.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    employee_id: { anyOf: [{ type: 'integer' }, { type: 'null' }] },
    company_id: { anyOf: [{ type: 'integer' }, { type: 'null' }] },
  },
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
CompanyEmployee.relationMappings = {
  employee: {
    relation: Model.BelongsToOneRelation,
    modelClass: path.join(__dirname, 'Employee.model'),
    join: {
      from: 'company_employee.employee_id',
      to: 'Employees.id',
    },
  },
  company: {
    relation: Model.BelongsToOneRelation,
    modelClass: path.join(__dirname, 'Company.model'),
    join: {
      from: 'company_employee.company_id',
      to: 'Comapny.id',
    },
  },
};

export default CompanyEmployee;
