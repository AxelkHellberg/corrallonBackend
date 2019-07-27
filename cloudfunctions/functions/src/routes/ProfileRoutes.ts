import { addToGenericRoute } from './genericRoutes';
import { ProfileService } from '../services/ProfileService';
import { Profile } from '../entity/Profile';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ProfileService()
const currentClass = Profile
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;