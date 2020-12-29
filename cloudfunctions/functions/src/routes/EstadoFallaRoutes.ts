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

router.get('/fallasGuiaManiobra', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcm.guiaManiobraId ,vcm.campoManiobraId , vcm.valor, vcm.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , gm.nombre as nombreGuiaManiobra, gm.plantillaGuiaManiobraId FROM "+ GlobalVariable.DATA_BASE_NAME +".notificacion_falla nf INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".valor_campo_maniobra vcm ON nf.id = vcm.notificacionFallaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".guia_maniobra gm ON gm.id = vcm.guiaManiobraId   ");

        console.log("res Pasando2");
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


module.exports = router;