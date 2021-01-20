var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { Horario } from "../entity/Horario";
import { HorarioService } from "../services/HorarioService";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
import { responseError } from "../components/apiHandler";

/******************************************** */
const service = new HorarioService()
const currentClass = Horario
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

router.post('/traerRondasDesbloqueadas', async (req, res, next) => {

    try {

        let r = await getConnection().query("SELECT r.id rondaId,h.horaInicio ,h.horaFin ,u.username, pr.nombre,h.fechaInicio as fecha,pr.id as plantillaId,r.estadoRondaId  FROM "+ GlobalVariable.DATA_BASE_NAME +".horario h INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".horario_persona hp ON h.id = hp.horarioId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".`user` u ON u.id = hp.userId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".ronda r ON r.id = h.plantillaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda pr ON r.plantillaRondaId = pr.id WHERE h.fechaInicio = CURDATE() and u.username ='"+ req.body.username+"'  and h.horaInicio <= DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR) and h.horaFin >= DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR)");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/traerRondasBloqueadas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT h.horaInicio ,h.horaFin ,u.username, pr.nombre,h.fechaInicio as fecha,r.estadoRondaId FROM "+ GlobalVariable.DATA_BASE_NAME +".horario h INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".horario_persona hp ON h.id = hp.horarioId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".`user` u ON u.id = hp.userId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".ronda r ON r.id = h.plantillaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda pr ON r.plantillaRondaId = pr.id WHERE h.fechaInicio = CURDATE() and u.username ='"+ req.body.username+"' and (h.horaInicio > DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR) or h.horaFin < DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR)) ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


router.post('/crearHorario', async (req, res, next) => {

    try {
        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".horario (tipoRecurrencia,fechaInicio,fechaFin,plantillaId,horaInicio,horaFin,dias) VALUES("+ req.body.tipoRecurrencia+",'"+ req.body.fechaInicio+"','"+ req.body.fechaFin+"',"+ req.body.rondaId+",'"+ req.body.horaInicio+"','"+ req.body.horaFin+"',"+ req.body.dias+")");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


module.exports = router;
