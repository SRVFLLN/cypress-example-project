/// <reference types="Cypress" />

class BaseElement {
    _element;

    constructor(element) {
        this._element = element;
    }

    get element() {
        return this._element;
    }

    /**
     * Click on element
     * @param {object} options Pass in an options object to change the default behavior of .click().
     * @param {*} frame Frame element, if command should be execute inside frame.
    */
    click(options = null) {
        this._element.click(options);
    }
    
    doubleClick() {
        this._element.dblclick();
    }
    
    rightClick() {
        this._element.rightclick();
    }
    
    /**
     * Click on element by coords
     * @param {number} x The distance in pixels from the element's left to issue the click.
     * @param {number} y The distance in pixels from the element's top to issue the click.
    * @param {*} frame Frame element, if command should be execute inside frame.
     */
    clickOnByCoord(x, y) {
        this._element.click(x, y)
    }
    
    blur() {
        this._element.blur();
    }
    
    focus() {
        this._element.focus();
    }
    
    hover() {
        this._element.parent().realHover();
        this._element.realHover();
    }
    
    show() {
        this._element.invoke("show");
    }
    
    trigger(eventName) {
        this._element.trigger(eventName);
    }
    
    type(textToType) {
        this._element.type('{selectall}{backspace}').type(textToType);
    }
    
    check(value = null) {
        value ? this._element.check(value) : this._element.check();
    }
    
    checkWithOption(option) {
        this._element.check(option);
    }
    
    get text() {
        return this._element.invoke('text');
    }
    
    getAttribute(attributeName) {
        return this._element.invoke('attr', attributeName);
    }

    setValue(value) {
        this._element.invoke('val', value);
    }
    
    scrollTo() {
        this._element.scrollIntoView();
    }
    
    sendNewFile(fileName) {
        this._element.selectFile({
            fileName: fileName,
            contents: Cypress.Buffer.from("Test text in file")
        });
    }
    
    findDescendents(descendentLocator) {
        return this._element.find(descendentLocator);
    }
}

module.exports = BaseElement;