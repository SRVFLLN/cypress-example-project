const pageInfo = require('../fixtures/pageInfo.json');
const buttonsPage = require('./pages/first-dinamic-buttons.page')

describe("Dynamic button", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.firstButtonsPage.locator, pageInfo.firstButtonsPage.headerText);
    });

    it("should appears and be clickable into loop", () => {
        for(let i = 0; i < pageInfo.firstButtonsPage.buttonsCount; i++) {
            buttonsPage.clickOnButton(i);
            if(i!=0 & i!=3) buttonsPage.WaitMessage.should('contain', 'Wait');
        }
        buttonsPage.ButtonsMessage.should('contain', 'All Buttons Clicked');
    })
})