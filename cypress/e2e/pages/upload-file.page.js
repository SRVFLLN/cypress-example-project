const { BasePage } = require("./base.page");

const fileInput = '#fileinput';
const sendFileButton = '[type="submit"]';
const fileName = '#uploadedfilename';

class UploadFilePage extends BasePage {
    sendFile(fileName) {
        this.getElement(fileInput).sendNewFile(fileName);
        this.getElement(sendFileButton).click();
    }

    get FileName() {
        return this.getElement(fileName).text;
    }
}

module.exports = new UploadFilePage();