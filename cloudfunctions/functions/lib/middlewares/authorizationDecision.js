"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
const apiHandler = require("../components/apiHandler");
exports.authorizationDecision = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(".............");
    console.log(res.locals.publicService != true);
    console.log(!res.locals.hasPermission);
    console.log(".............");
    if (res.locals.publicService != true && !res.locals.hasPermission) {
        if (!("errorVDF" in res.locals))
            apiHandler.responseError(res, new ErrorVDF_1.ErrorVDF(msg_1.Msg.UNAHUTORIZED, msg_1.Msg.UNAHUTORIZED, 401));
        else
            apiHandler.responseError(res, res.locals.errorVDF);
        return;
    }
    next();
});
//# sourceMappingURL=authorizationDecision.js.map