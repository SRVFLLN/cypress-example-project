const { BasePage } = require("./base.page");

const pageHeader = "h1";

class UARedirectPage extends BasePage {
    setUserAgent() {
        cy.visit('redirect/user-agent-redirect-test', {
            headers: {'user-agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'   
            }
          });
    }

    get pageHeader() {
        return this.getElement(pageHeader).text;
    }
}

module.exports = new UARedirectPage();