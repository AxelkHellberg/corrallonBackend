import { addToGenericRoute } from './genericRoutes';
import { HistorialEstadoFallaService } from '../services/HistorialEstadoFallaService';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
import { getConnection } from 'typeorm';
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
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda SET obligatorioEquipo = 1 WHERE id=" +req.body.idTarea );


        console.log("DESC");
        console.log(req.body.descripcion)
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

module.exports = router;