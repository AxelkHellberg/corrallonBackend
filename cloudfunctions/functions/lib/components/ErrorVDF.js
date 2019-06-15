"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorVDF extends Error {
    constructor(userMessage, internalMessage, responseCode = 500) {
        super(userMessage);
        this.internalMessage = internalMessage;
        this.userMessage = userMessage;
        this.responseCode = responseCode;
    }
}
exports.ErrorVDF = ErrorVDF;
//# sourceMappingURL=ErrorVDF.js.map