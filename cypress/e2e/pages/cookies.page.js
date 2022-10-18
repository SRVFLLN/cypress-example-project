const { BasePage } = require("./base.page");

const pageHeader = 'h1';

class CookiesPage extends BasePage {
    get PageHeader() {
        return this.getElement(pageHeader).text;
    }
}

module.exports = new CookiesPage();