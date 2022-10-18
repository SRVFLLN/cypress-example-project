const pageInfo = require('../fixtures/pageInfo.json');
const formData = require('../fixtures/html5-form.json')
const html5FormPage = require('./pages/html5-form.page');
const html5FormResultPage = require('./pages/html5-form-result.page');

describe('HTML5 form page', () => {
    beforeEach(() => {
      cy.openPage(pageInfo.html5FormPage.locator, pageInfo.html5FormPage.headerText);
    });

    it('should correctly handle form', () => {
        html5FormPage.fillForm();
        
        html5FormResultPage.colorValue.should('include', formData.colour);
        html5FormResultPage.dateValue.should('include', formData.date);
        html5FormResultPage.localDateValue.should('include', formData.localDate);
        html5FormResultPage.emailValue.should('include', formData.email);
        html5FormResultPage.monthValue.should('include', formData.month);
        html5FormResultPage.numberValue.should('include', formData.number);
        html5FormResultPage.submitVaue.should('include', 'submit');
    })
});