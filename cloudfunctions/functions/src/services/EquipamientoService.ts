import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { EquipamientoRepository } from "../repository/EquipamientoRepository";
import { Equipamiento } from "../entity/Equipamiento";
/****************Configuration******************** */
const myRepository = EquipamientoRepository
/************************************* */
export class EquipamientoService/**config */ extends GenericeService<Equipamiento/**config */> {
    constructor() {
        super(new myRepository())
    }
}