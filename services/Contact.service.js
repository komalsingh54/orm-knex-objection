import Customers from '../models/Customer.model';
import Contacts from '../models/Contact.model';
import { transaction } from 'objection';

const defaultEagers = ['customers'];

//without transaction
/* Customers.query().eager('contacts').then((res) => {
    console.log(JSON.stringify(res));
});
 */


export async function getContacts() {
    return await transaction(Contacts, async (Contacts) => {
        return await Contacts
            .query()
            .eager('customers')
    });
}

export async function addContact() {
    return await transaction(Contacts, async (Contacts) => {
        return await Contacts
            .query()
            .upsertGraph({
                customer_id: 3,
                info: 'examples',
                type: 'code'
            });
    })
}
