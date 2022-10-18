const { BasePage } = require("./base.page");

const callAlertButton = '#alertexamples';
const callConfirmButton = '#confirmexample';
const confirmAnswer = '#confirmreturn';
const confirmInfo = '#confirmexplanation';
const callPromptButton = '#promptexample';
const promptInfo = '#promptexplanation';

class AlertPage extends BasePage {

    callAlert() {
        this.getElement(callAlertButton).click();
    }

    callConfirm() {
        this.getElement(callConfirmButton).click();
    }

    get ConfirmAnswer() {
        return this.getElement(confirmAnswer).text;
    }

    get ConfirmInfo() {
        return this.getElement(confirmInfo).text;
    }

    callPrompt() {
        this.getElement(callPromptButton).click();
    }

    get PromptInfo() {
        return this.getElement(promptInfo).text;
    }
}

module.exports = new AlertPage();