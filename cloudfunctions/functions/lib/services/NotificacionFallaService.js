"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const NotificacionFallaRepository_1 = require("../repository/NotificacionFallaRepository");
/****************Configuration******************** */
const myRepository = NotificacionFallaRepository_1.NotificacionFallaRepository;
/************************************* */
class NotificacionFallaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.NotificacionFallaService = NotificacionFallaService;
//# sourceMappingURL=NotificacionFallaService.js.map