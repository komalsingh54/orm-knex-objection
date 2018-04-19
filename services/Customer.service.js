import Customers from '../models/Customer.model';
import Contacts from '../models/Contact.model';
import { transaction } from 'objection';

const defaultEagers = ['contacts'];

export async function getCustomers() {
    return await transaction(Customers, async (Customers) => {
        return await Customers
            .query()
            .eager('contacts')
    });
}

export async function addCustomer() {
    return await transaction(Customers, async(Customers) => {
        return await Customers
            .query()
            .upsertGraph({
                first_name: 'object',
                last_name: 'js',
                age: 10,

                contacts: [{
                    info: 'examples',
                    type: 'code'
                }]

            })
    })
}

export async function deleteCustomer() {
    return await transaction(Customers, async(Customers) => {
        return await Customers
            .query()
            //.eager('contacts')
            .deleteById(4);
    })
}
