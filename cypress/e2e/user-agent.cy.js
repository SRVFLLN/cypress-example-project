const pageInfo = require('../fixtures/pageInfo.json');
const uaRedirectPage = require('./pages/user-agent-redirect.page');

describe('User agent page', () => {
    beforeEach(() => {
      cy.openPage(pageInfo.userAgentPage.locator, pageInfo.userAgentPage.headerText);
    });

    it('should redirect to mobile version after setting user agent', () => {
        uaRedirectPage.setUserAgent();
        uaRedirectPage.pageHeader.should('include', 'Mobile');
        cy.url().should('include', '/mobile');
    });
})