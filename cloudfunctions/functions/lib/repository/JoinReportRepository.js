"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinReportRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const JoinReport_1 = require("../entity/JoinReport");
/************CONFIG CLASS**************** */
const myClass = JoinReport_1.JoinReport;
/**************************************** */
class JoinReportRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.JoinReportRepository = JoinReportRepository;
//# sourceMappingURL=JoinReportRepository.js.map