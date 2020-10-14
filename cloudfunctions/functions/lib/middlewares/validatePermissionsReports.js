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
const Msg_1 = require("../msg/Msg");
const UserService_1 = require("../services/UserService");
const validatePermision_1 = require("../components/validatePermision");
const apiHandler = require("../components/apiHandler");
exports.validatePermissionsReports = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (!("id" in req.body)) {
        apiHandler.responseError(res, new ErrorVDF_1.ErrorVDF(Msg_1.Msg.ID_MANDATORY, Msg_1.Msg.ID_MANDATORY, 500));
        return;
    }
    const us = new UserService_1.UserService();
    res.locals.hasPermission = yield validatePermision_1.hasPermissionReport(res.locals.jwtPayload.u, res.locals.jwtPayload.p, req.body.id);
    console.log(res.locals.hasPermission);
    next();
});
//# sourceMappingURL=validatePermissionsReports.js.map