const pageInfo = require('../fixtures/pageInfo.json');
const formData = require('../fixtures/client-server-form.json');
const clientServerFormPage = require('./pages/client-server-form.page');

describe('Client server form page', () => {
    beforeEach(() => {
        cy.openPage(pageInfo.clientServerFormPage.locator, pageInfo.clientServerFormPage.headerText);
      });

    it('should handle form sended by HTTP-request', () => {
        clientServerFormPage.sendForm();

        clientServerFormPage.firstnameValue.should('eq', formData.firstname);
        clientServerFormPage.surnameValue.should('eq', formData.surname);
        clientServerFormPage.ageValue.should('eq', formData.age.toString());
        clientServerFormPage.countryValue.should('eq', formData.country);
        clientServerFormPage.notesValue.should('eq', formData.notes);
    });
})