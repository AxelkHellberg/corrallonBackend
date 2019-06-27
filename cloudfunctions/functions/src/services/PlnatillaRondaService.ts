import { GenericeService } from "./GenericService";
import { PlantillaGuiaManiobra } from "../entity/PlantillaGuiaManiobra";
import { PlantillaGuiaManiobraRepository } from "../repository/PlantillaGuiaManiobraRepository";
import { PlantillaRondaRepository } from "../repository/PlantillaRondaRepository";
import { PlantillaRonda } from "../entity/PlantillaRonda";
/****************Configuration******************** */
const myRepository = PlantillaRondaRepository
/************************************* */
export class PlantillaRondaService/**config */ extends GenericeService<PlantillaRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}