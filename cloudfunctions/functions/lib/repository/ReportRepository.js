"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Report_1 = require("../entity/Report");
/************CONFIG CLASS**************** */
const myClass = Report_1.Report;
/**************************************** */
class ReportRepository extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.ReportRepository = ReportRepository;
//# sourceMappingURL=ReportRepository.js.map