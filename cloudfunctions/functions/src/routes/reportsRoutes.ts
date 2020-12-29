import { User } from "../entity/User";
import { UserService } from "../services/UserService";
import { ReportService } from "../services/ReportService";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { Report } from "../entity/Report";
import { responseError } from "../components/apiHandler";
import { CampoRondaPlantillaRonda } from "../entity/CampoRondaPlantillaRonda";
import { Any, getConnection } from "typeorm";
import { PlantillaRonda } from "../entity/PlantillaRonda";
import { CampoRonda } from "../entity/CampoRonda";
import { schedule } from "later";
import { TimeCalculator } from "../helpers/TimeCalculator";
import { PlantillaRondaDates } from "../helpers/PlantillaRondaDates";
import { FallaSistema } from "../entity/FallaSistema";
import { FallaEquipamiento } from "../entity/FallaEquipamiento";
import { EstadoFalla } from "../entity/EstadoFalla";
import { Ronda } from "../entity/Ronda";
import { GlobalVariable } from "../global";
var later = require("later")
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")


/******************CONFIG CLASS************************** */
const service = new ReportService()
const currentClass = Report
/******************************************** */

router.post('/execute', async (req, res, next) => {
    console.log(req.body.id);
    try {
        if (!("id" in req.body)) {
            console.log("No ID");
            throw new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 501)
        }
        let reportes = await service.findById(req.body.id)
        console.log(reportes)
        let report: Report = await service.findById(req.body.id)
        console.log("report.from");
        console.log(report.from + "hola");
        console.log("id");

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



router.post('/execute/ejp', async (req, res, next) => {

  
    let r = await getConnection().getRepository(EstadoFalla).createQueryBuilder("estado_falla")
    .select("estado_falla").getMany();
    res.status(200).send(r);
    
})


router.post('/execute/reporte-ronda', async (req, res, next) => {

    try {
        let r
        if (req.body.id === 0) {
            r = await getConnection().getRepository(Ronda).createQueryBuilder("ronda")
                .select("ronda").getMany()
        }
        else {

            r = await getConnection().getRepository(Ronda).createQueryBuilder("ronda")
            .select("ronda").where('ronda.userId='+req.body.id).getMany()
        }

        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/execute/estado-falla', async (req, res, next) => {

    try {
        let r = await getConnection().getRepository(EstadoFalla).createQueryBuilder("estado_falla")
            .select("estado_falla").getMany();
        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)

    }
})


router.post('/execute/notificaiones-fallas', async (req, res, next) => {



    try {
        let r = await getConnection().getRepository(FallaSistema).createQueryBuilder("notificacion-falla")
            .select("notificacion-falla").getMany();
        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)

    }
})



router.post('/execute/falla-sistema', async (req, res, next) => {



    try {
        let r = await getConnection().getRepository(FallaSistema).createQueryBuilder("falla_sistema")
            .select("falla_sistema").getMany();
        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)

    }
})


router.post('/execute/falla-equipo', async (req, res, next) => {



    try {
        let r = await getConnection().getRepository(FallaEquipamiento).createQueryBuilder("falla_equipamiento")
            .select("falla_equipamiento").getMany();
        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/execute/plantillas-con-camposronda', async (req, res, next) => {
    if (!("filters" in req.body)) {
        try {
            let r = await getConnection().getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
                .leftJoinAndSelect("equipamiento.sistema", "sistema")
                .leftJoinAndSelect("sistema.planta", "planta")
                .where('plantillaRonda.id=' + req.body.filters["id"])
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
            .where('user.id=' + req.body.filters["idUsuario"])
            .getMany()
        let validPlantillaRonda = new Array<PlantillaRonda>();
        for (let p of r) {
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
            .where('user.id=' + req.body.filters["idUsuario"])
            .getMany()
        let nextDates = new Array<PlantillaRondaDates>();
        for (let p of r) {
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
                .where('user.id=' + req.body.filters["idUsuario"])
                .getMany()
            next()
            res.send(r);
        } catch (e) {
            await responseError(res, e)
        }
    }
});


//////////////////////////////////////////////////////////////////////////////////



router.post('/execute/cantidades/estado', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT estadoRondaId,er.nombre,COUNT(*) as cantidad FROM "+ GlobalVariable.DATA_BASE_NAME +".ronda r INNER JOIN  "+GlobalVariable.DATA_BASE_NAME+".estado_ronda er ON r.estadoRondaId = er.id GROUP BY estadoRondaId, er.nombre ")

        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
    } catch (e) {
        await responseError(res, e)

    }
})

router.post('/execute/cantidades/usuario', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT userId, u.username ,COUNT(*) as cantidad FROM "+ GlobalVariable.DATA_BASE_NAME +".ronda r INNER JOIN "+ GlobalVariable.DATA_BASE_NAME +".`user` u ON r.userId = u.id GROUP BY userId,u.username ")

        console.log("res");
        console.log(r);
        next()
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})



router.post('/execute/TagsNoAsignadosSistemas', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT * FROM "+ GlobalVariable.DATA_BASE_NAME +".tag t WHERE t.designado = 0 and t.tipoTagId = 1");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})


router.post('/execute/TagsNoAsignadosEquipos', async (req, res, next) => {

    try {
        let r = await getConnection().query("SELECT * FROM "+ GlobalVariable.DATA_BASE_NAME +".tag t WHERE t.designado = 0 and t.tipoTagId = 2");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
        
    } catch (e) {
        await responseError(res, e)

    }
})



module.exports = router;
