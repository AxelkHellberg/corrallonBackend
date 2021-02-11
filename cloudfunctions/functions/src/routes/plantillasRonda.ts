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

router.post('/eliminarPlantillaRonda', async (req, res, next) => {

    try {
        getConnection().query("DELETE FROM "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda WHERE plantillaRondaId="+ req.body.plantillaRondaId);

        let r = await getConnection().query("DELETE FROM "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda WHERE id="+ req.body.plantillaRondaId);

        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/editarPlantillaRonda', async (req, res, next) => {

    try {
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda SET nombre='"+ req.body.nombre +"', descripcion='"+ req.body.descripcion +"' WHERE id="+ req.body.plantillaRondaId);

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

router.post('/eliminarTareasDePlantllaRonda', async (req, res, next) => {

    try {
         let r
         console.log(req.body)
         let cont = 0
         let connection = getConnection();

         r =  connection.query("DELETE FROM "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda WHERE plantillaRondaId="+req.body.idInsertado);

         cont+=1;
 
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

router.post('/traerPlantillaRondaCompleta', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT pr.id plantillaId, pr.nombre nombrePlantilla, pr.descripcion descripcionPlantilla, crpr.campoRondaId tareaId, crpr.tareaObligatoria,cr.nombre nombreTarea, cr.descripcion descripcionTarea, cr.valorMax, cr.valorMin, cr.valorNormal,cr.equipamientoId equipoId,e.nombre nombreEquipo,e.sistemaId,s.nombre nombreSistema,s.plantaId,p.nombre nombrePlanta, um.id unidadMedidaId, um.nombre nombreUnidadMedida FROM "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda pr INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda crpr ON pr.id = crpr.plantillaRondaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda cr ON cr.id = crpr.campoRondaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".equipamiento e ON e.id = cr.equipamientoId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".sistema s ON s.id = e.sistemaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".planta p ON p.id = s.plantaId INNER JOIN koa_develop.unidad_medida um ON um.id = cr.unidadMedidaId WHERE pr.id = " +req.body.plantillaId);

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})



module.exports = router;
