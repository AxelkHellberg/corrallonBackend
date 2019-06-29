import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { EquipamientoRepository } from "../repository/EquipamientoRepository";
import { Equipamiento } from "../entity/Equipamiento";
import { EstadoFallaRepository } from "../repository/EstadoFallaRepository";
/****************Configuration******************** */
const myRepository = EstadoFallaRepository
/************************************* */
export class EstadoFallaService/**config */ extends GenericeService<EstadoFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}