import { GenericeService } from "./GenericService";
import { EstadoFallaRepository } from "../repository/EstadoFallaRepository";
import { EstadoFalla } from "../entity/EstadoFalla";
import { FallaEquipamientoRepository } from "../repository/FallaEquipamientoRepository";
import { FallaEquipamiento } from "../entity/FallaEquipamiento";
/****************Configuration******************** */
const myRepository = FallaEquipamientoRepository
/************************************* */
export class FallaEquipamientoService/**config */ extends GenericeService<FallaEquipamiento/**config */> {
    constructor() {
        super(new myRepository())
    }
}