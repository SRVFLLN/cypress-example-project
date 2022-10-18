/// <reference types="Cypress" />

module.exports = class CookieHandler {
    static setCookie(cookieName, cookieValue) {
        cy.setCookie(cookieName, cookieValue);
    }

    static getAllCookies() {
        return cy.getCookies();
    }

    static getSpecificCookie(cookieName) {
        return cy.getCookie(cookieName);
    }
}