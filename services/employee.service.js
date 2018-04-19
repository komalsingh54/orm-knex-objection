
import Employee from '../models/Employee.model';
import Company from '../models/Company.model';

const defaultEagers = '[employees]';

//without transaction
Company.query().eager('employees').then((res) => {
  console.log(JSON.stringify(res));
});

//with transaction
async function getData() {
  try{
    const person = await transaction(Company, async (Company) => {
      return await Company
        .query()
        .eager(defaultEagers)
    });
  } catch(err) {
    console.log('something went wrong', err);
  }
}
getData();


