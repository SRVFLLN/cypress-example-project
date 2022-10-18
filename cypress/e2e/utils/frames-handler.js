/// <reference types="Cypress" />

module.exports = class FrameHandler {
    static getFrame(frameLocator) {
        return cy.get(frameLocator).its('0.contentDocument').its('body').then(cy.wrap);
    }
}