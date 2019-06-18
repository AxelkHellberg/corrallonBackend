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
const jwt = require("../components/jwt");
const apiHandler = require("../components/apiHandler");
exports.checkJwt = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (res.locals.publicService) {
        next();
        return;
    }
    //Get the jwt token from the head
    const authHead = req.headers.authorization;
    if (!authHead) {
        yield apiHandler.responseError(res, new ErrorVDF_1.ErrorVDF(msg_1.Msg.NOT_AUTHENTICATION_HEADER, msg_1.Msg.NOT_AUTHENTICATION_HEADER, 403));
        return;
    }
    let splitAuthHead = authHead.split(" ");
    if (splitAuthHead[0] != "Bearer") {
        yield apiHandler.responseError(res, new ErrorVDF_1.ErrorVDF(msg_1.Msg.AUTHENTICATION_METHOD_NOT_ALLOW, msg_1.Msg.AUTHENTICATION_METHOD_NOT_ALLOW, 403));
        return;
    }
    try {
        const jwtPayload = jwt.readAccessToken(splitAuthHead[1]);
        const newToken = jwt.createNewAccessToken(jwtPayload);
        res.setHeader("accessToken", newToken);
        res.locals.jwtPayload = jwtPayload;
        next();
    }
    catch (e) {
        yield apiHandler.responseError(res, e);
    }
    return;
});
//# sourceMappingURL=checkJwt.js.map