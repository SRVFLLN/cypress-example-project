const { BasePage } = require("./base.page");

const callFakeAlertButton = "#fakealert";
const callModalDialogButton = "#modaldialog"
const dialogheader = "#dialog-text";
const dialogOkButton = "#dialog-ok";
const dialogBackground = ".faded-background.active";

class FakeAlertsPage extends BasePage {
    callFakeAlert() {
        this.getElement(callFakeAlertButton).click();
    }

    callModalDialog() {
        this.getElement(callModalDialogButton).click();
    }

    get DialogHeader() {
        return this.getElement(dialogheader).text;
    }

    confirmDialog() {
        this.getElement(dialogOkButton).click();
    }

    clickOnDialogBack() {
        this.getElement(dialogBackground).click({force:true});
    }

    get DialogBackground() {
        return this.getElement("body").findDescendents(dialogBackground);
    }
}

module.exports = new FakeAlertsPage();