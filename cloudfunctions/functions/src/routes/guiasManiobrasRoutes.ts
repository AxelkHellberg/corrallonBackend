var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { GuiaManiobra } from "../entity/GuiaManiobra";
import { GuiaManiobraService } from "../services/GuiaManiobraService";
import { ValorCampoManiobraService } from "../services/ValorCampoManiobraService";
import { NotificacionFalla } from "../entity/NotificacionFalla";
import { ValorCampoManiobra } from "../entity/ValorCampoManiobra";
import { NotificacionFallaService } from "../services/NotificacionFallaService";

/******************************************** */
const service = new GuiaManiobraService()
const currentClass = GuiaManiobra
/******************************************** */

router.post('/:id/valores-fallas', async (req, res, next) => {
    let data = req.body
    let valorCampoManiobraService: ValorCampoManiobraService = new ValorCampoManiobraService()
    let notificacionFallaService: NotificacionFallaService = new NotificacionFallaService()
    for (let i: number = 0; i < data.length; i++) {
        try {
            if ("notificacionFalla" in data[i]) { //Si el valor del campo tiene una notificacion de falla asociada, la creamos 
                let falla: NotificacionFalla = new NotificacionFalla()
                Object.assign(falla, data[i]["notificacionFalla"])
                falla = await notificacionFallaService.save(falla)
                data[i]["notificacionFallaId"] = falla.id //Asignamos el id en la variable "data" que es la que devuelve el response
            }
            let valorCampoManiobra: ValorCampoManiobra = new ValorCampoManiobra() //creada la falla, obtenemos el valor del campo
            Object.assign(valorCampoManiobra, data[i])
            valorCampoManiobra.guiaManiobraId = req.params.id //obtenemos la guia de maniobra desde el url param
            valorCampoManiobra = await valorCampoManiobraService.save(valorCampoManiobra)
            data[i]["id"] = valorCampoManiobra.id //Asignamos el id del valor en la data a devolver
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
router = addToGenericRoute(router, currentClass, service)




module.exports = router;
