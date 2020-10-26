import { User } from "../entity/User";
import { UserService } from "../services/UserService";
import { ReportService } from "../services/ReportService";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { Report } from "../entity/Report";
import { responseError } from "../components/apiHandler";
import { CampoRondaPlantillaRonda } from "../entity/CampoRondaPlantillaRonda";
import { getConnection } from "typeorm";
import { PlantillaRonda } from "../entity/PlantillaRonda";
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")

/******************CONFIG CLASS************************** */
const service = new ReportService()
const currentClass = Report
/******************************************** */

router.post('/execute', async (req, res, next) => {
    try {
        if (!("id" in req.body))
            throw new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 500)
        let reportes = await service.findById(5)
        console.log(reportes)
        let report: Report = await service.findById(req.body.id)
        if (!("filters" in req.body))
            req.body.filters = {}
        console.log("REPORTTTTT::")
        console.log(report)
        req.body.filters["myUserId"] = res.locals.jwtPayload.u
        let responseData = await service.execute(report, req.body.filters)
        res.locals.responseData = responseData
        res.send(responseData)
    } catch (e) {
        await responseError(res, e)
    }
    next()
});

router.post('/execute/tareas', async (req, res, next) => {
    try {
        if (!("filters" in req.body)) {
            let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
            .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
            .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
            .getMany()
            next()
            res.send(r);
        } else {
            let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
            .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
            .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
            .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
            .leftJoinAndSelect("equipamiento.sistema", "sistema")
            .leftJoinAndSelect("sistema.planta", "planta")
            .where('plantillaRonda.id='+req.body.filters["id"])
            .getMany()
            next()
            res.send(r);
        }
    } catch (e) {
        await responseError(res, e)
    }
    
});

module.exports = router;
