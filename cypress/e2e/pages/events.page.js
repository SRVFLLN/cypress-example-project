const { BasePage } = require("./base.page");

const blurTriggerButton = '#onblur';
const blurTriggerStatus = '#onblurstatus';
const clickTriggerButton = '#onclick';
const clickTriggerStatus = '#onclickstatus';
const contextTriggerButton = '#oncontextmenu';
const contextTriggerStatus = '#oncontextmenustatus';
const dbClickTriggerButton = '#ondoubleclick';
const dbClickTriggerStatus = '#ondoubleclickstatus';
const focusTriggerButton = '#onfocus';
const focusTriggerStatus = '#onfocusstatus';
const keyDownTriggerButton = '#onkeydown';
const keyDownTriggerStatus = '#onkeydownstatus';
const keyUpTriggerButton = '#onkeyup';
const keyUpTriggerStatus = '#onkeyupstatus';
const keyPressTriggerButton = '#onkeypress';
const keyPressTriggerStatus = '#onkeypressstatus';
const mouseOverTriggerButton = '#onmouseover';
const mouseOverTriggerStatus = '#onmouseoverstatus';
const mouseLeaveTriggerButton = '#onmouseleave';
const mouseLeaveTriggerStatus = '#onmouseleavestatus';
const mouseDownTriggerButton = '#onmousedown';
const mouseDownTriggerStatus = '#onmousedownstatus';

class EventPage extends BasePage {
    triggerBlur() {
        this.getElement(blurTriggerButton).focus();
        this.getElement(blurTriggerButton).blur();
    }

    get BlurStatus () {
        return this.getElement(blurTriggerStatus).text;
    }

    triggerClick() {
        this.getElement(clickTriggerButton).click();
    }

    get ClickStatus() {
        return this.getElement(clickTriggerStatus).text;
    }

    triggerContext() {
        this.getElement(contextTriggerButton).rightClick();
    }

    get ContextStatus() {
        return this.getElement(contextTriggerStatus).text;
    }

    triggerDoubleClick() {
        this.getElement(dbClickTriggerButton).doubleClick();
    }

    get DoubleClickStatus() {
        return this.getElement(dbClickTriggerStatus).text;
    }

    triggerFocus() {
        this.getElement(focusTriggerButton).focus();
    }

    get FocusStatus() {
        return this.getElement(focusTriggerStatus).text;
    }

    triggerKeyDown() {
        this.getElement(keyDownTriggerButton).trigger('keydown');
    }

    get KeyDownStatus() {
        return this.getElement(keyDownTriggerStatus).text;
    }

    triggerKeyUp() {
        this.getElement(keyUpTriggerButton).trigger('keyup');
    }

    get KeyUpStatus() {
        return this.getElement(keyUpTriggerStatus).text;
    }

    triggerKeyPress() {
        this.getElement(keyPressTriggerButton).type('{enter}}');
    }

    get KeyPressStatus() {
        return this.getElement(keyPressTriggerStatus).text;
    }

    triggerMouseOver() {
        this.getElement(mouseOverTriggerButton).trigger('mouseover');
    }

    get MouseOverStatus() {
        return this.getElement(mouseOverTriggerStatus).text;
    }

    triggerMouseLeave() {
        this.getElement(mouseLeaveTriggerButton).trigger('mouseleave');
    }

    get MouseLeaveStatus() {
        return this.getElement(mouseLeaveTriggerStatus).text;
    }

    triggerMouseDown() {
        this.getElement(mouseDownTriggerButton).trigger('mousedown');
    }

    get MouseDownStatus() {
        return this.getElement(mouseDownTriggerStatus).text;
    }
}

module.exports = new EventPage();