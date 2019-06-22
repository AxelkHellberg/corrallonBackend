import { User } from "../entity/User";
import { UserService } from "../services/UserService";
import { ReportService } from "../services/ReportService";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Report } from "../entity/Report";
import { responseError } from "../components/apiHandler";
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
        let report: Report = await service.findById(req.body.id)
        if (!("filters" in req.body))
            req.body.filters = {}
        req.body.filters["myUserId"] = res.locals.jwtPayload.u
        let responseData = await service.execute(report, req.body.filters)
        res.locals.responseData = responseData
        res.send(responseData)
    } catch (e) {
        await responseError(res, e)
    }
    next()
});

module.exports = router;
