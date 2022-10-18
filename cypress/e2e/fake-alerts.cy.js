const pageInfo = require('../fixtures/pageInfo.json');
const fakeAlertsPage = require('../e2e/pages/fake-alerts.page');

describe("Fake alerts", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.fakeAlertsPage.locator, pageInfo.fakeAlertsPage.headerText);
    })

    it("Interaction with fake alert", () => {
        fakeAlertsPage.callFakeAlert();
        fakeAlertsPage.DialogHeader.should('contain', 'I am a fake alert box!');
        fakeAlertsPage.confirmDialog();
        fakeAlertsPage.DialogBackground.should('have.length', 0);
    })

    it("Interaction with modal dialog", () => {
        fakeAlertsPage.callModalDialog();
        fakeAlertsPage.DialogHeader.should('contain', "I am a modal div!");
        fakeAlertsPage.clickOnDialogBack();
        fakeAlertsPage.DialogBackground.should('have.length', 0);
    })
})