const pageInfo = require('../fixtures/pageInfo.json');
const FramePage = require('./pages/frames.page');

describe("iFrame Example ", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.framePage.locator, pageInfo.framePage.headerText);
    })

    it("should contain element inside iFrame", () => {
        FramePage.FrameListElement.invoke('attr', 'id').should('be.equal', 'iframe40');
    });

    it("should go to main page from iFrame", () => {
        FramePage.clickOnFrameLinkText();
        FramePage.PageHeader.should('contain', 'Test Pages For Automating');
    });
})