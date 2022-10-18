const pageInfo = require('../fixtures/pageInfo.json');
const buttonsPage = require('./pages/second-dinamic-buttons.page')

describe("Dynamic enabled button", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.secondButtonsPage.locator, pageInfo.secondButtonsPage.headerText);
    });

    it("should become enable", () => {
        for(let i = 0; i < pageInfo.secondButtonsPage.buttonsCount; i++) {
            buttonsPage.clickOnButton(i);
            if(i!=0 & i!=3) buttonsPage.WaitMessage.should('contain', 'Wait');
        }
        buttonsPage.ButtonsMessage.should('contain', 'All Buttons Clicked');
    })
})