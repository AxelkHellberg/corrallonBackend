import { GenericeService } from "./GenericService";
import { EstadoFallaRepository } from "../repository/EstadoFallaRepository";
import { EstadoFalla } from "../entity/EstadoFalla";
import { FallaEquipamientoRepository } from "../repository/FallaEquipamientoRepository";
import { FallaEquipamiento } from "../entity/FallaEquipamiento";
import { FallaSistemaRepository } from "../repository/FallaSistemaRepository";
import { FallaSistema } from "../entity/FallaSistema";
import { HistorialEstadoFalla } from "../entity/HistorialEstadoFalla";
import { NotificacionFallaRepository } from "../repository/NotificacionFallaRepository";
import { NotificacionFalla } from "../entity/NotificacionFalla";
/****************Configuration******************** */
const myRepository = NotificacionFallaRepository
/************************************* */
export class NotificacionFallaService/**config */ extends GenericeService<NotificacionFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}