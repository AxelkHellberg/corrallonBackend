"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const UserService_1 = require("../services/UserService");
const genericRoutes_1 = require("./genericRoutes");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new UserService_1.UserService();
const currentClass = User_1.User;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=usersRoutes.js.map