var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { PlantillaRondaService } from "../services/PlnatillaRondaService";
import { responseError } from "../components/apiHandler";
import { Any, getConnection } from "typeorm";
import { PlantillaRonda } from "../entity/PlantillaRonda";

var later = require("later")
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")
/******************************************** */
const service = new PlantillaRondaService()
const currentClass = PlantillaRonda
/******************************************** */



module.exports = router;
