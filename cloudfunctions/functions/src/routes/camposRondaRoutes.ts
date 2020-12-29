var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { CampoManiobra } from "../entity/CampoManiobra";
import { CampoManiobraService } from "../services/CamposManiobraService";
import { CampoRondaService } from "../services/CampoRondaService";
import { CampoRonda } from "../entity/CampoRonda";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
import { responseError } from "../components/apiHandler";

/******************************************** */
const service = new CampoRondaService()
const currentClass = CampoRonda
/******************************************** */

router.get('/traerTareas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT p.nombre as Planta,s.nombre as Sistema,e.nombre Equipo,cr.nombre NombreTarea,cr.descripcion Descripcion,um.nombre UnidadMedida FROM "+ GlobalVariable.DATA_BASE_NAME +".campo_ronda cr INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".equipamiento e ON cr.equipamientoId = e.id INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".sistema s ON e.sistemaId = s.id INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".planta p ON p.id = s.plantaId INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".unidad_medida um ON um.id = cr.unidadMedidaId ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

module.exports = router;
