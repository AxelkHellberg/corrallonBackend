var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { SistemaService } from "../services/SistemaService";
import { Sistema } from "../entity/Sistema";
import { RondaService } from "../services/RondaService";
import { Ronda } from "../entity/Ronda";
import { ValorCampoRonda } from "../entity/ValorCampoRonda";
import { ValorCampoRondaService } from "../services/ValorCampoRondaService";
import { NotificacionFallaService } from "../services/NotificacionFallaService";
import { NotificacionFalla } from "../entity/NotificacionFalla";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
import { responseError } from "../components/apiHandler";
/******************************************** */
const service = new RondaService()
const currentClass = Ronda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

router.post('/:id/valores-fallas', async (req, res, next) => {
    console.log("CREANDO RONDAAAAAAAAAAAAAAAAAAAAA")
    let data = req.body
    let valorCampoRondaService: ValorCampoRondaService = new ValorCampoRondaService()
    let notificacionFallaService: NotificacionFallaService = new NotificacionFallaService()
    console.log("Creando ronda")
    for (let i: number = 0; i < data.length; i++) {
        try {
            if ("notificacionFalla" in data[i]) { //Si el valor del campo tiene una notificacion de falla asociada, la creamos 
                let falla: NotificacionFalla = new NotificacionFalla()
                Object.assign(falla, data[i]["notificacionFalla"])
                falla = await notificacionFallaService.save(falla)
                data[i]["notificacionFallaId"] = falla.id //Asignamos el id en la variable "data" que es la que devuelve el response
            }
            let valorCampoRonda: ValorCampoRonda = new ValorCampoRonda() //creada la falla, obtenemos el valor del campo
            Object.assign(valorCampoRonda, data[i])
            console.log(valorCampoRonda)
            valorCampoRonda.rondaId = req.params.id //obtenemos la guia de maniobra desde el url param
            valorCampoRonda = await valorCampoRondaService.save(valorCampoRonda)
            data[i]["id"] = valorCampoRonda.id //Asignamos el id del valor en la data a devolver
            data[i]["hasError"] = false //Si todo salio ok, devolvemos que no hay error
        } catch (e) {
            data[i]["hasError"] = true //Si algo falla devolvemos que hubo error
            data[i]["error"] = e //Indicamos cual fue el error
            if ("notificacionFallaId" in data[i]) { //Si se genero una notificacion de falla la borramos. Esto lo hacemos porque no usamos transaccion con rollbacks
                await notificacionFallaService.delete(data[i]["notificacionFallaId"])
                delete data[i]["notificacionFallaId"]
            }
        }
    }
    res.send(data)
    next()
});



module.exports = router;
