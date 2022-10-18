const { BasePage } = require("./base.page");

const buttonSelector = '#button0';
const waitMessage = '#waitmessage';
const buttonsMessage = '#buttonmessage';

class FirstDinamicButtonsPage extends BasePage {
    clickOnButton(buttonIndex) {
        this.getElement(buttonSelector+buttonIndex).click();
    }

    get WaitMessage() {
        return this.getElement(waitMessage).text;
    }

    get ButtonsMessage() {
        return this.getElement(buttonsMessage).text;
    }
}

module.exports = new FirstDinamicButtonsPage();