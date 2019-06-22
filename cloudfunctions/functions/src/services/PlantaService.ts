import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
/****************Configuration******************** */
const myRepository = PlantaRepository
/************************************* */
export class PlantaService extends GenericeService<PlantaRepository> {
    constructor() {
        super(new myRepository())
    }
}