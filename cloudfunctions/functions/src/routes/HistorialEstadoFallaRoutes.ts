import { addToGenericRoute } from './genericRoutes';
import { HistorialEstadoFallaService } from '../services/HistorialEstadoFallaService';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
import { getConnection, getConnectionManager } from 'typeorm';
import { GlobalVariable } from '../global';
import { responseError } from '../components/apiHandler';
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
        let r = await getConnection().query("SELECT p.nombre plantaNombre,p.id plantaId, s.nombre sistemaNombre,s.id sistemaId, e.nombre nombreEquipo,e.id equipoId, cr.nombre nombreTarea,cr.id tareaId,cr.tipoCampoRondaId tipoTareaId,tcr.nombre tipoTareaNombre,cr.unidadMedidaId unidadDeMedidaId,cr.descripcion descripcionTarea,cr.tipoCampoRondaId tipoTareaId,crpr.plantillaRondaId, t.nombre nombreTag, t.id tagId, cr.valorNormal ,cr.valorMin ,cr.valorMax,crpr.completada,crpr.especificacion,crpr.tareaObligatoria, r.id rondaId  FROM "+ GlobalVariable.DATA_BASE_NAME +".planta p INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".sistema s ON p.id = s.plantaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".equipamiento e ON e.sistemaId = s.id INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda cr ON e.id = cr.equipamientoId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda crpr ON cr.id = crpr.campoRondaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".tipo_campo_ronda tcr ON tcr.id = cr.tipoCampoRondaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".tag t ON t.id = e.tagId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".ronda r ON r.plantillaRondaId = crpr.plantillaRondaId WHERE crpr.plantillaRondaId =" +req.body.idPlantillaRonda+ " GROUP BY p.nombre,p.id, s.nombre,s.id, e.nombre,e.id , cr.nombre,cr.id,cr.tipoCampoRondaId ,tcr.nombre,cr.unidadMedidaId, crpr.plantillaRondaId, t.nombre, t.id ,cr.descripcion ,cr.tipoCampoRondaId, cr.valorNormal ,cr.valorMin ,cr.valorMax,crpr.completada,crpr.especificacion,crpr.tareaObligatoria, r.id ");


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


router.post('/finalizarTarea', async (req, res, next) => {

    try {
        await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".valor_campo_ronda (valor,valorNormal,rondaId,campoRondaId,especificacion) VALUES(" +req.body.valor+ "," +req.body.valorNormal+ "," +req.body.rondaId+ "," +req.body.tareaId+ ",'" +req.body.especificacion+ "')");

        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda SET completada = 1 WHERE campoRondaId = " +req.body.tareaId+ " AND plantillaRondaId = " +req.body.plantillaRondaId+ "");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

router.post('/traerIdTareas', async (req, res, next) => {

    try {
        let rondaId = getConnection().query("SELECT MAX(id) as rondaId FROM "+ GlobalVariable.DATA_BASE_NAME +".ronda");

        let r = await getConnection().query("SELECT crpr.campoRondaId FROM "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda_plantilla_ronda crpr WHERE crpr.plantillaRondaId =" +req.body.plantillaRondaId);



        res.status(200).send(rondaId);
        
    } catch (e) {
        await responseError(res, e)


    }
})

module.exports = router;