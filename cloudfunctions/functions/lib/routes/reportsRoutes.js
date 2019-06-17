"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReportService_1 = require("../services/ReportService");
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
const Report_1 = require("../entity/Report");
var express = require('express');
var router = express.Router();
const apiHandler = require("../components/apiHandler");
const jwt = require("../components/jwt");
/******************CONFIG CLASS************************** */
const service = new ReportService_1.ReportService();
const currentClass = Report_1.Report;
/******************************************** */
router.post('/execute', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (!("id" in req.body))
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.ID_MANDATORY, msg_1.Msg.ID_MANDATORY, 500);
        let report = yield service.findById(req.body.id);
        if (!("filters" in req.body))
            req.body.filters = {};
        req.body.filters["myUserId"] = res.locals.jwtPayload.u;
        res.send(yield service.execute(report, req.body.filters));
    }
    catch (e) {
        apiHandler.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=reportsRoutes.js.map