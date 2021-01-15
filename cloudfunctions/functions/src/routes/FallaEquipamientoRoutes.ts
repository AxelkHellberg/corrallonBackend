import { addToGenericRoute } from './genericRoutes';
import { FallaEquipamientoService } from '../services/FallaEquipamientoService';
import { FallaEquipamiento } from '../entity/FallaEquipamiento';
import { getConnection } from 'typeorm';
import { GlobalVariable } from '../global';
import { responseError } from '../components/apiHandler';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new FallaEquipamientoService()
const currentClass = FallaEquipamiento
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

router.post('/NotificarFalla', async (req, res, next) => {

    try {
        getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".notificacion_falla (descripcion,estadoFallaId,TipoFallaId,FallaDe) VALUES ('" +req.body.descripcionFalla+ "',1," +req.body.tipoFallaId+ ",1) ");

        let r = await getConnection().query("INSERT INTO "+ GlobalVariable.DATA_BASE_NAME +".falla_equipamiento (equipamientoId,notificacionFallaId) VALUES(" +req.body.equipoId+ ",(SELECT * FROM ultimoInsertadoNotificacionFalla))");

        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)


    }
})

module.exports = router;