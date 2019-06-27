import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { EquipamientoRepository } from "../repository/EquipamientoRepository";
import { CampoManiobraRepository } from "../repository/CampoManiobraRepository";
import { CampoManiobra } from "../entity/CampoManiobra";
/****************Configuration******************** */
const myRepository = CampoManiobraRepository
/************************************* */
export class CampoManiobraService/**config */ extends GenericeService<CampoManiobra/**config */> {
    constructor() {
        super(new myRepository())
    }
}