import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { EquipamientoRepository } from "../repository/EquipamientoRepository";
import { CampoManiobraRepository } from "../repository/CampoManiobraRepository";
import { CampoManiobra } from "../entity/CampoManiobra";
import { TipoCampoRondaRepository } from "../repository/TipoCampoRondaRepository";
import { CampoRonda } from "../entity/CampoRonda";
import { CampoRondaRepository } from "../repository/CampoRondaRepository";
/****************Configuration******************** */
const myRepository = CampoRondaRepository
/************************************* */
export class CampoRondaService/**config */ extends GenericeService<CampoRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}