const pageInfo = require('../fixtures/pageInfo.json');
const downloadPage = require('./pages/download-file.page');

describe("Handled download file", () => {
    beforeEach(() => {
        cy.openPage(pageInfo.downloadPage.locator, pageInfo.downloadPage.headerText);
    })

    it('button should trigger download file', () => {
        downloadPage.startFileDownloading();
        cy.readFile('./cypress/downloads/textfile.txt').should('exist')
        .and('contain', pageInfo.downloadPage.fileContent)
        .and(buffer => expect(buffer.length).to.be.eq(pageInfo.downloadPage.fileSizeKB)); 
    });
})