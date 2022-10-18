const { BasePage } = require("./base.page");
const formData = require('../../fixtures/client-server-form.json');

const firstnameValue = '#firstname-value';
const surnameValue = '#surname-value';
const ageValue = '#age-value';
const countryValue = '#country-value';
const notesValue = '#notes-value';

class ClientServerFormPage extends BasePage{
    sendForm() {
        cy.request({
            method: 'POST',
            url: 'https://testpages.herokuapp.com/validate/input-validation',
            form: true, 
            body: formData
        }).its('body').then(html => {
            cy.document().invoke('open').invoke({ log: false }, 'write', html)
        });
    }

    get firstnameValue() {
        return this.getElement(firstnameValue).text;
    }

    get surnameValue() {
        return this.getElement(surnameValue).text;
    }

    get ageValue() {
        return this.getElement(ageValue).text;
    }

    get countryValue() {
        return this.getElement(countryValue).text;
    }

    get notesValue() {
        return this.getElement(notesValue).text;
    }
}

module.exports = new ClientServerFormPage();