import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { Planta } from "../entity/Planta";
/****************Configuration******************** */
const myRepository = PlantaRepository
/************************************* */
export class PlantaService/**config */ extends GenericeService<Planta/**config */> {
    constructor() {
        super(new myRepository())
    }
}