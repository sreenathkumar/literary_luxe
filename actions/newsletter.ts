'use server'

const brevo = require('@getbrevo/brevo');
let apiInstance = new brevo.ContactsApi();

apiInstance.authentications['apiKey'].apiKey = process.env.NEWSLETTER_API_KEY;

export const subscribeToNewsLetter = async (formdata: FormData) => {
    const email = formdata.get('email'); // get email from formdata

    if (email) {
        let createContact = new brevo.CreateContact();

        createContact.email = email;
        createContact.listIds = [Number(process.env.NEWSLETTER_LIST_ID)];

        try {
            await apiInstance.createContact(createContact);
            return {
                status: 'success',
                message: 'You have successfully subscribed to our newsletter'
            };
        } catch (error: any) {

            return {
                status: 'error',
                message: error.body.message
            }
        }
    } else {
        return {
            status: 'error',
            message: 'Please enter a valid email address'
        }
    }

}