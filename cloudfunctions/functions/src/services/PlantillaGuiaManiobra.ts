import { GenericeService } from "./GenericService";
import { PlantillaGuiaManiobra } from "../entity/PlantillaGuiaManiobra";
import { PlantillaGuiaManiobraRepository } from "../repository/PlantillaGuiaManiobraRepository";
/****************Configuration******************** */
const myRepository = PlantillaGuiaManiobraRepository
/************************************* */
export class PlantillaGuiaManiobraService/**config */ extends GenericeService<PlantillaGuiaManiobra/**config */> {
    constructor() {
        super(new myRepository())
    }
}