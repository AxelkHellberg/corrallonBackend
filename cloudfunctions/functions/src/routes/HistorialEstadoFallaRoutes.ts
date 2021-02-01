import { addToGenericRoute } from './genericRoutes';
import { HistorialEstadoFallaService } from '../services/HistorialEstadoFallaService';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
import { getConnection, getConnectionManager } from 'typeorm';
import { GlobalVariable } from '../global';
import { responseError } from '../components/apiHandler';
import { raw } from 'body-parser';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new HistorialEstadoFallaService()
const currentClass = HistorialEstadoFalla
/******************************************** */

router.get('/fallasGuiaManiobra', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcm.guiaManiobraId ,vcm.campoManiobraId , vcm.valor, vcm.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , gm.nombre as nombreGuiaManiobra, gm.plantillaGuiaManiobraId FROM "+ GlobalVariable.DATA_BASE_NAME +".notificacion_falla nf INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".valor_campo_maniobra vcm ON nf.id = vcm.notificacionFallaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".guia_maniobra gm ON gm.id = vcm.guiaManiobraId   ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.get('/fallasRondas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcr.campoRondaId ,vcr.rondaId , vcr.valor , vcr.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , cr.nombre as nombreRonda, cr.equipamientoId FROM "+ GlobalVariable.DATA_BASE_NAME +".notificacion_falla nf INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".valor_campo_ronda vcr ON nf.id = vcr.notificacionFallaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda cr ON cr.id = vcr.campoRondaId  ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.get('/traerTareas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT p.nombre as Planta,s.nombre as Sistema,e.nombre Equipo,cr.nombre NombreTarea,cr.descripcion Descripcion,um.nombre UnidadMedida,cr.id as idTarea FROM "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda cr INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".equipamiento e ON cr.equipamientoId = e.id INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".sistema s ON e.sistemaId = s.id INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".planta p ON p.id = s.plantaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".unidad_medida um ON um.id = cr.unidadMedidaId ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/crearTarea', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda (createdAt,updateAt,descripcion,nombre,valorNormal,valorMin,valorMax,equipamientoId,tipoCampoRondaId,unidadMedidaId,funcionamientoSistema,obligatorioSistema,funcionamientoEquipo,obligatorioEquipo) VALUES (NOW(),NOW(),'"+ req.body.descripcion +"','"+ req.body.nombre +"','"+ req.body.valorNormal +"','"+ req.body.valorMin +"','"+ req.body.valorMax +"',"+ req.body.equipamientoId +","+ req.body.tipoCampoRondaId +","+ req.body.unidadMedidaId +",1,0,1,0)");


        console.log("DESC");
        console.log(req.body.descripcion)
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/cambiarObligatorio', async (req, res, next) => {

    try {
        let cont = 0
        let r

        let connection = getConnection()
        console.log("connecion:")
        console.log(connection)
        req.body.idTareaData.forEach(element => {
            r = connection.query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda SET tareaObligatoria = 1 WHERE campoRondaId=" +req.body.idTareaData[cont] + " and plantillaRondaId=" + req.body.idPlantilla  );
            console.log(req.body.idTareaData[cont])
            cont += 1
        })
            console.log(r);
            console.log("STATUS CODE:")
            console.log(res.statusCode)
           res.status(200).send();


        

        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/traerTareasCompleto', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT p.nombre plantaNombre,p.id plantaId, s.nombre sistemaNombre,s.id sistemaId, e.nombre nombreEquipo,e.id equipoId, cr.nombre nombreTarea,cr.id tareaId,cr.tipoCampoRondaId tipoTareaId,tcr.nombre tipoTareaNombre,cr.unidadMedidaId unidadDeMedidaId,cr.descripcion descripcionTarea,cr.tipoCampoRondaId tipoTareaId,crpr.plantillaRondaId, t.nombre nombreTag, t.id tagId, cr.valorNormal,cr.valorMin ,cr.valorMax,ta.completada,ta.especificacion,crpr.tareaObligatoria, r.id rondaId,r.detalle FROM "+ GlobalVariable.DATA_BASE_NAME +".planta p INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".sistema s ON p.id = s.plantaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".equipamiento e ON e.sistemaId = s.id INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda cr ON e.id = cr.equipamientoId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda crpr ON cr.id = crpr.campoRondaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".tipo_campo_ronda tcr ON tcr.id = cr.tipoCampoRondaId  INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".tag t ON t.id = e.tagId   INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".ronda r ON r.plantillaRondaId = crpr.plantillaRondaId  INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".tarea_asignada ta ON r.id = ta.rondaId and ta.tareaId = cr.id WHERE ta.rondaId = "+ req.body.rondaId +" GROUP BY p.nombre,p.id, s.nombre,s.id, e.nombre,e.id , cr.nombre,cr.id,cr.tipoCampoRondaId ,tcr.nombre,cr.unidadMedidaId,  crpr.plantillaRondaId, t.nombre, t.id ,cr.descripcion ,cr.tipoCampoRondaId, cr.valorNormal ,cr.valorMin ,cr.valorMax,ta.completada,ta.especificacion,crpr.tareaObligatoria, r.id,r.detalle");


        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/cambiarEspecificacion', async (req, res, next) => {

    try {
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda r SET especificacion = '" +req.body.especificacion+ "' WHERE r.plantillaRondaId =" +req.body.idPlantillaRonda+ "  AND r.campoRondaId =" +req.body.idTarea+ " ");


        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/cambiarDetalleRonda', async (req, res, next) => {

    try {
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".ronda r SET detalle = '" +req.body.detalle+ "' WHERE r.id =" +req.body.rondaId );


        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})


router.post('/finalizarTarea', async (req, res, next) => {

    try {
        await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".valor_campo_ronda (valor,valorNormal,rondaId,campoRondaId,especificacion) VALUES(" +req.body.valor+ "," +req.body.valorNormal+ "," +req.body.rondaId+ "," +req.body.tareaId+ ",'" +req.body.especificacion+ "')");

        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".tarea_asignada SET completada = 1 WHERE tareaId = " +req.body.tareaId+ " AND rondaId = " +req.body.rondaId+ "");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/traerIdTareas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT crpr.campoRondaId FROM "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda crpr WHERE crpr.plantillaRondaId =" +req.body.plantillaRondaId)

         console.log(r)
       res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/finalizarRonda', async (req, res, next) => {

    try {
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".ronda SET estadoRondaId = 1 WHERE id = " +req.body.rondaId)

        //poner console log y ver que muestra req.body.rondaId hay error que dice que esta undefined
        console.log(req.body.rondaId)
         console.log(r)
       res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/asignarTareassss', async (req, res, next) => {

    try {
        let cont = 0
        let r
        console.log("PRIMER ID DE TAREA ANTES DE FOR")
        console.log(req.body.tareasId[cont].campoRondaId)
        console.log("REQ BODY")
        console.log(req.body)
        console.log("RONDA ID:")
        console.log(req.body.rondaId)
        let connection = getConnection()
        req.body.tareasId.forEach(element => {
        r = connection.query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".tarea_asignada (rondaId,tareaId,completada,especificacion,horarioId) VALUES(" +req.body.rondaId+ "," +element.campoRondaId + ",0,'Sin especificacion'," +req.body.horarioId+ ")" );
        
        console.log(req.body.tareasId[cont].campoRondaId)
        cont += 1
        })

           res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/crearHorarioUsuario', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".horario_persona (userId,horarioId) VALUES("+ req.body.userId+","+ req.body.horarioId+")");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

module.exports = router;