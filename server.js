import Knex from 'knex';
import { Model, compose } from 'objection';
import config from './knexfile';
import * as CustomerService from './services/Customer.service';
import * as ContactSerice from './services/Contact.service';

const knex = Knex(config.development);
Model.knex(knex);

/* CustomerService.getCustomers().then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
}); */



/* CustomerService.addCustomer()
.then((res) => {
    knex.destroy();
    console.log(res);
})
.catch((err) => {
    knex.destroy();
    console.log(err);
})
 */



/* ContactSerice.addContact()
.then((res) => {
    knex.destroy();
    console.log(res);
})
.catch((err) => {
    knex.destroy();
    console.log(err);
}) */


CustomerService.deleteCustomer()
    .then((res) => {
        knex.destroy();
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
