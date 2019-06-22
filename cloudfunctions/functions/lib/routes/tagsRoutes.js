"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const TagService_1 = require("../services/TagService");
const Tag_1 = require("../entity/Tag");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new TagService_1.TagService();
const currentClass = Tag_1.Tag;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=tagsRoutes.js.map