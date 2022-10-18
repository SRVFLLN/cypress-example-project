/// <reference types="Cypress" />

module.exports = class AlertHandler {
    static handleAlert(handler) {
        cy.on('window:alert', (str) => {
            handler(str);
        });
    }

    static handleConfirm(handler, answer = true) {
        cy.on("window:confirm", (str)=> {
            handler(str);
            return answer;
        });
    }

    static handlePrompt(textToSend) {
        cy.window().then(win => {
            cy.stub(win, "prompt").returns(textToSend);
        })
    }
}

