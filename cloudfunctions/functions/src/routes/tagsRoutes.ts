import { addToGenericRoute } from "./genericRoutes";
import { TagService } from "../services/TagService";
import { Tag } from "../entity/Tag";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TagService()
const currentClass = Tag
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
