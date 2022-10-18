const pageInfo = require('../fixtures/pageInfo.json');
const hoverPage = require('./pages/hover.page');

describe("Hover", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.hoverPage.locator, pageInfo.hoverPage.headerText);
    })

    it("should trigger text to be displayed", () => {
        hoverPage.showTextUnderHover();
        hoverPage.TextUnderHover.should('be.visible');
    });

    it("should trigger div with link to be displayed", () => {
        hoverPage.showDivUnderHover();
        hoverPage.clickOnLinkUnderHover();
        hoverPage.PageHeader.should('contain', 'Action Complete');
    })
})