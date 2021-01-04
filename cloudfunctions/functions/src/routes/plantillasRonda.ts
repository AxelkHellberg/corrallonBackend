var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { PlantillaRondaService } from "../services/PlnatillaRondaService";
import { responseError } from "../components/apiHandler";
import { Any, getConnection } from "typeorm";
import { PlantillaRonda } from "../entity/PlantillaRonda";
import { GlobalVariable } from "../global";

var later = require("later")
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")
/******************************************** */
const service = new PlantillaRondaService()
const currentClass = PlantillaRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

router.post('/crearPlantillaRonda', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda (nombre,funcionamientoSistema,obligatorioSistema,funcionamientoEquipo,obligatorioEquipo,descripcion)VALUES('"+ req.body.nombre +"',1,0,1,0,'"+ req.body.descripcion +"')");

        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/asociarTareasEnRonda', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda (campoRondaId,plantillaRondaId) VALUES("+ req.body.idTarea +","+ req.body.idInsertado +")");
        
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

module.exports = router;
