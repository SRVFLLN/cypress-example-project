const pageInfo = require('../fixtures/pageInfo.json');

describe('XHTTP messages page', () => {
    beforeEach(() => {
        cy.openPage(pageInfo.xhttpMessagesPage.locator, pageInfo.xhttpMessagesPage.headerText);
    });
    
    it('should make requests to /messageset01.json with changed body', () => {
        cy.intercept('GET','https://testpages.herokuapp.com/styled/sync/messageset01.json',[{message:'hello it\'s Johnny!'}]).as('req');
        cy.wait("@req").its('response').should('have.a.property', 'body').then(body => {
            expect(body[0]).to.contain({message:'hello it\'s Johnny!'})
        });
    });

    it('should make requests to /messageset03.json with custom header', () => {
        cy.intercept('GET','https://testpages.herokuapp.com/styled/sync/messageset03.json', (req) => {
            req.headers['new-custom-header'] = 'added new header';
        }).as('req');
        cy.wait("@req").its('request.headers').should('have.property', 'new-custom-header', 'added new header');
    });

    it('should make request to all resource with custom general header', () => {
        cy.intercept('https://testpages.herokuapp.com/styled/sync/*', {middleware: true} ,(req) => {
            req.headers['general-header'] = 'this is general header'});
        cy.intercept('GET','https://testpages.herokuapp.com/styled/sync/*').as('req');
        cy.wait("@req").its('request.headers').should('have.property', 'general-header', 'this is general header');
        cy.wait("@req").its('request.headers').should('have.property', 'general-header', 'this is general header');
    })
})