const pageInfo = require('../fixtures/pageInfo.json');
const eventPage = require('./pages/events.page');

describe("JavaScript events", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.eventPage.locator, pageInfo.eventPage.headerText);
    })

    it("Blur trigger", () => {
        eventPage.triggerBlur();
        eventPage.BlurStatus.should('contain', 'Event Triggered');
    })

    it("Click trigger", () => {
        eventPage.triggerClick()
        eventPage.ClickStatus.should('contain', 'Event Triggered');
    });

    it("ContextMenu trigger", () => {
        eventPage.triggerContext()
        eventPage.ContextStatus.should('contain', 'Event Triggered');
    });

    it("Double click trigger", () => {
        eventPage.triggerDoubleClick();
        eventPage.DoubleClickStatus.should('contain', 'Event Triggered');
    });

    it("Focus trigger", () => {
        eventPage.triggerFocus();
        eventPage.FocusStatus.should('contain', 'Event Triggered');
    });

    it("Key down trigger", () => {
        eventPage.triggerKeyDown();
        eventPage.KeyDownStatus.should('contain', 'Event Triggered');
    });

    it("Key Up trigger", () => {
        eventPage.triggerKeyUp();
        eventPage.KeyUpStatus.should('contain', 'Event Triggered');
    });

    it("Key Press trigger", () => {
        eventPage.triggerKeyPress();
        eventPage.KeyPressStatus.should('contain', 'Event Triggered');
    });

    it("Mouse Over trigger", () => {
        eventPage.triggerMouseOver();
        eventPage.MouseOverStatus.should('contain', 'Event Triggered');
    });

    it("Mouse Leave trigger", () => {
        eventPage.triggerMouseLeave();
        eventPage.MouseLeaveStatus.should('contain', 'Event Triggered');
    });

    it("Mouse Down trigger", () => {
        eventPage.triggerMouseDown();
        eventPage.MouseDownStatus.should('contain', 'Event Triggered');
    });
});