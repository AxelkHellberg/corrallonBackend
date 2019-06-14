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
const UserService_1 = require("../services/UserService");
const jwt = require("../components/jwt");
const apiHandler = require("../components/apiHandler");
const mapHTTPMethodDB = require("../config/mapHTTPMethodDB");
exports.validatePermissions = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    //Get the jwt token from the head
    let newUrl = normalizeUrl(req.originalUrl);
    console.log(newUrl);
    console.log(newUrl, res.locals.jwtPayload.u, mapHTTPMethodDB[req.method]);
    const userService = new UserService_1.UserService();
    let hasPermission = yield userService.hasPermissions(res.locals.jwtPayload.u, newUrl, mapHTTPMethodDB[req.method]);
    if (!hasPermission) {
        apiHandler.responseError(res, new ErrorVDF_1.ErrorVDF(msg_1.Msg.UNAHUTORIZED, msg_1.Msg.UNAHUTORIZED, 401));
        return;
    }
    next();
});
function normalizeUrl(url) {
    console.log(url);
    let newUrl = url.split("?")[0];
    if (newUrl.slice(-1) != "/")
        newUrl = newUrl + "/";
    return newUrl;
}
//# sourceMappingURL=validatePermissions.js.map