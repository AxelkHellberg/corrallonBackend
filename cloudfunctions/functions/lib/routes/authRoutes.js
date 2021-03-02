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
const UserService_1 = require("../services/UserService");
const apiHandler_1 = require("../components/apiHandler");
const typeorm_1 = require("typeorm");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************************************** */
const service = new UserService_1.UserService();
/******************************************** */
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let user = yield service.login(req.body.username, req.body.password);
        let accessToken = jwt.createAccessToken(user);
        res.send({ accessToken });
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/decodeToken', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(jwt.readAccessToken(req.body.accessToken));
}));
router.post('/loginSinVerificacion', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT * FROM users WHERE LoginName='" + req.body.username + "' and Password=" + req.body.password);
        let accessToken = jwt.createAccessToken(req.body.username, req.body.password);
        res.send({ accessToken });
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/loginValidacion', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT * FROM users WHERE LoginName='" + req.body.username + "' and Password=" + req.body.password);
        res.send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=authRoutes.js.map