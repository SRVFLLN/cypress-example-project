const { BasePage } = require("./base.page");

const colorValue = '#_valuecolour';
const dateValue = '#_valuedate';
const localDateValue = '#_valuedatetime';
const emailValue = '#_valueemail';
const monthValue = '#_valuemonth';
const numberValue = '#_valuenumber';
const submitVaue = '#_valuesubmitbutton';

class HTML5FormResultPage extends BasePage {
    get colorValue() {
        return this.getElement(colorValue).text;
    }

    get dateValue() {
        return this.getElement(dateValue).text;
    }

    get localDateValue() {
        return this.getElement(localDateValue).text;
    }

    get emailValue() {
        return this.getElement(emailValue).text;
    }

    get monthValue() {
        return this.getElement(monthValue).text;
    }

    get numberValue() {
        return this.getElement(numberValue).text;
    }

    get submitVaue() {
        return this.getElement(submitVaue).text;
    }
}

module.exports = new HTML5FormResultPage();