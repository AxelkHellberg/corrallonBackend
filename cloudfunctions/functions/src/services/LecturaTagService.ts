import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { Planta } from "../entity/Planta";
import { HorarioRepository } from "../repository/HorarioRepository";
import { Horario } from "../entity/Horario";
import { LecturaTagRepository } from "../repository/LecturaTagRepository";
import { LecturaTag } from "../entity/LecturaTag";
/****************Configuration******************** */
const myRepository = LecturaTagRepository
/************************************* */
export class LecturaTagService/**config */ extends GenericeService<LecturaTag/**config */> {
    constructor() {
        super(new myRepository())
    }
}