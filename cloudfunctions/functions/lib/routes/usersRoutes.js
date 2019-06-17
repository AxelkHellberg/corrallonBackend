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
const User_1 = require("../entity/User");
const UserService_1 = require("../services/UserService");
var express = require('express');
var router = express.Router();
const apiHandler = require("../components/apiHandler");
const jwt = require("../components/jwt");
/******************************************** */
const service = new UserService_1.UserService();
const currentClass = User_1.User;
/******************************************** */
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    apiHandler.postHandlerGenericEntity(req, res, currentClass, service);
}));
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    apiHandler.getHandlerGenericEntity(req, res, currentClass, service);
}));
router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    apiHandler.getHandlerGenericEntity(req, res, currentClass, service);
}));
router.patch('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    apiHandler.updateHandlerGenericEntity(req, res, currentClass, service);
}));
module.exports = router;
//# sourceMappingURL=usersRoutes.js.map