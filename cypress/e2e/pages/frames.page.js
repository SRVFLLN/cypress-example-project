const { BasePage } = require("./base.page");
const Browser = require('../utils/browser-utils');

const listFrame = '#thedynamichtml';
const frameListElementText = 'iFrame List Item 40';
const headerFrame = '#theheaderhtml';
const frameLinkText = 'Index';
const pageHeader = 'h1';

class FramePage extends BasePage {
    get FrameListElement() {
        Browser.SwitchTo.frame(listFrame);
        return this.getElementByText(frameListElementText).element;
    }

    //this function visits the page through href of link, cause if click directly cypress returns to self main page
    clickOnFrameLinkText() {
        Browser.SwitchTo.frame(headerFrame);
        this.getElementByText(frameLinkText).element.invoke('prop', 'href').then(link=>{
            cy.visit(link);
        });
    }

    get PageHeader() {
        return this.getElement(pageHeader).text;
    }
}

module.exports = new FramePage();