const pageInfo = require('../fixtures/pageInfo.json');
const alertPage = require('./pages/alerts.page');
const Browser = require('./utils/browser-utils');

describe('Alerts page', () => {
  beforeEach(() => {
    cy.openPage(pageInfo.alertsPage.locator, pageInfo.alertsPage.headerText);
  })

  it("should trigger alert with text", () => {
    alertPage.callAlert();
    Browser.AlertHandler.handleAlert((str)=>{expect(str).to.equal("I am an alert box!")})
  });

  it("should trigger a cancellable alert", () => {
    alertPage.callConfirm();
    Browser.AlertHandler.handleConfirm((str) => {expect(str).to.equal("I am a confirm alert");}, false);
    alertPage.ConfirmAnswer.should('equal', 'false')
    alertPage.ConfirmInfo.should('contain', 'You clicked Cancel')
  });

  it("should trigger prompt and handle the answer", () => {
    let string = (Math.random() + 1).toString(36).substring(7);
    Browser.AlertHandler.handlePrompt(string)
    alertPage.callPrompt();
    alertPage.PromptInfo.should('contain', string);
  })
})