import { addToGenericRoute } from './genericRoutes';
import { EstadoFallaService } from '../services/EstadoFallaService';
import { EstadoFalla } from '../entity/EstadoFalla';
import { getConnection } from 'typeorm';
import { responseError } from '../components/apiHandler';
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
        let r = await getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcm.guiaManiobraId ,vcm.campoManiobraId , vcm.valor, vcm.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , gm.nombre as nombreGuiaManiobra, gm.plantillaGuiaManiobraId FROM koa_develop.notificacion_falla nf INNER JOIN koa_develop.valor_campo_maniobra vcm ON nf.id = vcm.notificacionFallaId INNER JOIN koa_develop.estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN koa_develop.guia_maniobra gm ON gm.id = vcm.guiaManiobraId   ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.get('/fallasRondas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcr.campoRondaId ,vcr.rondaId , vcr.valor , vcr.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , cr.nombre as nombreRonda, cr.SistemaId, cr.equipamientoId FROM koa_develop.notificacion_falla nf INNER JOIN koa_develop.valor_campo_ronda vcr ON nf.id = vcr.notificacionFallaId INNER JOIN koa_develop.estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN koa_develop.campo_ronda cr ON cr.id = vcr.campoRondaId  ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


module.exports = router;