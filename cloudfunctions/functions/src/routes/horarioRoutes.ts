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

router.post('/traerRondasHoyPorUsuario', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT h.horaInicio ,h.horaFin ,u.username, pr.nombre,h.fechaInicio as fecha FROM "+ GlobalVariable.DATA_BASE_NAME +".horario h INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".horario_persona hp ON h.id = hp.horarioId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".`user` u ON u.id = hp.userId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".plantilla_ronda pr ON h.plantillaId = pr.id WHERE h.fechaInicio = CURDATE() and u.username ='"+ req.body.username+"'");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

module.exports = router;
