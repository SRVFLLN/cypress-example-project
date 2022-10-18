const { BasePage } = require("./base.page");

const downloadFile = "#direct-download";

class DownloadFilePage extends BasePage {
    startFileDownloading() {
        this.getElement(downloadFile).click();
    }
}

module.exports = new DownloadFilePage();