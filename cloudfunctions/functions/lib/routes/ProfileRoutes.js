"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const ProfileService_1 = require("../services/ProfileService");
const Profile_1 = require("../entity/Profile");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new ProfileService_1.ProfileService();
const currentClass = Profile_1.Profile;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=ProfileRoutes.js.map