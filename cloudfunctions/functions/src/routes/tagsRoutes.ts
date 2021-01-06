import { addToGenericRoute } from "./genericRoutes";
import { TagService } from "../services/TagService";
import { Tag } from "../entity/Tag";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
import { responseError } from "../components/apiHandler";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TagService()
const currentClass = Tag
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

router.post('/deshabilitarTagSeleccionado', async (req, res, next) => {

    try {
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".tag SET asignado = 1 WHERE id="+ req.body.id);

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/activarTag', async (req, res, next) => {

    try {
        let r = await getConnection().query("UPDATE "+ GlobalVariable.DATA_BASE_NAME +".tag SET asignado = 0 WHERE id="+ req.body.tagId);

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/obtenerTagsPorTipo', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT * FROM "+ GlobalVariable.DATA_BASE_NAME +".tag t WHERE tipoTagId ="+req.body.id);

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})



module.exports = router;
