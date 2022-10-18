const { BasePage } = require("./base.page");
const formData = require('../../fixtures/html5-form.json');

const colourInput = '#colour-picker';
const dateInput = '#date-picker';
const localDateInput = '#date-time-picker';
const emailInput = '#email-field';
const monthInput = '#month-field';
const numberInput = '#number-field';
const submitButton = '[type="submit"]'

class HTML5FormPage extends BasePage {
    fillForm() {
        this.getElement(colourInput).setValue(formData.colour);
        this.getElement(dateInput).setValue(formData.date);
        this.getElement(localDateInput).setValue(formData.localDate);
        this.getElement(emailInput).type(formData.email);
        this.getElement(monthInput).setValue(formData.month);
        this.getElement(numberInput).type(formData.number);
        this.getElement(submitButton).click();
    }
}

module.exports = new HTML5FormPage();