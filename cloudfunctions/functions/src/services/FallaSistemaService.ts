import { GenericeService } from "./GenericService";
import { EstadoFallaRepository } from "../repository/EstadoFallaRepository";
import { EstadoFalla } from "../entity/EstadoFalla";
import { FallaEquipamientoRepository } from "../repository/FallaEquipamientoRepository";
import { FallaEquipamiento } from "../entity/FallaEquipamiento";
import { FallaSistemaRepository } from "../repository/FallaSistemaRepository";
import { FallaSistema } from "../entity/FallaSistema";
/****************Configuration******************** */
const myRepository = FallaSistemaRepository
/************************************* */
export class FallaSistemaService/**config */ extends GenericeService<FallaSistema/**config */> {
    constructor() {
        super(new myRepository())
    }
}