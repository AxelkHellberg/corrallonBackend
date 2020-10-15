"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionFallaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const NotificacionFalla_1 = require("../entity/NotificacionFalla");
/************CONFIG CLASS**************** */
const myClass = NotificacionFalla_1.NotificacionFalla;
/**************************************** */
class NotificacionFallaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.NotificacionFallaRepository = NotificacionFallaRepository;
//# sourceMappingURL=NotificacionFallaRepository.js.map