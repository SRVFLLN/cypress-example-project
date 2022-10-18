const { BasePage } = require("./base.page");

const pageHeader = 'h1';
const textUnderHover = "#hoverparaeffect";
const divUnderHover = '.secret';
const linkUnderHover = '#hoverlink';

class HoverPage extends BasePage {
    showTextUnderHover() {
        this.getElement(textUnderHover).show();
    }

    get TextUnderHover() {
        return this.getElement(textUnderHover).element;
    }

    get PageHeader() {
        return this.getElement(pageHeader).text;
    }

    showDivUnderHover() {
        this.getElement(divUnderHover).show();
    }

    clickOnLinkUnderHover() {
        this.getElement(linkUnderHover).click();
    }
}

module.exports = new HoverPage();