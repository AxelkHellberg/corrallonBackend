"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const GenericService_1 = require("./GenericService");
const ReportRepository_1 = require("../repository/ReportRepository");
const DBConection_1 = require("../config/DBConection");
const typeorm_1 = require("typeorm");
const JoinType_1 = require("../entity/JoinType");
/******************CONFIG CLASS************************** */
const myClass = ReportRepository_1.ReportRepository;
/******************************************************* */
class ReportService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myClass());
        this.findById = function (id) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.genericRepository.getRepository().createQueryBuilder(DBConection_1.DBConection.ENTITY_REF_NAME).innerJoinAndSelect("e.joinsReport", "joinReport").where(DBConection_1.DBConection.ENTITY_REF_NAME + ".id=" + id).getOne();
            });
        };
        this.execute = function (report, params = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                let builder = yield typeorm_1.getRepository(report.from).createQueryBuilder(report.entityAlias == null ? DBConection_1.DBConection.ENTITY_REF_NAME : report.entityAlias);
                if (report.where != null)
                    builder = yield builder.where(report.where, params);
                let joinsReport = report.joinsReport;
                for (let i = 0; i < joinsReport.length; i++) {
                    if (joinsReport[i].joinTypeId == JoinType_1.JoinType.LEFT_JOIN_ID)
                        builder = yield builder.leftJoinAndSelect(joinsReport[i]["joinColumn"], joinsReport[i]["joinAlias"], joinsReport[i]["joinWhere"], params);
                    else if (joinsReport[i].joinTypeId == JoinType_1.JoinType.INNER_JOIN_ID)
                        builder = yield builder.innerJoin(joinsReport[i]["joinColumn"], joinsReport[i]["joinAlias"], joinsReport[i]["joinWhere"], params);
                }
                console.log(builder.getSql());
                let objs = yield builder.getMany();
                return objs;
            });
        };
    }
}
exports.ReportService = ReportService;
//# sourceMappingURL=ReportService.js.map