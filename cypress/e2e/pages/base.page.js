/// <reference types="Cypress" />
const Element = require('../pages/base.element');
const Browser = require('../utils/browser-utils');

exports.BasePage = class BasePage {
    navigate() {
        cy.visit("");
    }

    /**
     * Returns DOM element
     * 
     * @param {string} elLocator Locator of element in XPath or CSS format.
     * @param {any} frame element, if command should be execute inside frame. Default = null;
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} DOM element.
     */
    getElement(elLocator) {
        return elLocator.startsWith('//') ? 
        new Element(Browser.CommandBasis.xpath(elLocator)) : 
        new Element(Browser.CommandBasis.get(elLocator));
    }

    getElementByText(elText) {
        return new Element(Browser.CommandBasis.contains(elText));
    }

    reload() {
        cy.reload();
    }
}