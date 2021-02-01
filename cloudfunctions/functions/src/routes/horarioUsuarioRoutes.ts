var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { HorarioPersona } from "../entity/HorarioPersona";
import { HorarioUsuarioService } from "../services/HorarioUsuarioService";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
import { responseError } from "../components/apiHandler";

/******************************************** */
const service = new HorarioUsuarioService()
const currentClass = HorarioPersona
/******************************************** */

router = addToGenericRoute(router, currentClass, service)


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
