import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { EquipamientoRepository } from "../repository/EquipamientoRepository";
/****************Configuration******************** */
const myRepository = EquipamientoRepository
/************************************* */
export class EquipamientoService extends GenericeService<EquipamientoRepository> {
    constructor() {
        super(new myRepository())
    }
}