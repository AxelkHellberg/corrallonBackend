import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { Planta } from "../entity/Planta";
import { HorarioRepository } from "../repository/HorarioRepository";
import { Horario } from "../entity/Horario";
/****************Configuration******************** */
const myRepository = HorarioRepository
/************************************* */
export class HorarioService/**config */ extends GenericeService<Horario/**config */> {
    constructor() {
        super(new myRepository())
    }
}