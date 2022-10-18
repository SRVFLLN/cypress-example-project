const pageInfo = require('../fixtures/pageInfo.json');
const uploadPage = require('./pages/upload-file.page');

describe('Uploading file', () => {
    beforeEach(() => {
        cy.openPage(pageInfo.uploadPage.locator, pageInfo.uploadPage.headerText);
    });

    it('should upload correct file', () => {
        let name = ((Math.random() + 1).toString(36).substring(7)) + '.txt';
        uploadPage.sendFile(name);
        uploadPage.FileName.should('contain', name);
    });
})