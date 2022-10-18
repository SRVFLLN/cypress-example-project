const pageInfo = require('../fixtures/pageInfo.json');
const cookiesPage = require('./pages/cookies.page');
const Browser = require('./utils/browser-utils');


describe('Cookies', function () {
    beforeEach(() => {
        cy.openPage(pageInfo.cookiesPage.locator, pageInfo.cookiesPage.headerText);
    });

    it('should set cookie', () => {
        Browser.CookieHandler.getAllCookies().should('be.empty');
        Browser.CookieHandler.setCookie('loggedin', 'Admin');
        cookiesPage.reload();
        Browser.CookieHandler.getSpecificCookie('loggedin').should('have.property', 'value', 'Admin');
        cookiesPage.PageHeader.should('contain', 'Admin View');
    });
})