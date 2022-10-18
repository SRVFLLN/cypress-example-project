Cypress.Commands.add('openPage', (linkLocator, pageHeader) => {
    cy.visit("index.html");
    cy.get(linkLocator).click();      
    cy.contains("h1", pageHeader);
})