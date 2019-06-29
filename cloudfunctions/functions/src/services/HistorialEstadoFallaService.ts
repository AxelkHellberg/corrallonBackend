import { GenericeService } from "./GenericService";
import { EstadoFallaRepository } from "../repository/EstadoFallaRepository";
import { EstadoFalla } from "../entity/EstadoFalla";
import { FallaEquipamientoRepository } from "../repository/FallaEquipamientoRepository";
import { FallaEquipamiento } from "../entity/FallaEquipamiento";
import { FallaSistemaRepository } from "../repository/FallaSistemaRepository";
import { FallaSistema } from "../entity/FallaSistema";
import { HistorialEstadoFalla } from "../entity/HistorialEstadoFalla";
/****************Configuration******************** */
const myRepository = FallaSistemaRepository
/************************************* */
export class HistorialEstadoFallaService/**config */ extends GenericeService<HistorialEstadoFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}