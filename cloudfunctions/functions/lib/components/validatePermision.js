"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermissionReport = exports.hasPermissionEntity = void 0;
const UserService_1 = require("../services/UserService");
const Profile_1 = require("../entity/Profile");
const mapHTTPMethodDB = require("../config/mapHTTPMethodDB");
exports.hasPermissionEntity = function (userId, perfilId, url, method) {
    return __awaiter(this, void 0, void 0, function* () {
        if (perfilId == Profile_1.Profile.ID_ADMIN)
            return true;
        const userService = new UserService_1.UserService();
        console.log(userId, perfilId, url, mapHTTPMethodDB[method]);
        let hasPermission = yield userService.hasPermissionsEntity(userId, url, mapHTTPMethodDB[method]);
        console.log(hasPermission);
        return hasPermission;
    });
};
exports.hasPermissionReport = function (userId, perfilId, reportId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (perfilId == Profile_1.Profile.ID_ADMIN)
            return true;
        const userService = new UserService_1.UserService();
        console.log(userId, perfilId);
        let hasPermission = yield userService.hasPermissionsReport(userId, reportId);
        console.log(hasPermission);
        return hasPermission;
    });
};
//# sourceMappingURL=validatePermision.js.map