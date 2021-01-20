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
         let r
         console.log(req.body)
         let cont = 0
         let connection = getConnection();
         req.body.idTareaData.forEach( element => {
            r =  connection.query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda (campoRondaId,plantillaRondaId) VALUES("+ req.body.idTareaData[cont] +","+ req.body.idInsertado +")");
            console.log(req.body.idTareaData[cont])
            cont+=1;
            })
        console.log("STATUS CODE:")
        console.log(res.statusCode)
        res.status(200).send();


    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/CrearRondaNuevo', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".ronda (userId,estadoRondaId,plantillaRondaId) VALUES(" +req.body.userId+ ",2," +req.body.plantillaRondaId+ ")");




        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/traerPlantillasRondas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT pr.id,pr.nombre ,pr.funcionamientoEquipo,pr.funcionamientoSistema ,pr.obligatorioEquipo ,pr.obligatorioSistema ,pr.createdAt ,pr.updateAt ,pr.horarios FROM "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda pr  ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


module.exports = router;
