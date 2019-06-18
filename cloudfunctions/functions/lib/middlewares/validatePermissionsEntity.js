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
const utils_1 = require("../components/utils");
const validatePermision_1 = require("../components/validatePermision");
const mapHTTPMethodDB = require("../config/mapHTTPMethodDB");
exports.validatePermissionsEntity = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (res.locals.publicService) {
        next();
        return;
    }
    console.log("AAAAAAAAAA");
    let newUrl = utils_1.normalizeUrl(req.originalUrl);
    //Get the jwt token from the head
    res.locals.hasPermission = yield validatePermision_1.hasPermissionEntity(res.locals.jwtPayload.u, res.locals.jwtPayload.p, newUrl, req.method);
    next();
});
//# sourceMappingURL=validatePermissionsEntity.js.map