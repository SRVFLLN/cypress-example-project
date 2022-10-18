/// <reference types="Cypress" />

import AlertHandler from "./alert-handler";
import CookieHandler from "./cookies-handler";
import FrameHandler from "./frames-handler";

module.exports = class Browser {
    static _commandBasis = cy;

    static get CommandBasis() {
        return this._commandBasis;
    }

    static set CommandBasis(value) {
        this._commandBasis = value;
    }

    static get SwitchTo () {
        return {
            frame(frame) {
                Browser.CommandBasis = FrameHandler.getFrame(frame);
            },
            originalContent() {
                Browser.CommandBasis = cy;
            }
        }
    }

    static get AlertHandler() {
        return AlertHandler;
    }

    static get CookieHandler() {
        return CookieHandler;
    }
}