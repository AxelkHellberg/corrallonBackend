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
const UserService_1 = require("../services/UserService");
const apiHandler_1 = require("../components/apiHandler");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************************************** */
const service = new UserService_1.UserService();
/******************************************** */
router.post('/login', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let user = yield service.login(req.body.username, req.body.password);
        let accessToken = jwt.createAccessToken(user);
        res.send({ accessToken });
    }
    catch (e) {
        apiHandler_1.responseError(res, e);
    }
}));
router.post('/decodeToken', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    res.send(jwt.readAccessToken(req.body.accessToken));
}));
module.exports = router;
//# sourceMappingURL=authRoutes.js.map