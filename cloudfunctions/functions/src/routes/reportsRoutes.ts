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
import { CampoRonda } from "../entity/CampoRonda";
import { schedule } from "later";
import { TimeCalculator } from "../helpers/TimeCalculator";
import { PlantillaRondaDates } from "../helpers/PlantillaRondaDates";
var later = require("later")
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")

/******************CONFIG CLASS************************** */
const service = new ReportService()
const currentClass = Report
/******************************************** */

router.post('/execute', async (req, res, next) => {
    
    try {
        if (!("id" in req.body)){
            console.log("No ID");
            throw new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 501)}
        let reportes = await service.findById(5)
        console.log(reportes)
        let report: Report = await service.findById(req.body.id)
        console.log("id");
        console.log(req.body.id);
        if (!("filters" in req.body))
            req.body.filters = {}
        console.log("REPORTTTTT1::")
        console.log(report)
        req.body.filters["myUserId"] = res.locals.jwtPayload.u
        let responseData = await service.execute(report, req.body.filters)
        res.locals.responseData = responseData
        res.send(responseData)
    } catch (e) {
        console.log("catch Error");
        await responseError(res, e)
    }
    next()
});

router.post('/execute/plantillas-con-camposronda', async (req, res, next) => {
        if (!("filters" in req.body)) {
            try {
                let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
                .leftJoinAndSelect("equipamiento.sistema", "sistema")
                .leftJoinAndSelect("sistema.planta", "planta")
                .where('plantillaRonda.id='+req.body.filters["id"])
                .getMany()
                next()
                res.status(200).send(r);
            } catch (e) {
                await responseError(res, e)
            }
        } else {
            try {
                let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
                .leftJoinAndSelect("equipamiento.sistema", "sistema")
                .leftJoinAndSelect("sistema.planta", "planta")
                .getMany()
                next()
                res.status(200).send(r);
            } catch (e) {
                await responseError(res, e)
            }
        }

});

router.post('/execute/campos-ronda', async (req, res, next) => {
    
    try {
        let r = await getConnection().getRepository(CampoRonda).createQueryBuilder("campoRonda")
        .leftJoinAndSelect("campoRonda.equipamiento", "equipamiento")
        .leftJoinAndSelect("equipamiento.sistema", "sistema")
        .leftJoinAndSelect("sistema.planta", "planta")
        .getMany()
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)
    }
    
});



router.post('/execute/plantillas-habilitadas', async (req, res, next) => { // TODO: Chequear llegada del filter
    try {
        let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
        .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
        .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
        .leftJoinAndSelect("horarioUsuario.user", "user")
        .where('user.id='+req.body.filters["idUsuario"])
        .getMany()
        let validPlantillaRonda = new Array<PlantillaRonda>();
        for (let p of r){
            for (let h of p.horariosRecurrentes) {
                if (TimeCalculator.availableNow(h)) { // TODO: Fijarse en el servicio que no se creen mal los dias
                    validPlantillaRonda.push(p);
                    break;
                }
            }
        }
        next()
        res.send(validPlantillaRonda);
    } catch (e) {
        await responseError(res, e)
    }
});

router.post('/execute/plantillas-proximas-fechas', async (req, res, next) => {
    try {
        
        let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
        .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
        .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
        .leftJoinAndSelect("horarioUsuario.user", "user")
        .where('user.id='+req.body.filters["idUsuario"])
        .getMany()
        let nextDates = new Array<PlantillaRondaDates>();
        for (let p of r){
            for (let h of p.horariosRecurrentes) {
                nextDates.push(new PlantillaRondaDates(h.plantillaId, TimeCalculator.nextOcurrences(h)));
            }
        }
        next()
        res.send(nextDates);
    } catch (e) {
        await responseError(res, e)
    }
});

router.post('/execute/plantillas-horarios', async (req, res, next) => {
    
    if (!("filters" in req.body)) {
        try {
            let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
            .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
            .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
            .leftJoinAndSelect("horarioUsuario.user", "user")
            .getMany()
            next()
            res.send(r);
        } catch (e) {
            await responseError(res, e)
        }
    } else {
        try {
            let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
            .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
            .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
            .leftJoinAndSelect("horarioUsuario.user", "user")
            .where('user.id='+req.body.filters["idUsuario"])
            .getMany()
            next()
            res.send(r);
        } catch (e) {
            await responseError(res, e)
        }
    }
});

module.exports = router;
