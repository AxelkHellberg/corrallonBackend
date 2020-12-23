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

router.post('/crearHorario', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO koa_develop.horario (createdAt,updateAt,tipoRecurrencia,fechaInicio,fechaFin,plantillaId,horaInicio,horaFin,dias) VALUES("+req.fechaInicio+","+req.fechaFin+","+req.tipoRecurrencia+","+req.fechaInicio+","+req.fechaFin+","+req.plantillaId+","+req.horaInicio+","+req.horaFin+","+req.dias+") INSERT INTO koa_develop.horario_persona (createdAt,updateAt,userId,horarioId) VALUES("+req.createdAt+","+req.updateAt+","+req.userId+",select last_insert_id())");

        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


module.exports = router;
