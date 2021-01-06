////////////////////////////////////////////////////// estadofallasroutes

import { addToGenericRoute } from './genericRoutes';
import { EstadoFallaService } from '../services/EstadoFallaService';
import { EstadoFalla } from '../entity/EstadoFalla';
import { getConnection } from 'typeorm';
import { responseError } from '../components/apiHandler';
import { GlobalVariable } from '../global';
var express = require('express');
var router = express.Router();


var later = require("later")
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")
/******************************************** */
const service = new EstadoFallaService()
const currentClass = EstadoFalla
/******************************************** */

router = addToGenericRoute(router, currentClass, service)




module.exports = router;