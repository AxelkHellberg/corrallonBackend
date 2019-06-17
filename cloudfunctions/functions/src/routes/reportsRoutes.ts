import { User } from "../entity/User";
import { UserService } from "../services/UserService";
import { ReportService } from "../services/ReportService";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Report } from "../entity/Report";
var express = require('express');
var router = express.Router();
const apiHandler = require("../components/apiHandler")
const jwt = require("../components/jwt")

/******************CONFIG CLASS************************** */
const service = new ReportService()
const currentClass = Report
/******************************************** */

router.post('/execute', async (req, res) => {
    try {
        if (!("id" in req.body))
            throw new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 500)
        let report: Report = await service.findById(req.body.id)
        if (!("filters" in req.body))
            req.body.filters = {}
        req.body.filters["myUserId"] = res.locals.jwtPayload.u
        res.send(await service.execute(report, req.body.filters))
    } catch (e) {
        apiHandler.responseError(res, e)
    }

});

module.exports = router;
