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
const apiHandler = require("../components/apiHandler");
exports.validatePermissionsReports = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (!("id" in req.body))
        throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.ID_MANDATORY, msg_1.Msg.ID_MANDATORY, 500);
    const us = new UserService_1.UserService();
    const hasPermissions = yield us.hasPermissionsReport(res.locals.jwtPayload.u, req.body.id);
    if (!hasPermissions) {
        apiHandler.responseError(res, new ErrorVDF_1.ErrorVDF(msg_1.Msg.UNAHUTORIZED, msg_1.Msg.UNAHUTORIZED, 401));
        return;
    }
    next();
});
//# sourceMappingURL=validatePermissionsReports.js.map