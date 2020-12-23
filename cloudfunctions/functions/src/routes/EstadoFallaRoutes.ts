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
        let r = await getConnection().query("SELECT * FROM koa_develop.notificacion_falla nf INNER JOIN koa_develop.valor_campo_maniobra vcm ON nf.id = vcm.notificacionFallaId");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.get('/fallasRondas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT * FROM koa_develop.notificacion_falla nf INNER JOIN koa_develop.valor_campo_ronda vcr ON nf.id = vcr.notificacionFallaId ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


module.exports = router;